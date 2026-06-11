import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  Briefcase,
  Check,
  ChevronDown,
  GraduationCap,
  Hammer,
  Users,
  X,
  type LucideIcon,
} from "lucide-react";
import { FadeInSection } from "../_components/fade-in-section";
import { SimplePathwaySection } from "../_components/simple-pathway-section";
import { CtaCard as NewsletterBanner } from "../_components/CtaCard";
import { ParentPersonas } from "../_components/parent-personas";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Parents | Trades NKY",
  description:
    "Success doesn't have just one path. See how skilled trades and technical education help your child build real skills, real credentials, and a future with purpose.",
};

// Pill CTAs on tnky-blue (hero + closing CTA).
const BTN_YELLOW_BLUE =
  "inline-flex items-center justify-center gap-2 rounded-pill bg-tnky-safety px-8 py-4 font-display font-bold text-button text-tnky-safety-ink shadow-tnky-safety transition-all duration-200 ease-tnky hover:-translate-y-px hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tnky-white focus-visible:ring-offset-2 focus-visible:ring-offset-tnky-blue";
const BTN_OUTLINE_BLUE =
  "inline-flex items-center justify-center gap-2 rounded-pill border-2 border-tnky-white px-8 py-4 font-display font-bold text-button text-tnky-white transition-all duration-200 ease-tnky hover:-translate-y-px hover:bg-tnky-white hover:text-tnky-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tnky-white focus-visible:ring-offset-2 focus-visible:ring-offset-tnky-blue";

// S1 — vertical "where the path can lead" timeline.
const TIMELINE: { icon: LucideIcon; label: string }[] = [
  { icon: BadgeCheck, label: "Trade Certification" },
  { icon: Hammer, label: "Apprenticeship" },
  { icon: GraduationCap, label: "Associate Degree" },
  { icon: BookOpen, label: "Bachelor's Degree" },
  { icon: Users, label: "Leadership" },
  { icon: Briefcase, label: "Business Ownership" },
];

const OUTCOMES: { label: string; description: string }[] = [
  {
    label: "Higher Attendance Rates",
    description: "Students in CTE pathways show stronger school attendance.",
  },
  {
    label: "Stronger Academic Outcomes",
    description:
      "Career-connected learning improves overall academic performance.",
  },
  {
    label: "Improved Graduation Rates",
    description: "CTE students graduate at higher rates than their peers.",
  },
  {
    label: "Greater Career Readiness",
    description:
      "Students enter the workforce with real skills and real confidence.",
  },
];

const TRADES_POINTS = [
  "Earn while you learn",
  "$0 in debt at completion",
  "Credentials within 1–2 years",
];

const TRADITIONAL_POINTS = [
  "$37,000 average student debt",
  "4 years before entering the workforce",
  "No guarantee of a job in your field",
];

const DEMAND: { value: string; label: string }[] = [
  { value: "1M+", label: "unfilled skilled-trade jobs nationwide right now" },
  { value: "$63K", label: "median journey-level pay, training often employer-funded" },
  { value: "40%+", label: "of the current workforce retiring this decade" },
];

const MODERN_GRID: { src: string; alt: string; caption: string }[] = [
  {
    src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1600&auto=format&fit=crop",
    alt: "Technician working with electronic components",
    caption: "Smart assembly & diagnostics",
  },
  {
    src: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1600&auto=format&fit=crop",
    alt: "Operator monitoring connected control systems on screens",
    caption: "Connected control systems",
  },
  {
    src: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1600&auto=format&fit=crop",
    alt: "Rows of solar panels at an installation site",
    caption: "Solar energy systems",
  },
  {
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop",
    alt: "Close-up of a circuit board",
    caption: "Precision electronics & sensors",
  },
];

