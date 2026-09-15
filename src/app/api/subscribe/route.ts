/**
 * Newsletter signup endpoint. The site's own subscribe banner (CtaCard) posts
 * `{ email }` here; this handler records it as a submission on the TradesNKY
 * Newsletter JotForm via the JotForm API. Running server-side keeps the API
 * key out of the browser and lets the banner show real success/failure.
 */

const JOTFORM_FORM_ID = "262575974539071";
/** Question ID of the form's "Email" (control_email) field. */
const EMAIL_QUESTION_ID = "3";

const isValidEmail = (value: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

export async function POST(request: Request) {
  const apiKey = process.env.JOTFORM_API_KEY;
  if (!apiKey) {
    console.error("[subscribe] JOTFORM_API_KEY is not set");
    return Response.json({ ok: false }, { status: 500 });
  }

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
      console.error("[subscribe] JotForm rejected submission", res.status, data?.message);
      return Response.json({ ok: false }, { status: 502 });
    }
    return Response.json({ ok: true });
  } catch (err) {
    console.error("[subscribe] JotForm request failed", err);
    return Response.json({ ok: false }, { status: 502 });
  }
}
