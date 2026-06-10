"use client";

import { useEffect, useState } from "react";
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

  // Always sums to 100% so the row has no gap at any frame of the transition.
  //   Idle:    5 × 20%        = 100%
  //   Hovered: 40% + 4 × 15%  = 100%
  // Both endpoints sum to 100% and flex-basis interpolates linearly, so the
  // sum is conserved throughout the animation.
  const flexBasisFor = (i: number): string => {
    if (!isDesktop) return "auto";
    if (hoveredIdx === null) return "20%";
    if (hoveredIdx === i) return "40%";
    return "15%";
  };

  const items = PATH_SLUGS.map((slug) => PATHS[slug]);
  const lastIdx = items.length - 1;

  return (
    // Desktop only: lock the whole section to `100vh - nav-h` and run
    // it as a flex column — header takes its natural height, the
    // accordion row below fills the remainder via `md:flex-1`. So
    // sticky nav + header + accordion = exactly 100vh. On mobile the
    // section flows at content height (5 stacked pillars don't fit in
    // 100vh with any reasonable type sizes, so the constraint only
    // applies once the layout actually fits horizontally).
    <section
      id="five-pillars-section"
      className="bg-tnky-white md:flex md:flex-col md:overflow-hidden"
      style={
        isDesktop
          ? { height: "calc(100vh - var(--nav-h, 64px))" }
          : undefined
      }
    >
      {/* Header — flex row on md+ (heading+underline left, description right),
          stacked vertically on mobile. */}
      <div className="px-4 py-16 sm:px-8 md:py-20">
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
        Accordion row.
        Gap-fix Option 1: container bg is bg-pillar-protect — Protect is always
        the rightmost child, so any sub-pixel gap on the right shows the same
        color as Protect instead of the white page background.
      */}
      <div className="relative flex w-full flex-col overflow-hidden bg-pillar-protect md:min-h-0 md:flex-1 md:flex-row">
        {items.map((path, i) => {
          const Icon = path.icon;
          // On mobile every column shows the expanded view by default; on desktop only when hovered/focused.
          const showExpanded = !isDesktop || hoveredIdx === i;
          const topCareers = path.careers.slice(0, 4);
          // Gap-fix Option 2: let the rightmost pillar grow to fill any
          // sub-pixel rounding remainder so it stays pinned to the right edge.
          const flexGrow = i === lastIdx ? 1 : 0;

          return (
            <div
              key={path.slug}
              className={`relative overflow-hidden ${path.bgClass} text-tnky-white transition-[flex-basis] duration-200 ease-tnky md:h-full`}
              style={{ flex: `${flexGrow} 0 ${flexBasisFor(i)}` }}
              onMouseEnter={() => isDesktop && setHoveredIdx(i)}
              onMouseLeave={() => isDesktop && setHoveredIdx(null)}
              onFocus={() => isDesktop && setHoveredIdx(i)}
              onBlur={() => isDesktop && setHoveredIdx(null)}
            >
              {/* Collapsed view — desktop only, while no column is hovered/focused on this one */}
              <div
                aria-hidden={showExpanded ? "true" : undefined}
                className={`absolute inset-0 hidden flex-col items-center justify-center p-6 transition-opacity duration-300 md:flex ${
                  showExpanded ? "pointer-events-none opacity-0" : "opacity-100"
                }`}
              >
                <Icon
                  className="h-12 w-12"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <span className="mt-4 text-center font-display font-extrabold uppercase tracking-pillar text-button text-tnky-white">
                  {path.name}
                </span>
              </div>

              {/* Expanded view — always visible on mobile; on desktop fades in when hovered/focused */}
              <div
                aria-hidden={!showExpanded ? "true" : undefined}
                className={`flex h-full min-h-[24rem] flex-col p-6 transition-opacity duration-300 md:min-h-0 md:overflow-y-auto md:p-8 ${
                  showExpanded ? "opacity-100" : "pointer-events-none opacity-0"
                }`}
              >
                <Icon
                  className="h-10 w-10 md:h-12 md:w-12"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <h3 className="mt-4 font-display italic font-tnky-black uppercase leading-none text-h2 text-tnky-white">
                  {path.name}
                </h3>
                <ul className="mt-6 space-y-3">
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
                <Link
                  href={`/students/pillars/${path.slug}`}
                  className="mt-auto inline-flex items-center gap-2 self-start rounded-pill bg-tnky-white px-5 py-2.5 font-display font-bold text-button text-tnky-ink transition-colors duration-200 ease-tnky hover:bg-tnky-cream focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tnky-white"
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
