"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

// brand --ease-tnky cubic-bezier(0.22, 1, 0.36, 1)
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export type InsightsHeroSlide = {
  category: string;
  title: string;
  excerpt: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
};

type Props = {
  posts: InsightsHeroSlide[];
  /** Auto-advance interval in ms (default 3000). Auto-advance is paused
   *  on hover/focus and disabled under prefers-reduced-motion. */
  interval?: number;
};

/**
 * Auto-cycler — advances the active slide every `interval` ms. The timer
 * is keyed on `current`, so any manual change (clicking a bottom box)
 * resets the next-advance countdown. Pauses while `paused` is true.
 */
function useAutoCycler(total: number, interval: number, paused: boolean) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (paused || total < 2) return;
    const id = window.setTimeout(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, interval);
    return () => window.clearTimeout(id);
  }, [current, total, interval, paused]);

  const setIndex = useCallback(
    (i: number) => {
      setCurrent(((i % total) + total) % total);
    },
    [total],
  );

  return { current, setIndex };
}

/**
 * Featured-posts hero carousel for the Insights page. Rebuilt to more
 * closely resemble brand-assets/components/step-carousel.tsx (centered
 * crossfading content card + bottom click-to-jump nav strip), with the
 * fixes called out in component-guide.md for step-carousel:
 *   • Uses `cn` from `@/lib/utils` — no local duplicate helper, and
 *     `clsx` is not imported separately.
 *   • All colors flow through brand `tnky-*` tokens — no `sky-600` /
 *     `neutral-*` / `dark:*` palette leakage.
 *   • Slides come from a `posts` prop (the step-carousel issue of a
 *     hard-coded `steps` array is avoided).
 *   • `next/image` with `priority` on the first slide and `loading="lazy"`
 *     on the rest — not bare `<img>` with absolute positioning.
 *   • Honors `prefers-reduced-motion` — disables both auto-advance and
 *     the crossfade transition.
 *
 * Height is locked to `calc(100vh - var(--nav-h, 64px))` so the hero
 * fills exactly the visible viewport below the sticky nav. The bottom
 * navigation strip is a horizontal row of article title boxes (category
 * + title); the active box is highlighted with a `tnky-safety` top
 * accent and a `tnky-blue` background.
 */
export function InsightsHeroCarousel({ posts, interval = 3000 }: Props) {
  const reducedMotion = useReducedMotion();
  const [hovered, setHovered] = useState(false);
  const { current, setIndex } = useAutoCycler(
    posts.length,
    interval,
    !!reducedMotion || hovered,
  );
  const active = posts[current];

  if (!active) return null;

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Featured stories"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      className="relative w-full overflow-hidden bg-tnky-black"
      style={{ height: "calc(100vh - var(--nav-h, 64px))" }}
    >
      {/* Crossfading background images — only the active slide is fully
          visible. Under reduced-motion the crossfade is instant. */}
      {posts.map((post, i) => {
        const isActive = i === current;
        return (
          <div
            key={post.href}
            aria-hidden={isActive ? undefined : "true"}
            className={cn(
              "absolute inset-0 transition-opacity ease-tnky",
              reducedMotion ? "duration-0" : "duration-700",
              isActive ? "opacity-100" : "opacity-0",
            )}
          >
            <Image
              src={post.imageSrc}
              alt={post.imageAlt}
              fill
              sizes="100vw"
              priority={i === 0}
              loading={i === 0 ? undefined : "lazy"}
              className="object-cover"
            />
            {/* Dark scrim — keeps the display-size copy legible against
                any photo, and deepens behind the bottom strip. */}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-tnky-black via-tnky-black/70 to-tnky-black/30"
            />
          </div>
        );
      })}

      {/* Foreground layout — main content centered in the upper region,
          the title-box nav strip pinned across the bottom edge. */}
      <div className="absolute inset-0 z-10 flex flex-col">
        <div className="flex min-h-0 flex-1 items-center justify-center overflow-hidden">
          <div className="max-w-content mx-auto w-full px-4 pb-8 pt-24 sm:px-6 lg:px-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={reducedMotion ? false : { opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reducedMotion ? { opacity: 0 } : { opacity: 0, y: -16 }}
                transition={
                  reducedMotion
                    ? { duration: 0 }
                    : { duration: 0.55, ease: EASE }
                }
                className="mx-auto max-w-4xl text-center text-tnky-white"
              >
                <span className="inline-block rounded-pill bg-tnky-safety px-3 py-1 font-display font-extrabold uppercase tracking-tag text-meta text-tnky-safety-ink">
                  {active.category}
                </span>
                <h2 className="mt-5 line-clamp-3 font-display font-extrabold italic leading-none text-h1 text-tnky-white [text-shadow:0_2px_16px_rgba(0,0,0,0.65)] [text-wrap:balance]">
                  {active.title}
                </h2>
                <p className="mx-auto mt-5 line-clamp-2 max-w-2xl text-lead text-tnky-cream/95 [text-shadow:0_1px_10px_rgba(0,0,0,0.7)] [text-wrap:pretty]">
                  {active.excerpt}
                </p>
                <Link
                  href={active.href}
                  className="mt-7 inline-flex items-center gap-2 font-display font-bold uppercase tracking-tag text-button text-tnky-white transition-colors duration-200 ease-tnky hover:text-tnky-safety focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tnky-white focus-visible:ring-offset-2 focus-visible:ring-offset-tnky-black"
                >
                  Read More
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom navigation strip — one clickable box per article. The
            active box gets a tnky-safety top border + tnky-blue fill;
            inactive boxes use a translucent dark fill so the background
            image still bleeds through. Replaces the previous progress
            bars. */}
        <nav
          aria-label="Featured stories navigation"
          className="w-full bg-gradient-to-t from-tnky-black/90 to-transparent"
        >
          <ol className="max-w-content mx-auto grid grid-cols-1 gap-2 px-4 pb-4 pt-3 sm:grid-cols-3 sm:px-6 sm:pb-5 md:gap-3 lg:px-8">
            {posts.map((post, i) => {
              const isActive = i === current;
              return (
                <li key={post.href}>
                  <button
                    type="button"
                    onClick={() => setIndex(i)}
                    aria-current={isActive ? "true" : undefined}
                    aria-label={`Show story ${i + 1} of ${posts.length}: ${post.title}`}
                    className={cn(
                      "group flex h-full w-full flex-col items-start gap-1.5 border-t-2 px-3 py-3 text-left transition-colors duration-200 ease-tnky focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tnky-safety focus-visible:ring-offset-2 focus-visible:ring-offset-tnky-black md:gap-2 md:px-4 md:py-4",
                      isActive
                        ? "border-tnky-safety bg-tnky-blue"
                        : "border-tnky-white/20 bg-tnky-black/55 hover:border-tnky-white/40 hover:bg-tnky-black/70",
                    )}
                  >
                    <span
                      className={cn(
                        "font-display font-extrabold uppercase tracking-tag text-meta transition-colors duration-200 ease-tnky",
                        isActive
                          ? "text-tnky-safety"
                          : "text-tnky-cream/70 group-hover:text-tnky-cream/90",
                      )}
                    >
                      {post.category}
                    </span>
                    <span className="line-clamp-2 font-display font-extrabold leading-snug text-small text-tnky-white md:text-button">
                      {post.title}
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>
        </nav>
      </div>
    </section>
  );
}
