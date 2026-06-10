"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

export type PathwayStage = {
  label: string;
  name: string;
  blurb: string;
  imageSrc: string;
  imageAlt: string;
};

export const DEFAULT_STAGES: PathwayStage[] = [
  {
    label: "K–5th Grade",
    name: "Expose",
    blurb:
      "Long before a student picks up a tool, curiosity is the first skill. In the earliest grades, TradesNKY brings the world of skilled trades into view — through classroom visits, hands-on demonstrations, and real conversations with tradespeople who love what they do. We plant the seed early so students grow up knowing these careers exist, they matter, and they pay well.",
    imageSrc:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop",
    imageAlt: "",
  },
  {
    label: "6th–8th Grade",
    name: "Explore",
    blurb:
      "Middle school is where curiosity becomes direction. Students get their first real taste of the trades through job site visits, try-it activities, and career discovery events. They meet welders, electricians, HVAC techs, and project managers — people who built their careers with their hands. By the end of middle school, students have a clearer sense of which of the five pillars excites them most.",
    imageSrc:
      "https://images.unsplash.com/photo-1581094271901-8022df4466f9?q=80&w=2070&auto=format&fit=crop",
    imageAlt: "",
  },
  {
    label: "9th–12th Grade",
    name: "Engage",
    blurb:
      "High school is where exploration becomes commitment. TradesNKY connects students to dual enrollment programs, registered apprenticeships, career and technical education courses, and employer partnerships across Northern Kentucky. Students earn real credentials alongside their diploma — entering the workforce or continuing their training already ahead of the curve.",
    imageSrc:
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=2070&auto=format&fit=crop",
    imageAlt: "",
  },
  {
    label: "Post-Graduation",
    name: "Earn",
    blurb:
      "This is what it was all for. NKY employers are hiring, wages are strong, and students who followed the pathway are ready on day one. Whether entering a full apprenticeship, joining a company directly, or continuing at a technical college, TradesNKY graduates step into careers with purpose, skill, and a community behind them.",
    imageSrc:
      "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?q=80&w=2070&auto=format&fit=crop",
    imageAlt: "",
  },
];

const SECTION_TITLE = "The TradesNKY Pathway";
// Each step occupies this many viewport heights of document scroll. The
// outer section is STAGE_SCROLL_VH × stages.length tall (4 × 100vh = 400vh).
const STAGE_SCROLL_VH = 100;

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

function StageContent({ stage }: { stage: PathwayStage }) {
  return (
    <div className="max-w-lead text-center text-tnky-white">
      <p className="font-display font-extrabold uppercase text-eyebrow text-tnky-white">
        {stage.label}
      </p>
      <h2 className="mt-4 font-display italic font-tnky-black leading-none text-display text-tnky-white">
        {stage.name}
      </h2>
      {/* Short accent underline — matches the Five Pillars header treatment */}
      <div
        aria-hidden="true"
        className="mx-auto mt-4 h-[3px] w-14 rounded-full bg-tnky-safety"
      />
      <p className="mx-auto mt-6 text-lead text-tnky-white [text-wrap:pretty]">
        {stage.blurb}
      </p>
    </div>
  );
}

function StaticStages({ stages }: { stages: PathwayStage[] }) {
  return (
    <section className="flex flex-col bg-tnky-black">
      <div className="px-4 pb-2 pt-8 sm:px-8">
        <p className="font-display font-extrabold uppercase text-eyebrow text-tnky-white">
          {SECTION_TITLE}
        </p>
      </div>
      {stages.map((stage) => (
        <div
          key={stage.name}
          className="relative min-h-[32rem] overflow-hidden"
        >
          <Image
            src={stage.imageSrc}
            alt={stage.imageAlt}
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div
            className="absolute inset-0 bg-tnky-black/60"
            aria-hidden="true"
          />
          <div className="relative z-10 flex min-h-[32rem] items-center justify-center px-4 py-16 sm:px-8">
            <StageContent stage={stage} />
          </div>
        </div>
      ))}
    </section>
  );
}

