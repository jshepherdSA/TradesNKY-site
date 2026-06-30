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
import { AudienceHero } from "../_components/audience-hero";
import { CtaCard as NewsletterBanner } from "../_components/CtaCard";
import { ReadMore } from "../_components/read-more";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Parents | Trades NKY",
  description:
    "Success doesn't have just one path. See how skilled trades and technical education help students build real skills, earn while they learn, and keep doors open for the future.",
};

const BTN_YELLOW_BLUE =
  "inline-flex items-center justify-center gap-2 rounded-pill bg-tnky-safety px-8 py-4 font-display font-bold text-button text-tnky-safety-ink shadow-tnky-safety transition-all duration-200 ease-tnky hover:-translate-y-px hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tnky-white focus-visible:ring-offset-2 focus-visible:ring-offset-tnky-blue";
const BTN_OUTLINE_BLUE =
  "inline-flex items-center justify-center gap-2 rounded-pill border-2 border-tnky-white px-8 py-4 font-display font-bold text-button text-tnky-white transition-all duration-200 ease-tnky hover:-translate-y-px hover:bg-tnky-white hover:text-tnky-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tnky-white focus-visible:ring-offset-2 focus-visible:ring-offset-tnky-blue";

// Section Two — the pathways TradesNKY introduces students to.
const TIMELINE: { icon: LucideIcon; label: string }[] = [
  { icon: BadgeCheck, label: "Certifications" },
  { icon: Hammer, label: "Apprenticeships" },
  { icon: GraduationCap, label: "Associate Degrees" },
  { icon: BookOpen, label: "Bachelor's Degrees" },
  { icon: Users, label: "Leadership Opportunities" },
  { icon: Briefcase, label: "Business Ownership" },
];

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

