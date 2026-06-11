import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  Check,
  ChevronDown,
  ChevronRight,
  Cpu,
  Hammer,
  Layers,
  Radio,
  Settings,
  Sun,
  Target,
  Wallet,
  Wind,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { FadeInSection } from "../_components/fade-in-section";
import { CtaCard as NewsletterBanner } from "../_components/CtaCard";
import { QuizPreview } from "../_components/QuizPreview";
import { InterestForm } from "../_components/interest-form";
import { PATHS, PATH_SLUGS } from "./pillars/data";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Students | Trades NKY",
  description:
    "Real careers, real paychecks, no student debt. Explore high-tech skilled-trades careers in Northern Kentucky and find the path that fits you.",
};

// Pill CTAs on tnky-blue (hero).
const BTN_YELLOW_BLUE =
  "inline-flex items-center justify-center gap-2 rounded-pill bg-tnky-safety px-8 py-4 font-display font-bold text-button text-tnky-safety-ink shadow-tnky-safety transition-all duration-200 ease-tnky hover:-translate-y-px hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tnky-white focus-visible:ring-offset-2 focus-visible:ring-offset-tnky-blue";

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

const PAY_BENEFITS = [
  "Graduate with credentials instead of loans.",
  "Earn a paycheck through apprenticeships and dual-credit programs.",
  "Build savings while your peers take on student debt.",
  "Keep climbing — degrees, certifications, or a business of your own.",
];

const PILLARS = PATH_SLUGS.map((slug) => PATHS[slug]);

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
// underline. The consistent treatment for every section heading.
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

// SVG donut — `percent` highlighted in tnky-safety against a tnky-edge ring.
function DonutChart({ percent }: { percent: number }) {
  return (
    <svg
      viewBox="0 0 36 36"
      role="img"
      aria-label={`${percent} percent`}
      className="h-28 w-28 shrink-0"
    >
      <circle
        className="stroke-tnky-edge"
        cx="18"
        cy="18"
        r="15.9155"
        fill="none"
        strokeWidth="3.6"
      />
      <circle
        className="stroke-tnky-safety"
        cx="18"
        cy="18"
        r="15.9155"
        fill="none"
        strokeWidth="3.6"
        strokeLinecap="round"
        strokeDasharray={`${percent} ${100 - percent}`}
        transform="rotate(-90 18 18)"
      />
      <text
        className="fill-tnky-ink font-display"
        x="18"
        y="18"
        dominantBaseline="central"
        textAnchor="middle"
        fontSize="8"
        fontWeight="800"
      >
        {percent}%
      </text>
    </svg>
  );
}

