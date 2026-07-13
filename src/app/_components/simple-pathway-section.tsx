"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Check, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type PathwayStep = {
  name: string;
  grade: string;
  /** Number-node fill + text color. */
  badgeClass: string;
  /** Top accent border on the card. */
  borderClass: string;
  /** Bullet-dot color. */
  dotClass: string;
  /** The yellow-highlighted activities from the "From Exposure to
   *  Opportunity" source — shown by default in every variant. */
  highlights: string[];
  /** The remaining activities — hidden behind the per-stage "See more"
   *  toggle. */
  more: string[];
};

// Five stages, taken verbatim from the "From Exposure to Opportunity"
// student-pathway source (FROM EXPOSURE TO OPPORTUNITY — Website.docx).
// `highlights` are the activities the source highlights in yellow; `more`
// are the rest, revealed by the per-stage "See more" toggle. Accent colors
// mirror the source's column color coding using brand tokens.
const STEPS: PathwayStep[] = [
  {
    name: "Expose",
    grade: "Pre-K–5",
    badgeClass: "bg-tnky-rust text-tnky-white",
    borderClass: "border-t-tnky-rust",
    dotClass: "bg-tnky-rust",
    highlights: ["Career Clusters", "Field Trips", "Guest Speakers"],
    more: [
      "Adopt-A-Class",
      "Touch-A-Truck",
      "Family Nights",
      "Job Simulations",
      "STEM Activities",
      "Soft Skills Training",
      "Parent Engagement",
    ],
  },
  {
    name: "Explore",
    grade: "Grades 6–8",
    badgeClass: "bg-tnky-grass text-tnky-white",
    borderClass: "border-t-tnky-grass",
    dotClass: "bg-tnky-grass",
    highlights: [
      "Essential Skills Curricula",
      "skill UP (Career Expo)",
      "Employability Skills Training",
    ],
    more: [
      "Field Trips",
      "Guest Speakers",
      "Trade Technology",
      "Simulators",
      "Project-Based",
      "Aptitudes/Interests",
      "Parent Engagement",
    ],
  },
  {
    name: "Engage",
    grade: "Grades 9–10",
    badgeClass: "bg-tnky-safety text-tnky-safety-ink",
    borderClass: "border-t-tnky-safety",
    dotClass: "bg-tnky-safety",
    highlights: [
      "NCCER Core",
      "Micro-Credentials",
      "Employability Skills Training",
    ],
    more: [
      "OSHA 10/30",
      "Site Visits",
      "Job-Shadowing",
      "ATC Exposure",
      "CTE Courses",
      "Career Coaching",
      "Aptitudes/Interests",
    ],
  },
  {
    name: "Equip",
    grade: "Grade 11",
    badgeClass: "bg-tnky-blue text-tnky-white",
    borderClass: "border-t-tnky-blue",
    dotClass: "bg-tnky-blue",
    highlights: [
      "NCCER Elective(s)",
      "Industry Credentials",
      "Dual-Credit Opportunities",
    ],
    more: [
      "OSHA 30",
      "ATC Enrollment",
      "CTE Enrollment",
      "Job-Shadowing",
      "Site Visits",
      "Career Coaching",
      "Employability Skills Training",
      "Aptitudes/Interests",
    ],
  },
  {
    name: "Experience",
    grade: "Grade 12",
    badgeClass: "bg-tnky-sky text-tnky-ink",
    borderClass: "border-t-tnky-sky",
    dotClass: "bg-tnky-sky",
    highlights: ["Co-ops/Internships", "Apprenticeships", "Mentorships"],
    more: [
      "Employment",
      "Pre-apprenticeships",
      "NCCER Elective(s)",
      "Industry Credentials",
      "Resume-Building",
      "Interview Prep",
      "Employability Skills Training",
      "Career Readiness",
    ],
  },
];

// Intro + outcomes, taken verbatim from the source document.
const INTRO =
  "TradesNKY partnered with education and industry leaders to develop a transferable talent pipeline model that connects classroom learning with real workforce opportunities. These partnerships support students from elementary school awareness, to middle school exposure, to high school industry credentialing, technical training, experiential learning, and career and college readiness. Together, with practitioner experiences and resources, students are introduced to the diverse range of essential trades and college and career opportunities.";

const OUTCOMES = [
  "Career Awareness",
  "Hands-On Technical Skills",
  "Industry Credentials",
  "Direct Connections to Employers",
];

// brand --ease-tnky cubic-bezier(0.22, 1, 0.36, 1)
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/** One pathway stage card — owns its own "See more" toggle so each stage
 *  expands independently. */
