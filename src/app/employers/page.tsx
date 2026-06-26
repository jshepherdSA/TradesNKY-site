import type { Metadata } from "next";
import { Fragment, type ReactNode } from "react";
import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  Factory,
  Handshake,
  TrendingUp,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import { FadeInSection } from "../_components/fade-in-section";
import { AudienceHero } from "../_components/audience-hero";
import { CtaCard as NewsletterBanner } from "../_components/CtaCard";
import { AudienceContactForm } from "../_components/audience-contact-form";
import { ReadMore } from "../_components/read-more";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Employers | Trades NKY",
  description:
    "Building the workforce your business needs. TradesNKY helps employers develop a stronger talent pipeline by connecting students to skilled careers and reducing workforce shortages.",
};

// Section content from the TradesNKY Website Architecture & Content doc
// (Businesses page).
const SECTIONS: {
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  intro: string[];
  why: string[];
  result: string;
}[] = [
  {
    icon: Factory,
    eyebrow: "The Challenge",
    title: "Solving the Skilled Labor Shortage",
    intro: [
      "TradesNKY helps build the future workforce by introducing students to skilled trades careers early and connecting them to education and training pathways that align with industry needs.",
    ],
    why: [
      "Skilled labor shortages continue to limit growth across manufacturing, construction, transportation, utilities, and other sectors.",
      "Early career exposure increases awareness of opportunities that many students may never otherwise consider.",
      "Stronger workforce pipelines help employers reduce reliance on an aging workforce and expand access to future talent.",
    ],
    result:
      "More students entering skilled careers, a stronger talent pipeline, and a workforce better prepared to meet regional demand.",
  },
  {
    icon: TrendingUp,
    eyebrow: "The Investment",
    title: "Investing in Your Future Workforce",
    intro: [
      "Supporting TradesNKY is an investment in the long-term strength of your company and industry. By helping students explore skilled careers earlier, businesses contribute to a larger, more sustainable talent pipeline for years to come.",
    ],
    why: [
      "Workforce shortages can limit productivity, growth, and succession planning.",
      "Strong education-industry partnerships help create a steady flow of future workers.",
      "Industries that invest in workforce development are better positioned for long-term competitiveness.",
    ],
    result:
      "A stronger workforce, improved industry stability, and a better return on workforce development investments.",
  },
  {
    icon: Wallet,
    eyebrow: "The Savings",
    title: "Reducing Recruiting & Training Costs",
    intro: [
      "TradesNKY helps students gain awareness of skilled careers before they enter the workforce, creating a larger pool of candidates who better understand industry expectations and opportunities.",
    ],
    why: [
      "Access to informed candidates can reduce recruiting challenges and shorten hiring timelines.",
      "Early exposure helps students enter the workforce with greater career awareness and interest.",
      "Partnerships between schools and employers create more opportunities to identify future talent.",
    ],
    result:
      "Lower recruiting costs, improved hiring efficiency, and a stronger pipeline of future employees.",
  },
  {
    icon: BadgeCheck,
    eyebrow: "The Readiness",
    title: "Building a More Prepared Workforce",
    intro: [
      "TradesNKY helps students develop a stronger understanding of workplace expectations, career opportunities, and the skills valued by employers before entering the workforce.",
    ],
    why: [
      "Career-connected learning helps students better understand workplace environments and expectations.",
      "Early exposure to industries and employers increases awareness of safety, professionalism, and job responsibilities.",
      "Better-prepared employees often require less onboarding and adapt more quickly to workplace culture.",
    ],
    result:
      "More job-ready employees, stronger workplace performance, and a workforce better prepared for long-term success.",
  },
  {
    icon: Handshake,
    eyebrow: "The Reputation",
    title: "Demonstrating Community Leadership",
    intro: [
      "Supporting TradesNKY demonstrates a commitment to workforce development, education, and the future of Northern Kentucky. It positions your organization as a partner in creating opportunities for the next generation.",
    ],
    why: [
      "Students, parents, educators, and community leaders increasingly value employers that invest in their communities.",
      "Workforce partnerships help strengthen relationships between businesses, schools, and local stakeholders.",
      "Community engagement can enhance employer visibility and support talent attraction efforts.",
    ],
    result:
      "Stronger community relationships, increased brand awareness, and recognition as a leader in workforce development.",
  },
];

