import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  Cpu,
  Layers,
  Pencil,
  Radio,
  Settings,
  Sun,
  Wallet,
  Wind,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { FadeInSection } from "../_components/fade-in-section";
import { CtaCard as NewsletterBanner } from "../_components/CtaCard";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Students | Trades NKY",
  description:
    "Real careers, real paychecks, no student debt. Explore high-tech skilled-trades careers in Northern Kentucky and find the path that fits you.",
};

// Pill CTAs on tnky-blue (hero + the Section 1 quiz card).
const BTN_YELLOW_BLUE =
  "inline-flex items-center justify-center gap-2 rounded-pill bg-tnky-safety px-8 py-4 font-display font-bold text-button text-tnky-safety-ink shadow-tnky-safety transition-all duration-200 ease-tnky hover:-translate-y-px hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tnky-white focus-visible:ring-offset-2 focus-visible:ring-offset-tnky-blue";
const BTN_OUTLINE_BLUE =
  "inline-flex items-center justify-center gap-2 rounded-pill border-2 border-tnky-white px-8 py-4 font-display font-bold text-button text-tnky-white transition-all duration-200 ease-tnky hover:-translate-y-px hover:bg-tnky-white hover:text-tnky-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tnky-white focus-visible:ring-offset-2 focus-visible:ring-offset-tnky-blue";
// Pill CTAs on tnky-cream (closing CTA band).
const BTN_YELLOW_CREAM =
  "inline-flex items-center justify-center gap-2 rounded-pill bg-tnky-safety px-8 py-4 font-display font-bold text-button text-tnky-safety-ink shadow-tnky-safety transition-all duration-200 ease-tnky hover:-translate-y-px hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tnky-blue focus-visible:ring-offset-2 focus-visible:ring-offset-tnky-cream";
const BTN_BLUE_CREAM =
  "inline-flex items-center justify-center gap-2 rounded-pill bg-tnky-blue px-8 py-4 font-display font-bold text-button text-tnky-white shadow-tnky-2 transition-all duration-200 ease-tnky hover:-translate-y-px hover:bg-tnky-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tnky-blue focus-visible:ring-offset-2 focus-visible:ring-offset-tnky-cream";

const TECH: { icon: LucideIcon; label: string }[] = [
  { icon: Bot, label: "Robotics" },
  { icon: Cpu, label: "Automation" },
  { icon: Wind, label: "Drones" },
  { icon: Radio, label: "Smart Sensors" },
  { icon: Settings, label: "CNC Machines" },
  { icon: Layers, label: "3D Printing" },
  { icon: Sun, label: "Solar Systems" },
  { icon: Zap, label: "EV Technology" },
];

const OWNERS: {
  initials: string;
  name: string;
  origin: string;
  business: string;
  quote: string;
}[] = [
  {
    initials: "MB",
    name: "Marcus Bellamy",
    origin: "Started as an Electrician",
    business: "Bellamy Electric — Covington",
    quote: "I went from pulling wire on a crew to running a shop of twelve.",
  },
  {
    initials: "RH",
    name: "Renata Hollis",
    origin: "Started as an HVAC Tech",
    business: "Hollis Climate Systems — Florence",
    quote: "Now I hire and train the apprentices who were once just like me.",
  },
  {
    initials: "DP",
    name: "Darnell Pruitt",
    origin: "Started as a Welder",
    business: "Pruitt Fabrication — Newport",
    quote: "My shop builds parts for plants across the whole region.",
  },
];

// Eyebrow → bold-italic display heading (text-3xl md:text-4xl) → yellow
// underline. The single, consistent treatment for every section heading.
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

