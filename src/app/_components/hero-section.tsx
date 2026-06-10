"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import {
  BookOpen,
  Briefcase,
  ChevronRight,
  Globe,
  GraduationCap,
  Heart,
  Landmark,
  MapPin,
  Phone,
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
  titlePrefix?: string;
  rotatingWords?: string[];
  interval?: number;
  subtitle?: string;
  primaryCta?: CtaLink;
  secondaryCta?: CtaLink;
  backgroundImage?: { src: string; alt: string };
  contactInfo?: {
    website: { label: string; href: string };
    phone: { label: string; href: string };
    address: string;
  };
};

const DEFAULT_ROTATING = ["Skills.", "Futures.", "A Career.", "Connections."];
const DEFAULT_BG = {
  src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop",
  alt: "Skilled trades worker on the job in Northern Kentucky",
};
const DEFAULT_CONTACT = {
  website: { label: "tradesnky.org", href: "https://tradesnky.org" },
  phone: { label: "(859) 555-0100", href: "tel:+18595550100" },
  address: "Northern Kentucky",
};

export function HeroSection({
  titlePrefix = "Build",
  rotatingWords = DEFAULT_ROTATING,
  interval = 7000,
  subtitle = "Connecting students, families, and employers to high-demand careers in construction, electrical, HVAC, and more.",
  primaryCta = { text: "Take the Quiz", href: "/students/quiz" },
  secondaryCta = { text: "Explore Careers", href: "#five-pillars-heading" },
  backgroundImage = DEFAULT_BG,
  contactInfo = DEFAULT_CONTACT,
}: HeroSectionProps) {
  const [started, setStarted] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [firstAdvanceDone, setFirstAdvanceDone] = useState(false);
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

  // First advance fires once 2s after the component is animation-ready;
  // subsequent advances run on a normal setInterval at `interval`.
  useEffect(() => {
    if (!animationsOn || firstAdvanceDone) return;
    const id = setTimeout(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
      setFirstAdvanceDone(true);
    }, 2000);
    return () => clearTimeout(id);
  }, [animationsOn, firstAdvanceDone, rotatingWords.length]);

  useEffect(() => {
    if (!animationsOn || !firstAdvanceDone) return;
    const id = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, interval);
    return () => clearInterval(id);
  }, [animationsOn, firstAdvanceDone, interval, rotatingWords.length]);

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

  const longestWord = rotatingWords.reduce(
    (a, b) => (b.length > a.length ? b : a),
    "",
  );

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
            {/* Headline with rotating word */}
            <motion.h1
              variants={itemVariants}
              className="font-display italic font-tnky-black whitespace-nowrap leading-none tracking-[-0.025em] text-[length:clamp(2rem,4.5vw,4.5rem)]"
            >
              <span className="inline-block px-1 text-tnky-black">
                {titlePrefix}
              </span>{" "}
              <span className="relative inline-block h-[1em] overflow-hidden px-1 align-bottom text-tnky-blue">
                <span aria-hidden="true" className="invisible">
                  {longestWord}
                </span>
                {rotatingWords.map((word, i) => (
                  <motion.span
                    key={word}
                    className="absolute left-0 top-0"
                    initial={i === 0 ? false : { opacity: 0, y: -100 }}
                    animate={
                      wordIndex === i
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: wordIndex > i ? -150 : 150 }
                    }
                    transition={
                      animationsOn
                        ? { duration: 0.5, ease: EASE }
                        : { duration: 0 }
                    }
                  >
                    {word}
                  </motion.span>
                ))}
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
              <a
                href={contactInfo.phone.href}
                className="inline-flex items-center gap-2 rounded-sm transition-colors duration-150 hover:text-tnky-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tnky-blue focus-visible:ring-offset-2 focus-visible:ring-offset-tnky-cream"
              >
                <Phone
                  className="h-4 w-4 shrink-0 text-tnky-blue"
                  aria-hidden="true"
                />
                {contactInfo.phone.label}
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
