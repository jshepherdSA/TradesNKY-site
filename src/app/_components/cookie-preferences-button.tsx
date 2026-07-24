"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Reopens the cookie-consent banner (in its preferences view) from anywhere on
 * the site — footer, cookie policy page, etc. Dispatches a window event that
 * <CookieConsent /> listens for, so this stays a tiny client leaf and callers
 * can remain server components.
 */
export function CookiePreferencesButton({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={() =>
        window.dispatchEvent(new Event("tnky:cookie-preferences"))
      }
      className={cn("cursor-pointer", className)}
    >
      {children ?? "Cookie Preferences"}
    </button>
  );
}
