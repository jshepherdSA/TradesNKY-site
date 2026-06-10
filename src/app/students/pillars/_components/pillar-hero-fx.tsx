"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";
import { wrap } from "@motionone/utils";

// brand --ease-tnky-in-out: cubic-bezier(0.65, 0, 0.35, 1)
const EASE: [number, number, number, number] = [0.65, 0, 0.35, 1];

/**
 * Animations run only on desktop, after mount, and when reduced-motion is not set.
 * Below 768px or with prefers-reduced-motion, callers fall back to a static layout.
 */
function useHeroMotion() {
  const [started, setStarted] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    setStarted(true);
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return started && isDesktop && !reducedMotion;
}

export function RotatingWord({
  words,
  interval = 7000,
}: {
  words: string[];
  interval?: number;
}) {
  const animationsOn = useHeroMotion();
  const [index, setIndex] = useState(0);
  const [firstAdvanceDone, setFirstAdvanceDone] = useState(false);
  const longest = words.reduce((a, b) => (b.length > a.length ? b : a), "");

  // First advance fires once 2s after the component is animation-ready;
  // subsequent advances run on a normal setInterval at `interval`.
  useEffect(() => {
    if (!animationsOn || firstAdvanceDone) return;
    const id = setTimeout(() => {
      setIndex((prev) => (prev + 1) % words.length);
      setFirstAdvanceDone(true);
    }, 2000);
    return () => clearTimeout(id);
  }, [animationsOn, firstAdvanceDone, words.length]);

  useEffect(() => {
    if (!animationsOn || !firstAdvanceDone) return;
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, interval);
    return () => clearInterval(id);
  }, [animationsOn, firstAdvanceDone, interval, words.length]);

  // `px-1` widens the box by ~4px each side so italic glyph overhang
  // on the leftmost/rightmost characters isn't shaved off by the
  // `overflow-hidden` that clips the vertical word-cycle.
  return (
    <span className="relative inline-block h-[1.15em] overflow-hidden whitespace-nowrap px-1 align-baseline text-tnky-white/70">
      <span aria-hidden="true" className="invisible">
        {longest}
      </span>
      {words.map((word, i) => (
        <motion.span
          key={word}
          className="absolute left-0 top-0"
          initial={i === 0 ? false : { opacity: 0, y: -100 }}
          animate={
            index === i
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: index > i ? -150 : 150 }
          }
          transition={
            animationsOn ? { duration: 0.5, ease: EASE } : { duration: 0 }
          }
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

/**
 * Scroll-velocity-driven marquee. Base drift loops continuously; page scroll
 * accelerates and (optionally) reverses the direction. Falls back to a static
 * comma-separated list under prefers-reduced-motion.
 *
 * Adapted from brand-assets/components/text-marque.tsx (fixes applied:
 * Component→OccupationMarquee, clasname→className, default baseVelocity,
 * motion/react→framer-motion).
 */
export function OccupationMarquee({
  occupations,
  baseVelocity = -1,
  scrollDependent = true,
}: {
  occupations: string[];
  baseVelocity?: number;
  scrollDependent?: boolean;
}) {
  const reducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 2], {
    clamp: false,
  });
  // 4 copies of the list = 25% wrap range for seamless looping.
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef(1);
  const animationsOn = mounted && !reducedMotion;

  useAnimationFrame((_t, delta) => {
    if (!animationsOn) return;
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
    if (scrollDependent) {
      if (velocityFactor.get() < 0) {
        directionFactor.current = -1;
      } else if (velocityFactor.get() > 0) {
        directionFactor.current = 1;
      }
    }
    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  if (!animationsOn) {
    return (
      <p className="px-4 text-center font-display font-semibold uppercase tracking-tag text-small text-tnky-white/85 sm:px-8">
        {occupations.join(", ")}
      </p>
    );
  }

  const copies = 4;
  return (
    <div className="overflow-hidden whitespace-nowrap">
      <motion.ul className="flex w-max items-center" style={{ x }}>
        {Array.from({ length: copies }).flatMap((_, copyIdx) =>
          occupations.map((occ, i) => (
            <li
              key={`${copyIdx}-${i}`}
              aria-hidden={copyIdx > 0 ? "true" : undefined}
              className="flex items-center whitespace-nowrap font-display font-semibold uppercase tracking-tag text-small text-tnky-white/85"
            >
              {occ}
              <span aria-hidden="true" className="mx-8 text-tnky-white/30">
                &bull;
              </span>
            </li>
          )),
        )}
      </motion.ul>
    </div>
  );
}
