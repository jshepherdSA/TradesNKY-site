import type { Metadata } from "next";
import { Fragment, type ReactNode } from "react";
import Image from "next/image";
import {
  Briefcase,
  Check,
  MapPin,
  TrendingUp,
  Users,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import { FadeInSection } from "../_components/fade-in-section";
import { AudienceHero } from "../_components/audience-hero";
import { CtaCard as NewsletterBanner } from "../_components/CtaCard";
import { AudienceContactForm } from "../_components/audience-contact-form";
import { ReadMore } from "../_components/read-more";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Policymakers | Trades NKY",
  description:
    "Workforce development, economic growth, and community impact. TradesNKY prepares the next generation of skilled professionals who fuel Northern Kentucky's economy.",
};

// Section content from the TradesNKY Website Architecture & Content doc
// (Policymakers page). Each section: intro paragraph(s), "Why it matters"
// bullets, and "The result".
const SECTIONS: {
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  intro: string[];
  why: string[];
  result: string;
}[] = [
  {
    icon: TrendingUp,
    eyebrow: "Economic Growth",
    title: "Fueling Economic Growth",
    intro: [
      "A strong workforce is the foundation of a strong economy. TradesNKY helps build the skilled talent pipeline local employers need to grow, invest, and create jobs—making Northern Kentucky more competitive for business expansion and economic development.",
    ],
    why: [
      "Workforce availability is consistently ranked among the top factors influencing business location and expansion decisions.",
      "Skilled careers provide pathways to family-supporting wages, increasing household income and local spending.",
      "Strong workforce pipelines help employers fill critical positions, reduce labor shortages, and support business growth.",
      "Communities that align education and workforce development are better positioned to attract investment and retain talent.",
    ],
    result:
      "More jobs, stronger local businesses, higher household earnings, and a more competitive Northern Kentucky economy.",
  },
  {
    icon: Users,
    eyebrow: "Upward Mobility",
    title: "Creating Pathways to Upward Mobility",
    intro: [
      "Economic mobility begins with opportunity. TradesNKY helps students and young adults access high-demand careers that offer strong wages, career advancement, and long-term financial stability—often without the burden of significant student debt.",
      "By connecting education to workforce opportunities, TradesNKY helps more residents move into family-supporting careers, strengthen their earning potential, and build a better future for themselves and their families.",
    ],
    why: [
      "Skilled trades provide direct pathways to middle-class wages and long-term career growth.",
      "Apprenticeships allow participants to earn while they learn, reducing educational debt and accelerating workforce participation.",
      "Higher earnings contribute to stronger household stability, increased local spending, and greater economic mobility.",
      "Communities with strong workforce pathways often experience lower unemployment and greater economic resilience.",
    ],
    result:
      "More residents achieving financial independence, stronger families, and greater economic opportunity throughout Northern Kentucky.",
  },
  {
    icon: Briefcase,
    eyebrow: "Business Attraction",
    title: "Attracting and Retaining Businesses",
    intro: [
      "Businesses grow where talent is available. TradesNKY helps build the skilled workforce employers need to expand, invest, and remain in Northern Kentucky—making our region more competitive for economic development.",
    ],
    why: [
      "Workforce availability is a leading factor in business location and expansion decisions.",
      "Strong talent pipelines help employers fill critical positions and support growth.",
      "Communities with skilled workers are better positioned to attract new investment.",
      "Business growth creates jobs, strengthens the tax base, and expands opportunity for residents.",
    ],
    result:
      "More business investment, more jobs, and a stronger Northern Kentucky economy.",
  },
  {
    icon: Wallet,
    eyebrow: "Public ROI",
    title: "Reducing Long-Term Public Costs",
    intro: [
      "Investing in workforce development today helps reduce costly challenges tomorrow. TradesNKY connects students to career pathways that lead to employment, financial independence, and long-term economic stability—strengthening outcomes for both residents and communities.",
    ],
    why: [
      "Career-connected learning helps more students graduate with a plan and transition successfully into the workforce.",
      "Higher employment and earnings contribute to stronger local economies and reduced reliance on public assistance programs.",
      "Workforce development is often more cost-effective than addressing the long-term impacts of labor shortages, unemployment, and economic stagnation.",
      "Strong talent pipelines help communities remain economically competitive and resilient.",
    ],
    result:
      "More residents working, stronger local economies, and a greater return on public investment.",
  },
];