export default function StudentsPage() {
  return (
    <main className="bg-tnky-cream">
      {/* ── HERO — centered, oversized heading over image + overlay ── */}
      <section className="relative flex min-h-[78vh] items-center overflow-hidden bg-tnky-blue">
        <Image
          src="/images/students-handson.jpg"
          alt="Students in hard hats taking part in a hands-on TradesNKY workshop"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-tnky-blue/82" />
        <div aria-hidden="true" className="absolute inset-0 bg-tnky-ink/15" />
        <div className="relative z-10 max-w-content mx-auto w-full px-4 py-20 sm:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-display font-bold uppercase tracking-eyebrow text-eyebrow text-tnky-safety">
              For Students
            </p>
            <h1 className="mt-3 font-display italic font-extrabold text-5xl md:text-7xl text-tnky-white [text-wrap:balance]">
              Build Something Bigger Than Yourself
            </h1>
            <div
              aria-hidden="true"
              className="mx-auto mt-5 h-1 w-20 rounded-full bg-tnky-safety"
            />
            <p className="mx-auto mt-6 max-w-lead text-lead text-tnky-cream/95 [text-wrap:pretty]">
              The roads you travel, the schools you attend, the power that lights
              your home — someone skilled built all of it. That someone could be
              you.
            </p>
            <p className="mt-3 text-lead font-semibold text-tnky-white [text-wrap:pretty]">
              Real careers. Real paychecks. No student debt.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/students/quiz" className={BTN_YELLOW_BLUE}>
                Take the Career Quiz
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FIND YOUR FIT — larger single column, scroll link to quiz ── */}
      <FadeInSection className="bg-tnky-white">
        <div className="max-w-content mx-auto px-4 py-28 sm:px-8 md:py-36">
          <div className="mx-auto max-w-3xl">
            <SectionHeading eyebrow="Find Your Fit">
              Turn Your Interests Into a Future You&apos;re Proud Of
            </SectionHeading>
            <p className="mt-5 font-display italic font-bold text-2xl md:text-3xl text-tnky-blue [text-wrap:balance]">
              The skilled trades aren&apos;t a backup plan — they&apos;re a
              launchpad.
            </p>
            <div className="mt-8 space-y-5 text-lead font-medium leading-relaxed text-tnky-ink [text-wrap:pretty]">
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
            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
              <article className="rounded-2xl border border-tnky-edge bg-tnky-cream p-7 shadow-tnky-2">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-tnky-blue text-tnky-white">
                  <Hammer className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-display font-extrabold text-card-title text-tnky-ink [text-wrap:balance]">
                  If you&apos;d rather build than sit still
                </h3>
                <p className="mt-2 text-body font-medium leading-relaxed text-tnky-ink [text-wrap:pretty]">
                  Learn by doing — not sitting in a classroom. Modern trades run on
                  robotics, programmable systems, and digital tools, not just hard
                  labor. And you don&apos;t have to choose between trades and college
                  — many credentials stack right into a degree later, often with
                  employer tuition help.
                </p>
              </article>
              <article className="rounded-2xl border border-tnky-edge bg-tnky-cream p-7 shadow-tnky-2">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-tnky-blue text-tnky-white">
                  <Target className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-display font-extrabold text-card-title text-tnky-ink [text-wrap:balance]">
                  If you want a career that matters
                </h3>
                <p className="mt-2 text-body font-medium leading-relaxed text-tnky-ink [text-wrap:pretty]">
                  Skilled technical careers make a real impact — building things that
                  matter and keeping communities running. They reward hands-on
                  problem-solving that AI and automation can&apos;t replace, and they
                  climb: technician to specialist to supervisor to business owner.
                  Apprentices saw a 43% earnings jump within 2.5 years.
                </p>
              </article>
            </div>
            <a
              href="#students-quiz-cta"
              className="mt-10 inline-flex items-center gap-2 rounded-sm font-display font-bold text-lead text-tnky-blue underline-offset-4 transition-colors duration-200 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tnky-blue focus-visible:ring-offset-2 focus-visible:ring-offset-tnky-white"
            >
              Go to the Quiz
              <ChevronDown className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </FadeInSection>

      {/* ── MODERN TRADES — square blue-bordered icon tiles ────────── */}
      <FadeInSection className="bg-tnky-cream">
        <div className="max-w-content mx-auto px-4 py-24 sm:px-8 md:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <SectionHeading center eyebrow="Modern Trades">
              The Technology Behind Modern Careers
            </SectionHeading>
            <p className="mt-6 text-lead font-medium leading-relaxed text-tnky-ink [text-wrap:pretty]">
              Forget the old image of the trades. Today&apos;s skilled
              professionals work with robotics, automation, and smart systems —
              high-skill, high-tech careers that keep getting more advanced.
            </p>
          </div>

          <div className="mx-auto mt-14 grid max-w-3xl grid-cols-2 justify-items-center gap-6 sm:grid-cols-4">
            {TECH.map((t) => {
              const Icon = t.icon;
              return (
                <div key={t.label} className="flex flex-col items-center gap-2.5">
                  <div className="flex h-24 w-24 items-center justify-center rounded-2xl border-2 border-tnky-blue bg-tnky-white transition-all duration-200 ease-tnky motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-tnky-2">
                    <Icon
                      className="h-9 w-9 text-tnky-ink"
                      strokeWidth={1.75}
                      aria-hidden="true"
                    />
                  </div>
                  <span className="text-center font-display font-bold text-mini text-tnky-ink">
                    {t.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </FadeInSection>

      {/* ── EARN WHILE YOU LEARN — bullets + green $0 stat ─────────── */}
      <FadeInSection className="bg-tnky-white">
        <div className="max-w-content mx-auto px-4 py-16 sm:px-8 md:py-20">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <SectionHeading eyebrow="Earn While You Learn">
                Build Skills. Build Financial Independence
              </SectionHeading>
              <p className="mt-5 max-w-prose text-lead font-medium leading-normal text-tnky-ink [text-wrap:pretty]">
                A four-year degree can mean four years of debt. The skilled trades
                flip that script.
              </p>
              <ul className="mt-6 max-w-prose space-y-3">
                {PAY_BENEFITS.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-body font-medium leading-relaxed text-tnky-ink [text-wrap:pretty]"
                  >
                    <Check
                      className="mt-0.5 h-5 w-5 shrink-0 text-tnky-grass"
                      strokeWidth={2.5}
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 max-w-prose rounded-xl border-l-4 border-tnky-safety bg-tnky-cream px-5 py-4 text-body font-medium leading-relaxed text-tnky-ink [text-wrap:pretty]">
                Many NKY trades reach{" "}
                <span className="font-display font-extrabold">
                  $60K–$80K within 3–5 years
                </span>
                , and apprentices saw a{" "}
                <span className="font-display font-extrabold">
                  43% earnings jump within 2.5 years
                </span>{" "}
                — earning while they train, not after.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-tnky-edge bg-tnky-cream p-8 text-center shadow-tnky-2">
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-tnky-white text-tnky-grass">
                  <Wallet
                    className="h-7 w-7"
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                </span>
                <p className="mt-5 font-display font-tnky-black leading-none text-[length:clamp(3.5rem,6vw,5rem)] text-tnky-grass">
                  $0
                </p>
                <p className="mt-2 font-display font-bold uppercase tracking-tag text-meta text-tnky-ink">
                  In Student Debt
                </p>
                <p className="mt-3 text-body font-medium leading-relaxed text-tnky-ink">
                  Earn while you learn — get paid as you train.
                </p>
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>

      {/* ── BUILT TO LAST — copy + donut left, pillar tiles right ──── */}
      <FadeInSection className="bg-tnky-cream">
        <div className="max-w-content mx-auto px-4 py-24 sm:px-8 md:py-28">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeading eyebrow="Built to Last">
                Career Security In An Uncertain World
              </SectionHeading>
              <p className="mt-6 text-lead font-medium leading-relaxed text-tnky-ink [text-wrap:pretty]">
                Industries rise and fall. Software gets outsourced and automated.
                But someone still has to wire the building, fix the line, and keep
                the lights on — and that work can&apos;t be shipped overseas. The
                technology may change. The need for skilled people won&apos;t.
              </p>

              <div className="mt-10 flex items-center gap-6">
                <DonutChart percent={40} />
                <p className="max-w-xs text-body font-medium leading-relaxed text-tnky-ink [text-wrap:pretty]">
                  <span className="font-display font-extrabold">40%+</span> of
                  today&apos;s skilled trades workforce expected to retire within
                  the next decade.
                </p>
              </div>
            </div>

            <div>
              <p className="font-display font-bold uppercase tracking-eyebrow text-eyebrow text-tnky-blue">
                Explore the Five Paths
              </p>
              <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {PILLARS.map((p) => {
                  const Icon = p.icon;
                  return (
                    <Link
                      key={p.slug}
                      href={`/students/pillars/${p.slug}`}
                      className="group flex items-center gap-3 rounded-xl border border-tnky-edge bg-tnky-white p-4 transition-all duration-200 ease-tnky motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-tnky-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tnky-blue focus-visible:ring-offset-2 focus-visible:ring-offset-tnky-cream"
                    >
                      <span
                        className={cn(
                          "flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-tnky-cream",
                          p.textClass,
                        )}
                      >
                        <Icon
                          className="h-6 w-6"
                          strokeWidth={1.75}
                          aria-hidden="true"
                        />
                      </span>
                      <span className="font-display font-extrabold text-card-title text-tnky-ink">
                        {p.name}
                      </span>
                      <ChevronRight
                        className="ml-auto h-5 w-5 text-tnky-mute transition-transform duration-200 ease-tnky group-hover:translate-x-0.5 group-hover:text-tnky-blue"
                        aria-hidden="true"
                      />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>

      {/* ── AI-PROOF — BLS career-security callout band ───────────── */}
      <FadeInSection className="bg-tnky-blue">
        <div className="max-w-content mx-auto px-4 py-20 text-center sm:px-8 md:py-24">
          <div className="mx-auto flex max-w-3xl flex-col items-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-tnky-white/10 text-tnky-safety">
              <Wrench className="h-7 w-7" strokeWidth={1.75} aria-hidden="true" />
            </span>
            <p className="mt-5 font-display font-bold uppercase tracking-eyebrow text-eyebrow text-tnky-safety">
              Built for the Age of AI
            </p>
            <h2 className="mt-3 font-display italic font-extrabold text-3xl md:text-4xl text-tnky-white [text-wrap:balance]">
              AI Can&apos;t Wire a Building
            </h2>
            <div
              aria-hidden="true"
              className="mx-auto mt-4 h-[3px] w-14 rounded-full bg-tnky-safety"
            />
            <p className="mt-6 text-lead font-medium leading-relaxed text-tnky-cream/95 [text-wrap:pretty]">
              BLS data shows installation, maintenance, repair, and construction
              jobs are among the <span className="font-extrabold text-tnky-white">least likely to be automated</span> — their
              variable, hands-on nature is exactly what AI and automation struggle
              to replicate. The skills you build here can&apos;t be shipped overseas
              or written out of a job.
            </p>
          </div>
        </div>
      </FadeInSection>

      {/* ── FROM APPRENTICE TO OWNER — profile cards ───────────────── */}
      <FadeInSection className="bg-tnky-white">
        <div className="max-w-content mx-auto px-4 py-24 sm:px-8 md:py-28">
          <div className="max-w-3xl">
            <SectionHeading eyebrow="From Apprentice to Owner">
              Today&apos;s Skilled Professional. Tomorrow&apos;s Business Owner.
            </SectionHeading>
            <p className="mt-6 text-lead font-medium leading-relaxed text-tnky-ink [text-wrap:pretty]">
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
                  <p className="mt-0.5 text-small font-medium text-tnky-ink/70">
                    {o.business}
                  </p>
                  <p className="mt-4 text-body font-medium italic leading-relaxed text-tnky-ink [text-wrap:pretty]">
                    &ldquo;{o.quote}&rdquo;
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </FadeInSection>

      {/* ── QUIZ + CONTACT — bottom section (scroll target) ────────── */}
      <section
        id="students-quiz-cta"
        className="scroll-mt-[var(--nav-h,64px)] bg-tnky-white"
      >
        <div className="max-w-content mx-auto px-4 py-20 sm:px-8 md:py-24">
          {/* Stacked full-width: quiz teaser on top, interest form below,
              separated by a divider rule. */}
          <div className="flex flex-col gap-12 md:gap-16">
            <div className="overflow-hidden rounded-3xl border border-tnky-edge">
              <QuizPreview />
            </div>
            <div aria-hidden="true" className="h-px w-full bg-tnky-edge" />
            <InterestForm />
          </div>
        </div>
      </section>

      {/* ── Newsletter signup (shared site-wide component) ─────────── */}
      <NewsletterBanner />
    </main>
  );
}