export default function ParentsPage() {
  return (
    <main className="bg-tnky-cream">
      {/* ── HERO — “Success Doesn't Have Just One Path” ───────────── */}
      <AudienceHero
        audience="parents"
        title="Success Doesn't Have Just One Path"
        subtitle="TradesNKY helps students discover pathways that create opportunity today while keeping doors open for tomorrow."
        image={{
          src: "/images/mentor-student.jpg",
          alt: "A mentor and a young adult working together in a Northern Kentucky trades setting",
        }}
        primaryCta={{ text: "Take the Career Quiz", href: "/students/quiz" }}
        secondaryCta={{ text: "About TradesNKY", href: "/about/what-is-tradesnky" }}
      />

      {/* ── FIRST SECTION — Every Child Deserves a Pathway ────────── */}
      <FadeInSection className="bg-tnky-cream">
        <div className="max-w-content mx-auto px-4 py-24 sm:px-8 md:py-28">
          <div className="mx-auto max-w-3xl">
            <SectionHeading>
              Every Child Deserves a Pathway to Success
            </SectionHeading>
            <div className="mt-6 flow-root space-y-4 text-lead font-medium leading-relaxed text-tnky-ink [text-wrap:pretty]">
              <figure className="w-full overflow-hidden rounded-xl md:float-left md:mb-4 md:mr-6 md:w-2/5">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/images/students-event.jpg"
                    alt="Students exploring career pathways together"
                    fill
                    sizes="(min-width: 768px) 40vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </figure>
              <ReadMore
                pClassName="text-lead font-medium leading-relaxed text-tnky-ink [text-wrap:pretty]"
                paragraphs={[
                  "Every student has unique talents, interests, and goals. TradesNKY helps all students, regardless of their learning style, explore careers and discover pathways that align with their strengths.",
                  "Research shows that students who participate in high-quality career and technical education programs are often more engaged in school, perform better academically, and are more likely to graduate prepared for their next step. By connecting classroom learning to real-world applications, TradesNKY helps students build confidence, direction, and a strong foundation for future success.",
                ]}
              />
            </div>
            <div className="mt-10 border-l-4 border-tnky-safety pl-6 md:pl-8">
              <p className="font-display italic font-bold text-2xl md:text-3xl leading-snug text-tnky-blue [text-wrap:balance]">
                Success isn&apos;t about choosing one path forever. It&apos;s about
                helping students discover their strengths and build a foundation for
                whatever comes next.
              </p>
            </div>
          </div>
        </div>
      </FadeInSection>

      {/* ── SECOND SECTION — A Foundation for Whatever Comes Next ─── */}
      <FadeInSection className="bg-tnky-white">
        <div className="max-w-content mx-auto px-4 py-24 sm:px-8 md:py-28">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <SectionHeading>
                A Foundation for Whatever Comes Next
              </SectionHeading>
              <ReadMore
                className="mt-6 max-w-prose"
                pClassName="text-lead font-medium leading-relaxed text-tnky-ink [text-wrap:pretty]"
                paragraphs={[
                  "The most successful careers are rarely built in a straight line. Today's workforce rewards people who continue learning, developing new skills, and adapting to new opportunities.",
                  "TradesNKY introduces students to career pathways that can lead to certifications, apprenticeships, degrees, leadership opportunities, and even business ownership. By helping students build skills and experience early, they gain a foundation that can support any future they dream up.",
                ]}
              />
            </div>

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
        </div>
      </FadeInSection>

      {/* ── THIRD SECTION — Financial Independence Without Debt ───── */}
      <FadeInSection className="bg-tnky-cream">
        <div className="max-w-content mx-auto px-4 py-24 sm:px-8 md:py-28">
          <div className="mx-auto max-w-3xl">
            <SectionHeading>
              Financial Independence Without Unnecessary Debt
            </SectionHeading>
            <ReadMore
              className="mt-6"
              pClassName="text-lead font-medium leading-relaxed text-tnky-ink [text-wrap:pretty]"
              paragraphs={[
                "Parents want their children to have the skills, confidence, and opportunities needed to build successful, independent lives.",
                "TradesNKY introduces students to careers that are in high demand, offer strong earning potential, and provide opportunities to earn while they learn. Many students can begin gaining valuable experience and industry credentials while avoiding unnecessary debt that burdens so many young adults.",
              ]}
            />
            <div className="mt-8 rounded-2xl border-l-4 border-tnky-blue bg-tnky-blue/5 p-5">
              <p className="text-body font-medium leading-relaxed text-tnky-ink [text-wrap:pretty]">
                <span className="font-display font-extrabold text-tnky-blue">
                  The bottom line:{" "}
                </span>
                TradesNKY helps students build skills that can lead to financial
                independence, long-term career opportunities, and a future filled
                with possibilities.
              </p>
            </div>

            {/* Trades path vs. 4-year degree comparison infographic */}
            <div className="mt-10 overflow-hidden rounded-2xl border border-tnky-edge shadow-tnky-2">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="bg-tnky-blue p-8 md:p-10">
                  <p className="font-display font-bold uppercase tracking-tag text-meta text-tnky-safety">
                    Skilled Trades Path
                  </p>
                  <p className="mt-3 font-display font-tnky-black text-stat-md leading-none text-tnky-white">
                    Earn from day one
                  </p>
                  <ul className="mt-5 space-y-3">
                    {[
                      "Paid apprenticeships and on-the-job training",
                      "Industry credentials in months, not years",
                      "Little to no student debt",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-body font-medium leading-relaxed text-tnky-white/85 [text-wrap:pretty]"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-tnky-safety"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-tnky-paper p-8 md:p-10">
                  <p className="font-display font-bold uppercase tracking-tag text-meta text-tnky-mute">
                    Traditional 4-Year Degree
                  </p>
                  <p className="mt-3 font-display font-tnky-black text-stat-md leading-none text-tnky-ink">
                    Four years first
                  </p>
                  <ul className="mt-5 space-y-3">
                    {[
                      "Tuition often paid up front through loans",
                      "~$XXK average student-loan debt",
                      "First full-time paycheck after graduation",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-body font-medium leading-relaxed text-tnky-ink/75 [text-wrap:pretty]"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-tnky-mute"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>

      {/* ── FOURTH SECTION — Not the Trades You Remember ──────────── */}
      <FadeInSection className="bg-tnky-white">
        <div className="max-w-content mx-auto px-4 py-24 sm:px-8 md:py-28">
          <div className="mx-auto max-w-4xl">
            <SectionHeading>
              Not the Trades You Remember
            </SectionHeading>
            <div className="mt-6 text-lead font-medium leading-relaxed text-tnky-ink [text-wrap:pretty]">
              <figure className="float-right mb-5 ml-6 w-2/5 max-w-sm sm:ml-8">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-tnky-2">
                  <Image
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1600&auto=format&fit=crop"
                    alt="A technician working with modern electronic components and digital diagnostics"
                    fill
                    sizes="(min-width: 768px) 40vw, 90vw"
                    className="object-cover"
                  />
                </div>
              </figure>
              <ReadMore
                pClassName="text-lead font-medium leading-relaxed text-tnky-ink [text-wrap:pretty]"
                paragraphs={[
                  "Technology, automation, and improved safety standards have transformed modern labor. Today's professionals spend as much time with software as they do hardware.",
                  "Research has shown that as technology has advanced, demand has shifted toward workers who are increasingly hard to replace: those who can operate sophisticated systems, think critically, and most importantly, solve problems themselves.",
                ]}
              />
            </div>
          </div>
        </div>
      </FadeInSection>

      {/* ── FIFTH SECTION — High-Demand Careers in Our Community ──── */}
      <FadeInSection className="bg-tnky-cream">
        <div className="max-w-content mx-auto px-4 py-24 sm:px-8 md:py-28">
          <div className="mx-auto max-w-3xl">
            <SectionHeading>
              High-Demand Careers in Our Community
            </SectionHeading>
            <div className="mt-6 flow-root space-y-4 text-lead font-medium leading-relaxed text-tnky-ink [text-wrap:pretty]">
              <figure className="w-full overflow-hidden rounded-xl md:float-left md:mb-4 md:mr-6 md:w-2/5">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/images/students-building.jpg"
                    alt="A modern construction and manufacturing workplace in Northern Kentucky"
                    fill
                    sizes="(min-width: 768px) 40vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </figure>
              <ReadMore
                pClassName="text-lead font-medium leading-relaxed text-tnky-ink [text-wrap:pretty]"
                paragraphs={[
                  "In the Northern Kentucky region, manufacturing, construction, and technical industries continue to face workforce shortages as experienced workers retire and demand grows.",
                  "This means more opportunities, stronger demand, and a clearer pathway to meaningful careers.",
                  "By connecting learning to real-world careers, students discover their interests and strengths before making important decisions about their future.",
                ]}
              />
            </div>
            <div className="mt-8 rounded-2xl border-l-4 border-tnky-blue bg-tnky-blue/5 p-5">
              <p className="text-body font-medium leading-relaxed text-tnky-ink [text-wrap:pretty]">
                <span className="font-display font-extrabold text-tnky-blue">
                  The bottom line:{" "}
                </span>
                TradesNKY helps students connect with industries that are hiring
                today and will continue to need skilled talent for years to come.
              </p>
            </div>
          </div>
        </div>
      </FadeInSection>

      {/* Regional demand stat band — full-width tnky-blue strip */}
      <section className="bg-tnky-blue">
        <div className="max-w-content mx-auto px-4 py-16 sm:px-8 md:py-20">
          <div className="grid grid-cols-1 gap-10 text-center sm:grid-cols-3 sm:gap-6">
            {[
              {
                stat: "40%",
                label:
                  "of the skilled-trades workforce is nearing retirement this decade",
              },
              {
                stat: "7 in 10",
                label:
                  "employers report difficulty finding the skilled workers they need",
              },
              {
                stat: "90,863",
                label:
                  "open skilled roles across Northern Kentucky's Essential Workforce Industries",
              },
            ].map((s) => (
              <div key={s.stat}>
                <p className="font-display font-tnky-black text-stat-xl leading-none text-tnky-white">
                  {s.stat}
                </p>
                <div
                  aria-hidden="true"
                  className="mx-auto mt-3 h-[3px] w-10 rounded-full bg-tnky-safety"
                />
                <p className="mx-auto mt-3 max-w-xs text-body font-medium text-tnky-white/85 [text-wrap:pretty]">
                  {s.label}
                </p>
              </div>
            ))}
          </div>

          {/* KY Essential Workforce open-role breakdown (Pillars + Data). */}
          <div className="mt-12 border-t border-tnky-white/15 pt-10">
            <p className="text-center font-display font-extrabold uppercase text-eyebrow text-tnky-white/80">
              Open skilled roles across Kentucky&apos;s Essential Workforce
              Industries
            </p>
            <ul className="mx-auto mt-6 grid max-w-3xl grid-cols-1 gap-x-10 gap-y-1 sm:grid-cols-2">
              {[
                ["Transportation", "158,075"],
                ["Installation, Maintenance & Repair", "44,872"],
                ["Construction & Extraction", "35,603"],
                ["Protective Service", "22,157"],
                ["Building & Grounds Cleaning & Maintenance", "43,407"],
              ].map(([label, value]) => (
                <li
                  key={label}
                  className="flex items-baseline justify-between gap-4 border-b border-tnky-white/10 py-2.5"
                >
                  <span className="text-body text-tnky-white/85 [text-wrap:pretty]">
                    {label}
                  </span>
                  <span className="shrink-0 font-display font-tnky-black text-tnky-white">
                    {value}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mx-auto mt-5 flex max-w-3xl items-baseline justify-between gap-4">
              <span className="font-display font-extrabold uppercase tracking-tag text-meta text-tnky-safety">
                Total
              </span>
              <span className="font-display font-tnky-black text-stat-md leading-none text-tnky-white">
                304,114
              </span>
            </div>
            <p className="mt-4 text-center text-mini text-tnky-white/55">
              Source: KYStats
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA — start a conversation + reach out to the school ──── */}
      <FadeInSection className="bg-tnky-blue">
        <div className="max-w-content mx-auto flex min-h-[22rem] flex-col items-center justify-center px-4 py-6 text-center sm:px-8">
          <h2 className="mx-auto max-w-3xl font-display italic font-extrabold text-3xl md:text-4xl text-tnky-white [text-wrap:balance]">
            Start the Conversation
          </h2>
          <div
            aria-hidden="true"
            className="mx-auto mt-4 h-[3px] w-14 rounded-full bg-tnky-safety"
          />
          <p className="mx-auto mt-6 max-w-lead text-lead font-medium text-tnky-cream/90 [text-wrap:pretty]">
            Talk to your student about what excites them. Then reach out to their
            school counselor or CTE coordinator to learn what skilled trades
            pathways are available.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/students/quiz" className={BTN_YELLOW_BLUE}>
              Take the Career Quiz with Your Student
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link href="/contact" className={BTN_OUTLINE_BLUE}>
              Find Your School&apos;s CTE Program
            </Link>
          </div>
        </div>
      </FadeInSection>

      <NewsletterBanner />
    </main>
  );
}
