"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

export type Principle = {
  /** Two-digit display number ("01" – "08"). */
  number: string;
  name: string;
  description: string;
};

type Props = {
  items: Principle[];
};

// brand --ease-tnky cubic-bezier(0.22, 1, 0.36, 1)
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const ROW_TRANSITION =
  "height 0.45s cubic-bezier(0.22, 1, 0.36, 1), background-color 0.3s cubic-bezier(0.22, 1, 0.36, 1)";

/**
 * Eight-row guiding-principles list that combines a step-block-text /
 * rolling-list-style hover-roll with a click-to-toggle accordion expand.
 * Total height is locked to `calc(100vh - var(--nav-h))`; opening a row
 * compresses the seven others so all 8 stay visible without scrolling.
 *
 * Activation model (one row open at a time):
 *   • Default: all rows share the height equally (1/8 each).
 *   • Click an inactive row: that row grows to 3/10 of the section, the
 *     other seven compress to 1/10 each (3 + 7×1 = 10). GSAP rolls the
 *     dark name out the top and the white italic name in from below;
 *     after the roll completes the description fades in beneath.
 *   • Click the open row: it closes — height returns to 1/8, roll
 *     reverses, description fades out.
 *   • Click a different row: previous row closes, new row opens
 *     simultaneously (state-driven CSS transitions run in parallel).
 *
 * Accessibility:
 *   • Each row trigger is a real `<button>` with `aria-expanded` and an
 *     `aria-controls` reference to its description panel.
 *   • Numbers live in a fixed-width left column (w-16 / md:w-20) so
 *     they form a perfectly straight column regardless of row height
 *     changes.
 *   • `prefers-reduced-motion`: the GSAP timeline is skipped, the inner
 *     column's translate is set via inline style based on `isOpen` so
 *     the white name still appears when active, AnimatePresence
 *     transitions snap to instant.
 */
export function RollingPrinciplesList({ items }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      aria-label="Guiding principles"
      className="w-full overflow-hidden bg-tnky-cream"
      style={{ height: "calc(100vh - var(--nav-h, 64px))" }}
    >
      <ul className="flex h-full flex-col">
        {items.map((item, i) => (
          <PrincipleRow
            key={item.number}
            item={item}
            isOpen={openIndex === i}
            anyOpen={openIndex !== null}
            onToggle={() =>
              setOpenIndex((prev) => (prev === i ? null : i))
            }
          />
        ))}
      </ul>
    </section>
  );
}

type RowProps = {
  item: Principle;
  isOpen: boolean;
  anyOpen: boolean;
  onToggle: () => void;
};

function PrincipleRow({ item, isOpen, anyOpen, onToggle }: RowProps) {
  const innerRef = useRef<HTMLDivElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const reducedMotion = useReducedMotion();

  // Build the GSAP timeline once per mount (skipped under reduced motion).
  // Translating the 2× tall inner column by `yPercent: -50` always equals
  // exactly one row of text — resize-safe.
  useEffect(() => {
    if (reducedMotion) return;
    const inner = innerRef.current;
    if (!inner) return;

    const tl = gsap.timeline({ paused: true });
    tl.to(inner, {
      yPercent: -50,
      duration: 0.45,
      ease: "power3.out",
    });
    tlRef.current = tl;

    return () => {
      tl.kill();
      tlRef.current = null;
    };
  }, [reducedMotion]);

  // Drive the timeline from the `isOpen` prop so click-toggle from the
  // parent plays / reverses the roll in lockstep with the accordion
  // height transition.
  useEffect(() => {
    const tl = tlRef.current;
    if (!tl) return;
    if (isOpen) tl.play();
    else tl.reverse();
  }, [isOpen]);

  // Three-state height: open row gets 3/10, other rows compress to
  // 1/10 each (3 + 7×1 = 10), and the default with nothing open is
  // 1/8 per row. Animated via CSS transition on the inline `height`.
  const rowHeight = isOpen
    ? "calc((100vh - var(--nav-h, 64px)) * 3 / 10)"
    : anyOpen
      ? "calc((100vh - var(--nav-h, 64px)) / 10)"
      : "calc((100vh - var(--nav-h, 64px)) / 8)";

  const panelId = `principle-${item.number}-panel`;
  const triggerId = `principle-${item.number}-trigger`;

  return (
    <li
      style={{ height: rowHeight, transition: ROW_TRANSITION }}
      className={`relative flex flex-col overflow-hidden border-b border-tnky-edge last:border-b-0 ${
        isOpen ? "bg-tnky-blue" : "bg-tnky-cream"
      }`}
    >
      <button
        id={triggerId}
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className="flex w-full shrink-0 items-center gap-4 px-4 py-3 text-left transition-colors duration-300 ease-tnky focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-tnky-safety sm:gap-8 sm:px-8 md:gap-12 md:px-12 md:py-4"
      >
        {/* Number — fixed-width column so all 8 align vertically into a
            straight column regardless of row height changes. Stays
            tnky-safety yellow in both states. */}
        <span
          aria-hidden="true"
          className="inline-block w-16 shrink-0 text-center font-display font-tnky-black italic leading-none text-stat-md text-tnky-safety md:w-20 md:text-stat-lg"
        >
          {item.number}
        </span>

        {/* Rolling-name clip — overflow-hidden with a natural one-line
            height set by an invisible placeholder so the two stacked
            copies of the name (dark on top, italic white below) line up
            perfectly. GSAP translates the inner up 50% of its own
            height (= one name) so the white version rolls into view
            from below. `px-1` reserves ~4px each side for italic glyph
            overhang on the first/last letters of the principle name so
            they aren't shaved by the clip. */}
        <div className="relative flex-1 overflow-hidden px-1">
          <div className="invisible">
            <span className="font-display font-extrabold italic leading-tight text-card-title md:text-h2">
              {item.name}
            </span>
          </div>
          <div
            ref={innerRef}
            className="absolute inset-x-0 top-0 will-change-transform"
            style={
              reducedMotion
                ? { transform: isOpen ? "translateY(-50%)" : "translateY(0)" }
                : undefined
            }
          >
            <div className="font-display font-extrabold italic leading-tight text-card-title text-tnky-ink md:text-h2">
              <span className="line-clamp-2">{item.name}</span>
            </div>
            <div className="font-display font-extrabold italic leading-tight text-card-title text-tnky-white md:text-h2">
              <span className="line-clamp-2">{item.name}</span>
            </div>
          </div>
        </div>
      </button>

      {/* Description panel — fades in after the row has finished
          expanding (delay matches the height transition), fades out
          quickly when the row closes so it disappears before the clip
          line passes over it. */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="description"
            id={panelId}
            role="region"
            aria-labelledby={triggerId}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: reducedMotion
                ? { duration: 0 }
                : { delay: 0.35, duration: 0.3, ease: EASE },
            }}
            exit={{
              opacity: 0,
              transition: reducedMotion
                ? { duration: 0 }
                : { duration: 0.15, ease: EASE },
            }}
            className="min-h-0 overflow-hidden px-4 pb-4 sm:px-8 md:px-12 md:pb-6"
          >
            {/* Indent the description so it aligns with the principle
                name (skipping the fixed-width number column). */}
            <div className="flex gap-4 sm:gap-8 md:gap-12">
              <span
                aria-hidden="true"
                className="inline-block w-16 shrink-0 md:w-20"
              />
              <p className="max-w-3xl text-small font-normal leading-relaxed text-tnky-white [text-wrap:pretty] sm:text-body">
                {item.description}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}
