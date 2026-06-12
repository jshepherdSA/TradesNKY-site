import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  ChevronDown,
  ChevronRight,
  Cpu,
  Layers,
  Radio,
  Settings,
  Sun,
  Wind,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { FadeInSection } from "../_components/fade-in-section";
import { CtaCard as NewsletterBanner } from "../_components/CtaCard";
import { PATHS, PATH_SLUGS } from "./pillars/data";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Students | Trades NKY",
  description:
    "Build something bigger than yourself. Explore high-tech skilled-trades careers in Northern Kentucky and find the path that fits who you are.",
};

// Pill CTA on tnky-blue (hero).
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
      {/* ── HERO — “Build Something Bigger Than Yourself” ─────────── */}
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
            <p className="mx-auto mt-6 max-w-lead text-lead font-medium text-tnky-cream/95 [text-wrap:pretty]">
              The roads you travel, the schools you attend, the hospitals that care
              for families, and the technology that powers our world all depend on
              skilled professionals. Explore careers that allow you to make a real
              impact while building a future you&apos;re proud of.
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

      {/* ── FIRST SECTION — Turn Your Interests Into a Future ─────── */}
      <FadeInSection className="bg-tnky-white">
        <div className="max-w-content mx-auto px-4 py-24 sm:px-8 md:py-28">
          <div className="mx-auto max-w-3xl">
            <SectionHeading eyebrow="Find Your Fit">
              Turn Your Interests Into a Future You&apos;re Proud Of
            </SectionHeading>
            <p className="mt-6 text-lead font-medium leading-relaxed text-tnky-ink [text-wrap:pretty]">
              The things you enjoy today could lead to an exciting career tomorrow.
              Whether you&apos;re interested in technology, building things, solving
              problems, or working with your hands, there are career paths that match
              your strengths. The best careers aren&apos;t about following someone
              else&apos;s plan—they&apos;re about finding opportunities that fit who
              you are and where you want to go.
            </p>
            <a
              href="#students-quiz-cta"
              className="mt-8 inline-flex items-center gap-2 rounded-sm font-display font-bold text-lead text-tnky-blue underline-offset-4 transition-colors duration-200 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tnky-blue focus-visible:ring-offset-2 focus-visible:ring-offset-tnky-white"
            >
              Take the Career Quiz
              <ChevronDown className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </FadeInSection>

      {/* ── SECOND SECTION — The Technology Behind Modern Careers ─── */}
      <FadeInSection className="bg-tnky-cream">
        <div className="max-w-content mx-auto px-4 py-24 sm:px-8 md:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <SectionHeading center eyebrow="Modern Careers">
              The Technology Behind Modern Careers
            </SectionHeading>
            <div className="mt-6 space-y-4 text-lead font-medium leading-relaxed text-tnky-ink [text-wrap:pretty]">
              <p>
                Today&apos;s skilled careers combine hands-on work with some of the
                most advanced technology in the workforce. From robotics and
                automation to drones, smart sensors, computer-controlled equipment,
                and advanced manufacturing systems, technology is transforming how
                things are designed, built, repaired, and maintained.
              </p>
              <p>
                Whether you&apos;re interested in solving problems, working with
                cutting-edge tools, or seeing the results of your work in the real
                world, skilled careers offer opportunities to work at the
                intersection of technology, innovation, and practical know-how. The
                people building tomorrow&apos;s communities aren&apos;t just using
                technology—they&apos;re helping create and operate it.
              </p>
            </div>
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

      {/* ── THIRD SECTION — Build Skills. Build Financial Independence ── */}
      <FadeInSection className="bg-tnky-white">
        <div className="max-w-content mx-auto px-4 py-24 sm:px-8 md:py-28">
          <div className="max-w-3xl">
            <SectionHeading eyebrow="Earn While You Learn">
              Build Skills. Build Financial Independence
            </SectionHeading>
            <p className="mt-6 text-lead font-medium leading-relaxed text-tnky-ink [text-wrap:pretty]">
              The sooner you develop valuable skills, the sooner you can start
              building the life you want. Many skilled career pathways allow you to
              earn while you learn, gain real-world experience, and create
              opportunities for yourself—all while continuing your education and
              training. Whether your future includes certifications, apprenticeships,
              college, or a combination of pathways, you&apos;ll be building skills
              that can help you achieve greater independence and long-term success.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
            <article className="rounded-2xl border border-tnky-edge bg-tnky-cream p-8 shadow-tnky-2">
              <h3 className="font-display font-extrabold text-card-title text-tnky-ink [text-wrap:balance]">
                Skills That Pay You Back
              </h3>
              <div
                aria-hidden="true"
                className="mt-3 h-[3px] w-10 rounded-full bg-tnky-safety"
              />
              <p className="mt-4 text-body font-medium leading-relaxed text-tnky-ink [text-wrap:pretty]">
                Many skilled careers offer competitive pay, benefits, and advancement
                opportunities without spending years waiting to start your career.
                Whether you want to buy your first vehicle, move into your own place,
                travel, continue your education, or save for the future, developing
                in-demand skills can help you build financial independence and create
                more options for yourself.
              </p>
            </article>
            <article className="rounded-2xl border border-tnky-edge bg-tnky-cream p-8 shadow-tnky-2">
              <h3 className="font-display font-extrabold text-card-title text-tnky-ink [text-wrap:balance]">
                Your Education Doesn&apos;t Have to Stop When Your Career Starts
              </h3>
              <div
                aria-hidden="true"
                className="mt-3 h-[3px] w-10 rounded-full bg-tnky-safety"
              />
              <p className="mt-4 text-body font-medium leading-relaxed text-tnky-ink [text-wrap:pretty]">
                Many skilled professionals continue earning certifications, college
                degrees, and specialized credentials throughout their careers. Some
                employers even help pay for additional education. Gain experience,
                earn income, and keep your future options open.
              </p>
            </article>
          </div>
        </div>
      </FadeInSection>

      {/* ── FOURTH SECTION — Career Security In An Uncertain World ── */}
      <FadeInSection className="bg-tnky-cream">
        <div className="max-w-content mx-auto px-4 py-24 sm:px-8 md:py-28">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-10 lg:gap-16">
            <div className="lg:col-span-7">
              <SectionHeading eyebrow="Built to Last">
                Career Security In An Uncertain World
              </SectionHeading>
              <div className="mt-6 space-y-4 text-lead font-medium leading-relaxed text-tnky-ink [text-wrap:pretty]">
                <p>
                  The world is changing fast. AI and automation are transforming how
                  we work. But communities will always need skilled people—people who
                  can build, repair, maintain, and improve the systems that keep our
                  world running. That&apos;s why skilled professionals remain in high
                  demand across Northern Kentucky and throughout the country.
                </p>
                <p className="font-display italic font-bold text-2xl text-tnky-blue [text-wrap:balance]">
                  The technology may change. The need for skilled people won&apos;t.
                </p>
              </div>

              <div className="mt-10 flex items-center gap-6">
                <DonutChart percent={40} />
                <p className="max-w-xs text-body font-medium leading-relaxed text-tnky-ink [text-wrap:pretty]">
                  Did you know: more than{" "}
                  <span className="font-display font-extrabold">40%</span> of
                  today&apos;s skilled trades workforce is expected to retire within
                  the next decade, creating strong demand for the next generation of
                  skilled professionals.
                </p>
              </div>
            </div>

            <div className="lg:col-span-3">
              <p className="font-display font-bold uppercase tracking-eyebrow text-eyebrow text-tnky-blue">
                Explore the Five Paths
              </p>
              <div className="mt-5 grid grid-cols-1 gap-3">
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

      {/* ── FIFTH SECTION — Today's Skilled Professional. Owner. ──── */}
      <FadeInSection className="bg-tnky-white">
        <div className="max-w-content mx-auto px-4 py-24 sm:px-8 md:py-28">
          <div className="max-w-3xl">
            <SectionHeading eyebrow="From Apprentice to Owner">
              Today&apos;s Skilled Professional. Tomorrow&apos;s Business Owner.
            </SectionHeading>
            <div className="mt-6 space-y-4 text-lead font-medium leading-relaxed text-tnky-ink [text-wrap:pretty]">
              <p>
                Many successful entrepreneurs started by mastering a valuable skill.
                Electricians, welders, mechanics, HVAC technicians, and contractors
                often go on to lead teams, manage operations, and build companies of
                their own.
              </p>
              <p>
                A skilled career can be more than a job—it can be the foundation for
                leadership, entrepreneurship, and creating opportunities for others.
              </p>
            </div>
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

      {/* ── CALL TO ACTION — quiz CTA ─────────────────────────────── */}
      <div id="students-quiz-cta" className="scroll-mt-[var(--nav-h,64px)]">
        <FadeInSection className="bg-tnky-blue">
          <div className="max-w-content mx-auto px-4 py-24 text-center sm:px-8 md:py-28">
            <h2 className="mx-auto max-w-3xl font-display italic font-extrabold text-3xl md:text-4xl text-tnky-white [text-wrap:balance]">
              Ready to Get Started?
            </h2>
            <div
              aria-hidden="true"
              className="mx-auto mt-4 h-[3px] w-14 rounded-full bg-tnky-safety"
            />
            <p className="mx-auto mt-6 max-w-lead text-lead font-medium text-tnky-cream/90 [text-wrap:pretty]">
              Take the five-minute career quiz and find the skilled-trades path that
              fits who you are.
            </p>
            <div className="mt-8 flex justify-center">
              <Link href="/students/quiz" className={BTN_YELLOW_BLUE}>
                Take the Career Quiz
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </FadeInSection>
      </div>

      {/* ── Newsletter signup (shared site-wide component) ─────────── */}
      <NewsletterBanner />
    </main>
  );
}
