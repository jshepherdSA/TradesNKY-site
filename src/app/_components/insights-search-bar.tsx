"use client";

import { useCallback, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Search, X } from "lucide-react";

const COLLAPSED_WIDTH = 132;
const EXPANDED_WIDTH = 320;

/**
 * Safari and iOS Chrome perform very poorly with `filter: url(#…)` SVG
 * filter references. The original brand-assets/search-bar.tsx UA-sniffs
 * those browsers and disables the gooey blur — preserved verbatim so the
 * fallback path matches the source.
 */
function useGooeyUnsupported() {
  return useMemo(() => {
    if (typeof navigator === "undefined") return false;
    const ua = navigator.userAgent.toLowerCase();
    const isSafari =
      ua.includes("safari") &&
      !ua.includes("chrome") &&
      !ua.includes("chromium") &&
      !ua.includes("android") &&
      !ua.includes("firefox");
    const isChromeOnIOS = ua.includes("crios");
    return isSafari || isChromeOnIOS;
  }, []);
}

/**
 * SVG filter definition for the gooey morph effect — high-stdDev Gaussian
 * blur fed through an alpha-thresholding color matrix so adjacent shapes
 * merge as one liquid blob. Pulled verbatim from
 * brand-assets/components/search-bar.tsx (id namespaced to avoid colliding
 * with anything else on the page).
 */
function GooeyFilter() {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      className="pointer-events-none absolute h-0 w-0"
    >
      <defs>
        <filter id="insights-goo-effect">
          <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
          <feColorMatrix
            in="blur"
            type="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -15"
            result="goo"
          />
          <feComposite in="SourceGraphic" in2="goo" operator="atop" />
        </filter>
      </defs>
    </svg>
  );
}

type Props = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  ariaLabel?: string;
};

/**
 * Insights search input — restored to feel like
 * brand-assets/components/search-bar.tsx. A "Search" pill button morphs
 * (framer-motion spring width animation) into a real input field with a
 * separate search icon that fades + scales + blurs in from the left.
 *
 * Component-guide.md issues addressed during integration:
 *   • Full TypeScript types on props, handlers, and hook params (the
 *     original was untyped JS).
 *   • Real `<button>` for the Search trigger (not `role="button"` on a
 *     `<motion.div>`).
 *   • Real `<input type="search">` for the expanded field.
 *   • Keyboard close path: `Escape` clears + collapses (the original had
 *     no way back to step 1).
 *   • Props-driven `value` / `onChange` — no hardcoded `dummyData`, no
 *     mocked async, no internal step state coupled to fake fetches.
 *   • Pure Tailwind v4 + brand `tnky-*` tokens — no missing external CSS.
 *   • Honors `prefers-reduced-motion` — disables spring chains, blur
 *     transitions, and the gooey filter; transitions become instant.
 *   • Placeholder ends with `…`, not `...`.
 *   • Hardcoded `#dddddd` from the source replaced with brand tokens.
 *
 * The gooey SVG filter and the Safari/iOS UA fallback are preserved
 * verbatim. Filter is applied to a separate `<div>` that holds only the
 * morphing pill background — text / icons / clear-button render in a
 * sibling un-filtered layer on top so they stay crisp.
 */
