"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Forces every fresh page entry to start at the top.
 *
 * The browser's native scroll restoration — made worse by the global
 * `scroll-behavior: smooth` on <html> — would otherwise land you mid-page on
 * reload and on route changes (e.g. opening the homepage already scrolled
 * past the hero). This:
 *   1. Disables automatic scroll restoration, so a reload no longer drops you
 *      back at the previous offset.
 *   2. Jumps to the top instantly on first load and on every pathname change —
 *      unless the URL carries a hash, so in-page anchor links (e.g.
 *      "#the-pathway") still scroll to their target normally.
 *
 * The instant `behavior` overrides the CSS smooth-scroll, so anchor links keep
 * animating while page entry stays snap-to-top. Renders nothing.
 */
export function ScrollManager() {
  const pathname = usePathname();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    if (window.location.hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}
