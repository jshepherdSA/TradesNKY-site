import type { Metadata } from "next";
import { Fragment, type ReactNode } from "react";
import Image from "next/image";
import {
  Check,
  Compass,
  GraduationCap,
  Handshake,
  TrendingUp,
  Users,
  type LucideIcon,
} from "lucide-react";
import { FadeInSection } from "../_components/fade-in-section";
import { AudienceHero } from "../_components/audience-hero";
import { SimplePathwaySection } from "../_components/simple-pathway-section";
import { CtaCard as NewsletterBanner } from "../_components/CtaCard";
import { AudienceContactForm } from "../_components/audience-contact-form";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Educators | Trades NKY",
  description:
    "Stronger student outcomes, stronger schools. TradesNKY helps districts improve College & Career Readiness, increase engagement, strengthen graduation outcomes, and ensure every student has a plan.",
};

// Section content from the TradesNKY Website Architecture & Content doc
// (Educational Professionals page).
const SECTIONS: {
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  intro: string[];
  why: string[];
  result: string;
}[] = [
  {
    icon: GraduationCap,
    eyebrow: "College & Career Readiness",
    title: "Boosting College & Career Readiness Outcomes",
    intro: [
      "College & Career Readiness starts long before graduation. TradesNKY helps students connect learning to real-world opportunities through early career exploration, industry engagement, and hands-on experiences that build purpose and direction.",
      "By helping students understand their options sooner, TradesNKY supports stronger postsecondary planning and helps more students graduate with a clear path forward.",
    ],
    why: [
      "CTE students are more likely to graduate and successfully transition into college, training, or careers.",
      "Early career exposure increases engagement and motivation.",
      "Workforce-aligned pathways strengthen College & Career Readiness outcomes.",
      "Career-connected learning expands opportunities for students with diverse interests and goals.",
    ],
    result:
      "More students graduating with a plan, stronger postsecondary outcomes, and a district better prepared for the future.",
  },
  {
    icon: TrendingUp,
    eyebrow: "Graduation & Engagement",
    title: "Higher Graduation Rates & Lower Dropout Risk",
    intro: [
      "Students are more likely to stay engaged when they can see a clear connection between education and opportunity. TradesNKY helps students discover career pathways that align with their interests, giving them greater purpose, direction, and motivation to succeed in school.",
    ],
    why: [
      "CTE students consistently graduate at higher rates than their peers.",
      "Career-connected learning improves attendance, engagement, and academic performance.",
      "Students with defined goals and future pathways are less likely to disengage or drop out.",
      "Connections with local employers help students see the value of education and the opportunities available after graduation.",
    ],
    result:
      "More engaged students, lower dropout risk, higher graduation rates, and stronger outcomes for your district.",
  },
  {
    icon: Compass,
    eyebrow: "A Plan for Every Student",
    title: "Helping More Students Graduate With a Plan",
    intro: [
      "Every student deserves a clear path forward after high school. TradesNKY helps students move beyond career awareness by connecting them with real opportunities, local employers, and clear pathways to success. Students gain a better understanding of the education, training, and credentials needed to achieve their goals.",
      "When students can see a future for themselves, they are more likely to stay engaged, make informed decisions, and leave high school with a clear next step.",
    ],
    why: [
      "CTE students are more likely to have defined postsecondary goals and career plans.",
      "Career-connected learning helps students align their interests and strengths with real opportunities.",
      "Exposure to employers and career pathways reduces uncertainty about life after graduation.",
      "Students with a plan are more likely to successfully transition into college, technical training, apprenticeships, military service, or employment.",
    ],
    result:
      "More students graduating with a plan, stronger postsecondary outcomes, and greater confidence in what's next.",
  },
  {
    icon: Users,
    eyebrow: "Every Student",
    title: "Career Pathways for Every Student",
    intro: [
      "TradesNKY helps students explore a wider range of career opportunities and discover pathways that align with their interests, strengths, and goals. Through career exploration, employer connections, and hands-on experiences, students gain a clearer understanding of their options before graduation.",
    ],
    why: [
      "CTE students are more likely to graduate and successfully transition into education, training, or employment.",
      "Career-connected learning increases engagement by making education more relevant.",
      "Exposure to multiple pathways helps students make more informed decisions about their future.",
      "Strong employer partnerships help align education with regional workforce opportunities.",
    ],
    result:
      "More students discovering their purpose, more graduates leaving with a plan, and more opportunities for every learner.",
  },
  {
    icon: Handshake,
    eyebrow: "Employer Connections",
    title: "Strengthen Connections with Local Employers",
    intro: [
      "TradesNKY helps schools build stronger connections with local employers, giving students greater access to career exploration, workplace experiences, and real-world learning opportunities. These partnerships help students better understand the opportunities available in Northern Kentucky while making classroom learning more relevant and meaningful.",
    ],
    why: [
      "Students gain exposure to real careers and local employers.",
      "Career-connected learning increases engagement and career awareness.",
      "Schools expand access to industry expertise, job shadowing, and work-based learning opportunities.",
      "Stronger school-business partnerships help align education with regional workforce needs.",
    ],
    result:
      "More informed students, stronger community partnerships, and clearer pathways from education to opportunity.",
  },
];

