"use client";

import { useEffect, useState, type CSSProperties } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { PATHS, PATH_SLUGS } from "../students/pillars/data";

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return isDesktop;
}

export function FivePathsAccordion() {
  const isDesktop = useIsDesktop();
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  // Each pillar is a separate column now (there are gaps between them), so the
  // old flex-basis-sums-to-100% trick no longer works. Instead the columns
  // share the row via `flex-grow` weights over a zero basis, and flexbox
  // subtracts the gaps automatically:
  //   Idle:    every column weight 1        → 5 equal columns
  //   Hovered: hovered 2.6, others 1        → hovered ≈ 39%, others ≈ 15%
  // Animating flex-grow (a <number>) gives the same smooth expand as before.
  const flexStyleFor = (i: number): CSSProperties => {
    if (!isDesktop) return { flex: "0 0 auto" };
    const grow = hoveredIdx === null ? 1 : hoveredIdx === i ? 2.6 : 1;
    return { flexGrow: grow, flexShrink: 1, flexBasis: 0 };
  };

  const items = PATH_SLUGS.map((slug) => PATHS[slug]);

  return (
    // Desktop only: run the section as a flex column shorter than the viewport
    // — header takes its natural height, the accordion row below fills the
    // remainder via `md:flex-1`. The `- 8rem` leaves that much clearance below
    // the pillars so the base "explore" buttons stay clear of the bottom-fixed
    // cookie banner. The lower `min-height` keeps that clearance positive on
    // short laptop viewports instead of pushing the buttons under the banner.
    <section
      id="five-pillars-section"
      className="bg-tnky-white md:flex md:flex-col md:overflow-hidden"
      style={
        isDesktop
          ? { height: "calc(100vh - var(--nav-h, 64px) - 8rem)", minHeight: "26rem" }
          : undefined
      }
    >
      {/* Header — flex row on md+ (heading+underline left, description right),
          stacked vertically on mobile. */}
      <div className="px-4 py-10 sm:px-8 md:py-12">
        <div className="max-w-content mx-auto flex flex-col gap-6 md:flex-row md:items-center md:justify-between md:gap-10">
          <div>
            {/* Anchor target for the hero's Explore Careers button. id sits
                on the heading itself so the anchor lands exactly on the
                title; scroll-margin-top clears the sticky nav using the
                live --nav-h custom property (64px pre-hydration fallback). */}
            <h2
              id="five-pillars-heading"
              style={{ scrollMarginTop: "var(--nav-h, 64px)" }}
              className="font-display italic font-extrabold text-section text-tnky-ink"
            >
              The Five Pillars
            </h2>
            {/* Short accent underline — tnky-safety yellow, ~56px wide */}
            <div
              aria-hidden="true"
              className="mt-3 h-[3px] w-14 rounded-full bg-tnky-safety"
            />
          </div>
          <p className="max-w-lead text-lead text-tnky-ink [text-wrap:pretty]">
            Every skilled trade in Northern Kentucky connects to one of five
            career pillars. Explore the paths, discover the careers, and find
            where you belong.
          </p>
        </div>
      </div>

      {/*
        Accordion row. Each child is a standalone architectural pillar (a
        rounded capital at the top, a fluted shaft, and a rounded base at the
        bottom) sitting on the white section background, with gaps between them.
      */}
      <div className="relative flex w-full flex-col gap-3 px-4 pb-10 sm:px-8 md:min-h-0 md:flex-1 md:flex-row md:gap-4 md:pb-12">
        {items.map((path, i) => {
          const Icon = path.icon;
          // On mobile every column shows the expanded view by default; on desktop only when hovered/focused.
          const showExpanded = !isDesktop || hoveredIdx === i;
          const topCareers = path.careers.slice(0, 4);

          return (
            <div
              key={path.slug}
              className={`group/pillar relative flex flex-col text-tnky-white [filter:drop-shadow(0_8px_14px_rgba(11,14,26,0.12))] transition-[flex-grow] duration-300 ease-tnky md:h-full`}
              style={flexStyleFor(i)}
              onMouseEnter={() => isDesktop && setHoveredIdx(i)}
              onMouseLeave={() => isDesktop && setHoveredIdx(null)}
              onFocus={() => isDesktop && setHoveredIdx(i)}
              onBlur={() => isDesktop && setHoveredIdx(null)}
            >
              {/* Capital — the wide block at the top of the column. Spans the
                  full pillar width (overhanging the narrower shaft) and carries
                  the pillar label above a recessed white molding bar. */}
              <div
                className={`flex h-20 flex-none items-center justify-center rounded-b-2xl px-3 md:h-24 md:px-4 ${path.bgClass}`}
              >
                <span className="block text-center font-display font-extrabold uppercase leading-none tracking-pillar text-h3 text-tnky-white">
                  {path.name}
                </span>
              </div>

              {/* Necking ring — a thin horizontal band, narrower than the
                  capital but a little wider than the shaft, that steps the wide
                  base down to the narrow column. */}
              <div
                aria-hidden="true"
                className={`mx-auto h-3 w-[86%] flex-none ${path.bgClass}`}
              />

              {/* Shaft — the narrow column body, inset from the pillar edges so
                  the white section background shows on both sides, producing the
                  wide-cap / skinny-middle / wide-base silhouette. */}
              <div className={`relative mx-auto flex w-[80%] min-h-0 flex-1 flex-col ${path.bgClass}`}>
                {/* Collapsed view — desktop only, while this column isn't
                    hovered/focused. Icon centered in the shaft (the label lives
                    in the capital above). */}
                <div
                  aria-hidden={showExpanded ? "true" : undefined}
                  className={`absolute inset-0 hidden items-center justify-center p-4 transition-opacity duration-300 md:flex ${
                    showExpanded ? "pointer-events-none opacity-0" : "opacity-100"
                  }`}
                >
                  <Icon className="h-16 w-16" strokeWidth={1.5} aria-hidden="true" />
                </div>

                {/* Expanded view — always visible on mobile; on desktop fades in when hovered/focused */}
                <div
                  aria-hidden={!showExpanded ? "true" : undefined}
                  className={`flex min-h-[20rem] flex-1 flex-col px-4 py-5 transition-opacity duration-300 md:min-h-0 md:overflow-y-auto md:py-6 ${
                    showExpanded ? "opacity-100" : "pointer-events-none opacity-0"
                  }`}
                >
                  <Icon
                    className="h-12 w-12 md:h-14 md:w-14"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                  <ul className="mt-5 space-y-2.5">
                    {topCareers.map((career) => (
                      <li
                        key={career.title}
                        className="flex items-baseline justify-between gap-3"
                      >
                        <span className="text-button text-tnky-white/90">
                          {career.title}
                        </span>
                        <span className="whitespace-nowrap font-display font-extrabold text-body text-tnky-white">
                          {career.wage}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Necking ring above the base — mirror of the one below the cap. */}
              <div
                aria-hidden="true"
                className={`mx-auto h-3 w-[86%] flex-none ${path.bgClass}`}
              />

              {/* Base — the wide block at the bottom of the column. Carries the
                  explore-path button (revealed on expand), sitting opposite the
                  pillar name in the capital. */}
              <div
                className={`flex h-20 flex-none items-center justify-center overflow-hidden rounded-t-2xl px-3 md:h-24 md:px-4 ${path.bgClass}`}
              >
                <Link
                  href={`/students/pillars/${path.slug}`}
                  aria-hidden={!showExpanded ? "true" : undefined}
                  tabIndex={showExpanded ? undefined : -1}
                  className={`inline-flex items-center gap-2 whitespace-nowrap rounded-pill bg-tnky-white px-4 py-2.5 font-display font-bold text-button text-tnky-ink transition-opacity duration-300 ease-tnky hover:bg-tnky-cream focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tnky-white ${
                    showExpanded ? "opacity-100" : "pointer-events-none opacity-0"
                  }`}
                >
                  View {path.name} careers
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
