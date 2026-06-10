import type { Metadata } from "next";
import Image from "next/image";
import {
  MarqueeLogoScroller,
  type MarqueeGroup,
} from "@/components/ui/marquee-logo-scroller";
import { CtaCard as NewsletterBanner } from "../../_components/CtaCard";

export const metadata: Metadata = {
  title: "Partners | Trades NKY",
  description:
    "The organizations and employers building Northern Kentucky's skilled trades workforce.",
};

// Category-themed gradients for the marquee tiles. The Cornerstone
// Foundation Partners no longer scroll in the marquee (they have
// their own prominent section above), so only the marquee categories
// keep gradients here.
const GRADIENT = {
  power: { from: "#ffae42", via: "#ff8800", to: "#cc5500" },
  educational: { from: "#5673d4", via: "#1733bf", to: "#081d82" },
} as const;

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
    name: "BE NKY Growth Partnership",
    description:
      "The economic-development organization powering Northern Kentucky's growth strategy — connecting Boone, Kenton, and Campbell counties with the employers and industries that shape the regional workforce.",
    website: "https://be-nky.com/",
    logoSrc:
      "/brand/partners/benkygrowthpartnership%20Background%20Removed.png",
  },
  {
    name: "Spirit of Construction Foundation",
    description:
      "A Greater Cincinnati non-profit dedicated to advancing careers in construction. Funds scholarships, education, and workforce-development efforts across the trades.",
    website: "https://www.spiritofconstruction.org/",
    logoSrc: "/brand/partners/spiritofconstruction.png",
    logoSize: "large",
  },
];

const GROUPS: MarqueeGroup[] = [
  {
    label: "Power Partners",
    partners: [
      {
        name: "Bray Construction Services Inc.",
        category: "Power Partner",
        description:
          "A regional commercial and industrial construction firm building across Northern Kentucky and the Greater Cincinnati corridor.",
        website: "https://brayinc.com/",
        logoSrc: "/brand/partners/bray.png",
        gradient: GRADIENT.power,
      },
      {
        name: "Turner Construction Company",
        category: "Power Partner",
        description:
          "One of the country's largest builders and a Greater Cincinnati pillar of large-scale commercial construction, with deep apprenticeship and trades partnerships across the region.",
        website: "https://www.turnerconstruction.com/",
        logoSrc: "/brand/partners/turner.png",
        gradient: GRADIENT.power,
      },
      {
        name: "O'Rourke Wrecking Company",
        category: "Power Partner",
        description:
          "A demolition and dismantling specialist with deep roots in Greater Cincinnati and Northern Kentucky's industrial and commercial sites.",
        website: "https://orourkewrecking.com/",
        logoSrc: "/brand/partners/orourke.png",
        gradient: GRADIENT.power,
      },
      {
        name: "Valley Interior Systems",
        category: "Power Partner",
        description:
          "Northern Kentucky's commercial interior contractor of choice — drywall, framing, ceilings, and finishes across thousands of regional projects.",
        website: "https://buildwithvalley.com/",
        logoSrc: "/brand/partners/valley.png",
        gradient: GRADIENT.power,
      },
      {
        name: "AnyWeather",
        category: "Power Partner",
        description:
          "A Northern Kentucky residential and commercial roofing, HVAC, and exterior contractor — hiring and training skilled-trades workers across the region.",
        website: "https://anyweatherhvac.com/",
        logoSrc: "/brand/partners/anyweather.png",
        gradient: GRADIENT.power,
      },
    ],
  },
  {
    label: "Educational Partners",
    partners: [
      {
        name: "Campbell County School District",
        category: "Educational Partner",
        description:
          "Career-ready programming for Campbell County students, including the Campbell County Career Center serving juniors and seniors across the district.",
        website: "https://www.campbell.kyschools.us/",
        logoSrc: "/brand/partners/campbellcounty.png",
        gradient: GRADIENT.educational,
      },
      {
        name: "Covington Independent Public Schools",
        category: "Educational Partner",
        description:
          "Covington's urban K-12 district, with active career and technical pathways linking students to Northern Kentucky's trades employers.",
        website: "https://www.covington.kyschools.us/",
        logoSrc: "/brand/partners/covindschools.png",
        gradient: GRADIENT.educational,
      },
      {
        name: "Kenton County School District",
        category: "Educational Partner",
        description:
          "Northern Kentucky's largest school district, partnering on dual-credit and career-readiness pathways across its eight high schools.",
        website: "https://www.kenton.kyschools.us/",
        logoSrc: "/brand/partners/kentoncounty.png",
        gradient: GRADIENT.educational,
      },
      {
        name: "Gateway Community & Technical College",
        category: "Educational Partner",
        description:
          "Northern Kentucky's primary technical and community college — anchoring diesel, welding, HVAC, and advanced-manufacturing pathways across its Edgewood and Boone County campuses.",
        website: "https://gateway.kctcs.edu/index.aspx",
        logoSrc: "/brand/partners/gateway.png",
        gradient: GRADIENT.educational,
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
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
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

      {/* Marquee — now only Power Partners and Educational Partners.
          The heading/description sits outside the marquee box as a
          standalone flex row above it (heading + yellow rule on the
          left, short description on the right). */}
      <section
        aria-labelledby="marquee-heading"
        className="bg-tnky-cream"
      >
        <div className="max-w-content mx-auto px-4 py-10 sm:px-8 md:py-12 lg:py-14">
          <div className="mb-6 flex flex-col gap-4 md:mb-8 md:flex-row md:items-end md:justify-between md:gap-10">
            <div>
              <h2
                id="marquee-heading"
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
              Power Partners and Educational Partners — the contractors,
              school districts, and colleges building the Northern Kentucky
              trades workforce.
            </p>
          </div>

          <MarqueeLogoScroller
            ariaLabel="Our Partners"
            groups={GROUPS}
            speed="slow"
          />
        </div>
      </section>

      <NewsletterBanner />
    </main>
  );
}
