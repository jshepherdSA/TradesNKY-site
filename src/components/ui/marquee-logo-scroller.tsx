"use client";

import React, {
  forwardRef,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type MouseEvent as ReactMouseEvent,
} from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Marquee logo scroller — adapted from
 * brand-assets/components/marquee-logo-scroller.tsx with the integration
 * issues called out in component-guide.md addressed:
 *   • Marquee pause is driven by React state (not `:hover` on the
 *     track), so the pause stays active while the user moves the
 *     pointer from a tile into the expanded panel below.
 *   • `prefers-reduced-motion` short-circuits the marquee animation —
 *     tiles render in a static labeled-group stack instead.
 *   • `@keyframes` name is namespaced to `marquee-logo-scroller` so it
 *     can't collide with any other component that defines a `marquee`
 *     animation.
 *   • Duplicated group set on the track is `aria-hidden="true"` so
 *     screen readers only hear each partner / category once.
 *   • shadcn CSS-var palette retokened to brand `tnky-*` tokens
 *     throughout.
 *   • Tile layout splits into a top logo-placeholder rectangle + a
 *     bottom name/category panel. When a partner has a `logoSrc`,
 *     a `next/image` `<Image fill object-contain>` renders in the top
 *     half; otherwise a "Logo" placeholder label takes its place.
 *     Gradient hover reveal unchanged.
 *   • Partners are grouped into labeled categories — each group
 *     renders as a vertical column with a subtle uppercase label
 *     above its tile row, and the groups flow horizontally through
 *     the marquee in order.
 *   • Hover drives a shared `hovered` state that height-animates a
 *     panel BELOW the marquee viewport (inside the same bordered
 *     section). No portal — the panel sits outside the marquee
 *     viewport's `overflow-hidden`, so its height transition isn't
 *     clipped. A short close timer bridges pointer movement from tile
 *     to panel so the panel stays open while either is hovered.
 *   • When no card is hovered, a muted helper line shows in the same
 *     space ("Hover over a partner to learn more about them").
 */
export type MarqueePartner = {
  name: string;
  category: string;
  description: string;
  website?: string;
  /** Public path to the partner logo (e.g. `/brand/partners/foo.png`).
   *  When omitted, the tile's top half renders a "Logo" placeholder
   *  label instead. */
  logoSrc?: string;
  gradient: {
    from: string;
    via: string;
    to: string;
  };
};

export type MarqueeGroup = {
  /** Short uppercase label shown above the group in the marquee
   *  (e.g. "CORNERSTONE FOUNDATION PARTNERS"). */
  label: string;
  partners: MarqueePartner[];
};

interface MarqueeLogoScrollerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  /** Used only as the section's `aria-label` — the visible heading
   *  for this component now lives outside the marquee box, owned by
   *  the consuming page. */
  ariaLabel: string;
  groups: MarqueeGroup[];
  speed?: "normal" | "slow" | "fast";
}

const DURATION_MAP = {
  normal: "40s",
  slow: "80s",
  fast: "5s",
} as const;

export const MarqueeLogoScroller = forwardRef<
  HTMLDivElement,
  MarqueeLogoScrollerProps
