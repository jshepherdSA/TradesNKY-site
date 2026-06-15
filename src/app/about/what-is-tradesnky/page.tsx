import type { Metadata } from "next";
import { Fragment, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Briefcase,
  ChevronRight,
  GraduationCap,
  HardHat,
  TrendingUp,
} from "lucide-react";
import { FadeInSection } from "../../_components/fade-in-section";
import { SimplePathwaySection } from "../../_components/simple-pathway-section";
import { PATHS, PATH_SLUGS } from "../../students/pillars/data";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "What is TradesNKY? | Trades NKY",
  description:
    "A career pathway program connecting Northern Kentucky students to high-demand skilled trades — from elementary school through post-graduation.",
};

const BTN_PRIMARY =
  "inline-flex items-center justify-center gap-2 rounded-pill bg-tnky-safety px-8 py-4 font-display font-bold text-button text-tnky-safety-ink shadow-tnky-safety transition-all duration-200 ease-tnky hover:-translate-y-px hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tnky-white focus-visible:ring-offset-2 focus-visible:ring-offset-tnky-blue";
const BTN_OUTLINE =
  "inline-flex items-center justify-center gap-2 rounded-pill border-2 border-tnky-white px-8 py-4 font-display font-bold text-button text-tnky-white transition-all duration-200 ease-tnky hover:-translate-y-px hover:bg-tnky-white hover:text-tnky-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tnky-white focus-visible:ring-offset-2 focus-visible:ring-offset-tnky-blue";

const EVENT_TYPES: { icon: typeof GraduationCap; label: string; blurb: string }[] =
  [
    {
      icon: GraduationCap,
      label: "Career Discovery Fairs",
      blurb:
        "Elementary and middle schoolers meet tradespeople and see careers up close.",
    },
    {
      icon: HardHat,
      label: "Job Site Visits",
      blurb:
        "High schoolers tour active job sites and watch real work happen.",
    },
    {
      icon: Briefcase,
      label: "Employer Showcases",
      blurb:
        "Local employers demo equipment, careers, and hiring pathways.",
    },
  ];

const STEPS: { num: string; title: string; desc: string }[] = [
  {
    num: "01",
    title: "Partner with Schools",
    desc: "We work directly with NKY school districts to integrate career awareness into the classroom starting in elementary school.",
  },
  {
    num: "02",
    title: "Connect with Employers",
    desc: "Local employers and trade organizations join as partners, providing real-world exposure, mentorship, and hiring pipelines.",
  },
  {
    num: "03",
    title: "Guide Students Through the Pathway",
    desc: "Students move through Expose, Explore, Engage, and Earn stages with support at every level.",
  },
  {
    num: "04",
    title: "Create Workforce Outcomes",
    desc: "Students graduate into apprenticeships, certifications, and careers — employers gain the skilled workforce they need.",
  },
];

const PILLARS = PATH_SLUGS.map((slug) => PATHS[slug]);