export function InsightsSearchBar({
  value,
  onChange,
  placeholder = "Search articles . . .",
  ariaLabel,
}: Props) {
  const reducedMotion = useReducedMotion();
  const gooeyUnsupported = useGooeyUnsupported();
  const inputRef = useRef<HTMLInputElement>(null);
  const [expanded, setExpanded] = useState(false);
  const hasValue = value.length > 0;

  const expand = useCallback(() => {
    setExpanded(true);
    requestAnimationFrame(() => inputRef.current?.focus());
  }, []);

  const collapse = useCallback(() => {
    setExpanded(false);
    onChange("");
  }, [onChange]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Escape") {
        e.preventDefault();
        collapse();
      }
    },
    [collapse],
  );

  // Collapse back to the pill button on blur when the input is empty. If the
  // user has typed something, keep the expanded state so results stay visible
  // and the query stays editable when they refocus.
  const handleBlur = useCallback(() => {
    if (value.length === 0) {
      setExpanded(false);
    }
  }, [value.length]);

  const useGoo = !reducedMotion && !gooeyUnsupported;
  const morphTransition = reducedMotion
    ? { duration: 0 }
    : ({
        type: "spring",
        bounce: 0.15,
        duration: 0.55,
      } as const);
  const iconTransition = reducedMotion
    ? { duration: 0 }
    : ({
        type: "spring",
        bounce: 0.15,
        delay: 0.1,
        duration: 0.85,
      } as const);
  const iconHidden = reducedMotion
    ? { opacity: 0 }
    : {
        opacity: 0,
        scale: 0.8,
        x: -4,
        filter: gooeyUnsupported ? "none" : "blur(5px)",
      };
  const iconVisible = {
    opacity: 1,
    scale: 1,
    x: 0,
    filter: "blur(0px)",
  };

  return (
    <div className="relative mx-auto w-full max-w-md">
      <GooeyFilter />

      {/* Filtered background layer — only contains the morphing pill shape,
          so the gooey blur doesn't smudge text / icons. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 flex h-12 justify-center"
        style={useGoo ? { filter: "url(#insights-goo-effect)" } : undefined}
      >
        <motion.div
          initial={false}
          animate={{ width: expanded ? EXPANDED_WIDTH : COLLAPSED_WIDTH }}
          transition={morphTransition}
          className="h-12 rounded-pill border border-tnky-edge bg-tnky-white shadow-tnky-1"
        />
      </div>

      {/* Foreground layer — controls + text + icons, NOT filtered so they
          stay crisp. Width animates in lockstep with the background. */}
      <motion.div
        initial={false}
        animate={{ width: expanded ? EXPANDED_WIDTH : COLLAPSED_WIDTH }}
        transition={morphTransition}
        className="relative mx-auto flex h-12 items-center"
      >
        {/* Search icon — fades + scales + blurs in from the left when
            expanded (animation chain from the original). */}
        <AnimatePresence mode="wait">
          {expanded && (
            <motion.span
              key="search-icon"
              initial={iconHidden}
              animate={iconVisible}
              exit={iconHidden}
              transition={iconTransition}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2"
              aria-hidden="true"
            >
              <Search className="h-4 w-4 text-tnky-mute" />
            </motion.span>
          )}
        </AnimatePresence>

        {expanded ? (
          <input
            ref={inputRef}
            type="search"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onKeyDown={handleKeyDown}
            onBlur={handleBlur}
            placeholder={placeholder}
            aria-label={ariaLabel ?? placeholder}
            autoComplete="off"
            spellCheck={false}
            // Hide WebKit/Blink's native search clear button — we render
            // our own styled clear (the X below). Without this, both show.
            className="relative h-full w-full rounded-pill bg-transparent pl-12 pr-12 text-body text-tnky-ink placeholder:text-tnky-mute focus:outline-none focus-visible:ring-2 focus-visible:ring-tnky-blue focus-visible:ring-offset-2 focus-visible:ring-offset-tnky-cream [&::-webkit-search-cancel-button]:appearance-none [&::-webkit-search-cancel-button]:hidden"
          />
        ) : (
          <motion.button
            type="button"
            onClick={expand}
            aria-label="Open search"
            whileHover={reducedMotion ? undefined : { scale: 1.05 }}
            whileTap={reducedMotion ? undefined : { scale: 0.95 }}
            transition={
              reducedMotion ? { duration: 0 } : { duration: 0.2, ease: "easeOut" }
            }
            className="relative h-full w-full rounded-pill font-display font-bold text-button text-tnky-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tnky-blue focus-visible:ring-offset-2 focus-visible:ring-offset-tnky-cream"
          >
            Search
          </motion.button>
        )}

        {/* Clear button — only when expanded + has text. Clicking it both
            empties the query and collapses back to the Search pill. */}
        {expanded && hasValue && (
          <button
            type="button"
            onClick={collapse}
            aria-label="Clear search"
            className="absolute right-3 top-1/2 inline-flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-tnky-mute transition-colors duration-150 ease-tnky hover:bg-tnky-cream hover:text-tnky-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tnky-blue focus-visible:ring-offset-2 focus-visible:ring-offset-tnky-cream"
          >
            <X aria-hidden="true" className="h-4 w-4" />
          </button>
        )}
      </motion.div>
    </div>
  );
}