// One topical image per content section (parallel to SECTIONS by index).
const SECTION_IMAGES: { src: string; alt: string }[] = [
  {
    src: "/images/students-building.jpg",
    alt: "Construction work driving regional economic growth",
  },
  {
    src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&q=80",
    alt: "Skilled careers creating pathways to upward mobility",
  },
  {
    src: "/images/student-excavator.jpg",
    alt: "Industry and businesses growing across the region",
  },
  {
    src: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&q=80",
    alt: "Regional infrastructure supported by skilled workers",
  },
];

function SectionHeading({
  children,
  center = false,
}: {
  children: ReactNode;
  center?: boolean;
}) {
  return (
    <div className={center ? "text-center" : undefined}>
      <h2 className="font-display italic font-extrabold text-3xl md:text-4xl text-tnky-ink [text-wrap:balance]">
        {children}
      </h2>
      <div
        aria-hidden="true"
        className={cn(
          "mt-4 h-[3px] w-14 rounded-full bg-tnky-safety",
          center && "mx-auto",
        )}
      />
    </div>
  );
}

export default function PolicymakersPage() {
  return (
    <main className="bg-tnky-cream">
      {/* ── HERO ────────────────────────────────────────────────── */}
      <AudienceHero
        audience="policymakers"
        title="Workforce Development. Economic Growth. Community Impact."
        subtitle="TradesNKY helps prepare the next generation of skilled professionals who support economic growth, strengthen local infrastructure, create pathways to upward mobility, and contribute to safer, more vibrant communities."
        image={{
          src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80",
          alt: "A modern civic skyline representing a growing regional economy",
        }}
        primaryCta={{ text: "Request a Meeting", href: "/contact" }}
        secondaryCta={{ text: "About TradesNKY", href: "/about/what-is-tradesnky" }}
      />

      {/* ── Highlight — flagship offering (title only) ──────────── */}
      <section className="bg-tnky-safety">
        <div className="max-w-content mx-auto px-4 py-10 text-center sm:px-8 md:py-12">
          <h2 className="font-display italic font-extrabold text-3xl md:text-4xl text-tnky-safety-ink [text-wrap:balance]">
            Industry-Informed Proprietary Curriculum
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-lead font-medium leading-relaxed text-tnky-safety-ink [text-wrap:pretty]">
            Our curriculum is built alongside industry leaders to ensure
            students are gaining the technical foundations, problem-solving
            skills, and real-world understanding needed to succeed in
            high-demand careers. By listening to workforce experts and
            understanding industry demands, TradesNKY creates relevant,
            hands-on experiences that prepare students for the essential
            careers that power our communities.
          </p>
        </div>
      </section>

      {/* ── SECTIONS (from Website Architecture & Content doc) ─────── */}
      {SECTIONS.map((s, i) => {
        const sectionWhite = i % 2 === 0;
        return (
          <Fragment key={s.title}>
            <FadeInSection
              className={sectionWhite ? "bg-tnky-white" : "bg-tnky-cream"}
            >
            <div className="max-w-content mx-auto px-4 py-24 sm:px-8 md:py-28">
              <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
                <div>
                  <SectionHeading>{s.title}</SectionHeading>
                  <div className="mt-6 flow-root max-w-prose space-y-4 text-lead font-medium leading-relaxed text-tnky-ink [text-wrap:pretty]">
                    <figure
                      className={cn(
                        "mb-5 w-full overflow-hidden rounded-xl md:mb-4 md:w-2/5",
                        i % 2 === 0
                          ? "md:float-right md:ml-6"
                          : "md:float-left md:mr-6",
                      )}
                    >
                      <div className="relative aspect-[4/3]">
                        <Image
                          src={SECTION_IMAGES[i].src}
                          alt={SECTION_IMAGES[i].alt}
                          fill
                          sizes="(min-width: 768px) 40vw, 100vw"
                          className="object-cover"
                        />
                      </div>
                    </figure>
                    <ReadMore
                      paragraphs={s.intro}
                      pClassName="text-lead font-medium leading-relaxed text-tnky-ink [text-wrap:pretty]"
                    />
                  </div>
                  <div className="mt-8 rounded-2xl border-l-4 border-tnky-blue bg-tnky-blue/5 p-5">
                    <p className="font-display font-bold uppercase tracking-tag text-meta text-tnky-blue">
                      The Result
                    </p>
                    <p className="mt-1.5 text-body font-medium leading-relaxed text-tnky-ink [text-wrap:pretty]">
                      {s.result}
                    </p>
                  </div>
                </div>
                <div
                  className={cn(
                    "rounded-3xl border border-tnky-edge p-8 shadow-tnky-2 md:p-10",
                    sectionWhite ? "bg-tnky-cream" : "bg-tnky-white",
                  )}
                >
                  <p className="font-display font-extrabold text-card-title text-tnky-ink">
                    Why it matters
                  </p>
                  <div
                    aria-hidden="true"
                    className="mt-3 h-[3px] w-10 rounded-full bg-tnky-safety"
                  />
                  <ul className="mt-5 space-y-4">
                    {s.why.map((w) => (
                      <li
                        key={w}
                        className="flex items-start gap-3 text-body font-medium leading-relaxed text-tnky-ink [text-wrap:pretty]"
                      >
                        <Check
                          className="mt-0.5 h-5 w-5 shrink-0 text-tnky-grass"
                          strokeWidth={2.5}
                          aria-hidden="true"
                        />
                        <span>{w}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            </FadeInSection>

            {/* NKY region + site-selection stat card */}
            {i === 0 && (
              <section className="bg-tnky-cream">
                <div className="max-w-content mx-auto px-4 py-20 sm:px-8 md:py-24">
                  <div className="overflow-hidden rounded-3xl border border-tnky-edge shadow-tnky-2 lg:grid lg:grid-cols-5">
                    <div className="relative flex flex-col justify-center overflow-hidden bg-tnky-blue p-8 md:p-10 lg:col-span-2">
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-tnky-safety/10 blur-3xl"
                      />
                      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-tnky-white/10 text-tnky-safety">
                        <MapPin
                          className="h-6 w-6"
                          strokeWidth={1.75}
                          aria-hidden="true"
                        />
                      </span>
                      <p className="mt-5 font-display font-bold uppercase tracking-tag text-meta text-tnky-safety">
                        Northern Kentucky
                      </p>
                      <p className="mt-2 font-display font-tnky-black text-stat-md leading-tight text-tnky-white">
                        Boone · Kenton · Campbell
                      </p>
                      <p className="mt-3 text-body font-medium leading-relaxed text-tnky-white/85 [text-wrap:pretty]">
                        A river-region economy powered by manufacturing, logistics,
                        construction, and skilled trades.
                      </p>
                    </div>
                    <div className="flex flex-col justify-center bg-tnky-white p-8 md:p-10 lg:col-span-3">
                      <p className="font-display font-bold uppercase tracking-tag text-meta text-tnky-blue">
                        Site Selection
                      </p>
                      <p className="mt-2 font-display font-tnky-black text-stat-xl leading-none text-tnky-blue">
                        Top 3
                      </p>
                      <p className="mt-3 text-lead font-medium leading-relaxed text-tnky-ink [text-wrap:pretty]">
                        Workforce availability ranks among the top factors in
                        business site-selection decisions.
                      </p>
                      <p className="mt-3 text-body font-medium leading-relaxed text-tnky-ink/80 [text-wrap:pretty]">
                        When employers choose where to grow, a ready talent pipeline
                        is one of the first things they evaluate—and one of
                        NKY&apos;s strongest assets to offer.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* Mid-page government-relevant stat band */}
            {i === 1 && (
              <section className="bg-tnky-blue">
                <div className="max-w-content mx-auto px-4 py-16 sm:px-8 md:py-20">
                  <div className="grid grid-cols-1 gap-10 text-center sm:grid-cols-3 sm:gap-6">
                    {[
                      {
                        stat: "40%",
                        label:
                          "of the regional skilled workforce is nearing retirement this decade",
                      },
                      {
                        stat: "90,863",
                        label:
                          "open skilled roles across Northern Kentucky's Essential Workforce Industries",
                      },
                      {
                        stat: "Higher",
                        label: "household earnings and a stronger local tax base",
                      },
                    ].map((s2) => (
                      <div key={s2.stat}>
                        <p className="font-display font-tnky-black text-stat-xl leading-none text-tnky-white">
                          {s2.stat}
                        </p>
                        <div
                          aria-hidden="true"
                          className="mx-auto mt-3 h-[3px] w-10 rounded-full bg-tnky-safety"
                        />
                        <p className="mx-auto mt-3 max-w-xs text-body font-medium text-tnky-white/85 [text-wrap:pretty]">
                          {s2.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {/* Infrastructure image band */}
            {i === 2 && (
              <section className="relative isolate overflow-hidden bg-tnky-blue">
                <Image
                  src="https://images.unsplash.com/photo-1431540015161-0bf868a2d407?w=1200&q=80"
                  alt="Regional infrastructure—bridges, roads, and utilities maintained by skilled professionals"
                  fill
                  sizes="100vw"
                  className="object-cover object-center"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-tnky-blue/80"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-tnky-ink/20"
                />
                <div className="relative z-10 max-w-content mx-auto px-4 py-20 sm:px-8 md:py-24">
                  <div className="max-w-2xl">
                    <h2 className="font-display italic font-extrabold text-3xl md:text-4xl text-tnky-white [text-wrap:balance]">
                      The Workforce Behind Every Community
                    </h2>
                    <div
                      aria-hidden="true"
                      className="mt-4 h-[3px] w-14 rounded-full bg-tnky-safety"
                    />
                    <p className="mt-5 max-w-lead text-lead font-medium text-tnky-white/90 [text-wrap:pretty]">
                      The roads, bridges, schools, hospitals, and utilities our
                      region depends on are built and maintained by skilled
                      professionals. Investing in that workforce is investing in
                      NKY&apos;s foundation.
                    </p>
                  </div>
                </div>
              </section>
            )}
          </Fragment>
        );
      })}

      {/* ── CTA — direct contact with TradesNKY ───────────────────── */}
      <section className="bg-tnky-blue">
        <div className="max-w-content mx-auto px-4 py-24 sm:px-8 md:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display italic font-extrabold text-3xl md:text-4xl text-tnky-white [text-wrap:balance]">
              Get in Touch with TradesNKY
            </h2>
            <div
              aria-hidden="true"
              className="mx-auto mt-4 h-[3px] w-14 rounded-full bg-tnky-safety"
            />
            <p className="mt-6 text-lead font-medium text-tnky-cream/90 [text-wrap:pretty]">
              Want to learn more about TradesNKY&apos;s impact on the NKY
              workforce? Reach out directly.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-tnky-edge bg-tnky-white p-6 shadow-tnky-3 md:p-8">
            <AudienceContactForm defaultRole="Policymaker" />
          </div>

          <p className="mx-auto mt-6 max-w-2xl text-center text-small text-tnky-white/70">
            Or email us directly at{" "}
            <a
              href="mailto:info@tradesnky.org"
              className="font-semibold text-tnky-white underline underline-offset-4 transition-colors duration-150 hover:text-tnky-safety focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tnky-white focus-visible:ring-offset-2 focus-visible:ring-offset-tnky-blue"
            >
              info@tradesnky.org
            </a>
          </p>
        </div>
      </section>

      <NewsletterBanner />
    </main>
  );
}
