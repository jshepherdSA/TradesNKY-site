"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type Transition,
  type Variants,
} from "framer-motion";
import {
  BookOpen,
  Briefcase,
  ChevronRight,
  Globe,
  GraduationCap,
  Heart,
  Landmark,
  MapPin,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// brand --ease-tnky-in-out: cubic-bezier(0.65, 0, 0.35, 1)
const EASE: [number, number, number, number] = [0.65, 0, 0.35, 1];
const CLIP_CLOSED = "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)";
const CLIP_OPEN = "polygon(25% 0, 100% 0, 100% 100%, 0% 100%)";

// Audience-banner diagonal (desktop only — see the md:[clip-path:…] utility on
// the banner). The clip drops the banner's TOP edge 5rem from left → right (a
// "down-right" diagonal). Because the banner overlaps the bottom of the hero
// image, that same line becomes the image panel's lower-right edge — the two
// interlock along one shared angle. On mobile the image is hidden and the
// section flows at natural height, so the banner keeps a flat top.

type CtaLink = { text: string; href: string };

type Audience = {
  label: string;
  href: string;
  icon: LucideIcon;
};

const AUDIENCES: Audience[] = [
  { label: "Student", href: "/students", icon: GraduationCap },
  { label: "Parent", href: "/parents", icon: Heart },
  { label: "Educator", href: "/educators", icon: BookOpen },
  { label: "Employer", href: "/employers", icon: Briefcase },
  { label: "Policymaker", href: "/policymakers", icon: Landmark },
];

type HeroSectionProps = {
  subtitle?: string;
  primaryCta?: CtaLink;
  secondaryCta?: CtaLink;
  backgroundImage?: { src: string; alt: string };
  contactInfo?: {
    website: { label: string; href: string };
    address: string;
  };
};

// Two-part rotating headline: [PILLAR] [PAIRED]. The pillar (left) holds while
// its pool of paired words (right) cycles, then advances to the next pillar.
// Order and pools are fixed; the first visible pair is always BUILD FUTURES.
const PILLAR_PAIRS: {
  pillar: string;
  /** Tailwind text-color class for the pillar's DESIGN.md color token. */
  pillarColor: string;
  pairs: string[];
}[] = [
  {
    pillar: "Build",
    pillarColor: "text-pillar-build",
    pairs: ["Futures", "Homes", "Systems", "Infrastructure", "Paths"],
  },
  {
    pillar: "Make",
    pillarColor: "text-pillar-make",
    pairs: ["Machines", "Robots", "Products", "Cars", "Components"],
  },
  {
    pillar: "Power",
    pillarColor: "text-pillar-power",
    pairs: [
      "Your City",
      "Your Community",
      "Sustainably",
      "America",
      "Local Businesses",
    ],
  },
  {
    pillar: "Move",
    pillarColor: "text-pillar-move",
    pairs: ["People", "Products", "Food", "Packages", "Freight"],
  },
  {
    pillar: "Protect",
    pillarColor: "text-pillar-protect",
    pairs: [
      "Your Community",
      "Local Businesses",
      "Public Health",
      "The Workforce",
      "The Environment",
    ],
  },
];

const WORD_TRANSITION: Transition = { duration: 0.5, ease: EASE };

type Rotation = { pillarIndex: number; poolIndices: number[] };

// Advance both words one step: the pillar cycles BUILD → MAKE → POWER → MOVE →
// PROTECT, and every time the cycle returns to the first pillar each pillar's
// own pool counter advances — so a pillar shows its next paired word each time
// it comes back around.
function advanceRotation(prev: Rotation): Rotation {
  const pillarIndex = (prev.pillarIndex + 1) % PILLAR_PAIRS.length;
  const poolIndices =
    pillarIndex === 0
      ? prev.poolIndices.map((c, i) => (c + 1) % PILLAR_PAIRS[i].pairs.length)
      : prev.poolIndices;
  return { pillarIndex, poolIndices };
}

const DEFAULT_BG = {
  src: "/images/student-excavator.jpg",
  alt: "A student operates a compact excavator at a Northern Kentucky trades program",
};
const DEFAULT_CONTACT = {
  website: { label: "tradesnky.org", href: "https://tradesnky.org" },
  address: "Northern Kentucky",
};

export function HeroSection({
  subtitle = "Connecting students, families, and employers to high-demand careers in construction, electrical, HVAC, and more.",
  primaryCta = { text: "Take the Quiz", href: "/students/quiz" },
  secondaryCta = { text: "Explore Careers", href: "#five-pillars-heading" },
  backgroundImage = DEFAULT_BG,
  contactInfo = DEFAULT_CONTACT,
}: HeroSectionProps) {
  const [started, setStarted] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [rotation, setRotation] = useState<Rotation>({
    pillarIndex: 0,
    poolIndices: PILLAR_PAIRS.map(() => 0),
  });
  const [rotationStarted, setRotationStarted] = useState(false);
  const reducedMotion = useReducedMotion();

  // Hero arrow visibility — true while the hero <section> is in the viewport
  // (driven by the IntersectionObserver below). Starts true for first paint.
  const sectionRef = useRef<HTMLElement | null>(null);
  const [heroVisible, setHeroVisible] = useState(true);

  useEffect(() => {
    setStarted(true);
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // Fade the hero arrow out once the hero scrolls out of view, and back in
  // when it returns. Watches the hero <section> itself.
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setHeroVisible(entry.isIntersecting),
      { threshold: 0 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const animationsOn = started && isDesktop && !reducedMotion;
  // Banner slide-up + button cascade run on all viewports (the image-panel
  // clip reveal is the only desktop-gated motion).
  const introOn = started && !reducedMotion;

  // Headline rotation. BUILD FUTURES holds for 2s on mount (the existing timing
  // fix), then both words advance together every 2.5s. Disabled under
  // prefers-reduced-motion, leaving BUILD FUTURES static.
  useEffect(() => {
    if (reducedMotion) return;
    const id = setTimeout(() => {
      setRotation(advanceRotation);
      setRotationStarted(true);
    }, 2000);
    return () => clearTimeout(id);
  }, [reducedMotion]);

  useEffect(() => {
    if (reducedMotion || !rotationStarted) return;
    const id = setInterval(() => {
      setRotation(advanceRotation);
    }, 2500);
    return () => clearInterval(id);
  }, [reducedMotion, rotationStarted]);

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: animationsOn
        ? { staggerChildren: 0.12, delayChildren: 0.08 }
        : { duration: 0 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: animationsOn ? { duration: 0.5, ease: EASE } : { duration: 0 },
    },
  };

  // Audience buttons: cascade left → right after the banner settles (~400ms
  // delay so the slide-up finishes first), each popping from scale 1.4 → 1.0
  // with a 120ms stagger. Under prefers-reduced-motion the scale is dropped —
  // the buttons simply fade in.
  const buttonsContainer: Variants = {
    hidden: {},
    visible: {
      transition: started
        ? { delayChildren: 0.4, staggerChildren: 0.12 }
        : { duration: 0 },
    },
  };

  const buttonItem: Variants = {
    hidden: { opacity: 0, scale: reducedMotion ? 1 : 1.4 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: reducedMotion ? 0.25 : 0.32, ease: EASE },
    },
  };

  const activePillar = PILLAR_PAIRS[rotation.pillarIndex];
  const current = {
    pillar: activePillar.pillar,
    pillarColor: activePillar.pillarColor,
    pair: activePillar.pairs[rotation.poolIndices[rotation.pillarIndex]],
  };

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-tnky-cream md:h-[calc(100vh_-_var(--nav-h,64px))]"
    >
      <div className="max-w-content mx-auto h-full px-4 sm:px-8">
        <div className="flex h-full flex-col md:flex-row">
          {/* Left: content — top-aligned so it clears the banner overlapping
              the lower portion of the hero. */}
          <motion.div
            className="flex w-full flex-col pt-12 pb-2 md:w-1/2 md:pr-8 lg:w-3/5"
            variants={containerVariants}
            initial="hidden"
            animate={started ? "visible" : "hidden"}
          >
            {/* Two-part rotating headline: [PILLAR] [PAIRED]. */}
            <motion.h1
              variants={itemVariants}
              className="font-display italic font-tnky-black whitespace-nowrap leading-none tracking-[-0.025em] text-[length:clamp(2rem,4.5vw,4.5rem)]"
            >
              {/* Pillar word (left): enters from above, exits upward; only
                  re-keys — and therefore animates — when the pillar changes. */}
              <span className="relative inline-block h-[1.2em] overflow-hidden px-1 align-bottom">
                <span aria-hidden="true" className="invisible">
                  {current.pillar}
                </span>
                <AnimatePresence initial={false}>
                  <motion.span
                    key={current.pillar}
                    className={cn(
                      "absolute left-1 top-0 whitespace-nowrap",
                      current.pillarColor,
                    )}
                    initial={{ y: -40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 40, opacity: 0 }}
                    transition={WORD_TRANSITION}
                  >
                    {current.pillar}
                  </motion.span>
                </AnimatePresence>
              </span>{" "}
              {/* Paired word (right): enters from below, exits downward;
                  re-keys on every cycle. */}
              <span className="relative inline-block h-[1.2em] overflow-hidden px-1 align-bottom text-tnky-blue">
                <span aria-hidden="true" className="invisible">
                  {current.pair}
                </span>
                <AnimatePresence initial={false}>
                  <motion.span
                    key={`${rotation.pillarIndex}-${rotation.poolIndices[rotation.pillarIndex]}`}
                    className="absolute left-1 top-0 whitespace-nowrap"
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -40, opacity: 0 }}
                    transition={WORD_TRANSITION}
                  >
                    {current.pair}
                  </motion.span>
                </AnimatePresence>
              </span>
            </motion.h1>

            {/* Short tnky-safety yellow accent */}
            <motion.div
              aria-hidden="true"
              variants={itemVariants}
              className="mt-4 h-[3px] w-14 rounded-full bg-tnky-safety"
            />

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="mt-6 max-w-lead text-lead text-tnky-mute [text-wrap:pretty]"
            >
              {subtitle}
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Button
                asChild
                size="lg"
                className="rounded-pill font-display font-bold text-button text-tnky-white h-auto px-8 py-4 text-base"
              >
                <Link href={primaryCta.href}>{primaryCta.text}</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-pill border-tnky-blue font-display font-bold text-button text-tnky-blue h-auto px-8 py-4 text-base"
              >
                <Link href={secondaryCta.href}>{secondaryCta.text}</Link>
              </Button>
            </motion.div>

            {/* Contact row */}
            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-col gap-3 text-small text-tnky-mute sm:flex-row sm:flex-wrap sm:gap-x-6"
            >
              <a
                href={contactInfo.website.href}
                className="inline-flex items-center gap-2 rounded-sm transition-colors duration-150 hover:text-tnky-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tnky-blue focus-visible:ring-offset-2 focus-visible:ring-offset-tnky-cream"
              >
                <Globe
                  className="h-4 w-4 shrink-0 text-tnky-blue"
                  aria-hidden="true"
                />
                {contactInfo.website.label}
              </a>
              <span className="inline-flex items-center gap-2">
                <MapPin
                  className="h-4 w-4 shrink-0 text-tnky-blue"
                  aria-hidden="true"
                />
                {contactInfo.address}
              </span>
            </motion.div>
          </motion.div>

          {/* Right: clip-path image panel. Its diagonal LEFT edge reveals on
              load; its bottom-right is later cut by the audience banner's
              diagonal top, giving it a diagonal right edge that runs
              down-right and interlocks with the banner. */}
          <motion.div
            className="relative hidden overflow-hidden md:block flex-1 md:mr-[calc(50%_-_50vw)]"
            initial={{ clipPath: CLIP_CLOSED }}
            animate={{ clipPath: started ? CLIP_OPEN : CLIP_CLOSED }}
            transition={
              animationsOn ? { duration: 1.2, ease: EASE } : { duration: 0 }
            }
          >
            <Image
              src={backgroundImage.src}
              alt={backgroundImage.alt}
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 50vw"
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>

      {/* Hand-drawn arrow image aimed up at the "Take the Quiz" button in the
          nav. Desktop only (z-30); fades in on load with a short delay and
          tracks the hero's viewport visibility via the IntersectionObserver
          above. Rotated so the upward-pointing tip angles toward the top-right
          where the nav button sits. */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute right-[11%] top-[2%] z-30 hidden md:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: heroVisible ? 1 : 0 }}
        transition={
          reducedMotion
            ? { duration: 0.2 }
            : { duration: 0.5, delay: 0.6, ease: EASE }
        }
      >
        <Image
          src="/brand/arrow.png"
          alt=""
          width={140}
          height={140}
          className="rotate-[26deg]"
        />
      </motion.div>

      {/* Audience banner — full-bleed, absolutely pinned to the bottom of the
          hero. Diagonal top (down-right) interlocks with the hero image; the
          whole banner slides up from below on load, then the five buttons
          cascade in left → right. */}
      <motion.div
        className="relative z-20 bg-tnky-blue text-tnky-white md:absolute md:inset-x-0 md:bottom-0 md:h-[32%] md:[clip-path:polygon(0%_0%,100%_5rem,100%_100%,0%_100%)]"
        initial={{ y: "100%" }}
        animate={{ y: started ? "0%" : "100%" }}
        transition={
          introOn
            ? { type: "spring", stiffness: 90, damping: 18 }
            : { duration: 0 }
        }
      >
        <div className="max-w-content mx-auto flex h-full w-full flex-col justify-center gap-4 px-4 py-7 sm:px-8 md:gap-5 md:py-0">
          {/* Header — "Who Are You?" heading + yellow rule (no subheader). */}
          <div>
            <h2 className="font-display italic font-extrabold text-h3 text-tnky-white">
              Who Are You?
            </h2>
            <div
              aria-hidden="true"
              className="mt-2 h-[3px] w-14 rounded-full bg-tnky-safety"
            />
          </div>

          {/* Audience buttons — single flex row of 5 equal tiles on md+,
              2-col grid with the fifth centered on mobile. Each pops in on a
              left → right cascade. */}
          <motion.div
            className="grid grid-cols-2 gap-3 sm:gap-4 md:flex md:flex-row md:flex-nowrap"
            variants={buttonsContainer}
            initial="hidden"
            animate={started ? "visible" : "hidden"}
          >
            {AUDIENCES.map((audience, i) => {
              const Icon = audience.icon;
              const isLast = i === AUDIENCES.length - 1;
              return (
                <motion.div
                  key={audience.href}
                  variants={buttonItem}
                  className={cn(
                    "md:flex-1",
                    isLast &&
                      "col-span-2 mx-auto w-[calc(50%-0.375rem)] sm:w-[calc(50%-0.5rem)] md:mx-0 md:w-auto",
                  )}
                >
                  <Link
                    href={audience.href}
                    className="group relative flex h-full flex-row items-center gap-3 rounded-2xl border-2 border-tnky-safety bg-tnky-white px-3 py-2 text-tnky-blue transition-all duration-200 ease-tnky hover:-translate-y-1 hover:bg-tnky-blue hover:text-tnky-white hover:shadow-tnky-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tnky-safety focus-visible:ring-offset-2 focus-visible:ring-offset-tnky-blue"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-tnky-blue/10 text-tnky-blue transition-colors duration-200 ease-tnky group-hover:bg-tnky-white/20 group-hover:text-tnky-white">
                      <Icon
                        className="h-5 w-5"
                        strokeWidth={1.75}
                        aria-hidden="true"
                      />
                    </span>

                    <p className="min-w-0 font-display font-extrabold text-button leading-tight text-current">
                      {audience.label}
                    </p>

                    <ChevronRight
                      className="ml-auto h-4 w-4 shrink-0 -translate-x-1 text-tnky-blue/0 transition-all duration-200 ease-tnky group-hover:translate-x-0 group-hover:text-tnky-white/70"
                      aria-hidden="true"
                    />
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
