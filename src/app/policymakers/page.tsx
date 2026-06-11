import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Briefcase,
  Check,
  Factory,
  FileBarChart,
  Globe,
  GraduationCap,
  Heart,
  TrendingUp,
  Users,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import { FadeInSection } from "../_components/fade-in-section";
import { SimplePathwaySection } from "../_components/simple-pathway-section";
import { CtaCard as NewsletterBanner } from "../_components/CtaCard";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Policymakers | Trades NKY",
  description:
    "Investing in Northern Kentucky's workforce future. TradesNKY strengthens the talent pipeline that fuels economic growth, expands upward mobility, and keeps the region competitive.",
};

const BTN_YELLOW_BLUE =
  "inline-flex items-center justify-center gap-2 rounded-pill bg-tnky-safety px-8 py-4 font-display font-bold text-button text-tnky-safety-ink shadow-tnky-safety transition-all duration-200 ease-tnky hover:-translate-y-px hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tnky-white focus-visible:ring-offset-2 focus-visible:ring-offset-tnky-blue";
const BTN_OUTLINE_BLUE =
  "inline-flex items-center justify-center gap-2 rounded-pill border-2 border-tnky-white px-8 py-4 font-display font-bold text-button text-tnky-white transition-all duration-200 ease-tnky hover:-translate-y-px hover:bg-tnky-white hover:text-tnky-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tnky-white focus-visible:ring-offset-2 focus-visible:ring-offset-tnky-blue";

const POLICY_CASE: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: Factory,
    title: "Closing the Workforce Gap",
    body: "Skilled-labor shortages limit growth across manufacturing, construction, transportation, and utilities. TradesNKY builds the pipeline to fill them.",
  },
  {
    icon: TrendingUp,
    title: "Real Economic Impact",
    body: "Regions with strong trade pipelines see higher median earnings, lower unemployment, and stronger local tax revenue.",
  },
  {
    icon: Globe,
    title: "Regional Competitiveness",
    body: "Availability of skilled labor is the #1 site-selection factor for companies — making NKY a more competitive place to invest.",
  },
];

const IMPACT: { value: string; label: string }[] = [
  { value: "10,000+", label: "students reached across Northern Kentucky" },
  { value: "25+", label: "partner schools and districts" },
  { value: "40+", label: "employers engaged in the pipeline" },
];

const DELIVERS: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: TrendingUp,
    title: "Fuels Local Economic Growth",
    body: "A strong skilled-trade pipeline helps grow payrolls, expand businesses, and support local tax revenue.",
  },
  {
    icon: Users,
    title: "Reduces Poverty & Increases Mobility",
    body: "Fast, debt-free pathways to middle-class wages help families move up and reduce reliance on public assistance.",
  },
  {
    icon: Briefcase,
    title: "Attracts & Retains Businesses",
    body: "Businesses stay and grow where they can hire — strong K–12 pipelines secure more expansions and new investment.",
  },
  {
    icon: Heart,
    title: "Reduces Youth Disengagement",
    body: "When young people see real career options, engagement increases and risky behaviors decline.",
  },
  {
    icon: Wallet,
    title: "Eases Strain on Local Budgets",
    body: "Workforce development is far cheaper than workforce shortages, lowering costs in social services and emergency programs.",
  },
  {
    icon: GraduationCap,
    title: "Aligns With Education Priorities",
    body: "TradesNKY helps districts meet College & Career Readiness goals and supports Kentucky's workforce initiatives.",
  },
];

const OBJECTIVES = [
  "Economic growth",
  "Workforce stability",
  "Public safety and infrastructure",
  "Budget stewardship",
  "Reducing poverty and increasing mobility",
  "Supporting schools and families",
  "Attracting and retaining businesses",
  "Demonstrating results to constituents",
];

const REPORTS: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: FileBarChart,
    title: "Annual Impact Report",
    body: "Students reached, schools partnered, and employers engaged — measured and published each year.",
  },
  {
    icon: BarChart3,
    title: "Regional Workforce Brief",
    body: "Local demand data and outcomes to inform policy and investment decisions across the region.",
  },
];