>(
  (
    {
      ariaLabel,
      groups,
      speed = "normal",
      className,
      ...props
    },
    ref,
  ) => {
    const [reducedMotion, setReducedMotion] = useState(false);
    const [hovered, setHovered] = useState<MarqueePartner | null>(null);
    const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

    // Manual horizontal scroll: viewport ref + state for wheel/drag
    // activity. While the user is wheel-scrolling or click-dragging,
    // the CSS marquee animation is paused; 1 s after the last
    // interaction it resumes from its current transform position.
    const viewportRef = useRef<HTMLDivElement>(null);
    const [isUserScrolling, setIsUserScrolling] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const scrollIdleTimer = useRef<ReturnType<typeof setTimeout> | null>(
      null,
    );
    const dragStartRef = useRef<{ x: number; scrollLeft: number } | null>(
      null,
    );

    useEffect(() => {
      if (typeof window !== "undefined") {
        setReducedMotion(
          window.matchMedia("(prefers-reduced-motion: reduce)").matches,
        );
      }
      return () => {
        if (closeTimer.current) clearTimeout(closeTimer.current);
        if (scrollIdleTimer.current) clearTimeout(scrollIdleTimer.current);
      };
    }, []);

    // Wrap scrollLeft into the [0, setWidth) range so reaching the end
    // of the duplicated track jumps invisibly back to the start of the
    // first set — keeps manual scrolling feeling infinite.
    const wrapScroll = (viewport: HTMLDivElement) => {
      const setWidth = viewport.scrollWidth / 2;
      if (setWidth <= 0) return;
      if (viewport.scrollLeft >= setWidth) {
        viewport.scrollLeft -= setWidth;
      } else if (viewport.scrollLeft < 0) {
        viewport.scrollLeft += setWidth;
      }
    };

    const markUserScrolling = () => {
      setIsUserScrolling(true);
      if (scrollIdleTimer.current) clearTimeout(scrollIdleTimer.current);
      scrollIdleTimer.current = setTimeout(() => {
        setIsUserScrolling(false);
        scrollIdleTimer.current = null;
      }, 1000);
    };

    // Wheel handler — attached imperatively with `{ passive: false }`
    // so `preventDefault()` is allowed (React's synthetic wheel events
    // default to passive in newer React versions).
    useEffect(() => {
      const viewport = viewportRef.current;
      if (!viewport) return;
      if (reducedMotion) return;

      const handleWheel = (e: WheelEvent) => {
        const delta =
          Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
        if (delta === 0) return;
        e.preventDefault();
        viewport.scrollLeft += delta;
        wrapScroll(viewport);
        markUserScrolling();
      };

      viewport.addEventListener("wheel", handleWheel, { passive: false });
      return () => {
        viewport.removeEventListener("wheel", handleWheel);
      };
    }, [reducedMotion]);

    // Drag-to-scroll — mouse-move and mouse-up are bound on the
    // document during an active drag so the gesture survives the
    // pointer leaving the viewport.
    useEffect(() => {
      if (!isDragging) return;

      const handleMove = (e: MouseEvent) => {
        const viewport = viewportRef.current;
        if (!viewport || !dragStartRef.current) return;
        const dx = e.pageX - dragStartRef.current.x;
        viewport.scrollLeft = dragStartRef.current.scrollLeft - dx;
        wrapScroll(viewport);
        markUserScrolling();
      };

      const handleUp = () => {
        setIsDragging(false);
        dragStartRef.current = null;
      };

      document.addEventListener("mousemove", handleMove);
      document.addEventListener("mouseup", handleUp);
      return () => {
        document.removeEventListener("mousemove", handleMove);
        document.removeEventListener("mouseup", handleUp);
      };
    }, [isDragging]);

    // Force the global cursor + disable text selection while dragging
    // so the grabbing cursor stays visible even when the pointer
    // crosses tiles (which carry their own `cursor-pointer`).
    useEffect(() => {
      if (!isDragging) return;
      const prevCursor = document.body.style.cursor;
      const prevUserSelect = document.body.style.userSelect;
      document.body.style.cursor = "grabbing";
      document.body.style.userSelect = "none";
      return () => {
        document.body.style.cursor = prevCursor;
        document.body.style.userSelect = prevUserSelect;
      };
    }, [isDragging]);

    const handleViewportMouseDown = (
      e: ReactMouseEvent<HTMLDivElement>,
    ) => {
      // Left button only, and only when the marquee is actually
      // animating (skip for reduced motion / wrap-grid fallback).
      if (e.button !== 0 || reducedMotion) return;
      const viewport = viewportRef.current;
      if (!viewport) return;
      setIsDragging(true);
      dragStartRef.current = {
        x: e.pageX,
        scrollLeft: viewport.scrollLeft,
      };
      e.preventDefault();
    };

    const handleTileEnter = (partner: MarqueePartner) => {
      if (closeTimer.current) {
        clearTimeout(closeTimer.current);
        closeTimer.current = null;
      }
      setHovered(partner);
    };

    const handleTileLeave = () => {
      closeTimer.current = setTimeout(() => {
        setHovered(null);
        closeTimer.current = null;
      }, 150);
    };

    const handlePanelEnter = () => {
      if (closeTimer.current) {
        clearTimeout(closeTimer.current);
        closeTimer.current = null;
      }
    };

    const handlePanelLeave = () => {
      setHovered(null);
    };

    return (
      <>
        {/* Namespaced keyframes so the inline injection can't collide
            with any other component that defines a `marquee` animation. */}
        <style>{`
          @keyframes marquee-logo-scroller {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
        `}</style>

        <section
          ref={ref}
          aria-label={ariaLabel}
          className={cn(
            "w-full overflow-hidden rounded-lg border border-tnky-edge bg-transparent text-tnky-ink",
            className,
          )}
          {...props}
        >
          {/* Marquee viewport — masked left/right for a soft fade. The
              viewport is `overflow-x-auto` (with the scrollbar hidden)
              so wheel/drag handlers can modify `scrollLeft` for manual
              horizontal scrolling on top of the CSS marquee animation.
              `cursor-grab` signals draggability; an active drag
              swaps in `cursor-grabbing` + a global body cursor
              override so the grab cursor stays even over tiles. */}
          <div
            ref={viewportRef}
            onMouseDown={handleViewportMouseDown}
            className={cn(
              "w-full select-none overflow-x-auto overflow-y-hidden [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
              reducedMotion
                ? undefined
                : isDragging
                  ? "cursor-grabbing"
                  : "cursor-grab",
            )}
            style={{
              maskImage:
                "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            }}
          >
            {reducedMotion ? (
              // Reduced-motion fallback: render groups stacked
              // vertically with their labels — no animation. Each
              // group is a labeled flex-wrap row of partner tiles.
              <div className="flex w-full flex-col gap-8 px-4 py-6 md:px-6">
                {groups.map((group, gIdx) => (
                  <div
                    key={gIdx}
                    className="flex flex-col items-center gap-3"
                  >
                    <p className="font-display font-bold uppercase tracking-tag text-meta text-tnky-mute">
                      {group.label}
                    </p>
                    <div className="flex flex-wrap items-end justify-center gap-4">
                      {group.partners.map((partner, pIdx) => (
                        <PartnerTile
                          key={`${gIdx}-${pIdx}`}
                          partner={partner}
                          onMouseEnter={() => handleTileEnter(partner)}
                          onMouseLeave={handleTileLeave}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div
                className="flex w-max items-end gap-10 py-4 pr-4 transition-all duration-300 ease-in-out"
                style={{
                  animation: `marquee-logo-scroller ${DURATION_MAP[speed]} linear infinite`,
                  // Pause via React state — stays paused while the
                  // pointer is inside the source tile OR the panel,
                  // and while the user is actively wheel-scrolling or
                  // click-dragging (resumes 1 s after the last
                  // scroll/drag event).
                  animationPlayState:
                    hovered || isUserScrolling || isDragging
                      ? "paused"
                      : "running",
                }}
              >
                {/* Render groups twice for the seamless loop; the
                    duplicate set is `aria-hidden` so screen readers
                    only hear each partner / category once. */}
                {[...groups, ...groups].map((group, gIdx) => {
                  const isDuplicate = gIdx >= groups.length;
                  return (
                    <div
                      key={gIdx}
                      aria-hidden={isDuplicate ? "true" : undefined}
                      className="flex shrink-0 flex-col gap-3"
                    >
                      <p className="px-1 font-display font-bold uppercase tracking-tag text-meta text-tnky-mute">
                        {group.label}
                      </p>
                      <div className="flex items-center gap-4">
                        {group.partners.map((partner, pIdx) => (
                          <PartnerTile
                            key={`${gIdx}-${pIdx}`}
                            partner={partner}
                            ariaHidden={isDuplicate}
                            onMouseEnter={() => handleTileEnter(partner)}
                            onMouseLeave={handleTileLeave}
                          />
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Panel + helper area — lives INSIDE the bordered section
              but OUTSIDE the marquee viewport's `overflow-hidden`, so
              the height animation isn't clipped. The helper line
              shows whenever no card is hovered; it's swapped for the
              partner detail panel as soon as a card is hovered. */}
          <div className="border-t border-tnky-edge px-6 md:px-8 lg:px-10">
            {hovered ? null : (
              <p className="py-6 text-center text-small text-tnky-mute">
                Hover over a partner to learn more about them.
              </p>
            )}

            <AnimatePresence initial={false}>
              {hovered ? (
                <motion.div
                  key={hovered.name}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{
                    height: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
                    opacity: { duration: 0.2, ease: [0.22, 1, 0.36, 1] },
                  }}
                  onMouseEnter={handlePanelEnter}
                  onMouseLeave={handlePanelLeave}
                  className="overflow-hidden"
                  role="region"
                  aria-label={`${hovered.name} details`}
                >
                  <div className="py-6">
                    <p className="font-display font-extrabold uppercase tracking-tag text-eyebrow text-tnky-blue">
                      {hovered.category}
                    </p>
                    <h3 className="mt-2 font-display font-extrabold leading-tight text-card-title text-tnky-ink [text-wrap:balance]">
                      {hovered.name}
                    </h3>
                    <p className="mt-3 max-w-3xl text-small leading-relaxed text-tnky-mute [text-wrap:pretty]">
                      {hovered.description}
                    </p>
                    {hovered.website ? (
                      <a
                        href={hovered.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-block text-small text-tnky-blue underline underline-offset-4 transition-colors duration-150 hover:text-tnky-safety focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tnky-blue focus-visible:ring-offset-2"
                      >
                        Visit website →
                      </a>
                    ) : null}
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        </section>
      </>
    );
  },
);

MarqueeLogoScroller.displayName = "MarqueeLogoScroller";

type PartnerTileProps = {
  partner: MarqueePartner;
  ariaHidden?: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
};

function PartnerTile({
  partner,
  ariaHidden,
  onMouseEnter,
  onMouseLeave,
}: PartnerTileProps) {
  return (
    <div
      aria-hidden={ariaHidden ? "true" : undefined}
      className="group relative h-36 w-64 shrink-0 cursor-pointer overflow-hidden rounded-lg border border-tnky-edge bg-transparent"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Category-tinted gradient revealed on hover. Sits at z-0
          behind the content layers; the top half's translucent gray
          placeholder still lets it bleed through subtly, and the
          bottom half is transparent so the gradient reads clearly
          behind the name/category. */}
      <div
        aria-hidden="true"
        style={
          {
            "--from": partner.gradient.from,
            "--via": partner.gradient.via,
            "--to": partner.gradient.to,
          } as CSSProperties
        }
        className="absolute inset-0 scale-150 bg-gradient-to-br from-[var(--from)] via-[var(--via)] to-[var(--to)] opacity-0 transition-all duration-500 ease-out group-hover:scale-100 group-hover:opacity-100"
      />
      {/* Two-row card content: top half is the logo (or a gray
          placeholder if no logo file is present); bottom half holds
          the partner name + category tag. */}
      <div className="relative z-10 flex h-full w-full flex-col">
        <div className="relative flex flex-1 items-center justify-center bg-transparent px-3">
          {partner.logoSrc ? (
            <Image
              src={partner.logoSrc}
              alt={`${partner.name} logo`}
              fill
              sizes="256px"
              style={{ background: "transparent" }}
              className="object-contain p-2"
            />
          ) : (
            <span
              aria-hidden="true"
              className="font-display font-bold uppercase tracking-tag text-meta text-tnky-mute transition-colors duration-300 ease-out group-hover:text-tnky-white/80"
            >
              Logo
            </span>
          )}
        </div>
        <div className="flex flex-1 flex-col items-center justify-center gap-0.5 px-2 py-1 text-center">
          <p className="line-clamp-2 font-display font-bold leading-tight text-mini text-tnky-ink [text-wrap:balance] transition-colors duration-300 ease-out group-hover:text-tnky-white">
            {partner.name}
          </p>
          <p className="font-display font-bold uppercase tracking-tag text-meta text-tnky-mute transition-colors duration-300 ease-out group-hover:text-tnky-white/85">
            {partner.category}
          </p>
        </div>
      </div>
    </div>
  );
}
