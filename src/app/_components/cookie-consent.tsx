"use client";

import {
  useCallback,
  useEffect,
  useState,
  useSyncExternalStore,
} from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Cookie consent banner. Appears on first visit (no stored choice), fixed to
 * the bottom of the viewport, non-blocking. Offers Accept and Manage
 * Preferences; the preferences view exposes the policy's granular categories
 * (Strictly Necessary is always on). The choice is persisted to localStorage
 * so the banner does not reappear. Can be reopened anywhere via the
 * `tnky:cookie-preferences` window event (see <CookiePreferencesButton />).
 *
 * The stored choice is read with useSyncExternalStore so the first render
 * matches the server (banner hidden) and reconciles on the client — no
 * setState-in-effect and no hydration mismatch.
 */

const STORAGE_KEY = "tnky-cookie-consent";
const CONSENT_VERSION = 1;
const OPEN_EVENT = "tnky:cookie-preferences";
const CHANGE_EVENT = "tnky:cookie-consent-change";
const SSR_SNAPSHOT = "__ssr__";

type OptionalKey = "functional" | "analytics" | "advertising";

type StoredConsent = {
  v: number;
  choice: "accepted" | "declined" | "custom";
  categories: { necessary: true } & Record<OptionalKey, boolean>;
  ts: number;
};

const CATEGORIES: {
  key: "necessary" | OptionalKey;
  label: string;
  desc: string;
  locked?: boolean;
}[] = [
  {
    key: "necessary",
    label: "Strictly Necessary",
    desc: "Required for the site to operate. These cannot be switched off.",
    locked: true,
  },
  {
    key: "functional",
    label: "Functional",
    desc: "Remember your preferences and enable enhanced functionality.",
  },
  {
    key: "analytics",
    label: "Analytics & Performance",
    desc: "Help us understand how visitors use the site so we can improve it.",
  },
  {
    key: "advertising",
    label: "Advertising & Targeting",
    desc: "Used to measure and deliver more relevant advertising.",
  },
];

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(CHANGE_EVENT, callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(CHANGE_EVENT, callback);
  };
}

