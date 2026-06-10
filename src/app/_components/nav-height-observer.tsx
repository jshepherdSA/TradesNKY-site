"use client";

import { useNavHeight } from "../hooks/useNavHeight";

/**
 * Side-effect-only client component: invokes useNavHeight so the `--nav-h`
 * CSS custom property is kept in sync with the real nav height. Rendered
 * once in the root layout — it itself renders nothing.
 */
export function NavHeightObserver() {
  useNavHeight();
  return null;
}
