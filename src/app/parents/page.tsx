import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  Briefcase,
  GraduationCap,
  Hammer,
  Users,
  type LucideIcon,
} from "lucide-react";
import { FadeInSection } from "../_components/fade-in-section";
import { CtaCard as NewsletterBanner } from "../_components/CtaCard";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Parents | Trades NKY",
  description:
    "Success doesn't have just one path. See how skilled trades and technical education help your child build real skills, real credentials, and a future with purpose.",
};

// Pill CTAs on tnky-blue (hero).
const BTN_YELLOW_BLUE =
  "inline-flex items-center justify-center gap-2 rounded-pill bg-tnky-safety px-8 py-4 font-display font-bold text-button text-tnky-safety-ink shadow-tnky-safety transition-all duration-200 ease-tnky hover:-translate-y-px hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tnky-white focus-visible:ring-offset-2 focus-visible:ring-offset-tnky-blue";
const BTN_OUTLINE_BLUE =
  "inline-flex items-center justify-center gap-2 rounded-pill border-2 border-tnky-white px-8 py-4 font-display font-bold text-button text-tnky-white transition-all duration-200 ease-tnky hover:-translate-y-px hover:bg-tnky-white hover:text-tnky-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tnky-white focus-visible:ring-offset-2 focus-visible:ring-offset-tnky-blue";
// Pill CTAs on tnky-cream (closing CTA band).
const BTN_BLUE_CREAM =
  "inline-flex items-center justify-center gap-2 rounded-pill bg-tnky-blue px-8 py-4 font-display font-bold text-button text-tnky-white shadow-tnky-2 transition-all duration-200 ease-tnky hover:-translate-y-px hover:bg-tnky-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tnky-blue focus-visible:ring-offset-2 focus-visible:ring-offset-tnky-cream";
const BTN_YELLOW_CREAM =
  "inline-flex items-center justify-center gap-2 rounded-pill bg-tnky-safety px-8 py-4 font-display font-bold text-button text-tnky-safety-ink shadow-tnky-safety transition-all duration-200 ease-tnky hover:-translate-y-px hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tnky-blue focus-visible:ring-offset-2 focus-visible:ring-offset-tnky-cream";