function DesktopPathwayScroll({ stages }: { stages: PathwayStage[] }) {
  const sectionRef = useRef<HTMLElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Pinned-scrub via framer-motion. scrollYProgress runs 0 → 1 across the
  // section's "sticky range" (section.height − viewport.height = 300vh for
  // a 400vh section in a 100vh viewport). useTransform maps that to a
  // discrete stage index, useMotionValueEvent syncs it to React state so
  // the existing crossfade animations keep working unchanged.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const stageIndexMv = useTransform(scrollYProgress, (value) => {
    const idx = Math.floor(value * stages.length);
    return Math.max(0, Math.min(stages.length - 1, idx));
  });

  useMotionValueEvent(stageIndexMv, "change", (v) => {
    setActiveIndex(v);
  });

  // Momentum-kill on entry. Single IntersectionObserver with threshold 1.0
  // on the inner sticky panel (h-screen). When the section's top reaches
  // viewport top the sticky pins fully, ratio = 1.0, IO fires once → snap
  // scrollTo section.offsetTop with behavior 'instant' to kill any trackpad
  // or OS inertia that carried the user past the entry point.
  // (Threshold 1.0 on the 400vh section itself would never fire — ratio
  // caps at 0.25 for a target taller than the viewport.)
  useEffect(() => {
    const sticky = stickyRef.current;
    const section = sectionRef.current;
    if (!sticky || !section) return;

    let snappedOnEntry = false;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio >= 0.99 && !snappedOnEntry) {
          snappedOnEntry = true;
          window.scrollTo({
            top: section.offsetTop,
            behavior: "instant" as ScrollBehavior,
          });
        } else if (entry.intersectionRatio < 0.5) {
          // Section is meaningfully out of view — re-arm so re-entry snaps.
          snappedOnEntry = false;
        }
      },
      { threshold: [0.5, 1.0] },
    );
    observer.observe(sticky);

    return () => observer.disconnect();
  }, []);

  // Side-nav click jumps to stage `i` by scrolling the document to the
  // start of that stage's progress range. The scroll-driven stageIndex
  // catches up naturally.
  function jumpToStage(i: number) {
    const el = sectionRef.current;
    if (!el) return;
    setActiveIndex(i);
    const stickyRange = el.offsetHeight - window.innerHeight;
    window.scrollTo({
      top: el.offsetTop + (i * stickyRange) / stages.length,
      behavior: "smooth",
    });
  }

  return (
    <section
      id="pathway-scroll-section"
      ref={sectionRef}
      className="relative bg-tnky-black"
      style={{ height: `${stages.length * STAGE_SCROLL_VH}vh` }}
    >
      <div
        ref={stickyRef}
        className="sticky top-0 h-screen w-full overflow-hidden"
      >
        {/*
          Section title — absolute overlay inside the sticky panel, ABOVE both
          the background image layer (z-0) and the per-step text transition
          layer (z-10). Sits outside the transition layer entirely so it does
          not fade with step changes.
        */}
        <div className="pointer-events-none absolute inset-x-0 top-0 z-30 px-4 pt-8 sm:px-8 md:pt-12">
          <h2 className="font-display font-extrabold italic text-h2 text-tnky-white">
            {SECTION_TITLE}
          </h2>
          <div
            aria-hidden="true"
            className="mt-2 h-[3px] w-14 rounded-full bg-tnky-safety"
          />
        </div>

        {/* Background — cross-fade between step images. Dark base prevents any white between transitions. */}
        <div className="absolute inset-0 z-0">
          {stages.map((stage, i) => (
            <div
              key={stage.name}
              aria-hidden="true"
              className="absolute inset-0 transition-opacity duration-500 ease-tnky"
              style={{ opacity: activeIndex === i ? 1 : 0 }}
            >
              <Image
                src={stage.imageSrc}
                alt={stage.imageAlt}
                fill
                sizes="100vw"
                className="object-cover"
                priority={i === 0}
              />
              <div className="absolute inset-0 bg-tnky-black/60" />
            </div>
          ))}
        </div>

        {/* Stage text overlay — only the active stage's text is visible */}
        <div className="absolute inset-0 z-10">
          {stages.map((stage, i) => (
            <div
              key={stage.name}
              aria-hidden={activeIndex === i ? undefined : "true"}
              className="absolute inset-0 flex items-center justify-center px-4 transition-opacity duration-500 ease-tnky sm:px-8"
              style={{ opacity: activeIndex === i ? 1 : 0 }}
            >
              <StageContent stage={stage} />
            </div>
          ))}
        </div>

        {/* Vertical side navigation — bar + label per stage, clickable.
            Replaces the old aria-hidden span list and the bottom progress
            bar; this single control covers both progress display and
            jump-to-stage interaction. */}
        <nav
          aria-label="Pathway stages"
          className="absolute right-4 top-1/2 z-20 flex -translate-y-1/2 flex-col gap-4 sm:right-8"
        >
          {stages.map((stage, i) => {
            const isActive = activeIndex === i;
            return (
              <button
                key={stage.name}
                type="button"
                onClick={() => jumpToStage(i)}
                aria-current={isActive ? "step" : undefined}
                className="group flex items-center gap-3 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tnky-safety focus-visible:ring-offset-2 focus-visible:ring-offset-tnky-black"
              >
                <span
                  aria-hidden="true"
                  className={`block h-8 w-[3px] transition-colors duration-500 ease-tnky ${
                    isActive ? "bg-tnky-safety" : "bg-tnky-white/30"
                  }`}
                />
                <span
                  className={`font-display font-extrabold uppercase tracking-tag text-small transition-opacity duration-500 ease-tnky ${
                    isActive ? "text-tnky-white opacity-100" : "text-tnky-white/30"
                  }`}
                >
                  {stage.name}
                </span>
              </button>
            );
          })}
        </nav>
      </div>
    </section>
  );
}

export function PathwayScroll({
  stages = DEFAULT_STAGES,
}: {
  stages?: PathwayStage[];
}) {
  const isDesktop = useIsDesktop();
  const reducedMotion = useReducedMotion();
  const animationsOn = isDesktop && !reducedMotion;

  if (!animationsOn) {
    return <StaticStages stages={stages} />;
  }

  return <DesktopPathwayScroll stages={stages} />;
}