const PARENT_STORIES: { initials: string; name: string; story: string }[] = [
  {
    initials: "TV",
    name: "Theresa Vogt",
    story:
      "Her son apprenticed at 17 — today he runs his own HVAC company in Florence.",
  },
  {
    initials: "AW",
    name: "Andre Whitfield",
    story:
      "Left a desk job to open a welding shop in Newport, and now hires local grads.",
  },
  {
    initials: "MD",
    name: "Megan Doyle",
    story:
      "Watched her daughter skip student debt and buy a home by 24 as a master electrician.",
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

export default function ParentsPage() {
  return (
    <main className="bg-tnky-cream">
      {/* ── HERO — centered over image + dark overlay, three CTAs ──── */}
      <section className="relative flex min-h-[80vh] items-center overflow-hidden bg-tnky-blue">
        <Image
          src="/images/mentor-student.jpg"
          alt="A mentor and a young adult working together in a Northern Kentucky trades setting"
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
              For Parents
            </p>
            <h1 className="mt-3 font-display italic font-extrabold text-4xl md:text-6xl text-tnky-white [text-wrap:balance]">
              Success Doesn&apos;t Have Just One Path
            </h1>
            <div
              aria-hidden="true"
              className="mx-auto mt-5 h-1 w-20 rounded-full bg-tnky-safety"
            />
            <p className="mx-auto mt-6 max-w-lead text-lead font-medium text-tnky-cream/95 [text-wrap:pretty]">
              Through skilled trades and technical education, your child can build
              real skills, earn real credentials, and step into a career with
              purpose — without the weight of student debt.
            </p>
            <p className="mt-3 text-lead font-semibold text-tnky-white [text-wrap:pretty]">
              In Northern Kentucky, there&apos;s more than one road to a
              successful future.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
              <Link href="/students/quiz" className={BTN_YELLOW_BLUE}>
                Take the Career Quiz
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a href="#parents-pathway" className={BTN_OUTLINE_BLUE}>
                Learn About the Pathways
                <ChevronDown className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHICH DESCRIBES YOU — parent persona tabs ─────────────── */}
      <FadeInSection className="bg-tnky-cream">
        <div className="max-w-content mx-auto px-4 py-24 sm:px-8 md:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <SectionHeading center eyebrow="Start Here">
              Which Describes You?
            </SectionHeading>
            <p className="mt-6 text-lead font-medium leading-relaxed text-tnky-ink [text-wrap:pretty]">
              Every family weighs this decision differently. Pick the one that sounds
              most like you — and see how the trades answer it.
            </p>
          </div>
          <div className="mx-auto mt-12 max-w-3xl">
            <ParentPersonas />
          </div>
        </div>
      </FadeInSection>

      {/* ── S1 — EVERY CHILD — copy + outcome timeline + pull quote ── */}
      <FadeInSection className="bg-tnky-white">
        <div className="max-w-content mx-auto px-4 py-24 sm:px-8 md:py-28">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <SectionHeading eyebrow="Why It Matters">
                Every Child Deserves a Pathway to Success
              </SectionHeading>
              <div className="mt-6 max-w-prose space-y-4 text-body font-medium leading-relaxed text-tnky-ink [text-wrap:pretty]">
                <p>
                  Every kid is wired differently. Some light up taking things
                  apart to see how they work. Some would rather solve real
                  problems on their feet than sit in a lecture hall. For
                  generations we&apos;ve told them there&apos;s only one road to a
                  good life. The truth is bigger than that.
                </p>
                <p>
                  Skilled trades and technical careers offer real, respected,
                  well-paying work — and they&apos;re more advanced than ever.
                  In Northern Kentucky, employers across construction,
                  manufacturing, energy, and logistics are actively hiring,
                  training, and investing in the next generation.
                </p>
                <p>
                  And choosing this path doesn&apos;t close any doors. Many
                  students earn credentials and a paycheck first, then go on to
                  degrees, leadership, or businesses of their own.
                </p>
              </div>
            </div>

            {/* Vertical outcome timeline */}
            <div className="lg:col-span-5">
              <p className="font-display font-bold uppercase tracking-eyebrow text-eyebrow text-tnky-blue">
                Where the Path Can Lead
              </p>
              <ol className="mt-5">
                {TIMELINE.map((step, i) => {
                  const Icon = step.icon;
                  const last = i === TIMELINE.length - 1;
                  return (
                    <li key={step.label} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-tnky-blue text-tnky-white">
                          <Icon
                            className="h-5 w-5"
                            strokeWidth={1.75}
                            aria-hidden="true"
                          />
                        </span>
                        {!last && (
                          <span
                            aria-hidden="true"
                            className="my-1 w-0.5 flex-1 rounded-full bg-tnky-edge"
                          />
                        )}
                      </div>
                      <div className={cn("pt-2.5", !last && "pb-6")}>
                        <p className="font-display font-extrabold text-card-title text-tnky-ink">
                          {step.label}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>

          {/* Pulled-out closing line as a large italic callout */}
          <div className="mt-16 border-l-4 border-tnky-safety pl-6 md:pl-8">
            <p className="max-w-3xl font-display italic font-bold text-2xl md:text-3xl leading-snug text-tnky-blue [text-wrap:balance]">
              Success isn&apos;t about choosing one path forever. It&apos;s about
              helping students discover their strengths and build a foundation for
              whatever comes next.
            </p>
          </div>
        </div>
      </FadeInSection>

      {/* ── S2 — A FOUNDATION — copy left, blue 94% stat card right ── */}
      <FadeInSection className="bg-tnky-cream">
        <div className="max-w-content mx-auto px-4 py-24 sm:px-8 md:py-28">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <SectionHeading eyebrow="Where It Leads">
                A Foundation for Whatever Comes Next
              </SectionHeading>
              <p className="mt-6 max-w-prose text-lead font-medium leading-relaxed text-tnky-ink [text-wrap:pretty]">
                A strong start in the trades is a launchpad, not a limit. Students
                can stack credentials, step into leadership, continue their
                education, or build a business of their own — and the outcomes
                back it up.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-tnky-blue p-10 text-center text-tnky-white shadow-tnky-3">
                <p className="font-display font-tnky-black leading-none text-stat-xl text-tnky-safety">
                  94%
                </p>
                <p className="mt-4 text-lead font-medium leading-relaxed text-tnky-cream/90 [text-wrap:pretty]">
                  of CTE graduates are employed, in higher education, or in the
                  military within one year of graduation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>

      {/* ── WHEN LEARNING HAS PURPOSE — outcome cards (existing) ───── */}
      <FadeInSection className="bg-tnky-white">
        <div className="max-w-content mx-auto px-4 py-24 sm:px-8 md:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <SectionHeading center eyebrow="The Payoff">
              When Learning Has Purpose, Students Thrive
            </SectionHeading>
            <p className="mt-6 text-lead font-medium leading-relaxed text-tnky-ink [text-wrap:pretty]">
              When students see how today&apos;s learning connects to a real
              future, everything changes. Engagement goes up. Confidence grows.
              School starts to feel like it matters — because it does.
            </p>
          </div>

          <div className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
            {OUTCOMES.map((o) => (
              <div
                key={o.label}
                className="rounded-2xl border border-tnky-edge bg-tnky-cream p-8 text-tnky-ink shadow-tnky-2 md:p-10"
              >
                <h3 className="font-display font-extrabold text-h3 text-tnky-ink [text-wrap:balance]">
                  {o.label}
                </h3>
                <div
                  aria-hidden="true"
                  className="mt-3 h-[3px] w-10 rounded-full bg-tnky-safety"
                />
                <p className="mt-4 text-body font-medium leading-relaxed text-tnky-ink [text-wrap:pretty]">
                  {o.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </FadeInSection>

      {/* ── S3 — FINANCIAL INDEPENDENCE — comparison cards ─────────── */}
      <FadeInSection className="bg-tnky-cream">
        <div className="max-w-content mx-auto px-4 py-24 sm:px-8 md:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <SectionHeading center eyebrow="Real Numbers">
              Financial Independence Without Debt
            </SectionHeading>
            <p className="mt-6 text-lead font-medium leading-relaxed text-tnky-ink [text-wrap:pretty]">
              One of the biggest worries for any parent is cost. The skilled
              trades answer it directly: your child can earn a paycheck while they
              train, finish with credentials instead of loans, and start building
              real independence years ahead of their peers.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 items-stretch gap-6 md:grid-cols-[1fr_auto_1fr] md:gap-4">
            {/* Trades path — favored card */}
            <div className="rounded-2xl border border-tnky-edge border-l-4 border-l-tnky-blue bg-tnky-white p-8 shadow-tnky-2">
              <p className="font-display font-bold uppercase tracking-tag text-meta text-tnky-blue">
                The Trades Path
              </p>
              <ul className="mt-5 space-y-3">
                {TRADES_POINTS.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 text-body font-medium text-tnky-ink [text-wrap:pretty]"
                  >
                    <Check
                      className="mt-0.5 h-5 w-5 shrink-0 text-tnky-grass"
                      strokeWidth={2.5}
                      aria-hidden="true"
                    />
                    <span>
                      {point === "$0 in debt at completion" ? (
                        <>
                          <span className="font-display font-extrabold text-tnky-grass">
                            $0
                          </span>{" "}
                          in debt at completion
                        </>
                      ) : (
                        point
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* VS divider */}
            <div className="flex items-center justify-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-tnky-cream-2 font-display font-tnky-black text-h4 text-tnky-mute">
                VS
              </span>
            </div>

            {/* Traditional 4-year path */}
            <div className="rounded-2xl border border-tnky-edge bg-tnky-white p-8 shadow-tnky-2">
              <p className="font-display font-bold uppercase tracking-tag text-meta text-tnky-mute">
                The 4-Year Degree Path
              </p>
              <ul className="mt-5 space-y-3">
                {TRADITIONAL_POINTS.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 text-body font-medium text-tnky-ink [text-wrap:pretty]"
                  >
                    <X
                      className="mt-0.5 h-5 w-5 shrink-0 text-tnky-rust"
                      strokeWidth={2.5}
                      aria-hidden="true"
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </FadeInSection>

      {/* ── S4 — NOT THE TRADES YOU REMEMBER — modern image grid ───── */}
      <FadeInSection className="bg-tnky-white">
        <div className="max-w-content mx-auto px-4 py-24 sm:px-8 md:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <SectionHeading center eyebrow="A Modern Workplace">
              Not the Trades You Remember
            </SectionHeading>
            <p className="mt-6 text-lead font-medium leading-relaxed text-tnky-ink [text-wrap:pretty]">
              The trades have changed. Today&apos;s professionals work with
              robotics, smart sensors, data dashboards, and clean, high-tech
              facilities. This isn&apos;t your grandfather&apos;s workshop — it&apos;s
              some of the most advanced work happening in Northern Kentucky.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {MODERN_GRID.map((g) => (
              <div
                key={g.caption}
                className="relative aspect-[16/10] overflow-hidden rounded-2xl shadow-tnky-2"
              >
                <Image
                  src={g.src}
                  alt={g.alt}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-tnky-ink/85 via-tnky-ink/25 to-transparent"
                />
                <span className="absolute bottom-4 left-5 right-5 font-display font-bold text-button text-tnky-white [text-wrap:balance]">
                  {g.caption}
                </span>
              </div>
            ))}
          </div>
        </div>
      </FadeInSection>

      {/* ── S5 — HIGH DEMAND CAREERS — blue stat tiles ─────────────── */}
      <FadeInSection className="bg-tnky-cream">
        <div className="max-w-content mx-auto px-4 py-24 sm:px-8 md:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <SectionHeading center eyebrow="In Demand Now">
              High-Demand Careers, Close to Home
            </SectionHeading>
            <p className="mt-6 text-lead font-medium leading-relaxed text-tnky-ink [text-wrap:pretty]">
              Northern Kentucky needs skilled workers, and the demand isn&apos;t
              slowing down. Employers across construction, manufacturing, energy,
              and logistics are hiring now — and an aging workforce means even
              more opportunity ahead.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {DEMAND.map((d) => (
              <div
                key={d.label}
                className="rounded-2xl bg-tnky-blue p-8 text-center text-tnky-white shadow-tnky-2"
              >
                <p className="font-display font-tnky-black leading-none text-stat-lg text-tnky-safety">
                  {d.value}
                </p>
                <p className="mt-3 text-body font-medium leading-relaxed text-tnky-cream/90 [text-wrap:pretty]">
                  {d.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </FadeInSection>

      {/* ── THE TRADESNKY PATHWAY — shared homepage component ──────── */}
      <div id="parents-pathway" className="scroll-mt-[var(--nav-h,64px)]">
        <SimplePathwaySection />
      </div>

      {/* ── S6 — LEADERSHIP & ENTREPRENEURSHIP — parent stories ────── */}
      <FadeInSection className="bg-tnky-cream">
        <div className="max-w-content mx-auto px-4 py-24 sm:px-8 md:py-28">
          <div className="max-w-3xl">
            <SectionHeading eyebrow="Where Ambition Leads">
              Leadership and Entrepreneurship
            </SectionHeading>
            <p className="mt-6 text-lead font-medium leading-relaxed text-tnky-ink [text-wrap:pretty]">
              The trades don&apos;t cap your child&apos;s ambition — they launch
              it. Many Northern Kentucky business owners started as apprentices.
              With skill and drive, your child can lead crews, run projects, and
              one day own the company.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
            {PARENT_STORIES.map((p) => (
              <article
                key={p.name}
                className="flex flex-col rounded-2xl border border-tnky-edge bg-tnky-cream p-6 shadow-tnky-2 md:p-8"
              >
                <span
                  aria-hidden="true"
                  className="flex h-16 w-16 items-center justify-center rounded-full bg-tnky-blue font-display font-extrabold text-h4 text-tnky-white"
                >
                  {p.initials}
                </span>
                <h3 className="mt-5 font-display font-extrabold text-card-title text-tnky-ink">
                  {p.name}
                </h3>
                <p className="mt-3 text-body font-medium italic leading-relaxed text-tnky-ink [text-wrap:pretty]">
                  &ldquo;{p.story}&rdquo;
                </p>
              </article>
            ))}
          </div>
        </div>
      </FadeInSection>

      {/* ── CTA — full-bleed blue conclusion ───────────────────────── */}
      <FadeInSection className="bg-tnky-blue">
        <div className="max-w-content mx-auto px-4 py-24 text-center sm:px-8 md:py-28">
          <h2 className="mx-auto max-w-3xl font-display italic font-extrabold text-3xl md:text-4xl text-tnky-white [text-wrap:balance]">
            Help Your Child Find Their Path
          </h2>
          <div
            aria-hidden="true"
            className="mx-auto mt-4 h-[3px] w-14 rounded-full bg-tnky-safety"
          />
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/students/quiz" className={BTN_YELLOW_BLUE}>
              Take the Career Quiz
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <p className="mt-6 text-small font-medium text-tnky-white/80">
            No commitment. Just discovery.
          </p>
        </div>
      </FadeInSection>

      {/* ── Newsletter signup (shared site-wide component) ─────────── */}
      <NewsletterBanner />
    </main>
  );
}