function SectionHeading({
  eyebrow,
  children,
  center = false,
}: {
  eyebrow: string;
  children: ReactNode;
  center?: boolean;
}) {
  return (
    <div className={center ? "text-center" : undefined}>
      <p className="font-display font-bold uppercase tracking-eyebrow text-eyebrow text-tnky-blue">
        {eyebrow}
      </p>
      <h2 className="mt-3 font-display italic font-extrabold text-3xl md:text-4xl text-tnky-ink [text-wrap:balance]">
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
              Investing in NKY&apos;s Workforce Future
            </h1>
            <div
              aria-hidden="true"
              className="mx-auto mt-5 h-1 w-20 rounded-full bg-tnky-safety"
            />
            <p className="mx-auto mt-6 max-w-lead text-lead font-medium text-tnky-cream/95 [text-wrap:pretty]">
              Workforce development is one of the highest-return investments a
              community can make. TradesNKY strengthens the talent pipeline that
              fuels economic growth, expands upward mobility, and keeps Northern
              Kentucky competitive.
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

      {/* ── S1 — THE POLICY CASE ────────────────────────────────── */}
      <FadeInSection className="bg-tnky-cream">
        <div className="max-w-content mx-auto px-4 py-24 sm:px-8 md:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <SectionHeading center eyebrow="The Case">
              The Case for Skilled-Trades Investment
            </SectionHeading>
            <p className="mt-6 text-lead font-medium leading-relaxed text-tnky-ink [text-wrap:pretty]">
              A skilled workforce is the foundation of a thriving region. Here&apos;s
              why investing in trades pathways pays off for Northern Kentucky.
            </p>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
            {POLICY_CASE.map((c) => {
              const Icon = c.icon;
              return (
                <article
                  key={c.title}
                  className="flex flex-col rounded-2xl border border-tnky-edge bg-tnky-white p-8 shadow-tnky-2"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-tnky-blue text-tnky-white">
                    <Icon className="h-7 w-7" strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-display font-extrabold text-card-title text-tnky-ink [text-wrap:balance]">
                    {c.title}
                  </h3>
                  <p className="mt-3 text-body font-medium leading-relaxed text-tnky-ink [text-wrap:pretty]">
                    {c.body}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </FadeInSection>

      {/* ── ECONOMIC DEVELOPMENT — site-selection callout band ────── */}
      <FadeInSection className="bg-tnky-blue">
        <div className="max-w-content mx-auto px-4 py-24 sm:px-8 md:py-28">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">
            <div className="text-center lg:col-span-5 lg:text-left">
              <p className="font-display font-tnky-black leading-none text-[length:clamp(5rem,12vw,9rem)] text-tnky-safety">
                #1
              </p>
              <p className="mt-2 font-display font-bold uppercase tracking-tag text-meta text-tnky-white">
                Site-selection factor: availability of skilled labor
              </p>
            </div>
            <div className="lg:col-span-7">
              <p className="font-display font-bold uppercase tracking-eyebrow text-eyebrow text-tnky-safety">
                Economic Development
              </p>
              <h2 className="mt-3 font-display italic font-extrabold text-3xl md:text-4xl text-tnky-white [text-wrap:balance]">
                More Than a Program — It&apos;s Infrastructure
              </h2>
              <div
                aria-hidden="true"
                className="mt-4 h-[3px] w-14 rounded-full bg-tnky-safety"
              />
              <p className="mt-6 text-lead font-medium leading-relaxed text-tnky-cream/95 [text-wrap:pretty]">
                Availability of skilled labor is the number-one factor companies
                weigh when choosing where to expand. Every student TradesNKY moves
                into a skilled career makes Northern Kentucky more competitive for
                investment — and regions with strong trade pipelines see higher
                median earnings and lower unemployment. Workforce development costs
                far less than a workforce shortage.
              </p>
            </div>
          </div>
        </div>
      </FadeInSection>

      {/* ── S2 — IMPACT METRICS ─────────────────────────────────── */}
      <FadeInSection className="bg-tnky-white">
        <div className="max-w-content mx-auto px-4 py-24 sm:px-8 md:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <SectionHeading center eyebrow="By the Numbers">
              Our Regional Impact
            </SectionHeading>
            <p className="mt-6 text-lead font-medium leading-relaxed text-tnky-ink [text-wrap:pretty]">
              Every connection between a student and a skilled career strengthens the
              region&apos;s economy.
            </p>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {IMPACT.map((m) => (
              <div
                key={m.label}
                className="rounded-2xl bg-tnky-blue p-8 text-center text-tnky-white shadow-tnky-2"
              >
                <p className="font-display font-tnky-black leading-none text-stat-lg text-tnky-safety">
                  {m.value}
                </p>
                <p className="mt-3 text-body font-medium leading-relaxed text-tnky-cream/90 [text-wrap:pretty]">
                  {m.label}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-small font-medium text-tnky-ink/60">
            Figures shown are launch placeholders — full impact reporting is in
            development.
          </p>
        </div>
      </FadeInSection>

      {/* ── S3 — WHAT WE DELIVER ────────────────────────────────── */}
      <FadeInSection className="bg-tnky-cream">
        <div className="max-w-content mx-auto px-4 py-24 sm:px-8 md:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <SectionHeading center eyebrow="Public Return">
              What TradesNKY Delivers for the Region
            </SectionHeading>
            <p className="mt-6 text-lead font-medium leading-relaxed text-tnky-ink [text-wrap:pretty]">
              One investment advances economic, social, and educational priorities at
              the same time.
            </p>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {DELIVERS.map((d) => {
              const Icon = d.icon;
              return (
                <article
                  key={d.title}
                  className="rounded-2xl border border-tnky-edge bg-tnky-white p-7 shadow-tnky-2"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-tnky-cream text-tnky-blue">
                    <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 font-display font-extrabold text-card-title text-tnky-ink [text-wrap:balance]">
                    {d.title}
                  </h3>
                  <p className="mt-2 text-body font-medium leading-relaxed text-tnky-ink [text-wrap:pretty]">
                    {d.body}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </FadeInSection>

      {/* ── S4 — SHARED OBJECTIVES ──────────────────────────────── */}
      <FadeInSection className="bg-tnky-white">
        <div className="max-w-content mx-auto px-4 py-24 sm:px-8 md:py-28">
          <div className="max-w-3xl">
            <SectionHeading eyebrow="Aligned Goals">
              Accountable to the Same Goals You Are
            </SectionHeading>
            <p className="mt-6 max-w-prose text-lead font-medium leading-relaxed text-tnky-ink [text-wrap:pretty]">
              Local, county, and state leaders are accountable for outcomes that
              TradesNKY directly advances:
            </p>
          </div>
          <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-x-12">
            {OBJECTIVES.map((o) => (
              <li
                key={o}
                className="flex items-center gap-3 rounded-xl border border-tnky-edge bg-tnky-cream px-5 py-4 text-body font-medium text-tnky-ink"
              >
                <Check
                  className="h-5 w-5 shrink-0 text-tnky-grass"
                  strokeWidth={2.5}
                  aria-hidden="true"
                />
                <span>{o}</span>
              </li>
            ))}
          </ul>
        </div>
      </FadeInSection>

      {/* ── S5 — REPORTS & DATA (placeholder) ───────────────────── */}
      <FadeInSection className="bg-tnky-cream">
        <div className="max-w-content mx-auto px-4 py-24 sm:px-8 md:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <SectionHeading center eyebrow="Coming Soon">
              Reports &amp; Data
            </SectionHeading>
            <p className="mt-6 text-lead font-medium leading-relaxed text-tnky-ink [text-wrap:pretty]">
              Transparent reporting is on the way. Sign up below to receive impact
              reports and data briefs as they publish.
            </p>
          </div>
          <div className="mx-auto mt-14 grid max-w-3xl grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
            {REPORTS.map((r) => {
              const Icon = r.icon;
              return (
                <article
                  key={r.title}
                  className="flex flex-col rounded-2xl border border-dashed border-tnky-edge bg-tnky-white p-8"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-tnky-cream text-tnky-blue">
                      <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
                    </span>
                    <span className="rounded-pill bg-tnky-blue/10 px-3 py-1 font-display font-bold uppercase tracking-tag text-meta text-tnky-blue">
                      Coming Soon
                    </span>
                  </div>
                  <h3 className="mt-5 font-display font-extrabold text-card-title text-tnky-ink [text-wrap:balance]">
                    {r.title}
                  </h3>
                  <p className="mt-3 text-body font-medium leading-relaxed text-tnky-ink [text-wrap:pretty]">
                    {r.body}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </FadeInSection>

      {/* ── THE TRADESNKY PATHWAY (shared) ──────────────────────── */}
      <SimplePathwaySection />

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