// One topical image per content section (parallel to SECTIONS by index).
// `null` means the section intentionally has no image.
const SECTION_IMAGES: ({ src: string; alt: string } | null)[] = [
  {
    src: "/images/students-handson.jpg",
    alt: "Skilled workers on a modern manufacturing floor",
  },
  {
    src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&q=80",
    alt: "Investing in training the next generation of workers",
  },
  {
    src: "/images/student-woodworking.jpg",
    alt: "A skilled worker applying job-ready trade skills",
  },
  // "Building a More Prepared Workforce" — image intentionally omitted
  null,
  {
    src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80",
    alt: "An employer investing in the local community",
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

export default function EmployersPage() {
  return (
    <main className="bg-tnky-cream">
      {/* ── HERO ────────────────────────────────────────────────── */}
      <AudienceHero
        audience="employers"
        title="Building the Workforce Your Business Needs"
        subtitle="TradesNKY helps employers develop a stronger talent pipeline by connecting students to skilled careers, reducing workforce shortages, and preparing the next generation of employees for long-term success."
        image={{
          src: "/images/student-excavator.jpg",
          alt: "A skilled worker operates equipment on a Northern Kentucky job site",
        }}
        primaryCta={{ text: "Become a Partner", href: "/contact" }}
        secondaryCta={{ text: "About TradesNKY", href: "/about" }}
      />

      {/* ── SECTIONS (from Website Architecture & Content doc) ─────── */}
      {SECTIONS.map((s, i) => {
        const sectionWhite = i % 2 === 1;
        const sectionImage = SECTION_IMAGES[i];
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
                    {sectionImage && (
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
                            src={sectionImage.src}
                            alt={sectionImage.alt}
                            fill
                            sizes="(min-width: 768px) 40vw, 100vw"
                            className="object-cover"
                          />
                        </div>
                      </figure>
                    )}
                    <ReadMore
                      paragraphs={s.intro}
                      pClassName="text-lead font-medium leading-relaxed text-tnky-ink [text-wrap:pretty]"
                    />
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

            {/* Talent pipeline — horizontal flow diagram */}
            {i === 0 && (
              <section className="bg-tnky-white">
                <div className="max-w-content mx-auto px-4 py-20 sm:px-8 md:py-24">
                  <div className="mx-auto max-w-2xl text-center">
                    <SectionHeading center>From Classroom to Your Crew</SectionHeading>
                    <p className="mt-6 text-lead font-medium leading-relaxed text-tnky-ink [text-wrap:pretty]">
                      TradesNKY builds a clear path from early career exploration to
                      a prepared local hire.
                    </p>
                  </div>
                  <div className="mt-12 flex flex-col items-stretch gap-4 md:flex-row">
                    {[
                      {
                        title: "Career Exploration",
                        desc: "Students discover skilled-trades careers early.",
                      },
                      {
                        title: "Hands-On Learning",
                        desc: "Real experiences build real, job-ready skills.",
                      },
                      {
                        title: "Credentials & Training",
                        desc: "Apprenticeships and certifications align to your needs.",
                      },
                      {
                        title: "Your Next Hire",
                        desc: "Prepared local talent ready to join your team.",
                      },
                    ].map((step, idx, arr) => (
                      <Fragment key={step.title}>
                        <div className="flex-1 rounded-2xl border border-tnky-edge bg-tnky-cream p-6 text-center shadow-tnky-2">
                          <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-tnky-blue font-display font-tnky-black text-button text-tnky-white">
                            {idx + 1}
                          </span>
                          <p className="mt-4 font-display font-extrabold text-card-title text-tnky-ink">
                            {step.title}
                          </p>
                          <p className="mt-2 text-small font-medium leading-relaxed text-tnky-ink/80 [text-wrap:pretty]">
                            {step.desc}
                          </p>
                        </div>
                        {idx < arr.length - 1 && (
                          <div
                            aria-hidden="true"
                            className="flex items-center justify-center"
                          >
                            <ArrowRight
                              className="h-6 w-6 rotate-90 text-tnky-blue md:rotate-0"
                              strokeWidth={2.25}
                            />
                          </div>
                        )}
                      </Fragment>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {/* Mid-page image band — modern trades workplace */}
            {i === 1 && (
              <section className="relative isolate overflow-hidden bg-tnky-blue">
                <Image
                  src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&q=80"
                  alt="A skilled welder at work on a modern manufacturing floor"
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
                <div className="relative z-10 max-w-content mx-auto px-4 py-20 sm:px-8 md:py-24">
                  <div className="max-w-2xl">
                    <h2 className="font-display italic font-extrabold text-3xl md:text-4xl text-tnky-white [text-wrap:balance]">
                      Where Skilled Talent Goes to Work
                    </h2>
                    <div
                      aria-hidden="true"
                      className="mt-4 h-[3px] w-14 rounded-full bg-tnky-safety"
                    />
                    <p className="mt-5 max-w-lead text-lead font-medium text-tnky-white/90 [text-wrap:pretty]">
                      The students exploring careers today become the welders,
                      technicians, and operators your industry will depend on
                      tomorrow.
                    </p>
                  </div>
                </div>
              </section>
            )}

            {/* ROI — the cost of an unfilled role */}
            {i === 2 && (
              <section className="bg-tnky-white">
                <div className="max-w-content mx-auto px-4 py-20 sm:px-8 md:py-24">
                  <div className="mx-auto max-w-2xl text-center">
                    <SectionHeading center>The Cost of an Unfilled Role</SectionHeading>
                    <p className="mt-6 text-lead font-medium leading-relaxed text-tnky-ink [text-wrap:pretty]">
                      Every open seat carries a price. A ready local pipeline is the
                      most reliable way to lower it.
                    </p>
                  </div>
                  <div className="mt-12 overflow-hidden rounded-3xl border border-tnky-edge shadow-tnky-2 lg:grid lg:grid-cols-5">
                    <div className="flex flex-col justify-center bg-tnky-blue p-8 md:p-10 lg:col-span-2">
                      <p className="font-display font-bold uppercase tracking-tag text-meta text-tnky-safety">
                        Cost to Replace
                      </p>
                      <p className="mt-3 font-display font-tnky-black text-stat-xl leading-none text-tnky-white">
                        ½–2×
                      </p>
                      <p className="mt-3 text-body font-medium leading-relaxed text-tnky-white/85 [text-wrap:pretty]">
                        an employee&apos;s annual salary is the typical cost to
                        replace them.
                      </p>
                    </div>
                    <div className="bg-tnky-cream p-8 md:p-10 lg:col-span-3">
                      <p className="font-display font-extrabold text-card-title text-tnky-ink">
                        Where that cost goes
                      </p>
                      <div
                        aria-hidden="true"
                        className="mt-3 h-[3px] w-10 rounded-full bg-tnky-safety"
                      />
                      <ul className="mt-5 space-y-3">
                        {[
                          "Recruiting, advertising, and screening",
                          "Onboarding and training time",
                          "Lost productivity while the seat sits empty",
                          "Turnover when a new hire isn't the right fit",
                        ].map((item) => (
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
                      <p className="mt-5 text-small font-bold text-tnky-blue">
                        A local talent pipeline reduces all four.
                      </p>
                    </div>
                  </div>
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
              Ready to partner with TradesNKY and build your talent pipeline? Let
              us know.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-tnky-edge bg-tnky-white p-6 shadow-tnky-3 md:p-8">
            <AudienceContactForm defaultRole="Employer" />
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
