import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  Check,
  TrendingUp,
  Users,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import { FadeInSection } from "../_components/fade-in-section";
import { CtaCard as NewsletterBanner } from "../_components/CtaCard";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Policymakers | Trades NKY",
  description:
    "Workforce development, economic growth, and community impact. TradesNKY prepares the next generation of skilled professionals who fuel Northern Kentucky's economy.",
};

const BTN_YELLOW_BLUE =
  "inline-flex items-center justify-center gap-2 rounded-pill bg-tnky-safety px-8 py-4 font-display font-bold text-button text-tnky-safety-ink shadow-tnky-safety transition-all duration-200 ease-tnky hover:-translate-y-px hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tnky-white focus-visible:ring-offset-2 focus-visible:ring-offset-tnky-blue";
const BTN_OUTLINE_BLUE =
  "inline-flex items-center justify-center gap-2 rounded-pill border-2 border-tnky-white px-8 py-4 font-display font-bold text-button text-tnky-white transition-all duration-200 ease-tnky hover:-translate-y-px hover:bg-tnky-white hover:text-tnky-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tnky-white focus-visible:ring-offset-2 focus-visible:ring-offset-tnky-blue";

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
      <section className="relative flex min-h-[62vh] items-center overflow-hidden bg-tnky-blue">
        <Image
          src="/images/students-building.jpg"
          alt="Students building a project in a Northern Kentucky trades program"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-tnky-blue/82" />
        <div aria-hidden="true" className="absolute inset-0 bg-tnky-ink/15" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-tnky-safety/10 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-tnky-white/5 blur-3xl"
        />
        <div className="relative z-10 max-w-content mx-auto w-full px-4 py-20 sm:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-display font-bold uppercase tracking-eyebrow text-eyebrow text-tnky-safety">
              For Policymakers
            </p>
            <h1 className="mt-3 font-display italic font-extrabold text-4xl md:text-6xl text-tnky-white [text-wrap:balance]">
              Workforce Development. Economic Growth. Community Impact.
            </h1>
            <div
              aria-hidden="true"
              className="mx-auto mt-5 h-1 w-20 rounded-full bg-tnky-safety"
            />
            <p className="mx-auto mt-6 max-w-lead text-lead font-medium text-tnky-cream/95 [text-wrap:pretty]">
              TradesNKY helps prepare the next generation of skilled professionals
              who support economic growth, strengthen local infrastructure, create
              pathways to upward mobility, and contribute to safer, more vibrant
              communities.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/contact" className={BTN_YELLOW_BLUE}>
                Request a Meeting
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link href="/about" className={BTN_OUTLINE_BLUE}>
                About TradesNKY
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTIONS (from Website Architecture & Content doc) ─────── */}
      {SECTIONS.map((s, i) => {
        const sectionWhite = i % 2 === 0;
        return (
          <FadeInSection
            key={s.title}
            className={sectionWhite ? "bg-tnky-white" : "bg-tnky-cream"}
          >
            <div className="max-w-content mx-auto px-4 py-24 sm:px-8 md:py-28">
              <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
                <div>
                  <SectionHeading>{s.title}</SectionHeading>
                  <div className="mt-6 max-w-prose space-y-4 text-lead font-medium leading-relaxed text-tnky-ink [text-wrap:pretty]">
                    {s.intro.map((p) => (
                      <p key={p}>{p}</p>
                    ))}
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
        );
      })}

      {/* ── CTA ─────────────────────────────────────────────────── */}
      <FadeInSection className="bg-tnky-blue">
        <div className="max-w-content mx-auto px-4 py-24 text-center sm:px-8 md:py-28">
          <h2 className="mx-auto max-w-3xl font-display italic font-extrabold text-3xl md:text-4xl text-tnky-white [text-wrap:balance]">
            Let&apos;s Build NKY&apos;s Workforce Together
          </h2>
          <div
            aria-hidden="true"
            className="mx-auto mt-4 h-[3px] w-14 rounded-full bg-tnky-safety"
          />
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/contact" className={BTN_YELLOW_BLUE}>
              Request a Meeting
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link href="/about" className={BTN_OUTLINE_BLUE}>
              About TradesNKY
            </Link>
          </div>
          <p className="mt-6 text-small font-medium text-tnky-white/80">
            A stronger pipeline. A stronger region.
          </p>
        </div>
      </FadeInSection>

      <NewsletterBanner />
    </main>
  );
}
