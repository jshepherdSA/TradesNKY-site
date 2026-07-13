import type { Metadata } from "next";
import Image from "next/image";
import {
  PartnerTiles,
  type PartnerTileGroup,
} from "../../_components/partner-tiles";
import { CtaCard as NewsletterBanner } from "../../_components/CtaCard";

export const metadata: Metadata = {
  title: "Partners | Trades NKY",
  description:
    "The organizations and employers building Northern Kentucky's skilled trades workforce.",
};

// Cornerstone Foundation Partners — rendered as two large prominent
// cards above the marquee. No gradient / hover-reveal — these are
// static display cards.
type CornerstonePartner = {
  name: string;
  description: string;
  /** Partner's official website — rendered as a "Visit website" link
   *  beneath the description. */
  website: string;
  logoSrc: string;
  /** Optional per-card logo size override. `"large"` bumps the logo
   *  container height ~40% so a particular partner's mark reads more
   *  prominently when it visually carries the card. */
  logoSize?: "default" | "large";
};

const CORNERSTONE_PARTNERS: CornerstonePartner[] = [
  {
    name: "Spirit of Construction Foundation",
    description:
      "A Greater Cincinnati non-profit dedicated to advancing careers in construction. Funds scholarships, education, and workforce-development efforts across the trades.",
    website: "https://www.spiritofconstruction.org/",
    logoSrc: "/brand/partners/spiritofconstruction.png",
    logoSize: "large",
  },
  {
    name: "BE NKY Growth Partnership",
    description:
      "The economic-development organization powering Northern Kentucky's growth strategy — connecting Boone, Kenton, and Campbell counties with the employers and industries that shape the regional workforce.",
    website: "https://be-nky.com/",
    logoSrc:
      "/brand/partners/benkygrowthpartnership%20Background%20Removed.png",
  },
  {
    name: "Fischer Family Foundation",
    description:
      "Dedicated to supporting Northern Kentucky and Greater Cincinnati children and families in need through improved access to shelter, nutrition, education, and mental and physical health services, creating a path to self-actualization.",
    website: "#",
    logoSrc: "/brand/partners/fisherfamfoundation.png",
    logoSize: "large",
  },
];

