"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export type BlogPost = {
  category: string;
  title: string;
  excerpt: string;
  date: string;
  dateTime: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
  /** Optional full-text body — not rendered on the card; used for full-text
   *  search matching on the Insights index page. */
  body?: string;
};

/** Desktop = ≥768px. Hover-shift micro-animations only run there. */
function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return isDesktop;
}

/**
 * Blog post card with a full-bleed background image and the editorial
 * hover-shift micro-animations from brand-assets/components/hover-shift.tsx
 * applied via Tailwind `group-hover:` / `group-focus-visible:` utilities
 * (no per-element JS `useState`).
 *
 * Adapted from brand-assets/components/blog-cards.tsx + hover-shift.tsx with
 * the issues called out in component-guide.md fixed:
 *   • Single semantic link (the whole card is one <Link>) — no nested
 *     interactive elements, no overlay-link + button antipattern, no
 *     redundant aria-label/sr-only pair.
 *   • next/image with sizes + lazy loading; consistent aspect ratio (no
 *     unpredictable crops from sibling-derived height).
 *   • Brand tnky-* tokens throughout, not shadcn semantic vars or
 *     hardcoded colors.
 *   • Brand ease-tnky curve, not string easings.
 *   • prefers-reduced-motion + <768px gate animations off; the static
 *     card reads exactly the same content.
 *   • Single layer of padding — no double-padding mismatch between
 *     variants.
 */
export function BlogPostCard({ post }: { post: BlogPost }) {
  const reducedMotion = useReducedMotion();
  const isDesktop = useIsDesktop();
  const animOn = isDesktop && !reducedMotion;

  return (
    <Link
      href={post.href}
      className="group relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-lg bg-tnky-black text-tnky-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tnky-blue focus-visible:ring-offset-2 focus-visible:ring-offset-tnky-cream"
    >
      <Image
        src={post.imageSrc}
        alt={post.imageAlt}
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
        loading="lazy"
        className={cn(
          "object-cover",
          animOn &&
            "transition-transform duration-700 ease-tnky group-hover:scale-105 group-focus-visible:scale-105",
        )}
      />

      {/* Dark gradient — keeps the lower-third text legible against any photo */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-tnky-black/90 via-tnky-black/50 to-tnky-black/0"
      />

      {/* Four corner accents — only rendered when animations are on so the
          static card stays clean. Each stagger-delayed in by a different
          duration so they fan in around the card border. */}
      {animOn && (
        <>
          <span
            aria-hidden="true"
            className="absolute left-4 top-4 h-5 w-px origin-top scale-y-0 bg-tnky-white transition-transform duration-500 ease-tnky group-hover:scale-y-100 group-focus-visible:scale-y-100"
          />
          <span
            aria-hidden="true"
            className="absolute left-4 top-4 h-px w-5 origin-left scale-x-0 bg-tnky-white transition-transform delay-75 duration-500 ease-tnky group-hover:scale-x-100 group-focus-visible:scale-x-100"
          />
          <span
            aria-hidden="true"
            className="absolute bottom-4 right-4 h-5 w-px origin-bottom scale-y-0 bg-tnky-white transition-transform delay-150 duration-500 ease-tnky group-hover:scale-y-100 group-focus-visible:scale-y-100"
          />
          <span
            aria-hidden="true"
            className="absolute bottom-4 right-4 h-px w-5 origin-right scale-x-0 bg-tnky-white transition-transform delay-200 duration-500 ease-tnky group-hover:scale-x-100 group-focus-visible:scale-x-100"
          />
        </>
      )}

      <div
        className={cn(
          "relative z-10 flex flex-col gap-3 p-6",
          animOn &&
            "transition-transform duration-700 ease-tnky group-hover:-translate-y-1 group-focus-visible:-translate-y-1",
        )}
      >
        {/* Eyebrow row: yellow rule that widens on hover + category */}
        <div className="flex items-center gap-3">
          <span
            aria-hidden="true"
            className={cn(
              "h-px bg-tnky-safety transition-all duration-500 ease-tnky",
              animOn
                ? "w-8 group-hover:w-12 group-focus-visible:w-12"
                : "w-8",
            )}
          />
          <span className="font-display font-extrabold uppercase tracking-tag text-eyebrow text-tnky-safety">
            {post.category}
          </span>
        </div>

        <h3 className="font-display font-extrabold leading-tight text-lg text-tnky-white [text-wrap:balance] sm:text-xl lg:text-2xl">
          {post.title}
        </h3>

        <p className="line-clamp-2 text-small text-tnky-white/80 [text-wrap:pretty]">
          {post.excerpt}
        </p>

        <div className="mt-1 flex items-center justify-between gap-3">
          <time
            dateTime={post.dateTime}
            className="text-micro text-tnky-white/70"
          >
            {post.date}
          </time>
          <span className="font-display font-bold uppercase tracking-tag text-mini text-tnky-white">
            Read more <span aria-hidden="true">→</span>
          </span>
        </div>
      </div>
    </Link>
  );
}
