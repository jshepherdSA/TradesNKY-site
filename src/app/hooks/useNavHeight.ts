"use client";

import { useEffect } from "react";

/**
 * Measures the rendered nav element on mount and on every resize, writing the
 * value to a CSS custom property (`--nav-h`) on `<html>`. Anywhere in the app
 * you can then use `calc(100vh - var(--nav-h, 64px))` to compute the usable
 * viewport height below the sticky nav. The `64px` fallback covers the brief
 * pre-hydration window before the observer fires.
 *
 * Locates the nav by querying for `<header>` — the project has exactly one.
 */
export function useNavHeight() {
  useEffect(() => {
    const navEl = document.querySelector("header");
    if (!navEl) return;

    const apply = (height: number) => {
      document.documentElement.style.setProperty("--nav-h", `${height}px`);
    };

    apply(navEl.offsetHeight);

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        apply(entry.contentRect.height);
      }
    });
    observer.observe(navEl);

    return () => {
      observer.disconnect();
    };
  }, []);
}