function StageCard({ step }: { step: PathwayStep }) {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  const panelId = `pathway-more-${step.name.toLowerCase()}`;

  const renderItem = (h: string) => (
    <li
      key={h}
      className="flex items-start gap-2 text-mini font-medium leading-snug text-tnky-ink [text-wrap:pretty]"
    >
      <span
        aria-hidden="true"
        className={cn(
          "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full",
          step.dotClass,
        )}
      />
      <span>{h}</span>
    </li>
  );

  return (
    <article
      className={cn(
        "flex-1 rounded-xl border border-tnky-edge border-t-4 bg-tnky-cream p-5 lg:mt-5",
        step.borderClass,
      )}
    >
      <h3 className="font-display italic font-extrabold text-h4 text-tnky-ink">
        {step.name}
      </h3>
      <p className="mt-1 font-display font-extrabold uppercase tracking-tag text-meta text-tnky-blue">
        {step.grade}
      </p>

      <ul className="mt-3 space-y-2">{step.highlights.map(renderItem)}</ul>

      {step.more.length > 0 && (
        <>
          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                id={panelId}
                initial={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
                animate={
                  reduce ? { opacity: 1 } : { height: "auto", opacity: 1 }
                }
                exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
                transition={{ duration: 0.28, ease: EASE }}
                className="overflow-hidden"
              >
                <ul className="space-y-2 pt-2">{step.more.map(renderItem)}</ul>
              </motion.div>
            )}
          </AnimatePresence>

          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls={panelId}
            className="mt-3 inline-flex cursor-pointer items-center gap-1 font-display font-bold uppercase tracking-label text-mini text-tnky-blue transition-colors duration-200 hover:text-tnky-rust focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tnky-blue focus-visible:ring-offset-2"
          >
            {open ? "See less" : `See ${step.more.length} more`}
            <ChevronDown
              className={cn(
                "h-3.5 w-3.5 transition-transform duration-200",
                open && "rotate-180",
              )}
              aria-hidden="true"
            />
          </button>
        </>
      )}
    </article>
  );
}

export function SimplePathwaySection({
  detailed = false,
}: {
  /** When true (the What is TradesNKY page), the section adds the intro
   *  paragraph and the "Why this matters" outcomes. The per-stage activity
   *  lists behave the same in every variant: highlighted activities show by
   *  default, the rest reveal via "See more". */
  detailed?: boolean;
}) {
  return (
    <section className="bg-tnky-white py-20 md:py-24">
      <div className="max-w-content mx-auto px-4 sm:px-8">
        {/* Header — italic display heading + yellow rule on the left, the
            pathway subtitle on the right of the same row (stacks on mobile). */}
        <div className="mb-10 md:mb-12">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between md:gap-10">
            <div>
              <h2 className="font-display italic font-extrabold text-section text-tnky-ink">
                From Exposure to Opportunity
              </h2>
              <div
                aria-hidden="true"
                className="mt-3 h-[3px] w-14 rounded-full bg-tnky-safety"
              />
            </div>
            <p className="max-w-lead text-lead text-tnky-mute [text-wrap:pretty] md:whitespace-nowrap">
              The TradesNKY Student Pathway — Grades Pre-K–12.
            </p>
          </div>
          {detailed && (
            <p className="mt-6 max-w-3xl text-lead font-medium leading-relaxed text-tnky-ink [text-wrap:pretty]">
              {INTRO}
            </p>
          )}
        </div>

        {/* Five connected stages — vertical cascade on mobile, horizontal
            connected stepper on large screens. */}
        <ol className="relative grid grid-cols-1 items-start gap-8 lg:grid-cols-5 lg:gap-5">
          {STEPS.map((step, i) => {
            const isLast = i === STEPS.length - 1;
            return (
              <li
                key={step.name}
                className="relative flex gap-4 lg:flex-col lg:gap-0"
              >
                {/* Connector rail to the next stage — vertical on mobile,
                    horizontal on large screens. */}
                {!isLast && (
                  <>
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute left-6 top-12 h-[calc(100%-1rem)] w-0.5 -translate-x-1/2 bg-tnky-edge lg:hidden"
                    />
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute left-1/2 top-6 hidden h-0.5 w-[calc(100%+1.25rem)] bg-tnky-edge lg:block"
                    />
                  </>
                )}

                {/* Numbered node. */}
                <span
                  className={cn(
                    "relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full font-display font-tnky-black text-h4 lg:mx-auto",
                    step.badgeClass,
                  )}
                >
                  {i + 1}
                </span>

                <StageCard step={step} />
              </li>
            );
          })}
        </ol>

        {/* Why this matters — detailed variant only. */}
        {detailed && (
          <div className="mt-12 rounded-2xl bg-tnky-blue p-8 text-center md:p-10">
            <p className="font-display font-bold uppercase tracking-label text-mini text-tnky-safety">
              Why this matters
            </p>
            <p className="mt-2 text-lead font-medium text-tnky-white/90">
              TradesNKY ensures students graduate with:
            </p>
            <ul className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
              {OUTCOMES.map((o) => (
                <li
                  key={o}
                  className="flex items-center gap-2 font-display font-bold text-button text-tnky-white"
                >
                  <Check
                    className="h-4 w-4 shrink-0 text-tnky-safety"
                    strokeWidth={3}
                    aria-hidden="true"
                  />
                  {o}
                </li>
              ))}
            </ul>
            <p className="mt-6 font-display italic font-tnky-black text-h4 text-tnky-white [text-wrap:balance]">
              Students graduate with a plan, a pathway, and a purpose.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
