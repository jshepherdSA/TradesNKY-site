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
import { AudienceHero } from "../_components/audience-hero";
import { CtaCard as NewsletterBanner } from "../_components/CtaCard";
import { ShareButton } from "../_components/share-button";
import { ReadMore } from "../_components/read-more";
import { FivePathsAccordion } from "../_components/five-paths-accordion";
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
// White-outline pill CTA on tnky-blue (secondary).
const BTN_OUTLINE_BLUE =
  "inline-flex items-center justify-center gap-2 rounded-pill border-2 border-tnky-white px-8 py-4 font-display font-bold text-button text-tnky-white transition-all duration-200 ease-tnky hover:-translate-y-px hover:bg-tnky-white hover:text-tnky-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tnky-white focus-visible:ring-offset-2 focus-visible:ring-offset-tnky-blue";

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

// SVG donut — `percent` highlighted in tnky-safety against a tnky-edge ring.
function DonutChart({
  percent,
  valueLabel,
}: {
  percent: number;
  /** When set, the chart renders as a placeholder: this label replaces the
   *  numeric percent and the safety arc is hidden (no value implied). */
  valueLabel?: string;
}) {
  const isPlaceholder = valueLabel !== undefined;
  return (
    <svg
      viewBox="0 0 36 36"
      role="img"
      aria-label={isPlaceholder ? "Figure pending" : `${percent} percent`}
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
      {!isPlaceholder && (
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
      )}
      <text
        className="fill-tnky-ink font-display"
        x="18"
        y="18"
        dominantBaseline="central"
        textAnchor="middle"
        fontSize="8"
        fontWeight="800"
      >
        {valueLabel ?? `${percent}%`}
      </text>
    </svg>
  );
}