// One topical image per content section (parallel to SECTIONS by index).
const SECTION_IMAGES: { src: string; alt: string }[] = [
  {
    src: "/images/student-woodworking.jpg",
    alt: "A student building hands-on skills in a CTE workshop",
  },
  {
    src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&q=80",
    alt: "Students working with professionals on a real-world project",
  },
  {
    src: "/images/student-excavator.jpg",
    alt: "A student gaining real-world experience operating equipment",
  },
  {
    src: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&q=80",
    alt: "A student training in a skilled-trades program",
  },
  {
    src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80",
    alt: "Local employers and schools partnering across the community",
  },
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

export default function EducatorsPage() {
  return (
    <main className="bg-tnky-cream">
      {/* ── HERO ────────────────────────────────────────────────── */}
      <AudienceHero
        audience="educators"
        title="Stronger Student Outcomes. Stronger Schools."
        subtitle="TradesNKY helps districts improve College & Career Readiness, increase engagement, strengthen graduation outcomes, and ensure every student has a plan for the future."
        image={{
          src: "/images/students-event.jpg",
          alt: "Students at a Northern Kentucky TradesNKY classroom event",
        }}
        primaryCta={{ text: "Partner With Us", href: "/contact" }}
        secondaryCta={{ text: "About TradesNKY", href: "/about" }}
      />

      {/* ── THE TRADESNKY PATHWAY (shared, directly below hero) ───── */}
      <SimplePathwaySection />

      {/* ── Image band — hands-on, work-based learning ─────────────── */}
      <section className="relative isolate overflow-hidden bg-tnky-blue">
        <Image
          src="/images/students-handson.jpg"
          alt="Students engaged in hands-on, work-based learning in a TradesNKY program"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-tnky-blue/75" />
        <div aria-hidden="true" className="absolute inset-0 bg-tnky-ink/20" />
        <div className="relative z-10 max-w-content mx-auto px-4 py-20 sm:px-8 md:py-24">
          <div className="max-w-2xl">
            <h2 className="font-display italic font-extrabold text-3xl md:text-4xl text-tnky-white [text-wrap:balance]">
              Learning That Connects to the Real World
            </h2>
            <div
              aria-hidden="true"
              className="mt-4 h-[3px] w-14 rounded-full bg-tnky-safety"
            />
            <p className="mt-5 max-w-lead text-lead font-medium text-tnky-white/90 [text-wrap:pretty]">
              Career-connected experiences help students see why school matters—
              turning classroom lessons into real skills, direction, and momentum.
            </p>
          </div>
        </div>
      </section>

      {/* ── Outcome stat tiles ─────────────────────────────────────── */}
      <FadeInSection className="bg-tnky-white">
        <div className="max-w-content mx-auto px-4 py-20 sm:px-8 md:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <SectionHeading center>The Outcomes Districts Care About</SectionHeading>
            <p className="mt-6 text-lead font-medium leading-relaxed text-tnky-ink [text-wrap:pretty]">
              Career-connected learning moves the metrics that matter most—for your
              students and for your district.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: GraduationCap,
                stat: "XX%",
                label: "graduation rate for CTE concentrators",
              },
              {
                icon: TrendingUp,
                stat: "Higher",
                label: "GPA and academic performance",
              },
              {
                icon: Users,
                stat: "Stronger",
                label: "attendance and classroom engagement",
              },
              {
                icon: Compass,
                stat: "X in XX",
                label: "graduate with a clear next step",
              },
            ].map((tile) => {
              const TileIcon = tile.icon;
              return (
                <div
                  key={tile.label}
                  className="rounded-2xl border border-tnky-edge bg-tnky-cream p-7 shadow-tnky-2"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-tnky-blue/10 text-tnky-blue">
                    <TileIcon
                      className="h-6 w-6"
                      strokeWidth={1.75}
                      aria-hidden="true"
                    />
                  </span>
                  <p className="mt-5 font-display font-tnky-black text-stat-lg leading-none text-tnky-blue">
                    {tile.stat}
                  </p>
                  <p className="mt-2 text-body font-medium leading-relaxed text-tnky-ink [text-wrap:pretty]">
                    {tile.label}
                  </p>
                </div>
              );
            })}
          </div>
          <p className="mt-6 text-center text-micro font-medium uppercase tracking-tag text-tnky-mute">
            Figures reflect national CTE research and are illustrative.
          </p>
        </div>
      </FadeInSection>

      {/* ── SECTIONS (from Website Architecture & Content doc) ─────── */}
      {SECTIONS.map((s, i) => {
        const sectionWhite = i % 2 === 1;
        return (
          <Fragment key={s.title}>
            <FadeInSection
              className={sectionWhite ? "bg-tnky-white" : "bg-tnky-cream"}
            >
            <div className="max-w-content mx-auto px-4 py-24 sm:px-8 md:py-28">
              <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
                <div>
                  <SectionHeading>{s.title}</SectionHeading>
                  <div className="mt-6 flow-root max-w-prose space-y-4 text-lead font-medium leading-relaxed text-tnky-ink [text-wrap:pretty]">
                    <figure
                      className={cn(
                        "mb-5 w-full overflow-hidden rounded-xl md:mb-4 md:w-2/5",
                        i % 2 === 0
                          ? "md:float-right md:ml-6"
                          : "md:float-left md:mr-6",
                      )}
                    >
                      <div className="relative aspect-[4/3]">
                        <Image
                          src={SECTION_IMAGES[i].src}
                          alt={SECTION_IMAGES[i].alt}
                          fill
                          sizes="(min-width: 768px) 40vw, 100vw"
                          className="object-cover"
                        />
                      </div>
                    </figure>
                    {s.intro.map((p) => (
                      <p key={p}>{p}</p>
                    ))}
                  </div>
                  <div className="mt-8 rounded-2xl border-l-4 border-tnky-blue bg-tnky-blue/5 p-5">
                    <p className="font-display font-bold uppercase tracking-tag text-meta text-tnky-blue">
                      The Result
                    </p>
                    <p className="mt-1.5 text-body font-medium leading-relaxed text-tnky-ink [text-wrap:pretty]">
                      {s.result}
                    </p>
                  </div>
                </div>
                <div
                  className={cn(
                    "rounded-3xl border border-tnky-edge p-8 shadow-tnky-2 md:p-10",
                    sectionWhite ? "bg-tnky-cream" : "bg-tnky-white",
                  )}
                >
                  <p className="font-display font-extrabold text-card-title text-tnky-ink">
                    Why it matters
                  </p>
                  <div
                    aria-hidden="true"
                    className="mt-3 h-[3px] w-10 rounded-full bg-tnky-safety"
                  />
                  <ul className="mt-5 space-y-4">
                    {s.why.map((w) => (
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
              </div>
            </div>
            </FadeInSection>
            {i === 1 && (
              <section className="relative isolate overflow-hidden bg-tnky-blue">
                <Image
                  src="/images/mentor-student.jpg"
                  alt="An educator working alongside students at a school workforce event"
                  fill
                  sizes="100vw"
                  className="object-cover object-center"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-tnky-blue/80"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-tnky-ink/20"
                />
                <div className="relative z-10 max-w-content mx-auto px-4 py-20 text-center sm:px-8 md:py-24">
                  <p className="mx-auto max-w-3xl font-display italic font-extrabold text-2xl md:text-3xl leading-snug text-tnky-white [text-wrap:balance]">
                    &ldquo;When students can see a future for themselves, they show
                    up, stay engaged, and graduate with a plan.&rdquo;
                  </p>
                  <div
                    aria-hidden="true"
                    className="mx-auto mt-5 h-[3px] w-14 rounded-full bg-tnky-safety"
                  />
                </div>
              </section>
            )}
          </Fragment>
        );
      })}

      {/* ── CTA — direct contact with TradesNKY ───────────────────── */}
      <section className="bg-tnky-blue">
        <div className="max-w-content mx-auto px-4 py-24 sm:px-8 md:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display italic font-extrabold text-3xl md:text-4xl text-tnky-white [text-wrap:balance]">
              Get in Touch with TradesNKY
            </h2>
            <div
              aria-hidden="true"
              className="mx-auto mt-4 h-[3px] w-14 rounded-full bg-tnky-safety"
            />
            <p className="mt-6 text-lead font-medium text-tnky-cream/90 [text-wrap:pretty]">
              Interested in bringing TradesNKY to your school or district? We
              would love to connect.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-tnky-edge bg-tnky-white p-6 shadow-tnky-3 md:p-8">
            <AudienceContactForm defaultRole="Educator" />
          </div>

          <p className="mx-auto mt-6 max-w-2xl text-center text-small text-tnky-white/70">
            Or email us directly at{" "}
            <a
              href="mailto:info@tradesnky.org"
              className="font-semibold text-tnky-white underline underline-offset-4 transition-colors duration-150 hover:text-tnky-safety focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tnky-white focus-visible:ring-offset-2 focus-visible:ring-offset-tnky-blue"
            >
              info@tradesnky.org
            </a>
          </p>
        </div>
      </section>

      <NewsletterBanner />
    </main>
  );
}
