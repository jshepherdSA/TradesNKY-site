import { useSyncExternalStore } from "react";

/**
 * Cookie-consent storage contract — the single source of truth shared by the
 * consent banner (which writes it) and the analytics loader (which reads it).
 * Keeping the key, event names, and parse logic here means the two can never
 * drift apart: the banner and the GA/GTM gate always agree on what "consented"
 * means.
 */

export const STORAGE_KEY = "tnky-cookie-consent";
export const CONSENT_VERSION = 1;
export const OPEN_EVENT = "tnky:cookie-preferences";
export const CHANGE_EVENT = "tnky:cookie-consent-change";
export const SSR_SNAPSHOT = "__ssr__";

export type OptionalKey = "functional" | "analytics" | "advertising";

export type StoredConsent = {
  v: number;
  choice: "accepted" | "declined" | "custom";
  categories: { necessary: true } & Record<OptionalKey, boolean>;
  ts: number;
};

export function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(CHANGE_EVENT, callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(CHANGE_EVENT, callback);
  };
}

export function getSnapshot(): string | null {
  try {
    return window.localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

export function getServerSnapshot(): string {
  return SSR_SNAPSHOT;
}

export function parseConsent(raw: string | null): StoredConsent | null {
  if (!raw || raw === SSR_SNAPSHOT) return null;
  try {
    const parsed = JSON.parse(raw) as StoredConsent;
    if (!parsed || parsed.v !== CONSENT_VERSION) return null;
    return parsed;
  } catch {
    return null;
  }
}

/**
 * Hydration-safe reader for the stored consent. Returns null on the server and
 * on the first client render (so it matches the server HTML), then reconciles
 * to the real stored value — same useSyncExternalStore pattern the banner uses.
 */
export function useConsent(): StoredConsent | null {
  const raw = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  return parseConsent(raw);
}