export default function StudentsPage() {
  return (
    <main className="bg-tnky-cream">
      {/* ── HERO — full-bleed, static (image fill + dark-blue overlay) ── */}
      <section className="relative flex min-h-[78vh] items-center overflow-hidden bg-tnky-blue">
        <Image
          src="https://images.unsplash.com/photo-1581094271901-8022df4466f9?q=80&w=2070&auto=format&fit=crop"
          alt="A young tradesperson learning hands-on skills in a Northern Kentucky workshop"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-tnky-blue/95 via-tnky-blue/80 to-tnky-blue/40"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-tnky-ink/20" />
        <div className="relative z-10 max-w-content mx-auto w-full px-4 py-20 sm:px-8">
          <div className="max-w-2xl">
            <p className="font-display font-bold uppercase tracking-eyebrow text-eyebrow text-tnky-safety">
              For Students
            </p>
            <h1 className="mt-3 font-display italic font-extrabold text-3xl md:text-4xl text-tnky-white [text-wrap:balance]">
              Build Something Bigger Than Yourself
            </h1>
            <div
              aria-hidden="true"
              className="mt-4 h-[3px] w-14 rounded-full bg-tnky-safety"
            />
            <p className="mt-6 max-w-lead text-lead text-tnky-cream/95 [text-wrap:pretty]">
              The roads you travel, the schools you attend, the power that lights
              your home — someone skilled built all of it. That someone could be
              you.
            </p>
            <p className="mt-3 max-w-lead text-lead font-semibold text-tnky-white [text-wrap:pretty]">
              Real careers. Real paychecks. No student debt.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link href="/students/quiz" className={BTN_YELLOW_BLUE}>
                Take the Career Quiz
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link href="/students/pillars" className={BTN_OUTLINE_BLUE}>
                Explore the Five Paths
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 1 — white, copy left + quiz card right ─────────── */}
      <FadeInSection className="bg-tnky-white">
        <div className="max-w-content mx-auto px-4 py-24 sm:px-8 md:py-28">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
            <div className="lg:col-span-7">
              <SectionHeading eyebrow="Find Your Fit">
                Turn Your Interests Into a Future You&apos;re Proud Of
              </SectionHeading>
              <div className="mt-6 max-w-prose space-y-4 text-body leading-relaxed text-tnky-mute [text-wrap:pretty]">
                <p>
                  Maybe you like figuring out how things work. Maybe you&apos;d
                  rather build with your hands than sit still at a desk. Maybe you
                  want a career that pays well and actually matters.
                </p>
                <p>
                  From construction and manufacturing to energy and logistics,
                  Northern Kentucky is hiring the people who keep the whole region
                  running. The only question is which path fits you.
                </p>
              </div>
              <div className="mt-8">
                <p className="border-l-4 border-tnky-safety pl-6 font-display italic font-bold text-2xl leading-snug text-tnky-ink [text-wrap:balance]">
                  The skilled trades aren&apos;t a backup plan — they&apos;re a
                  launchpad.
                </p>
              </div>
            </div>

            {/* Quiz card — designed focal panel */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-tnky-blue p-8 text-tnky-white shadow-tnky-3 md:p-10">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-tnky-white/10 text-tnky-safety">
                  <Pencil
                    className="h-7 w-7"
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                </span>
                <h3 className="mt-6 font-display font-extrabold text-2xl text-tnky-white [text-wrap:balance]">
                  Not sure where to start?
                </h3>
                <p className="mt-3 text-lead text-tnky-cream/90 [text-wrap:pretty]">
                  Find your path in 5 quick questions.
                </p>
                <Link
                  href="/students/quiz"
                  className={cn(BTN_YELLOW_BLUE, "mt-8 w-full")}
                >
                  Take the Career Quiz
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>

      {/* ── SECTION 2 — cream, white tech tiles with yellow borders ─── */}
      <FadeInSection className="bg-tnky-cream">
        <div className="max-w-content mx-auto px-4 py-24 sm:px-8 md:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <SectionHeading center eyebrow="Modern Trades">
              The Technology Behind Modern Careers
            </SectionHeading>
            <p className="mt-6 text-lead leading-relaxed text-tnky-mute [text-wrap:pretty]">
              Forget the old image of the trades. Today&apos;s skilled
              professionals work with robotics, automation, and smart systems —
              high-skill, high-tech careers that keep getting more advanced.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-4 md:gap-6">
            {TECH.map((t) => {
              const Icon = t.icon;
              return (
                <div
                  key={t.label}
                  className="flex flex-col items-center gap-4 rounded-2xl border-2 border-tnky-safety bg-tnky-white p-8 text-center transition-all duration-200 ease-tnky motion-safe:hover:-translate-y-1.5 motion-safe:hover:shadow-tnky-2"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-tnky-cream">
                    <Icon
                      className="h-7 w-7 text-tnky-ink"
                      strokeWidth={1.75}
                      aria-hidden="true"
                    />
                  </span>
                  <span className="font-display font-bold text-body text-tnky-ink">
                    {t.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </FadeInSection>

      {/* ── SECTION 3 — white, concise: copy + $0 stat card on one row ── */}
      <FadeInSection className="bg-tnky-white">
        <div className="max-w-content mx-auto px-4 py-16 sm:px-8 md:py-20">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <SectionHeading eyebrow="Earn While You Learn">
                Build Skills. Build Financial Independence
              </SectionHeading>
              <p className="mt-5 max-w-prose text-body leading-normal text-tnky-mute [text-wrap:pretty]">
                A four-year degree can mean four years of debt. The skilled trades
                flip that script — you graduate with credentials instead of loans.
              </p>
              <h3 className="mt-8 font-display font-extrabold text-2xl text-tnky-ink [text-wrap:balance]">
                Skills That Pay You Back
              </h3>
              <p className="mt-3 max-w-prose text-body leading-normal text-tnky-mute [text-wrap:pretty]">
                Apprenticeships and dual-credit programs let you earn a paycheck
                and certifications before graduation — so you build savings while
                your peers take on loans. And the path keeps going: degrees,
                certifications, or a business of your own.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-tnky-blue p-8 text-center text-tnky-white shadow-tnky-3">
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-tnky-white/10 text-tnky-safety">
                  <Wallet
                    className="h-7 w-7"
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                </span>
                <p className="mt-5 font-display font-tnky-black leading-none text-[length:clamp(3.5rem,6vw,5rem)] text-tnky-safety">
                  $0
                </p>
                <p className="mt-2 font-display font-bold uppercase tracking-tag text-meta text-tnky-white/80">
                  In Student Debt
                </p>
                <p className="mt-3 text-body leading-relaxed text-tnky-cream/85">
                  Earn while you learn — get paid as you train.
                </p>
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>

      {/* ── SECTION 4 — cream, oversized pull quote focal ──────────── */}
      <FadeInSection className="bg-tnky-cream">
        <div className="max-w-content mx-auto px-4 py-24 text-center sm:px-8 md:py-28">
          <div className="mx-auto max-w-2xl">
            <SectionHeading center eyebrow="Built to Last">
              Career Security In An Uncertain World
            </SectionHeading>
            <p className="mt-6 text-lead leading-relaxed text-tnky-mute [text-wrap:pretty]">
              Industries rise and fall. Software gets outsourced and automated.
              But someone still has to wire the building, fix the line, and keep
              the lights on — and that work can&apos;t be shipped overseas.
            </p>
          </div>

          <blockquote className="mx-auto mt-14 max-w-4xl">
            <p className="font-display italic font-extrabold leading-tight text-[length:clamp(1.75rem,4vw,3.25rem)] text-tnky-blue [text-wrap:balance]">
              &ldquo;The technology may change. The need for skilled people
              won&apos;t.&rdquo;
            </p>
          </blockquote>

          <div className="mx-auto mt-14 max-w-2xl rounded-2xl bg-tnky-blue p-8 text-center text-tnky-white shadow-tnky-3 md:p-10">
            <p className="font-display font-tnky-black leading-none text-stat-xl text-tnky-safety">
              40%+
            </p>
            <p className="mt-3 font-display font-extrabold text-h4 text-tnky-white [text-wrap:balance]">
              of today&apos;s skilled trades workforce is nearing retirement
            </p>
            <p className="mt-2 text-body text-tnky-cream/85 [text-wrap:pretty]">
              — opening the door for a new generation to step in and lead.
            </p>
          </div>
        </div>
      </FadeInSection>

      {/* ── SECTION 5 — white, profile cards ───────────────────────── */}
      <FadeInSection className="bg-tnky-white">
        <div className="max-w-content mx-auto px-4 py-24 sm:px-8 md:py-28">
          <div className="max-w-3xl">
            <SectionHeading eyebrow="From Apprentice to Owner">
              Today&apos;s Skilled Professional. Tomorrow&apos;s Business Owner.
            </SectionHeading>
            <p className="mt-6 text-lead leading-relaxed text-tnky-mute [text-wrap:pretty]">
              The electrician you call today started as an apprentice. The
              contractor building across town once swept the job site. Master your
              craft, and you can be the one signing the checks.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
            {OWNERS.map((o) => (
              <article
                key={o.name}
                className="flex flex-col overflow-hidden rounded-2xl border border-tnky-edge bg-tnky-cream transition-all duration-200 ease-tnky motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-tnky-2"
              >
                <div aria-hidden="true" className="h-1.5 w-full bg-tnky-safety" />
                <div className="flex flex-1 flex-col p-6 md:p-8">
                  <span
                    aria-hidden="true"
                    className="flex h-16 w-16 items-center justify-center rounded-full bg-tnky-blue font-display font-extrabold text-h4 text-tnky-white"
                  >
                    {o.initials}
                  </span>
                  <h3 className="mt-5 font-display font-extrabold text-card-title text-tnky-ink">
                    {o.name}
                  </h3>
                  <p className="mt-1 font-display font-bold uppercase tracking-tag text-meta text-tnky-blue">
                    {o.origin}
                  </p>
                  <p className="mt-0.5 text-small text-tnky-mute">{o.business}</p>
                  <p className="mt-4 text-body italic leading-relaxed text-tnky-ink/80 [text-wrap:pretty]">
                    &ldquo;{o.quote}&rdquo;
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </FadeInSection>

      {/* ── CTA — cream conclusion with animated safety-stripe cap ──── */}
      <FadeInSection className="relative overflow-hidden bg-tnky-cream">
        <div aria-hidden="true" className="h-2.5 w-full overflow-hidden">
          <div className="h-full w-[200%] bg-stripe motion-safe:animate-stripe-right" />
        </div>
        <div className="max-w-content mx-auto px-4 py-24 text-center sm:px-8 md:py-28">
          <p className="font-display font-bold uppercase tracking-eyebrow text-eyebrow text-tnky-blue">
            Your Next Step
          </p>
          <h2 className="mx-auto mt-3 max-w-3xl font-display italic font-extrabold text-3xl md:text-4xl text-tnky-ink [text-wrap:balance]">
            Ready to Find Your Path?
          </h2>
          <div
            aria-hidden="true"
            className="mx-auto mt-4 h-[3px] w-14 rounded-full bg-tnky-safety"
          />
          <p className="mx-auto mt-6 max-w-lead text-lead text-tnky-mute [text-wrap:pretty]">
            Take the Career Quiz and discover which of the five career paths fits
            you best.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/students/quiz" className={BTN_YELLOW_CREAM}>
              Take the Career Quiz
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link href="/students/pillars" className={BTN_BLUE_CREAM}>
              Explore Career Paths
            </Link>
          </div>
        </div>
      </FadeInSection>

      {/* ── Newsletter signup (shared site-wide component) ─────────── */}
      <NewsletterBanner />
    </main>
  );
}
