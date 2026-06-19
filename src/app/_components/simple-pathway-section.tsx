type PathwayTile = {
  stage: string;
  name: string;
  grade: string;
  blurb: string;
  /** Grade-band highlights drawn from the TradesNKY Student Pathway document.
   *  Rendered only in the `detailed` variant (the What is TradesNKY page). */
  highlights: string[];
};

const TILES: PathwayTile[] = [
  {
    stage: "01",
    name: "Expose",
    grade: "K–5th Grade",
    blurb:
      "Classroom visits, hands-on demos, and real conversations with tradespeople plant the seed early — students learn these careers exist, matter, and pay well.",
    highlights: [
      "Career clusters & guest speakers",
      "Hands-on demos and Touch-a-Truck events",
      "STEM toys, maker activities & family nights",
    ],
  },
  {
    stage: "02",
    name: "Explore",
    grade: "6th–8th Grade",
    blurb:
      "Job-site visits and career-discovery events turn curiosity into direction as students meet welders, electricians, HVAC techs, and project managers.",
    highlights: [
      "9- and 18-week trades curriculum",
      "Industry terminology, technology & simulators",
      "skillUP career fairs + aptitude assessments",
    ],
  },
  {
    stage: "03",
    name: "Engage",
    grade: "9th–12th Grade",
    blurb:
      "Dual enrollment, registered apprenticeships, and CTE courses let students earn real credentials alongside their diploma.",
    highlights: [
      "NCCER Core & OSHA certifications",
      "CTE courses, dual credits & site visits",
      "ATC partner training + career coaching",
    ],
  },
  {
    stage: "04",
    name: "Earn",
    grade: "Post-Graduation",
    blurb:
      "NKY employers are hiring at strong wages — pathway graduates step into apprenticeships, jobs, or technical college ready on day one.",
    highlights: [
      "Co-ops, internships & pre-apprenticeships",
      "Stackable industry credentials in hand",
      "Graduate career-ready or college-bound",
    ],
  },
];

export function SimplePathwaySection({
  detailed = false,
}: {
  /** When true, each stage tile also lists the grade-band activities from
   *  the TradesNKY Student Pathway document. Off by default so the homepage
   *  and educators page keep the compact treatment. */
  detailed?: boolean;
}) {
  return (
    <section className="bg-tnky-white py-20 md:py-24">
      <div className="max-w-content mx-auto px-4 sm:px-8">
        {/* Header — italic display heading + yellow rule on the left, short
            subheader on the right of the same row (stacks on mobile). */}
        <div className="mb-10 flex flex-col gap-4 md:mb-12 md:flex-row md:items-center md:justify-between md:gap-10">
          <div>
            <h2 className="font-display italic font-extrabold text-section text-tnky-ink">
              The TradesNKY Pathway
            </h2>
            <div
              aria-hidden="true"
              className="mt-3 h-[3px] w-14 rounded-full bg-tnky-safety"
            />
          </div>
          <p className="max-w-lead text-lead text-tnky-mute [text-wrap:pretty]">
            One path, four stages — from a fifth-grader&apos;s first spark to a
            graduate&apos;s first paycheck.
          </p>
        </div>

        {/* Four equal tiles in a row on md+, stacked on mobile. */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-4 md:gap-6">
          {TILES.map((tile) => (
            <article
              key={tile.name}
              className="flex flex-col rounded-xl border border-tnky-edge bg-tnky-cream p-6 transition-all duration-200 ease-tnky motion-safe:md:hover:-translate-y-1 motion-safe:md:hover:shadow-tnky-2"
            >
              <span
                aria-hidden="true"
                className="font-display font-tnky-black leading-none text-stat-md text-tnky-blue/25"
              >
                {tile.stage}
              </span>
              <h3 className="mt-3 font-display italic font-extrabold text-h4 text-tnky-ink">
                {tile.name}
              </h3>
              <p className="mt-1 font-display font-extrabold uppercase tracking-tag text-meta text-tnky-blue">
                {tile.grade}
              </p>
              <p className="mt-3 text-small leading-relaxed text-tnky-mute [text-wrap:pretty]">
                {tile.blurb}
              </p>
              {detailed && (
                <ul className="mt-4 space-y-2 border-t border-tnky-edge pt-4">
                  {tile.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-2 text-mini font-medium leading-snug text-tnky-ink [text-wrap:pretty]"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-tnky-safety"
                      />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