const MILESTONES: { icon: LucideIcon; label: string }[] = [
  { icon: BadgeCheck, label: "Certifications" },
  { icon: Hammer, label: "Apprenticeships" },
  { icon: GraduationCap, label: "Associate Degrees" },
  { icon: BookOpen, label: "Bachelor's Degrees" },
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

export default function ParentsPage() {
  return (
    <main className="bg-tnky-cream">
      {/* ── HERO — full-bleed, static (image fill + dark-blue overlay) ── */}
      <section className="relative flex min-h-[78vh] items-center overflow-hidden bg-tnky-blue">
        <Image
          src="https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=2070&auto=format&fit=crop"
          alt="Students engaged together in a Northern Kentucky classroom"
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
              For Parents
            </p>
            <h1 className="mt-3 font-display italic font-extrabold text-3xl md:text-4xl text-tnky-white [text-wrap:balance]">
              Success Doesn&apos;t Have Just One Path
            </h1>
            <div
              aria-hidden="true"
              className="mt-4 h-[3px] w-14 rounded-full bg-tnky-safety"
            />
            <p className="mt-6 max-w-lead text-lead text-tnky-cream/95 [text-wrap:pretty]">
              Through skilled trades and technical education, your child can build
              real skills, earn real credentials, and step into a career with
              purpose — without the weight of student debt.
            </p>
            <p className="mt-3 max-w-lead text-lead font-semibold text-tnky-white [text-wrap:pretty]">
              In Northern Kentucky, there&apos;s more than one road to a
              successful future.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link href="/students/pillars" className={BTN_YELLOW_BLUE}>
                Explore Career Paths
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link href="/students/quiz" className={BTN_OUTLINE_BLUE}>
                Take the Career Quiz
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 1 — cream, copy left + pull-quote card right ────── */}
      <FadeInSection className="bg-tnky-cream">
        <div className="max-w-content mx-auto px-4 py-24 sm:px-8 md:py-28">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <SectionHeading eyebrow="Why It Matters">
                Every Child Deserves a Pathway to Success
              </SectionHeading>
              <div className="mt-6 max-w-prose space-y-4 text-body leading-relaxed text-tnky-mute [text-wrap:pretty]">
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

            {/* Pull-quote card — designed focal panel */}
            <div className="lg:col-span-5">
              <figure className="rounded-3xl bg-tnky-blue p-8 text-tnky-white shadow-tnky-3 md:p-10">
                <span
                  aria-hidden="true"
                  className="block font-display text-[5rem] leading-[0.5] text-tnky-safety"
                >
                  &ldquo;
                </span>
                <blockquote className="mt-4 font-display italic font-bold text-2xl leading-snug [text-wrap:balance]">
                  Success isn&apos;t about choosing one path forever. It&apos;s
                  about helping students discover their strengths and build a
                  foundation for whatever comes next.
                </blockquote>
              </figure>
            </div>
          </div>
        </div>
      </FadeInSection>

      {/* ── SECTION 2 — white, milestone tile row ──────────────────── */}
      <FadeInSection className="bg-tnky-white">
        <div className="max-w-content mx-auto px-4 py-24 sm:px-8 md:py-28">
          <div className="max-w-3xl">
            <SectionHeading eyebrow="Where It Leads">
              A Foundation for Whatever Comes Next
            </SectionHeading>
            <p className="mt-6 text-lead leading-relaxed text-tnky-mute [text-wrap:pretty]">
              A strong start in the trades is a launchpad, not a limit. Students
              can stack credentials, step into leadership, continue their
              education, or build a business of their own.
            </p>
          </div>

          <div className="mt-14 flex flex-wrap justify-center gap-4 sm:gap-6">
            {MILESTONES.map((m) => {
              const Icon = m.icon;
              return (
                <div
                  key={m.label}
                  className="flex w-[150px] flex-col items-center gap-4 rounded-2xl border border-tnky-edge bg-tnky-cream p-6 text-center transition-all duration-200 ease-tnky motion-safe:hover:-translate-y-1.5 motion-safe:hover:shadow-tnky-2"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-tnky-blue-50 text-tnky-blue">
                    <Icon
                      className="h-6 w-6"
                      strokeWidth={1.75}
                      aria-hidden="true"
                    />
                  </span>
                  <span className="font-display font-bold text-small text-tnky-ink [text-wrap:balance]">
                    {m.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </FadeInSection>

      {/* ── SECTION 3 — cream, 2×2 outcome cards ───────────────────── */}
      <FadeInSection className="bg-tnky-cream">
        <div className="max-w-content mx-auto px-4 py-24 sm:px-8 md:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <SectionHeading center eyebrow="The Payoff">
              When Learning Has Purpose, Students Thrive
            </SectionHeading>
            <p className="mt-6 text-lead leading-relaxed text-tnky-mute [text-wrap:pretty]">
              When students see how today&apos;s learning connects to a real
              future, everything changes. Engagement goes up. Confidence grows.
              School starts to feel like it matters — because it does.
            </p>
          </div>

          <div className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
            {OUTCOMES.map((o) => (
              <div
                key={o.label}
                className="rounded-2xl border border-tnky-edge bg-tnky-white p-8 text-tnky-ink shadow-tnky-2 md:p-10"
              >
                <h3 className="font-display font-extrabold text-h3 text-tnky-ink [text-wrap:balance]">
                  {o.label}
                </h3>
                <div
                  aria-hidden="true"
                  className="mt-3 h-[3px] w-10 rounded-full bg-tnky-safety"
                />
                <p className="mt-4 text-body leading-relaxed text-tnky-mute [text-wrap:pretty]">
                  {o.description}
                </p>
              </div>
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
            Take the Next Step
          </p>
          <h2 className="mx-auto mt-3 max-w-3xl font-display italic font-extrabold text-3xl md:text-4xl text-tnky-ink [text-wrap:balance]">
            Help Your Child Find Their Path
          </h2>
          <div
            aria-hidden="true"
            className="mx-auto mt-4 h-[3px] w-14 rounded-full bg-tnky-safety"
          />
          <p className="mx-auto mt-6 max-w-lead text-lead text-tnky-mute [text-wrap:pretty]">
            TradesNKY helps students discover careers that fit who they are and
            where they want to go.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/students/pillars" className={BTN_BLUE_CREAM}>
              Explore the Five Paths
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link href="/students/quiz" className={BTN_YELLOW_CREAM}>
              Take the Career Quiz
            </Link>
          </div>
        </div>
      </FadeInSection>

      {/* ── Newsletter signup (shared site-wide component) ─────────── */}
      <NewsletterBanner />
    </main>
  );
}
