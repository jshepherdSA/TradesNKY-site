import { Check } from "lucide-react";
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
  /** Grade-band activities, taken verbatim from the "From Exposure to
   *  Opportunity" student-pathway infographic. The compact variant shows
   *  the first three; the detailed variant (What is TradesNKY) shows all. */
  highlights: string[];
};

// Five stages, matching the "From Exposure to Opportunity" infographic
// exactly: Expose → Explore → Engage → Equip → Experience. Accent colors
// mirror the source's color coding using brand tokens.
const STEPS: PathwayStep[] = [
  {
    name: "Expose",
    grade: "Pre-K–5",
    badgeClass: "bg-tnky-rust text-tnky-white",
    borderClass: "border-t-tnky-rust",
    dotClass: "bg-tnky-rust",
    highlights: [
      "Career clusters",
      "Field trips",
      "Touch-a-Truck",
      "Adopt-a-Class",
      "Guest speakers",
      "Dramatic play",
      "STEM-based toys & activities",
      "Experiments and outcomes",
      "Maker activities",
      "Books, videos, and pictures on essential careers",
      "Family nights",
      "Career lessons in each grade",
    ],
  },
  {
    name: "Explore",
    grade: "Grades 6–8",
    badgeClass: "bg-tnky-grass text-tnky-white",
    borderClass: "border-t-tnky-grass",
    dotClass: "bg-tnky-grass",
    highlights: [
      "9-week curriculum for 6th grade",
      "18-week curriculum for 7th–8th grade",
      "Introduction to the essential trades",
      "Industry terminology and process",
      "Trades technology and simulators",
      "Hands-on technical projects",
      "Aptitude and interest testing",
      "Career fairs (skillUP)",
      "Aptitude and interest assessments",
    ],
  },
  {
    name: "Engage",
    grade: "Grades 9–10",
    badgeClass: "bg-tnky-safety text-tnky-safety-ink",
    borderClass: "border-t-tnky-safety",
    dotClass: "bg-tnky-safety",
    highlights: [
      "NCCER Core credits",
      "OSHA 10 certification",
      "Complete industry micro-credentials",
      "Expanded hands-on technical training",
      "Site visits",
      "CTE courses",
      "ATC exposure",
      "Career fairs (skillUP)",
      "Soft skills and finance",
      "Career coaching",
      "Interview and resume prep",
      "Aptitude and interest assessments",
    ],
  },
  {
    name: "Equip",
    grade: "Grade 11",
    badgeClass: "bg-tnky-blue text-tnky-white",
    borderClass: "border-t-tnky-blue",
    dotClass: "bg-tnky-blue",
    highlights: [
      "Students may earn dual credits",
      "OSHA 30 certification",
      "NCCER elective credits",
      "Career coaching",
      "Co-op & intern/summer employment opportunities",
      "Soft skills training",
      "Advanced training with partners — ATC, Enzweiler Building Institute, Gateway Community Technical College, CTE courses",
    ],
  },
  {
    name: "Experience",
    grade: "Grade 12",
    badgeClass: "bg-tnky-sky text-tnky-ink",
    borderClass: "border-t-tnky-sky",
    dotClass: "bg-tnky-sky",
    highlights: [
      "Co-op & internship opportunities",
      "Pre-apprenticeships",
      "Continued technical training (NCCER electives, industry credentials)",
      "Resume building & interview prep",
      "Mentorships",
      "Soft skills training",
      "Students graduate college-bound or career-ready",
    ],
  },
];

// Intro + outcomes, verbatim from the infographic (the typo "eduction"
// corrected to "education").
const INTRO =
  "TradesNKY has partnered with local education leaders to develop a transferable model that connects classroom learning with real workforce opportunities. This partnership supports students from elementary school exposure, middle school exploration, and high school industry credentials, technical training, and career and college readiness. Together, with practitioner experiences and resources, students are introduced to the essential trades and college and career opportunities.";

const OUTCOMES = [
  "Career awareness",
  "Hands-on technical skills",
  "Industry credentials",
  "Direct connections to employers",
];

export function SimplePathwaySection({
  detailed = false,
}: {
  /** When true (the What is TradesNKY page), each stage lists every
   *  grade-band activity and the section adds the intro paragraph and the
   *  "Why this matters" outcomes. Off by default so the homepage and
   *  educators page keep the compact treatment. */
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
            <p className="max-w-lead text-lead text-tnky-mute [text-wrap:pretty]">
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
        <ol className="relative grid grid-cols-1 gap-8 lg:grid-cols-5 lg:gap-5">
          {STEPS.map((step, i) => {
            const isLast = i === STEPS.length - 1;
            const items = detailed
              ? step.highlights
              : step.highlights.slice(0, 3);
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

                {/* Stage card. */}
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
                  <ul className="mt-3 space-y-2">
                    {items.map((h) => (
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
                    ))}
                  </ul>
                </article>
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
