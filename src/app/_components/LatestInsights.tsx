"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";

type BlogPost = {
  tag: string;
  date: string;
  dateTime: string;
  title: string;
  description: string;
  href: string;
};

const POSTS: BlogPost[] = [
  {
    tag: "Career Paths",
    date: "May 8, 2026",
    dateTime: "2026-05-08",
    title: "Five NKY Trades You Can Train For Before Graduation",
    description:
      "From electrical work to advanced manufacturing, here's where Northern Kentucky students can get a head start while still in high school.",
    href: "/insights/nky-trades-before-graduation",
  },
  {
    tag: "Student Stories",
    date: "April 29, 2026",
    dateTime: "2026-04-29",
    title:
      "A Ryle High Senior's Path From Shop Class to a Signed Apprenticeship",
    description:
      "She didn't think the trades were for her — until a dual-credit welding course changed the plan entirely.",
    href: "/insights/ryle-high-welding-apprenticeship",
  },
  {
    tag: "Employer Spotlight",
    date: "April 15, 2026",
    dateTime: "2026-04-15",
    title: "Why a Florence Plumbing Company Hires Straight From Local Schools",
    description:
      "This Boone County employer has brought on three apprentices through TradesNKY. Here's what they look for in a new hire.",
    href: "/insights/florence-plumbing-hires-local",
  },
];

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

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

function BlogPostCard({
  tag,
  date,
  dateTime,
  title,
  description,
  href,
}: BlogPost) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-tnky-edge bg-tnky-white shadow-tnky-2 transition-all duration-200 ease-tnky md:hover:-translate-y-1 md:hover:shadow-tnky-3">
      <div
        className="aspect-[16/10] w-full bg-gradient-to-br from-tnky-cream-2 to-tnky-cream-3"
        aria-hidden="true"
      />
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-center gap-3 text-micro">
          <span className="rounded-pill bg-tnky-blue-100 px-3 py-1 font-display font-extrabold uppercase tracking-label text-tnky-blue">
            {tag}
          </span>
          <time dateTime={dateTime} className="text-tnky-mute">
            {date}
          </time>
        </div>
        <h3 className="mb-2 text-card-title font-display font-extrabold leading-tight text-tnky-ink">
          <Link
            href={href}
            className="rounded-sm transition-colors duration-200 group-hover:text-tnky-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tnky-blue focus-visible:ring-offset-2 focus-visible:ring-offset-tnky-white"
          >
            {title}
          </Link>
        </h3>
        <p className="text-small leading-relaxed text-tnky-mute [text-wrap:pretty]">
          {description}
        </p>
      </div>
    </article>
  );
}

export function LatestInsights() {
  const isDesktop = useIsDesktop();
  const reducedMotion = useReducedMotion();
  const animate = isDesktop && !reducedMotion;

  return (
    <section className="py-24 bg-tnky-cream">
      <div className="max-w-content mx-auto px-4 sm:px-8">
        <div className="mb-12 flex flex-col items-center gap-2.5 text-center">
          <h2 className="font-display font-extrabold text-section">
            Latest Insights
          </h2>
          <p className="text-tnky-mute text-lead max-w-lead [text-wrap:pretty]">
            News, stories, and resources from the TradesNKY community
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8"
          {...(animate
            ? {
                variants: containerVariants,
                initial: "hidden",
                whileInView: "show",
                viewport: { once: true, margin: "-80px" },
              }
            : {})}
        >
          {POSTS.map((post) => (
            <motion.div
              key={post.href}
              className="h-full"
              {...(animate ? { variants: itemVariants } : {})}
            >
              <BlogPostCard {...post} />
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/insights"
            className="group inline-flex items-center gap-2 rounded-sm font-display font-bold text-button text-tnky-blue transition-colors duration-200 hover:text-tnky-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tnky-blue focus-visible:ring-offset-2 focus-visible:ring-offset-tnky-cream"
          >
            View All Insights
            <ArrowRight
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