export default function StudentsPage() {
  return (
    <main className="bg-tnky-cream">
      {/* ── HERO — “Build Something Bigger Than Yourself” ─────────── */}
      <AudienceHero
        audience="students"
        title="Build Something Bigger Than Yourself"
        subtitle="Explore careers where you can make an impact and build a future."
        image={{
          src: "/images/students-handson.jpg",
          alt: "Students in hard hats taking part in a hands-on TradesNKY workshop",
        }}
        primaryCta={{ text: "Take the Career Quiz", href: "/students/quiz" }}
      />

      {/* ── FIRST SECTION — Turn Your Interests Into a Future ─────── */}
      <FadeInSection className="bg-tnky-white">
        <div className="max-w-content mx-auto px-4 py-24 sm:px-8 md:py-28">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <figure className="relative aspect-[4/3] w-full overflow-hidden rounded-xl shadow-tnky-2">
              <Image
                src="/images/student-woodworking.jpg"
                alt="A student turning a hands-on interest into real, marketable skills"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </figure>
            <div>
              <SectionHeading>
                Turn Your Interests Into a Future You&apos;re Proud Of
              </SectionHeading>
              <ReadMore
                className="mt-6"
                pClassName="text-lead font-medium leading-relaxed text-tnky-ink [text-wrap:pretty]"
                paragraphs={[
                  "The things you enjoy today could lead to an exciting career tomorrow. Whether you're interested in technology, building things, solving problems, or working with your hands, there are career paths that match your strengths. The best careers aren't about following someone else's plan—they're about finding opportunities that fit who you are and where you want to go.",
                ]}
              />
              <a
                href="#students-quiz-cta"
                className="mt-8 inline-flex items-center gap-2 rounded-sm font-display font-bold text-lead text-tnky-blue underline-offset-4 transition-colors duration-200 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tnky-blue focus-visible:ring-offset-2 focus-visible:ring-offset-tnky-white"
              >
                Take the Career Quiz
                <ChevronDown className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </FadeInSection>

      {/* ── THE FIVE PILLARS — interactive accordion (shared component) ── */}
      <FivePathsAccordion />

      {/* ── SECOND SECTION — The Technology Behind Modern Careers ─── */}
      <FadeInSection className="bg-tnky-cream">
        <div className="max-w-content mx-auto px-4 py-24 sm:px-8 md:py-28">
          <div className="mx-auto max-w-3xl">
            <SectionHeading>The Technology Behind Modern Careers</SectionHeading>
            <div className="mt-6 flow-root text-lead font-medium leading-relaxed text-tnky-ink [text-wrap:pretty]">
              <figure className="float-right mb-4 ml-6 w-2/5 max-w-xs sm:ml-8">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-tnky-2">
                  <Image
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80"
                    alt="A student using digital diagnostics on computer-controlled equipment"
                    fill
                    sizes="(min-width: 768px) 40vw, 90vw"
                    className="object-cover"
                  />
                </div>
              </figure>
              <ReadMore
                pClassName="text-lead font-medium leading-relaxed text-tnky-ink [text-wrap:pretty]"
                paragraphs={[
                  "Today's skilled careers combine hands-on work with advanced technology that transforms how things are designed, built, repaired, and maintained. Whether you're interested in solving problems, working with cutting-edge tools, or seeing the results of your work in the real world, skilled careers offer opportunities to work at the intersection of technology, innovation, and practical know-how. The people building tomorrow's communities aren't just using technology—they're helping create and operate it.",
                ]}
              />
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
            <SectionHeading>
              Build Skills. Build Financial Independence
            </SectionHeading>
            <p className="mt-6 text-lead font-medium leading-relaxed text-tnky-ink [text-wrap:pretty]">
              Whether your future includes certifications, apprenticeships,
              college, or a combination of pathways, you&apos;ll be building
              skills that can help you achieve greater independence and long-term
              success.
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
                Many skilled careers offer competitive pay, benefits, and
                advancement opportunities without requiring a college degree. No
                matter what you want to save up for, developing in-demand skills
                can help you become financially independent and thrive without
                paying for a high-priced diploma.
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

          {/* Earn-while-you-learn vs. college-debt comparison infographic */}
          <div className="mt-8 overflow-hidden rounded-2xl border border-tnky-edge shadow-tnky-2">
            <div className="grid grid-cols-1 sm:grid-cols-2">
              <div className="bg-tnky-blue p-8 md:p-10">
                <p className="font-display font-bold uppercase tracking-tag text-meta text-tnky-safety">
                  Earn While You Learn
                </p>
                <p className="mt-3 font-display font-tnky-black text-stat-xl leading-none text-tnky-white">
                  $0
                </p>
                <p className="mt-2 text-body font-bold text-tnky-white">
                  Debt to get started
                </p>
                <p className="mt-3 text-small font-medium leading-relaxed text-tnky-white/80 [text-wrap:pretty]">
                  Apprenticeships and on-the-job training pay you a wage—and often
                  cover credentials—from day one. You earn while you build skills.
                </p>
              </div>
              <div className="bg-tnky-paper p-8 md:p-10">
                <p className="font-display font-bold uppercase tracking-tag text-meta text-tnky-mute">
                  Average 4-Year Path
                </p>
                <p className="mt-3 font-display font-tnky-black text-stat-xl leading-none text-tnky-mute">
                  $35,639
                </p>
                <p className="mt-2 text-body font-bold text-tnky-ink">
                  Average student-loan debt
                </p>
                <p className="mt-3 text-small font-medium leading-relaxed text-tnky-ink/70 [text-wrap:pretty]">
                  Students who borrowed to pursue their bachelor&apos;s degree in
                  2025 took out an average of $35,639 in education loans.
                </p>
                <p className="mt-2 text-mini font-medium text-tnky-ink/50">
                  Source: Education Data Initiative
                </p>
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>

      {/* ── FOURTH SECTION — Career Security In An Uncertain World ── */}
      <FadeInSection className="bg-tnky-cream">
        <div className="max-w-content mx-auto px-4 py-24 sm:px-8 md:py-28">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-10 lg:gap-16">
            <div className="lg:col-span-7">
              <SectionHeading>
                Career Security In An Uncertain World
              </SectionHeading>
              <div className="mt-6 space-y-4 text-lead font-medium leading-relaxed text-tnky-ink [text-wrap:pretty]">
                <ReadMore
                  pClassName="text-lead font-medium leading-relaxed text-tnky-ink [text-wrap:pretty]"
                  paragraphs={[
                    "The world is changing fast. AI and automation are transforming how we work. But communities will always need skilled people—people who can build, repair, maintain, and improve the systems that keep our world running. That's why skilled professionals remain in high demand across Northern Kentucky and throughout the country.",
                  ]}
                />
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
      {/* Full-bleed image band carries the heading + intro; the owner cards
          sit on white directly below it. */}
      <section className="relative isolate overflow-hidden bg-tnky-blue">
        <Image
          src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&q=80"
          alt="Two skilled professionals reviewing plans on a tablet at a job site"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-tnky-blue/85" />
        <div aria-hidden="true" className="absolute inset-0 bg-tnky-ink/25" />
        <div className="relative z-10 max-w-content mx-auto px-4 py-24 sm:px-8 md:py-28">
          <div className="max-w-3xl">
            <h2 className="font-display italic font-extrabold text-3xl md:text-4xl text-tnky-white [text-wrap:balance]">
              Today&apos;s Skilled Professional. Tomorrow&apos;s Business Owner.
            </h2>
            <div
              aria-hidden="true"
              className="mt-4 h-[3px] w-14 rounded-full bg-tnky-safety"
            />
            <ReadMore
              className="mt-6"
              tone="light"
              pClassName="text-lead font-medium leading-relaxed text-tnky-white/90 [text-wrap:pretty]"
              paragraphs={[
                "Many successful entrepreneurs started by mastering a valuable skill. Electricians, welders, mechanics, HVAC technicians, and contractors often go on to lead teams, manage operations, and build companies of their own.",
                "A skilled career can be more than a job—it can be the foundation for leadership, entrepreneurship, and creating opportunities for others.",
              ]}
            />
          </div>
        </div>
      </section>
      <FadeInSection className="bg-tnky-white">
        <div className="max-w-content mx-auto px-4 pb-24 pt-16 sm:px-8 md:pb-28 md:pt-20">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
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

      {/* ── CALL TO ACTION — share with parents & friends ─────────── */}
      <div id="students-quiz-cta" className="scroll-mt-[var(--nav-h,64px)]">
        <FadeInSection className="bg-tnky-blue">
          <div className="max-w-content mx-auto flex min-h-[22rem] flex-col items-center justify-center px-4 py-6 text-center sm:px-8">
            <h2 className="mx-auto max-w-3xl font-display italic font-extrabold text-3xl md:text-4xl text-tnky-white [text-wrap:balance]">
              Know Someone Who Should See This?
            </h2>
            <div
              aria-hidden="true"
              className="mx-auto mt-4 h-[3px] w-14 rounded-full bg-tnky-safety"
            />
            <p className="mx-auto mt-6 max-w-lead text-lead font-medium text-tnky-cream/90 [text-wrap:pretty]">
              Share TradesNKY with a parent, a friend, or anyone who&apos;s trying
              to figure out their next step. The right career path might be closer
              than they think.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/students/quiz" className={BTN_YELLOW_BLUE}>
                Take the Career Quiz
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <ShareButton className={BTN_OUTLINE_BLUE} />
            </div>
          </div>
        </FadeInSection>
      </div>

      {/* ── Newsletter signup (shared site-wide component) ─────────── */}
      <NewsletterBanner />
    </main>
  );
}
