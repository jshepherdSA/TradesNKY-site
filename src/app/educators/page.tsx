import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  BarChart3,
  Briefcase,
  CalendarDays,
  Check,
  ClipboardList,
  Compass,
  FileText,
  GraduationCap,
  Handshake,
  Lightbulb,
  TrendingUp,
  Users,
  type LucideIcon,
} from "lucide-react";
import { FadeInSection } from "../_components/fade-in-section";
import { SimplePathwaySection } from "../_components/simple-pathway-section";
import { CtaCard as NewsletterBanner } from "../_components/CtaCard";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Educators | Trades NKY",
  description:
    "Help your students see what's possible. TradesNKY gives schools the curriculum connections, employer partners, and career-fair access to open structured pathways into skilled-trades careers.",
};

const BTN_YELLOW_BLUE =
  "inline-flex items-center justify-center gap-2 rounded-pill bg-tnky-safety px-8 py-4 font-display font-bold text-button text-tnky-safety-ink shadow-tnky-safety transition-all duration-200 ease-tnky hover:-translate-y-px hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tnky-white focus-visible:ring-offset-2 focus-visible:ring-offset-tnky-blue";

const OFFERS: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: ClipboardList,
    title: "Curriculum & Career Resources",
    body: "Career-pathway materials, classroom-ready stats, and the five-pillar framework that connect everyday lessons to real careers.",
  },
  {
    icon: Handshake,
    title: "Employer Connections",
    body: "Direct links to Northern Kentucky employers for guest speakers, site visits, and work-based learning experiences.",
  },
  {
    icon: CalendarDays,
    title: "Career-Fair & Event Access",
    body: "Bring your students to hands-on trades events, discovery days, and career fairs happening across the region.",
  },
];

const DISTRICT_WINS = [
  "Boost graduation rates and student engagement",
  "Increase College & Career Readiness (CCR) scores",
  "Showcase district innovation to families and community",
  "Connect students to local employers — closing the school-to-work gap",
  "Provide equitable pathways for every student",
  "Strengthen teacher satisfaction with applied, meaningful learning",
];

const THEMES: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: Users,
    title: "Pathways for ALL Students",
    body: "A clear, structured route into well-paid, essential careers — for students of every academic level.",
  },
  {
    icon: BadgeCheck,
    title: "Boosts CCR Outcomes",
    body: "Industry certifications, apprenticeships, and technical pathways strengthen your CCR indicators.",
  },
  {
    icon: Compass,
    title: "Fewer Students With “No Plan”",
    body: "Every student leaves with a future plan — college, certification, apprenticeship, or career.",
  },
  {
    icon: Lightbulb,
    title: "Hands-On Engagement",
    body: "Hands-on learning keeps students connected, confident, and engaged across the board.",
  },
  {
    icon: TrendingUp,
    title: "Higher Graduation, Lower Dropout",
    body: "CTE concentrators show higher GPAs, better attendance, and higher graduation rates than their peers.",
  },
  {
    icon: BookOpen,
    title: "Early Exposure Builds Purpose",
    body: "Students begin forming career identity as early as age 10 — early exposure boosts motivation (K–8).",
  },
];

const RESOURCES: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: FileText,
    title: "Career Pathway Guides",
    body: "One-page guides mapping each of the five pillars to local jobs, wages, and credentials.",
  },
  {
    icon: BookOpen,
    title: "Talking-Points One-Pager",
    body: "Ready answers for student and parent questions about pay, college, and career security.",
  },
  {
    icon: BarChart3,
    title: "Classroom Stats Sheet",
    body: "Current Northern Kentucky workforce and outcomes data, formatted for the classroom.",
  },
];

const OUTCOMES: { icon: LucideIcon; title: string; fact: string }[] = [
  {
    icon: GraduationCap,
    title: "Higher Graduation Rates",
    fact: "CTE concentrators graduate at higher rates than their non-CTE peers.",
  },
  {
    icon: BarChart3,
    title: "Stronger Academic Outcomes",
    fact: "They post higher GPAs and better science test scores along the way.",
  },
  {
    icon: CalendarDays,
    title: "Improved Attendance",
    fact: "Hands-on CTE pathways consistently improve attendance and persistence.",
  },
  {
    icon: Briefcase,
    title: "Greater Career Readiness",
    fact: "Students leave better prepared, with higher work-readiness on the job.",
  },
];

