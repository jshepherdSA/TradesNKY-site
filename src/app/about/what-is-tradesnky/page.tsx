import type { Metadata } from "next";
import { type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Briefcase,
  ClipboardCheck,
  Compass,
  Hammer,
  Handshake,
  Settings,
  TrendingUp,
  Users,
  Zap,
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

// The TradesNKY Approach — the program's core offering. Each item pairs a
// short bold label with a description; `featured` flags the Industry-Informed
// Curriculum, the heart of the program, for a prominent full-width treatment
// above the supporting grid.
const APPROACH: {
  icon: typeof BookOpen;
  label: string;
  desc: string;
  /** Condensed copy for the compact supporting cards. */
  short?: string;
  featured?: boolean;
}[] = [
  {
    icon: BookOpen,
    label: "Industry-Informed Proprietary Curriculum",
    desc: "Aligned with Kentucky Department of Education (KDE) standards and designed for all middle school students in grades 6–8, with flexible 9-week and 18-week implementation options.",
    featured: true,
  },
  {
    icon: Hammer,
    label: "Hands-On Learning",
    desc: "Engaging, project-based lessons that help students discover the skills, technologies, and careers that power our communities.",
    short: "Project-based lessons that bring skills and careers to life.",
  },
  {
    icon: Settings,
    label: "Customized Implementation",
    desc: "Tailored to the unique goals, schedules, and needs of each school district, classroom, and student.",
    short: "Tailored to each district, classroom, and student.",
  },
  {
    icon: Handshake,
    label: "Dedicated School Partnerships",
    desc: "One-on-one support throughout implementation to ensure successful program delivery.",
    short: "One-on-one support through implementation.",
  },
  {
    icon: Users,
    label: "Educator Support",
    desc: "The Essential Workforce Educator Network gives teachers professional development, resources, and a community of practice.",
    short: "Professional development and a community of practice for teachers.",
  },
  {
    icon: Briefcase,
    label: "Industry Engagement",
    desc: "Professionals come into classrooms to share their career journeys, workplace experiences, and industry expertise.",
    short: "Professionals share their career journeys in the classroom.",
  },
  {
    icon: Compass,
    label: "Career Exploration Experiences",
    desc: "Job site visits and facility tours that give students firsthand exposure to the essential trades in action.",
    short: "Job-site visits and facility tours of the trades in action.",
  },
  {
    icon: ClipboardCheck,
    label: "Employer Engagement Toolkit",
    desc: "Helps employers understand how to hire students for pre-apprentice and apprenticeship programs.",
    short: "Helps employers hire students for apprenticeships.",
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

// Roadmap timeline — copy taken from the client's "Roadmap Content"
// document. Each entry is a year (or the forward-looking close) with one or
// more narrative paragraphs.
const ROADMAP: {
  year: string;
  title: string;
  body: string[];
  /** Forward-looking close — rendered with the safety accent + arrow node. */
  future?: boolean;
}[] = [
  {
    year: "2023",
    title: "A Vision Takes Shape",
    body: [
      "Phil Griffin, President and CEO of AnyWeather Companies, and Brandon and Sara Bray, owners of Bray Construction Services, experienced firsthand the growing shortage of skilled workers across Northern Kentucky. Rather than accepting the challenge as inevitable, they came together to create a long-term solution, one that would introduce students to rewarding career pathways before they ever entered high school. That vision became TradesNKY.",
      "Later that year, TradesNKY launched its first partnership with Campbell County Middle School, piloting an industry-informed construction curriculum that connected classroom learning with real-world careers.",
    ],
  },
  {
    year: "2024",
    title: "Building the Foundation",
    body: [
      "Following a successful pilot, TradesNKY expanded the depth and scope of its curriculum. The program evolved from a single nine-week introductory course into a comprehensive curriculum spanning three years, including an introduction course, exploratory course, and advanced course in preparation for high school.",
      "At the same time, the curriculum broadened beyond construction to represent the entire BUILD industry, introducing students to careers in carpentry, electrical, HVAC, masonry, plumbing, and more.",
    ],
  },
  {
    year: "2025",
    title: "Expanding the Vision",
    body: [
      "Momentum accelerated with the addition of Holmes Middle School and transformative investments from the Spirit of Construction Foundation and BE NKY Growth Partnership. During this period, the organization's vision expanded beyond traditional construction careers to represent the entire essential workforce dealing with the growing labor shortage. New career pathways were introduced through the pillars of manufacturing (MAKE), transportation and logistics (MOVE), utilities and energy (POWER), and public safety (PROTECT).",
    ],
  },
  {
    year: "2026",
    title: "Growing Regional Impact",
    body: [
      "With support from the Kenton County Fiscal Court, TradesNKY expanded from serving two schools to eight middle schools across Northern Kentucky, dramatically increasing student access to hands-on career exploration.",
      "TradesNKY also hosted its inaugural skillUP Career Exploration Fair at Gateway Community & Technical College, bringing together students, educators, and industry partners for an immersive experience designed to build awareness of high-demand career pathways.",
    ],
  },
  {
    year: "Next",
    title: "Looking Ahead",
    future: true,
    body: [
      "TradesNKY remains committed to preparing the next generation of Kentucky's essential workforce. In the years ahead, we will continue expanding into additional school districts, strengthening partnerships with industry leaders, and developing innovative, hands-on curricula that connect students with meaningful careers across the BUILD, MAKE, MOVE, POWER, and PROTECT pathways.",
    ],
  },
];

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
              A career pathway program bridging Northern Kentucky schools and
              industry to spark student discovery of essential, skilled trades
              careers.
            </p>
          </div>
        </div>
      </section>

      {/* ── MISSION & VISION ────────────────────────────────────── */}
      <FadeInSection className="bg-tnky-white">
        <div className="max-w-content mx-auto px-4 py-16 sm:px-8 md:py-20">
          <div className="mx-auto flex max-w-4xl flex-col gap-12 md:gap-16">
            {/* Mission — header outside the box, statement inside. */}
            <div>
              <p className="font-display font-extrabold uppercase tracking-tag text-eyebrow text-tnky-blue">
                Our Mission
              </p>
              <h2 className="mt-2 font-display italic font-extrabold text-h2 text-tnky-ink [text-wrap:balance]">
                Built for Northern Kentucky
              </h2>
              <div
                aria-hidden="true"
                className="mt-4 h-1 w-16 rounded-full bg-tnky-safety"
              />
              <div className="mt-6 rounded-2xl border border-tnky-edge bg-tnky-cream p-8 shadow-tnky-1 md:p-10">
                <p className="text-lead leading-relaxed text-tnky-ink/85 [text-wrap:pretty]">
                  TradesNKY connects schools, industry, and community partners
                  to prepare students for high-demand, high-skilled careers
                  that build, power, and move our region forward. We create
                  pathways for students in K-12th grade to allow them to gain
                  exposure (K-5th), explore (6th-8th), and engage (9th-12th)
                  with the essential workforce that keeps our community running.
                </p>
              </div>
            </div>

            {/* Vision — header outside the box, statement inside; right-aligned. */}
            <div className="text-right">
              <p className="font-display font-extrabold uppercase tracking-tag text-eyebrow text-tnky-blue">
                Our Vision
              </p>
              <h2 className="mt-2 font-display italic font-extrabold text-h2 text-tnky-ink [text-wrap:balance]">
                Every Student. Every Path.
              </h2>
              <div
                aria-hidden="true"
                className="mt-4 ml-auto h-1 w-16 rounded-full bg-tnky-safety"
              />
              <div className="mt-6 rounded-2xl border border-tnky-edge bg-tnky-cream p-8 shadow-tnky-1 md:p-10">
                <p className="text-lead leading-relaxed text-tnky-ink/85 [text-wrap:pretty]">
                  TradesNKY envisions a future where innovative trades education
                  empowers every student academically and professionally,
                  fosters diverse talents, and inspires a lifelong love for
                  knowledge. We aspire to be a catalyst for transformative
                  education, shaping skilled professionals and well-rounded
                  individuals poised to lead in a dynamic world, building
                  bridges to brighter futures extending beyond the trades.
                </p>
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>

      {/* ── THE TRADESNKY APPROACH ──────────────────────────────── */}
      <FadeInSection className="bg-tnky-cream">
        <div className="max-w-content mx-auto px-4 py-20 sm:px-8 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeading center>The TradesNKY Approach</SectionHeading>
            <p className="mt-6 text-lead font-medium leading-relaxed text-tnky-ink [text-wrap:pretty]">
              TradesNKY partners directly with schools, educators, and industry
              to deliver an industry-informed curriculum and meaningful career
              exploration experiences that connect classroom learning with the
              real world.
            </p>
          </div>

          {/* Featured — the Industry-Informed Curriculum leads as the core of
              the program, full-width above the supporting practices. */}
          {APPROACH.filter((item) => item.featured).map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="mt-12 rounded-2xl bg-tnky-blue p-8 shadow-tnky-2 md:p-10"
              >
                <div className="flex flex-col gap-6 md:flex-row md:items-center">
                  <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-tnky-safety text-tnky-safety-ink">
                    <Icon
                      className="h-8 w-8"
                      strokeWidth={1.75}
                      aria-hidden="true"
                    />
                  </span>
                  <div>
                    <p className="font-display font-bold uppercase tracking-label text-mini text-tnky-safety">
                      The Core of Our Program
                    </p>
                    <h3 className="mt-1 font-display italic font-tnky-black leading-tight text-h3 text-tnky-white">
                      {item.label}
                    </h3>
                    <p className="mt-3 max-w-3xl text-body font-medium leading-relaxed text-tnky-white/85 [text-wrap:pretty]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Supporting practices — compact squares. */}
          <div className="mt-5 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {APPROACH.filter((item) => !item.featured).map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="flex flex-col rounded-xl border border-tnky-edge bg-tnky-white p-5 shadow-tnky-1"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-tnky-blue/10 text-tnky-blue">
                    <Icon
                      className="h-5 w-5"
                      strokeWidth={1.75}
                      aria-hidden="true"
                    />
                  </span>
                  <h3 className="mt-3 font-display font-extrabold text-body text-tnky-ink [text-wrap:balance]">
                    {item.label}
                  </h3>
                  <p className="mt-1.5 text-mini font-medium leading-relaxed text-tnky-mute [text-wrap:pretty]">
                    {item.short ?? item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </FadeInSection>

      {/* ── THE PATHWAY ─────────────────────────────────────────── */}
      <div id="the-pathway" className="scroll-mt-[var(--nav-h,64px)]">
        <SimplePathwaySection detailed />
      </div>

      {/* ── skillUP — flagship regional event ───────────────────── */}
      <FadeInSection className="bg-tnky-blue">
        <div className="max-w-content mx-auto px-4 py-20 sm:px-8 md:py-24">
          {/* Top row — left: flagship pill + logo + yellow rule; right: the
              video, taking more than half the width so it reads large. */}
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">
            {/* Top left — flagship pill, logo, yellow rule */}
            <div className="lg:col-span-5">
              <span className="inline-flex items-center gap-2 rounded-pill bg-tnky-safety px-4 py-1.5 font-display font-bold uppercase tracking-label text-mini text-tnky-safety-ink">
                <Zap className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
                Flagship Event
              </span>
              <h2 className="mt-5 py-4">
                <Image
                  src="/brand/skillup-logowhite.png"
                  alt="skillUP"
                  width={2939}
                  height={2117}
                  quality={100}
                  className="h-32 w-auto md:h-40"
                />
              </h2>
              <div
                aria-hidden="true"
                className="mt-5 h-1 w-20 rounded-full bg-tnky-safety"
              />
            </div>

            {/* Top right — landscape skillUP video (> half the width) */}
            <div className="lg:col-span-7">
              <div className="relative aspect-video w-full overflow-hidden rounded-2xl border-4 border-tnky-safety bg-tnky-ink shadow-tnky-2">
                <video
                  className="h-full w-full object-cover"
                  controls
                  playsInline
                  preload="metadata"
                  poster="/images/skillup-poster.jpg"
                >
                  <source src="/videos/skillup.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>

          {/* Bottom row — full-width copy + the two skillUP 2026 numbers. */}
          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center lg:gap-12">
            <p className="text-lead font-medium leading-relaxed text-tnky-white/90 [text-wrap:pretty] lg:col-span-2">
              skillUP is TradesNKY&apos;s annual interactive career exploration
              event that connects middle school students with hands-on
              experiences in the skilled trades. Students engage directly with
              industry professionals and employers to discover rewarding career
              pathways that are helping build the future of NKY.
            </p>

            <div>
              <p className="font-display font-bold uppercase tracking-label text-mini text-tnky-safety">
                skillUP 2026
              </p>
              <dl className="mt-3 flex flex-wrap gap-x-12 gap-y-4">
                <div>
                  <dt className="font-display font-tnky-black text-stat-lg leading-none text-tnky-white">
                    1,051
                  </dt>
                  <dd className="mt-1 text-small font-medium text-tnky-white/70">
                    students attended
                  </dd>
                </div>
                <div>
                  <dt className="font-display font-tnky-black text-stat-lg leading-none text-tnky-white">
                    45+
                  </dt>
                  <dd className="mt-1 text-small font-medium text-tnky-white/70">
                    exhibitors
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </FadeInSection>

      {/* ── THE FIVE PILLARS ────────────────────────────────────── */}
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

      {/* ── OUR ROADMAP — timeline ──────────────────────────────── */}
      <FadeInSection className="bg-tnky-cream">
        <div className="max-w-content mx-auto px-4 py-20 sm:px-8 md:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <SectionHeading center>Our Roadmap</SectionHeading>
            <p className="mt-6 text-lead font-medium leading-relaxed text-tnky-ink [text-wrap:pretty]">
              From a shared vision to growing regional impact — how TradesNKY
              has taken shape, year by year.
            </p>
          </div>

          <ol className="mx-auto mt-12 max-w-3xl">
            {ROADMAP.map((item, i) => {
              const isLast = i === ROADMAP.length - 1;
              return (
                <li key={item.title} className="relative flex gap-5 sm:gap-6">
                  {/* Year node + connecting rail. */}
                  <div className="flex w-14 shrink-0 flex-col items-center">
                    <span
                      className={cn(
                        "z-10 flex h-14 w-14 items-center justify-center rounded-full font-display font-tnky-black shadow-tnky-1",
                        item.future
                          ? "bg-tnky-safety text-tnky-safety-ink"
                          : "bg-tnky-blue text-tnky-white",
                      )}
                    >
                      {item.future ? (
                        <TrendingUp
                          className="h-6 w-6"
                          strokeWidth={2}
                          aria-hidden="true"
                        />
                      ) : (
                        <span className="text-small">{item.year}</span>
                      )}
                    </span>
                    {!isLast && (
                      <span
                        aria-hidden="true"
                        className="w-0.5 flex-1 bg-tnky-edge"
                      />
                    )}
                  </div>

                  {/* Phase content. */}
                  <div className={cn("flex-1", isLast ? "pb-0" : "pb-10")}>
                    <h3 className="font-display italic font-extrabold text-card-title text-tnky-ink [text-wrap:balance]">
                      {item.title}
                    </h3>
                    <div className="mt-3 space-y-3">
                      {item.body.map((p) => (
                        <p
                          key={p}
                          className="text-small font-medium leading-relaxed text-tnky-mute [text-wrap:pretty]"
                        >
                          {p}
                        </p>
                      ))}
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </FadeInSection>

      {/* ── CTA ─────────────────────────────────────────────────── */}
      <FadeInSection className="bg-tnky-blue">
        <div className="max-w-content mx-auto flex min-h-[22rem] flex-col items-center justify-center px-4 py-6 text-center sm:px-8">
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