const GROUPS: PartnerTileGroup[] = [
  {
    label: "Project Partners",
    description:
      "These partners provide flexible, project-based funding that helps launch new initiatives, expand programming, and support emerging needs in schools and workforce engagement efforts.",
    gridCols: "grid-cols-2 md:grid-cols-3",
    partners: [
      {
        name: "The Butler Foundation",
        category: "Project Partner",
        description:
          "A Covington-based charitable foundation funding public charities that serve low-income Northern Kentucky residents through grants, hardship assistance, and education scholarships.",
        website: "https://butlerfoundationnky.org",
        logoSrc: "/brand/partners/butlerfoundation.png",
      },
      {
        name: "Perfection Group",
        category: "Project Partner",
        description:
          "A Cincinnati-area facility-performance and energy-services company delivering mechanical design-build, HVAC, and performance contracting for schools, healthcare, and commercial clients across the region.",
        website: "https://perfectiongroup.com",
        logoSrc: "/brand/partners/perfectiongroup.png",
      },
      {
        name: "The Duke Energy Foundation",
        category: "Project Partner",
        description:
          "The philanthropic arm of Duke Energy, investing in workforce development, education, and community vitality across the communities it serves.",
        website: "https://foundation.duke-energy.com",
        logoSrc: "/brand/partners/dukeenergyfoundation.png",
      },
    ],
  },
  {
    label: "Industry Partners",
    description:
      "These partners step directly into the learning environment. By sharing their time, talent, and expertise, they connect students to the real-world skills behind the essential workforce careers.",
    gridCols: "grid-cols-2 md:grid-cols-3",
    partners: [
      {
        name: "AnyWeather",
        category: "Industry Partner",
        description:
          "A Tri-State residential and commercial contractor specializing in roofing, HVAC, electrical, remodeling, and restoration — hiring and training skilled-trades workers across the region.",
        website: "https://anyweatherhvac.com/",
        logoSrc: "/brand/partners/anyweather-2025.png",
      },
      {
        name: "Bray Construction Services Inc.",
        category: "Industry Partner",
        description:
          "A regional commercial and industrial construction firm building across Northern Kentucky and the Greater Cincinnati corridor.",
        website: "https://brayinc.com/",
        logoSrc: "/brand/partners/bray.png",
      },
      {
        name: "O'Rourke Wrecking Company",
        category: "Industry Partner",
        description:
          "A demolition and dismantling specialist with deep roots in Greater Cincinnati and Northern Kentucky's industrial and commercial sites.",
        website: "https://orourkewrecking.com/",
        logoSrc: "/brand/partners/orourke.png",
      },
      {
        name: "Turner Construction Company",
        category: "Industry Partner",
        description:
          "One of the country's largest builders and a Greater Cincinnati pillar of large-scale commercial construction, with deep apprenticeship and trades partnerships across the region.",
        website: "https://www.turnerconstruction.com/",
        logoSrc: "/brand/partners/turner.png",
        logoClassName: "scale-[1.3] origin-left",
      },
      {
        name: "Valley Interior Systems",
        category: "Industry Partner",
        description:
          "Northern Kentucky's commercial interior contractor of choice — drywall, framing, ceilings, and finishes across thousands of regional projects.",
        website: "https://buildwithvalley.com/",
        logoSrc: "/brand/partners/valley.png",
      },
    ],
  },
  {
    label: "Educational Partners",
    description:
      "These are the schools and districts where the work is currently taking place, with plans to expand to additional schools and districts during the 2027–28 school year. Together, we implement curriculum, engage students, and build clear pathways from classroom to career.",
    gridCols: "grid-cols-2 md:grid-cols-3",
    partners: [
      {
        name: "Campbell County School District",
        category: "Educational Partner",
        description:
          "Career-ready programming for Campbell County students, including the Campbell County Career Center serving juniors and seniors across the district.",
        website: "https://www.campbell.kyschools.us/",
        logoSrc: "/brand/partners/campbellcounty.png",
      },
      {
        name: "Covington Independent Public Schools",
        category: "Educational Partner",
        description:
          "Covington's urban K-12 district, with active career and technical pathways linking students to Northern Kentucky's trades employers.",
        website: "https://www.covington.kyschools.us/",
        logoSrc: "/brand/partners/covindschools.png",
      },
      {
        name: "Holy Cross Elementary",
        category: "Educational Partner",
        description:
          "A Catholic K-8 parish school in the Latonia neighborhood of Covington, Kentucky, part of the historic Holy Cross campus in the Diocese of Covington.",
        website: "https://www.holycrosselem.com",
        logoSrc: "/brand/partners/holycross.png",
      },
      {
        name: "Kenton County School District",
        category: "Educational Partner",
        description:
          "Northern Kentucky's largest school district, partnering on dual-credit and career-readiness pathways across its eight high schools.",
        website: "https://www.kenton.kyschools.us/",
        logoSrc: "/brand/partners/kentoncounty.png",
      },
      {
        name: "Zion Christian Academy",
        category: "Educational Partner",
        description:
          "A Christ-centered K-12 school in Florence, Kentucky, preparing students for life and career through faith-based, college- and career-ready education.",
        website: "https://www.zionchristianacademy.com",
        logoSrc: "/brand/partners/zionchristian.png",
      },
    ],
  },
  {
    label: "Community Catalysts",
    description:
      "These partners provide key expertise, resources, and collaboration that help strengthen and scale our work.",
    gridCols: "grid-cols-2 md:grid-cols-3",
    partners: [
      {
        name: "Gateway Community & Technical College",
        category: "Community Catalyst",
        description:
          "Northern Kentucky's primary technical and community college — anchoring diesel, welding, HVAC, and advanced-manufacturing pathways across its Edgewood and Boone County campuses.",
        website: "https://gateway.kctcs.edu/index.aspx",
        logoSrc: "/brand/partners/gateway.png",
      },
      {
        name: "Learning Labs",
        category: "Community Catalyst",
        // TODO(client): official website + approved description still pending.
        description:
          "A collaboration partner supporting TradesNKY's hands-on, lab-based approach to trades education across Northern Kentucky.",
        website: "#",
        logoSrc: "/brand/partners/learninglabs-blue.png",
      },
    ],
  },
];