const EDUCATOR_VOICES: {
  initials: string;
  name: string;
  role: string;
  quote: string;
}[] = [
  {
    initials: "RC",
    name: "Renee Caldwell",
    role: "Career Counselor, Boone County",
    quote:
      "TradesNKY gave my students options they didn't know existed — and a real plan to chase them.",
  },
  {
    initials: "ML",
    name: "Marcus Littrell",
    role: "CTE Instructor, Kenton County",
    quote:
      "My shop class finally connects to real apprenticeships. Attendance has never been better.",
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

export default function EducatorsPage() {
  return (
    <main className="bg-tnky-cream">
      {/* ── HERO ────────────────────────────────────────────────── */}
      <section className="relative flex min-h-[62vh] items-center overflow-hidden bg-tnky-blue">
        <Image
          src="/images/students-event.jpg"
          alt="Students at a Northern Kentucky TradesNKY classroom event"
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
              For Educators
            </p>
            <h1 className="mt-3 font-display italic font-extrabold text-4xl md:text-6xl text-tnky-white [text-wrap:balance]">
              Help Your Students See What&apos;s Possible
            </h1>
            <div
              aria-hidden="true"
              className="mx-auto mt-5 h-1 w-20 rounded-full bg-tnky-safety"
            />
            <p className="mx-auto mt-6 max-w-lead text-lead font-medium text-tnky-cream/95 [text-wrap:pretty]">
              TradesNKY gives students of every academic level a clear, structured
              pathway into well-paid, essential careers — and gives your school the
              curriculum connections, employer partners, and career-fair access to
              make it happen.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/contact" className={BTN_YELLOW_BLUE}>
                Partner With Us
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── S1 — WHAT WE OFFER ──────────────────────────────────── */}
      <FadeInSection className="bg-tnky-cream">
        <div className="max-w-content mx-auto px-4 py-24 sm:px-8 md:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <SectionHeading center eyebrow="Built for Schools">
              What TradesNKY Offers Your School
            </SectionHeading>
            <p className="mt-6 text-lead font-medium leading-relaxed text-tnky-ink [text-wrap:pretty]">
              We do the connecting so you can do the teaching — bringing real
              careers, real employers, and real pathways into your building.
            </p>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
            {OFFERS.map((o) => {
              const Icon = o.icon;
              return (
                <article
                  key={o.title}
                  className="flex flex-col rounded-2xl border border-tnky-edge bg-tnky-white p-8 shadow-tnky-2"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-tnky-blue text-tnky-white">
                    <Icon className="h-7 w-7" strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-display font-extrabold text-card-title text-tnky-ink [text-wrap:balance]">
                    {o.title}
                  </h3>
                  <p className="mt-3 text-body font-medium leading-relaxed text-tnky-ink [text-wrap:pretty]">
                    {o.body}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </FadeInSection>

      {/* ── S2 — DISTRICT WINS + STAT ───────────────────────────── */}
      <FadeInSection className="bg-tnky-white">
        <div className="max-w-content mx-auto px-4 py-24 sm:px-8 md:py-28">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <SectionHeading eyebrow="District Impact">
                How TradesNKY Helps Your District
              </SectionHeading>
              <p className="mt-6 max-w-prose text-lead font-medium leading-relaxed text-tnky-ink [text-wrap:pretty]">
                Career-connected learning advances the goals your district is
                already measured against.
              </p>
              <ul className="mt-6 max-w-prose space-y-3">
                {DISTRICT_WINS.map((w) => (
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
            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-tnky-blue p-10 text-center text-tnky-white shadow-tnky-3">
                <p className="font-display font-tnky-black leading-none text-stat-lg text-tnky-safety">
                  $63,456
                </p>
                <p className="mt-4 text-lead font-medium leading-relaxed text-tnky-cream/90 [text-wrap:pretty]">
                  median annual pay for journey-level craft professionals — with
                  employer-funded training and room to advance into foreman,
                  inspector, or business-owner roles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>

      {/* ── EDUCATION OUTCOMES — stat-callout tiles ───────────────── */}
      <FadeInSection className="bg-tnky-blue">
        <div className="max-w-content mx-auto px-4 py-24 sm:px-8 md:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-display font-bold uppercase tracking-eyebrow text-eyebrow text-tnky-safety">
              The Outcomes
            </p>
            <h2 className="mt-3 font-display italic font-extrabold text-3xl md:text-4xl text-tnky-white [text-wrap:balance]">
              When Students See a Future, They Show Up
            </h2>
            <div
              aria-hidden="true"
              className="mx-auto mt-4 h-[3px] w-14 rounded-full bg-tnky-safety"
            />
            <p className="mt-6 text-lead font-medium leading-relaxed text-tnky-cream/95 [text-wrap:pretty]">
              CTE concentrators consistently outperform their peers — here&apos;s what
              career-connected learning delivers.
            </p>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {OUTCOMES.map((o) => {
              const Icon = o.icon;
              return (
                <div
                  key={o.title}
                  className="rounded-2xl border border-tnky-white/15 bg-tnky-white/5 p-6 text-center"
                >
                  <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-tnky-white/10 text-tnky-safety">
                    <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 font-display font-extrabold text-card-title text-tnky-white [text-wrap:balance]">
                    {o.title}
                  </h3>
                  <p className="mt-2 text-body font-medium leading-relaxed text-tnky-cream/85 [text-wrap:pretty]">
                    {o.fact}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </FadeInSection>

      {/* ── S3 — MESSAGING THEMES ───────────────────────────────── */}
      <FadeInSection className="bg-tnky-cream">
        <div className="max-w-content mx-auto px-4 py-24 sm:px-8 md:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <SectionHeading center eyebrow="The Evidence">
              Learning That Connects to Real Careers
            </SectionHeading>
            <p className="mt-6 text-lead font-medium leading-relaxed text-tnky-ink [text-wrap:pretty]">
              When students see how today&apos;s learning connects to a real future,
              engagement, confidence, and outcomes all rise.
            </p>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {THEMES.map((t) => {
              const Icon = t.icon;
              return (
                <article
                  key={t.title}
                  className="rounded-2xl border border-tnky-edge bg-tnky-white p-7 shadow-tnky-2"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-tnky-cream text-tnky-blue">
                    <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 font-display font-extrabold text-card-title text-tnky-ink [text-wrap:balance]">
                    {t.title}
                  </h3>
                  <p className="mt-2 text-body font-medium leading-relaxed text-tnky-ink [text-wrap:pretty]">
                    {t.body}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </FadeInSection>

      {/* ── S4 — RESOURCES (placeholder) ────────────────────────── */}
      <FadeInSection className="bg-tnky-white">
        <div className="max-w-content mx-auto px-4 py-24 sm:px-8 md:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <SectionHeading center eyebrow="Coming Soon">
              Resources for Educators
            </SectionHeading>
            <p className="mt-6 text-lead font-medium leading-relaxed text-tnky-ink [text-wrap:pretty]">
              Classroom-ready materials to help you bring the trades into every
              conversation. Launching soon — sign up below to be first in line.
            </p>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
            {RESOURCES.map((r) => {
              const Icon = r.icon;
              return (
                <article
                  key={r.title}
                  className="flex flex-col rounded-2xl border border-dashed border-tnky-edge bg-tnky-cream p-8"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-tnky-white text-tnky-blue">
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

      {/* ── S5 — EDUCATOR VOICES ────────────────────────────────── */}
      <FadeInSection className="bg-tnky-cream">
        <div className="max-w-content mx-auto px-4 py-24 sm:px-8 md:py-28">
          <div className="max-w-3xl">
            <SectionHeading eyebrow="In Their Words">
              Educators Already Leading the Way
            </SectionHeading>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
            {EDUCATOR_VOICES.map((v) => (
              <article
                key={v.name}
                className="flex flex-col rounded-2xl border border-tnky-edge bg-tnky-white p-8 shadow-tnky-2"
              >
                <p className="text-lead font-medium italic leading-relaxed text-tnky-ink [text-wrap:pretty]">
                  &ldquo;{v.quote}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-4">
                  <span
                    aria-hidden="true"
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-tnky-blue font-display font-extrabold text-tnky-white"
                  >
                    {v.initials}
                  </span>
                  <div>
                    <p className="font-display font-extrabold text-tnky-ink">
                      {v.name}
                    </p>
                    <p className="text-small font-medium text-tnky-ink/70">
                      {v.role}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </FadeInSection>

      {/* ── THE TRADESNKY PATHWAY (shared) ──────────────────────── */}
      <SimplePathwaySection />

      {/* ── CTA ─────────────────────────────────────────────────── */}
      <FadeInSection className="bg-tnky-blue">
        <div className="max-w-content mx-auto px-4 py-24 text-center sm:px-8 md:py-28">
          <h2 className="mx-auto max-w-3xl font-display italic font-extrabold text-3xl md:text-4xl text-tnky-white [text-wrap:balance]">
            Bring TradesNKY to Your School
          </h2>
          <div
            aria-hidden="true"
            className="mx-auto mt-4 h-[3px] w-14 rounded-full bg-tnky-safety"
          />
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/contact" className={BTN_YELLOW_BLUE}>
              Partner With Us
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <p className="mt-6 text-small font-medium text-tnky-white/80">
            Free to explore. Built for your students.
          </p>
        </div>
      </FadeInSection>

      <NewsletterBanner />
    </main>
  );
}
