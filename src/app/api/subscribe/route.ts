/**
 * Newsletter signup endpoint. Every subscribe form on the site posts
 * `{ email }` here. Each signup is sent to two places in parallel:
 *   - Klaviyo: subscribed to the "Website Newsletter Signups" list (email
 *     marketing consent), using the private key in KLAVIYO_LIST_KEY.
 *   - JotForm: recorded as a submission on the TradesNKY Newsletter form, as a
 *     backup record, using JOTFORM_API_KEY.
 * The signup counts as successful if either destination accepts it. When a
 * destination fails, a short reason code (never a key or other secret) is
 * included in the response and the full error is logged, so failures can be
 * diagnosed without losing the email. Running server-side keeps both keys out
 * of the browser.
 */

const JOTFORM_FORM_ID = "262575974539071";
/** Question ID of the JotForm's "Email" (control_email) field. */
const EMAIL_QUESTION_ID = "3";

const KLAVIYO_LIST_NAME = "Website Newsletter Signups";
const KLAVIYO_REVISION = "2026-07-15";

/** Outcome for one destination; `error` is a non-secret reason code. */
type Result = { ok: true } | { ok: false; error: string };

const isValidEmail = (value: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

/** Reads a failed response body once, for logging and a reason code. */
async function describeFailure(res: Response) {
  const text = await res.text().catch(() => "");
  let code = "";
  try {
    const parsed = JSON.parse(text) as { errors?: { code?: string }[] };
    code = parsed.errors?.[0]?.code ?? "";
  } catch {
    // Non-JSON body; the status alone is the reason.
  }
  return { text, code };
}

async function saveToJotform(email: string): Promise<Result> {
  const apiKey = process.env.JOTFORM_API_KEY?.trim();
  if (!apiKey) {
    console.error("[subscribe] JOTFORM_API_KEY is not set");
    return { ok: false, error: "key-not-set" };
  }
  try {
    const res = await fetch(
      `https://api.jotform.com/form/${JOTFORM_FORM_ID}/submissions`,
      {
        method: "POST",
        headers: {
          APIKEY: apiKey,
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          [`submission[${EMAIL_QUESTION_ID}]`]: email,
        }),
        cache: "no-store",
      },
    );
    const data = (await res.json().catch(() => null)) as {
      responseCode?: number;
      message?: string;
    } | null;
    if (!res.ok || data?.responseCode !== 200) {
      console.error(
        `[subscribe] JotForm rejected submission ${res.status} ${data?.message ?? ""}`,
      );
      return { ok: false, error: `submit-${res.status}` };
    }
    return { ok: true };
  } catch (err) {
    console.error("[subscribe] JotForm request failed", err);
    return { ok: false, error: "request-failed" };
  }
}

const klaviyoHeaders = (apiKey: string) => ({
  Authorization: `Klaviyo-API-Key ${apiKey}`,
  revision: KLAVIYO_REVISION,
  accept: "application/vnd.api+json",
  "Content-Type": "application/vnd.api+json",
});

/** List ID cached per server instance after the first successful lookup. */
let cachedKlaviyoListId: string | null = null;

async function findKlaviyoListId(
  apiKey: string,
): Promise<{ ok: true; id: string } | { ok: false; error: string }> {
  if (cachedKlaviyoListId) return { ok: true, id: cachedKlaviyoListId };
  const wanted = KLAVIYO_LIST_NAME.trim().toLowerCase();
  let url: string | null =
    "https://a.klaviyo.com/api/lists?fields[list]=name";
  // Lists are paginated (10 per page); match the name case-insensitively.
  while (url) {
    const res: Response = await fetch(url, {
      headers: klaviyoHeaders(apiKey),
      cache: "no-store",
    });
    if (!res.ok) {
      const { text, code } = await describeFailure(res);
      console.error(`[subscribe] Klaviyo list lookup failed ${res.status} ${text}`);
      return {
        ok: false,
        error: `list-lookup-${res.status}${code ? `-${code}` : ""}`,
      };
    }
    const body = (await res.json()) as {
      data?: { id: string; attributes?: { name?: string } }[];
      links?: { next?: string | null };
    };
    const match = body.data?.find(
      (l) => l.attributes?.name?.trim().toLowerCase() === wanted,
    );
    if (match) {
      cachedKlaviyoListId = match.id;
      return { ok: true, id: match.id };
    }
    url = body.links?.next ?? null;
  }
  console.error(`[subscribe] Klaviyo list "${KLAVIYO_LIST_NAME}" not found`);
  return { ok: false, error: "list-not-found" };
}

async function subscribeToKlaviyo(email: string): Promise<Result> {
  // Trimmed so a stray space or line break from pasting can't break auth.
  const apiKey = process.env.KLAVIYO_LIST_KEY?.trim();
  if (!apiKey) {
    console.error("[subscribe] KLAVIYO_LIST_KEY is not set");
    return { ok: false, error: "key-not-set" };
  }
  try {
    const list = await findKlaviyoListId(apiKey);
    if (!list.ok) return list;

    const res = await fetch(
      "https://a.klaviyo.com/api/profile-subscription-bulk-create-jobs",
      {
        method: "POST",
        headers: klaviyoHeaders(apiKey),
        body: JSON.stringify({
          data: {
            type: "profile-subscription-bulk-create-job",
            attributes: {
              custom_source: "TradesNKY website newsletter signup",
              profiles: {
                data: [
                  {
                    type: "profile",
                    attributes: {
                      email,
                      subscriptions: {
                        email: { marketing: { consent: "SUBSCRIBED" } },
                      },
                    },
                  },
                ],
              },
            },
            relationships: {
              list: { data: { type: "list", id: list.id } },
            },
          },
        }),
        cache: "no-store",
      },
    );
    if (res.status !== 202) {
      const { text, code } = await describeFailure(res);
      console.error(`[subscribe] Klaviyo rejected subscription ${res.status} ${text}`);
      return {
        ok: false,
        error: `subscribe-${res.status}${code ? `-${code}` : ""}`,
      };
    }
    return { ok: true };
  } catch (err) {
    console.error("[subscribe] Klaviyo request failed", err);
    return { ok: false, error: "request-failed" };
  }
}

export async function POST(request: Request) {
  let email = "";
  try {
    const body = (await request.json()) as { email?: unknown };
    email = typeof body.email === "string" ? body.email.trim() : "";
  } catch {
    return Response.json({ ok: false }, { status: 400 });
  }
  if (!isValidEmail(email) || email.length > 254) {
    return Response.json({ ok: false }, { status: 400 });
  }

  const [klaviyo, jotform] = await Promise.all([
    subscribeToKlaviyo(email),
    saveToJotform(email),
  ]);
  const ok = klaviyo.ok || jotform.ok;
  return Response.json(
    {
      ok,
      klaviyo: klaviyo.ok,
      jotform: jotform.ok,
      ...(klaviyo.ok ? {} : { klaviyoError: klaviyo.error }),
      ...(jotform.ok ? {} : { jotformError: jotform.error }),
    },
    { status: ok ? 200 : 502 },
  );
}