function getSnapshot(): string | null {
  try {
    return window.localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

function getServerSnapshot(): string {
  return SSR_SNAPSHOT;
}

function parseConsent(raw: string | null): StoredConsent | null {
  if (!raw || raw === SSR_SNAPSHOT) return null;
  try {
    const parsed = JSON.parse(raw) as StoredConsent;
    if (!parsed || parsed.v !== CONSENT_VERSION) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function CookieConsent() {
  const raw = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [forced, setForced] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [optional, setOptional] = useState<Record<OptionalKey, boolean>>({
    functional: false,
    analytics: false,
    advertising: false,
  });

  // Reopen from elsewhere on the site (footer / cookie policy page). The
  // effect only registers a listener; state changes happen in the handler.
  useEffect(() => {
    const open = () => {
      const existing = parseConsent(getSnapshot());
      if (existing) {
        setOptional({
          functional: existing.categories.functional,
          analytics: existing.categories.analytics,
          advertising: existing.categories.advertising,
        });
      }
      setShowPreferences(true);
      setForced(true);
    };
    window.addEventListener(OPEN_EVENT, open);
    return () => window.removeEventListener(OPEN_EVENT, open);
  }, []);

  const persist = useCallback(
    (choice: StoredConsent["choice"], cats: Record<OptionalKey, boolean>) => {
      const payload: StoredConsent = {
        v: CONSENT_VERSION,
        choice,
        categories: { necessary: true, ...cats },
        ts: Date.now(),
      };
      try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
        window.dispatchEvent(new Event(CHANGE_EVENT));
      } catch {
        // Storage unavailable (private mode, etc.) — dismiss for this session.
      }
      setForced(false);
      setShowPreferences(false);
    },
    [],
  );

  const acceptAll = useCallback(
    () => persist("accepted", { functional: true, analytics: true, advertising: true }),
    [persist],
  );
  const declineAll = useCallback(
    () => persist("declined", { functional: false, analytics: false, advertising: false }),
    [persist],
  );
  const savePreferences = useCallback(
    () => persist("custom", optional),
    [persist, optional],
  );

  const isServerSnapshot = raw === SSR_SNAPSHOT;
  const hasStoredConsent = parseConsent(raw) !== null;
  const visible = forced || (!isServerSnapshot && !hasStoredConsent);

  if (!visible) return null;

  const btnBase =
    "inline-flex items-center justify-center rounded-pill px-6 py-3 font-display font-bold text-button transition-all duration-200 ease-tnky focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tnky-blue focus-visible:ring-offset-2";
  const btnPrimary = cn(
    btnBase,
    "bg-tnky-blue text-tnky-white shadow-tnky-blue hover:bg-tnky-blue-700 hover:-translate-y-px",
  );
  const btnSecondary = cn(
    btnBase,
    "border border-tnky-edge bg-tnky-white text-tnky-ink hover:bg-tnky-paper",
  );
  const btnGhost = cn(
    btnBase,
    "text-tnky-ink/70 hover:bg-tnky-paper hover:text-tnky-ink",
  );

  return (
    <div
      role="region"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-tnky-edge bg-tnky-white shadow-tnky-3"
    >
      <div className="max-w-content mx-auto px-4 py-4 sm:px-8 md:py-5">
        {!showPreferences ? (
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-8">
            <p className="text-small leading-relaxed text-tnky-ink/85 [text-wrap:pretty] md:max-w-2xl">
              We use cookies to operate our site, remember your preferences, and
              analyze traffic. You can accept all cookies or choose which ones to
              allow. Read our{" "}
              <Link
                href="/cookie-policy"
                className="font-semibold text-tnky-blue underline underline-offset-2 hover:text-tnky-blue-700"
              >
                Cookie Policy
              </Link>
              .
            </p>
            <div className="flex flex-shrink-0 flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => setShowPreferences(true)}
                className={btnSecondary}
              >
                Manage preferences
              </button>
              <button type="button" onClick={acceptAll} className={btnPrimary}>
                Accept
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div>
              <h2 className="font-display font-extrabold text-lead text-tnky-ink">
                Cookie preferences
              </h2>
              <p className="mt-1 text-small leading-relaxed text-tnky-ink/75 [text-wrap:pretty]">
                Choose which categories of cookies to allow. Read the full{" "}
                <Link
                  href="/cookie-policy"
                  className="font-semibold text-tnky-blue underline underline-offset-2 hover:text-tnky-blue-700"
                >
                  Cookie Policy
                </Link>
                .
              </p>
            </div>

            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {CATEGORIES.map((cat) => {
                const checked =
                  cat.key === "necessary"
                    ? true
                    : optional[cat.key as OptionalKey];
                return (
                  <li
                    key={cat.key}
                    className="flex items-start justify-between gap-3 rounded-2xl border border-tnky-edge bg-tnky-cream/70 p-4"
                  >
                    <div className="min-w-0">
                      <span className="font-display font-bold text-small text-tnky-ink">
                        {cat.label}
                      </span>
                      <p className="mt-0.5 text-mini leading-relaxed text-tnky-mute">
                        {cat.desc}
                      </p>
                    </div>
                    <button
                      type="button"
                      role="switch"
                      aria-checked={checked}
                      aria-label={`${cat.label} cookies`}
                      disabled={cat.locked}
                      onClick={() =>
                        !cat.locked &&
                        setOptional((prev) => ({
                          ...prev,
                          [cat.key]: !prev[cat.key as OptionalKey],
                        }))
                      }
                      className={cn(
                        "relative mt-0.5 h-6 w-11 shrink-0 rounded-pill transition-colors duration-200 ease-tnky focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tnky-blue focus-visible:ring-offset-2",
                        checked ? "bg-tnky-blue" : "bg-tnky-mute-2/50",
                        cat.locked && "cursor-not-allowed opacity-60",
                      )}
                    >
                      <span
                        aria-hidden="true"
                        className={cn(
                          "absolute top-0.5 h-5 w-5 rounded-full bg-tnky-white shadow transition-all duration-200 ease-tnky",
                          checked ? "left-[1.375rem]" : "left-0.5",
                        )}
                      />
                    </button>
                  </li>
                );
              })}
            </ul>

            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:justify-end">
              <button type="button" onClick={declineAll} className={btnGhost}>
                Decline all
              </button>
              <button
                type="button"
                onClick={savePreferences}
                className={btnSecondary}
              >
                Save preferences
              </button>
              <button type="button" onClick={acceptAll} className={btnPrimary}>
                Accept all
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
