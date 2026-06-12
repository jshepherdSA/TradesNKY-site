import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
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
import { CtaCard as NewsletterBanner } from "../_components/CtaCard";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Employers | Trades NKY",
  description:
    "Building the workforce your business needs. TradesNKY helps employers develop a stronger talent pipeline by connecting students to skilled careers and reducing workforce shortages.",
};

const BTN_YELLOW_BLUE =
  "inline-flex items-center justify-center gap-2 rounded-pill bg-tnky-safety px-8 py-4 font-display font-bold text-button text-tnky-safety-ink shadow-tnky-safety transition-all duration-200 ease-tnky hover:-translate-y-px hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tnky-white focus-visible:ring-offset-2 focus-visible:ring-offset-tnky-blue";
const BTN_OUTLINE_BLUE =
  "inline-flex items-center justify-center gap-2 rounded-pill border-2 border-tnky-white px-8 py-4 font-display font-bold text-button text-tnky-white transition-all duration-200 ease-tnky hover:-translate-y-px hover:bg-tnky-white hover:text-tnky-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tnky-white focus-visible:ring-offset-2 focus-visible:ring-offset-tnky-blue";

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

export default function EmployersPage() {
  return (
    <main className="bg-tnky-cream">
      {/* ── HERO ────────────────────────────────────────────────── */}
      <section className="relative flex min-h-[62vh] items-center overflow-hidden bg-tnky-blue">
        <Image
          src="/images/student-excavator.jpg"
          alt="A skilled worker operates equipment on a Northern Kentucky job site"
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
              For Employers
            </p>
            <h1 className="mt-3 font-display italic font-extrabold text-4xl md:text-6xl text-tnky-white [text-wrap:balance]">
              Building the Workforce Your Business Needs
            </h1>
            <div
              aria-hidden="true"
              className="mx-auto mt-5 h-1 w-20 rounded-full bg-tnky-safety"
            />
            <p className="mx-auto mt-6 max-w-lead text-lead font-medium text-tnky-cream/95 [text-wrap:pretty]">
              TradesNKY helps employers develop a stronger talent pipeline by
              connecting students to skilled careers, reducing workforce shortages,
              and preparing the next generation of employees for long-term success.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/contact" className={BTN_YELLOW_BLUE}>
                Become a Partner
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link href="/about" className={BTN_OUTLINE_BLUE}>
                About TradesNKY
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTIONS (from Website Architecture & Content doc) ─────── */}
      {SECTIONS.map((s, i) => {
        const sectionWhite = i % 2 === 1;
        return (
          <FadeInSection
            key={s.title}
            className={sectionWhite ? "bg-tnky-white" : "bg-tnky-cream"}
          >
            <div className="max-w-content mx-auto px-4 py-24 sm:px-8 md:py-28">
              <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
                <div>
                  <SectionHeading eyebrow={s.eyebrow}>{s.title}</SectionHeading>
                  <div className="mt-6 max-w-prose space-y-4 text-lead font-medium leading-relaxed text-tnky-ink [text-wrap:pretty]">
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
        );
      })}

      {/* ── CTA ─────────────────────────────────────────────────── */}
      <FadeInSection className="bg-tnky-blue">
        <div className="max-w-content mx-auto px-4 py-24 text-center sm:px-8 md:py-28">
          <h2 className="mx-auto max-w-3xl font-display italic font-extrabold text-3xl md:text-4xl text-tnky-white [text-wrap:balance]">
            Partner With TradesNKY
          </h2>
          <div
            aria-hidden="true"
            className="mx-auto mt-4 h-[3px] w-14 rounded-full bg-tnky-safety"
          />
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/contact" className={BTN_YELLOW_BLUE}>
              Become a Partner
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link href="/about" className={BTN_OUTLINE_BLUE}>
              About TradesNKY
            </Link>
          </div>
          <p className="mt-6 text-small font-medium text-tnky-white/80">
            Invest in the workforce your business needs.
          </p>
        </div>
      </FadeInSection>

      <NewsletterBanner />
    </main>
  );
}