// Eyebrow-free section heading: bold-italic display title + yellow underline.
function SectionHeading({
  children,
  center = false,
  light = false,
}: {
  children: ReactNode;
  center?: boolean;
  light?: boolean;
}) {
  return (
    <div className={center ? "text-center" : undefined}>
      <h2
        className={cn(
          "font-display italic font-extrabold text-3xl md:text-4xl [text-wrap:balance]",
          light ? "text-tnky-white" : "text-tnky-ink",
        )}
      >
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

// Shared treatment for the two "coming soon" placeholder sections.
function PlaceholderCard({
  icon: Icon,
  title,
  children,
}: {
  icon: typeof BookOpen;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="mx-auto mt-12 max-w-2xl rounded-2xl border border-tnky-edge bg-tnky-white p-10 text-center shadow-tnky-1">
      <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-tnky-blue/10 text-tnky-blue">
        <Icon className="h-7 w-7" strokeWidth={1.75} aria-hidden="true" />
      </span>
      <h3 className="mt-5 font-display font-extrabold text-card-title text-tnky-ink">
        {title}
      </h3>
      <p className="mt-3 text-body font-medium leading-relaxed text-tnky-mute [text-wrap:pretty]">
        {children}
      </p>
    </div>
  );
}

export default function WhatIsTradesNkyPage() {
  return (
    <main className="bg-tnky-cream">
      {/* ── HERO ────────────────────────────────────────────────── */}
      <section className="relative isolate overflow-hidden bg-tnky-blue">
        <Image
          src="/images/students-handson.jpg"
          alt="Students taking part in a hands-on TradesNKY workshop"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-tnky-blue/85 via-tnky-blue/85 to-transparent"
        />
        <div className="relative z-10 max-w-content mx-auto w-full px-4 pb-20 pt-[calc(var(--nav-h,64px)+4rem)] sm:px-8 md:pb-28 md:pt-[calc(var(--nav-h,64px)+6rem)]">
          <div className="max-w-2xl">
            <h1 className="font-display italic font-tnky-black leading-[1.04] tracking-[-0.025em] text-tnky-white text-[length:clamp(2rem,4.5vw,4.5rem)] [text-wrap:balance]">
              What is TradesNKY?
            </h1>
            <div
              aria-hidden="true"
              className="mt-5 h-1 w-20 rounded-full bg-tnky-safety"
            />
            <p className="mt-6 max-w-lead text-lead font-medium text-tnky-white/85 [text-wrap:pretty]">
              A career pathway program connecting Northern Kentucky students to
              high-demand skilled trades — from elementary school through
              post-graduation.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 1 — THE PATHWAY ─────────────────────────────── */}
      <div id="the-pathway" className="scroll-mt-[var(--nav-h,64px)]">
        <FadeInSection className="bg-tnky-white">
          <div className="max-w-content mx-auto px-4 pt-20 sm:px-8 md:pt-24">
            <p className="mx-auto max-w-3xl text-center text-lead font-medium leading-relaxed text-tnky-ink [text-wrap:pretty]">
              From a fifth-grader&apos;s first classroom demo to a
              graduate&apos;s first paycheck, TradesNKY guides students through
              four connected stages — a K-12 through post-graduation journey
              that turns early curiosity into real skills, credentials, and
              careers.
            </p>
          </div>
        </FadeInSection>
        <SimplePathwaySection />
      </div>

      {/* ── SECTION 2 — CURRICULUM (placeholder) ────────────────── */}
      <FadeInSection className="bg-tnky-cream">
        <div className="max-w-content mx-auto px-4 py-20 sm:px-8 md:py-24">
          <SectionHeading center>What Students Learn</SectionHeading>
          <PlaceholderCard icon={BookOpen} title="Curriculum Details Coming Soon">
            We are currently developing detailed curriculum documentation. Check
            back soon for a full breakdown of what students experience at each
            stage of the pathway.
          </PlaceholderCard>
        </div>
      </FadeInSection>

      {/* ── SECTION 3 — WHAT EVENTS ARE LIKE ────────────────────── */}
      <FadeInSection className="bg-tnky-white">
        <div className="max-w-content mx-auto px-4 py-20 sm:px-8 md:py-24">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeading>What Our Events Are Like</SectionHeading>
              <div className="mt-6 space-y-4 text-lead font-medium leading-relaxed text-tnky-ink [text-wrap:pretty]">
                <p>
                  TradesNKY events bring students face-to-face with real
                  tradespeople, working equipment, and career possibilities they
                  may never have considered. From elementary school career fairs
                  to high school job site visits and employer showcases, our
                  events are designed to spark curiosity, build connections, and
                  make skilled trades feel real and attainable.
                </p>
                <p>
                  Events are hands-on by design. Students don&apos;t just watch —
                  they try things, ask questions, and meet the people who built
                  careers doing work they love. Educators bring students.
                  Employers show up. Communities connect.
                </p>
              </div>
            </div>
            <div className="relative min-h-[18rem] w-full overflow-hidden rounded-xl shadow-tnky-2 lg:h-full">
              <Image
                src="/images/students-event.jpg"
                alt="Students connecting with tradespeople at a TradesNKY career event"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {EVENT_TYPES.map((ev) => {
              const EvIcon = ev.icon;
              return (
                <div
                  key={ev.label}
                  className="rounded-xl border border-tnky-edge bg-tnky-cream p-6"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-tnky-blue/10 text-tnky-blue">
                    <EvIcon
                      className="h-6 w-6"
                      strokeWidth={1.75}
                      aria-hidden="true"
                    />
                  </span>
                  <h3 className="mt-4 font-display font-extrabold text-card-title text-tnky-ink">
                    {ev.label}
                  </h3>
                  <p className="mt-2 text-small font-medium leading-relaxed text-tnky-mute [text-wrap:pretty]">
                    {ev.blurb}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </FadeInSection>

      {/* ── SECTION 4 — THE HOW ─────────────────────────────────── */}
      <FadeInSection className="bg-tnky-blue">
        <div className="max-w-content mx-auto px-4 py-20 sm:px-8 md:py-24">
          <SectionHeading light>How TradesNKY Works</SectionHeading>
          <div className="mt-12 flex flex-col gap-6 md:flex-row md:items-stretch md:gap-2">
            {STEPS.map((step, i) => (
              <Fragment key={step.num}>
                <div className="flex-1">
                  <span
                    aria-hidden="true"
                    className="font-display font-tnky-black leading-none text-stat-lg text-tnky-safety"
                  >
                    {step.num}
                  </span>
                  <h3 className="mt-3 font-display font-extrabold text-card-title text-tnky-white [text-wrap:balance]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-body font-medium leading-relaxed text-tnky-white/80 [text-wrap:pretty]">
                    {step.desc}
                  </p>
                </div>
                {i < STEPS.length - 1 && (
                  <ChevronRight
                    aria-hidden="true"
                    className="hidden h-8 w-8 shrink-0 self-center text-tnky-safety md:block"
                    strokeWidth={2}
                  />
                )}
              </Fragment>
            ))}
          </div>
        </div>
      </FadeInSection>

      {/* ── SECTION 5 — WHERE WE ARE GOING (placeholder) ────────── */}
      <FadeInSection className="bg-tnky-cream">
        <div className="max-w-content mx-auto px-4 py-20 sm:px-8 md:py-24">
          <SectionHeading center>Where We Are Going</SectionHeading>
          <PlaceholderCard icon={TrendingUp} title="Our Roadmap Is Coming Soon">
            TradesNKY is growing. We are documenting our next phase of expansion
            across Northern Kentucky. Details coming soon.
          </PlaceholderCard>
        </div>
      </FadeInSection>

      {/* ── SECTION 6 — THE FIVE PILLARS ────────────────────────── */}
      <FadeInSection className="bg-tnky-white">
        <div className="max-w-content mx-auto px-4 py-20 sm:px-8 md:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <SectionHeading center>The Five Career Pillars</SectionHeading>
            <p className="mt-6 text-lead font-medium leading-relaxed text-tnky-ink [text-wrap:pretty]">
              Every career TradesNKY connects students to falls within one of
              five pillars. Each pillar represents a family of high-demand
              occupations with strong wages, local employer demand, and clear
              pathways from training to career.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
            {PILLARS.map((p) => {
              const Icon = p.icon;
              return (
                <Link
                  key={p.slug}
                  href={`/students/pillars/${p.slug}`}
                  className={cn(
                    "group flex flex-col rounded-2xl p-6 text-tnky-white shadow-tnky-2 transition-all duration-200 ease-tnky motion-safe:hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tnky-white focus-visible:ring-offset-2 focus-visible:ring-offset-tnky-white",
                    p.bgClass,
                  )}
                >
                  <Icon
                    className="h-10 w-10"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                  <h3 className="mt-4 font-display italic font-tnky-black uppercase leading-none text-h4 text-tnky-white">
                    {p.name}
                  </h3>
                  <p className="mt-2 text-small font-medium leading-relaxed text-tnky-white/85 [text-wrap:pretty]">
                    {p.blurb}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 font-display font-bold text-button text-tnky-white">
                    Explore
                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-200 ease-tnky group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </FadeInSection>

      {/* ── CTA ─────────────────────────────────────────────────── */}
      <FadeInSection className="bg-tnky-blue">
        <div className="max-w-content mx-auto px-4 py-20 text-center sm:px-8 md:py-24">
          <h2 className="mx-auto max-w-3xl font-display italic font-extrabold text-3xl md:text-4xl text-tnky-white [text-wrap:balance]">
            Ready to Get Involved?
          </h2>
          <div
            aria-hidden="true"
            className="mx-auto mt-4 h-[3px] w-14 rounded-full bg-tnky-safety"
          />
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#the-pathway" className={BTN_PRIMARY}>
              Learn About the Pathway
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <Link href="/students/quiz" className={BTN_OUTLINE}>
              Take the Career Quiz
            </Link>
          </div>
        </div>
      </FadeInSection>
    </main>
  );
}