export default function PartnersPage() {
  return (
    <main className="bg-tnky-cream">
      {/* Hero banner — compact tnky-blue band. Smaller display-italic
          heading + tighter vertical padding so the section reads
          tight rather than full-height. */}
      <section className="bg-tnky-blue text-tnky-white">
        <div className="max-w-content mx-auto grid grid-cols-1 items-center gap-8 px-4 py-10 sm:px-8 md:grid-cols-2 md:gap-10 md:py-12 lg:py-14">
          <div>
            <h1 className="font-display font-tnky-black italic leading-none tracking-wide text-h1 text-tnky-white [text-wrap:balance]">
              <span className="inline-block px-1">Our Partners</span>
            </h1>
            <div
              aria-hidden="true"
              className="mt-4 h-1 w-20 rounded-full bg-tnky-safety"
            />
          </div>
          <p className="max-w-xl text-lead text-tnky-cream/95 [text-wrap:pretty] md:justify-self-end">
            The organizations and employers building Northern Kentucky&apos;s
            skilled trades workforce.
          </p>
        </div>
      </section>

      {/* Cornerstone Foundation Partners — dedicated section with two
          large, prominent cards on tnky-blue. Sits above the marquee
          and gets its own heading + yellow rule, matching the rest of
          the section-header rhythm on the site. */}
      <section
        aria-labelledby="cornerstone-heading"
        className="bg-tnky-cream"
      >
        <div className="max-w-content mx-auto px-4 py-10 sm:px-8 md:py-12 lg:py-14">
          <div className="mb-8 md:mb-10">
            <h2
              id="cornerstone-heading"
              className="font-display font-extrabold text-section text-tnky-ink"
            >
              Cornerstone Foundation Partners
            </h2>
            <div
              aria-hidden="true"
              className="mt-3 h-[3px] w-14 rounded-full bg-tnky-safety"
            />
            <p className="mt-4 max-w-3xl text-body text-tnky-mute [text-wrap:pretty]">
              These partners have laid the foundation that sustains and expands
              TradesNKY programs across the region. Their investment strengthens
              curriculum development, school partnerships, and long-term
              workforce impact.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
            {CORNERSTONE_PARTNERS.map((partner) => (
              <article
                key={partner.name}
                className="flex flex-col items-center gap-6 rounded-lg border-[3px] border-tnky-blue bg-tnky-white p-5 shadow-tnky-2 md:gap-8 md:p-6"
              >
                {/* Logo floats above the text — no container box, just
                    the image centered on the card. The Spirit of
                    Construction logo opts into a larger container via
                    its `logoSize: "large"` flag. */}
                <div
                  className={`relative w-full ${
                    partner.logoSize === "large"
                      ? "h-44 md:h-56"
                      : "h-32 md:h-40"
                  }`}
                >
                  <Image
                    src={partner.logoSrc}
                    alt={`${partner.name} logo`}
                    fill
                    sizes="(min-width: 768px) 40vw, 90vw"
                    className="object-contain"
                  />
                </div>

                <div className="text-center">
                  <h3 className="font-display font-extrabold leading-tight text-card-title text-tnky-blue [text-wrap:balance] md:text-h3">
                    {partner.name}
                  </h3>
                  <p className="mt-3 text-body leading-relaxed text-tnky-mute [text-wrap:pretty]">
                    {partner.description}
                  </p>
                  <a
                    href={partner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-small text-tnky-blue underline underline-offset-4 transition-colors duration-150 hover:text-tnky-safety focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tnky-blue focus-visible:ring-offset-2"
                  >
                    Visit website →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Partner tiles — the partner tiers (Project, Industry, Educational,
          Community Catalysts). The "Our Partners" heading + description sit
          above; PartnerTiles renders each tier as a row of tiles with
          hover-reveal dropdowns. */}
      <section
        aria-labelledby="partners-tiles-heading"
        className="bg-tnky-cream"
      >
        <div className="max-w-content mx-auto px-4 py-10 sm:px-8 md:py-12 lg:py-16">
          <div className="mb-8 flex flex-col gap-4 md:mb-10 md:flex-row md:items-end md:justify-between md:gap-10">
            <div>
              <h2
                id="partners-tiles-heading"
                className="font-display font-extrabold text-section text-tnky-ink"
              >
                Our Partners
              </h2>
              <div
                aria-hidden="true"
                className="mt-3 h-[3px] w-14 rounded-full bg-tnky-safety"
              />
            </div>
            <p className="max-w-xl text-body text-tnky-mute [text-wrap:pretty] md:text-right">
              The funders, employers, schools, and collaborators building
              Northern Kentucky&apos;s skilled-trades workforce.
            </p>
          </div>

          <PartnerTiles groups={GROUPS} />
        </div>
      </section>

      <NewsletterBanner />
    </main>
  );
}
