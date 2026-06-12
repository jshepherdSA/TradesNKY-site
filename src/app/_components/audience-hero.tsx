import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Briefcase,
  GraduationCap,
  Heart,
  Landmark,
  type LucideIcon,
} from "lucide-react";

/**
 * Full-bleed audience-page hero. Shares the homepage hero's visual language —
 * large bold-italic display heading, tnky-safety accent, and the diagonal
 * clip-path treatment — but rendered over a full-width image with a tnky-blue
 * tinted overlay. All hero text is white / tnky-safety only.
 *
 * Intentionally a server component (no framer-motion): it renders identically
 * with or without client hydration, so the headline is never invisible.
 */

const BTN_PRIMARY =
  "inline-flex items-center justify-center gap-2 rounded-pill bg-tnky-safety px-8 py-4 font-display font-bold text-button text-tnky-safety-ink shadow-tnky-safety transition-all duration-200 ease-tnky hover:-translate-y-px hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tnky-white focus-visible:ring-offset-2 focus-visible:ring-offset-tnky-blue";
const BTN_SECONDARY =
  "inline-flex items-center justify-center gap-2 rounded-pill border-2 border-tnky-white px-8 py-4 font-display font-bold text-button text-tnky-white transition-all duration-200 ease-tnky hover:-translate-y-px hover:bg-tnky-white hover:text-tnky-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tnky-white focus-visible:ring-offset-2 focus-visible:ring-offset-tnky-blue";

export type AudienceKey =
  | "students"
  | "parents"
  | "educators"
  | "employers"
  | "policymakers";

const AUDIENCE_META: Record<
  AudienceKey,
  { eyebrow: string; icon: LucideIcon }
> = {
  students: { eyebrow: "For Students", icon: GraduationCap },
  parents: { eyebrow: "For Parents", icon: Heart },
  educators: { eyebrow: "For Educators", icon: BookOpen },
  employers: { eyebrow: "For Employers", icon: Briefcase },
  policymakers: { eyebrow: "For Policymakers", icon: Landmark },
};

type Cta = { text: string; href: string };

type Props = {
  audience: AudienceKey;
  title: string;
  subtitle: string;
  image: { src: string; alt: string };
  primaryCta: Cta;
  secondaryCta?: Cta;
};

export function AudienceHero({
  audience,
  title,
  subtitle,
  image,
  primaryCta,
  secondaryCta,
}: Props) {
  const { eyebrow, icon: Icon } = AUDIENCE_META[audience];

  return (
    <section className="relative isolate flex min-h-[70vh] items-center overflow-hidden bg-tnky-blue md:min-h-[80vh]">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Layered tnky-blue overlay — left-heavy so the headline always reads,
          with a diagonal wedge on desktop echoing the homepage clip-path. */}
      <div aria-hidden="true" className="absolute inset-0 bg-tnky-ink/30" />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-tnky-blue via-tnky-blue/80 to-tnky-blue/25"
      />
      <div
        aria-hidden="true"
        className="absolute inset-y-0 left-0 hidden w-[60%] bg-tnky-blue/55 md:block md:[clip-path:polygon(0_0,100%_0,72%_100%,0_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-tnky-safety/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-28 -left-24 h-96 w-96 rounded-full bg-tnky-white/5 blur-3xl"
      />

      <div className="relative z-10 max-w-content mx-auto w-full px-4 py-20 sm:px-8">
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2 font-display font-bold uppercase tracking-eyebrow text-eyebrow text-tnky-safety">
            <Icon className="h-5 w-5 shrink-0" strokeWidth={2} aria-hidden="true" />
            {eyebrow}
          </p>
          <h1 className="mt-4 font-display italic font-tnky-black leading-[1.04] tracking-[-0.025em] text-tnky-white text-[length:clamp(2rem,4.5vw,4.5rem)] [text-wrap:balance]">
            {title}
          </h1>
          <div
            aria-hidden="true"
            className="mt-5 h-1 w-20 rounded-full bg-tnky-safety"
          />
          <p className="mt-6 max-w-lead text-lead font-medium text-tnky-white/85 [text-wrap:pretty]">
            {subtitle}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link href={primaryCta.href} className={BTN_PRIMARY}>
              {primaryCta.text}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            {secondaryCta && (
              <Link href={secondaryCta.href} className={BTN_SECONDARY}>
                {secondaryCta.text}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
