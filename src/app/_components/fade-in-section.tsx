"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

// brand --ease-tnky cubic-bezier(0.22, 1, 0.36, 1)
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

type Props = {
  children: ReactNode;
  className?: string;
  /** Vertical travel in px before the content fades in. Default 24. */
  offset?: number;
  /** Animation duration in seconds. Default 0.55. */
  duration?: number;
};

/**
 * Renders a `<section>` whose CONTENT fades/slides up when scrolled into view.
 *
 * The animation is applied to an inner wrapper, not the `<section>` itself, so
 * the section's background stays fully opaque at all times. (Animating the
 * section's own opacity would briefly reveal whatever is painted behind it —
 * the page background — producing a color "flash" on scroll.) Honors
 * `prefers-reduced-motion` — the content renders statically with no motion.
 */
export function FadeInSection({
  children,
  className,
  offset = 24,
  duration = 0.55,
}: Props) {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return <section className={className}>{children}</section>;
  }

  return (
    <section className={className}>
      <motion.div
        initial={{ opacity: 0, y: offset }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration, ease: EASE }}
      >
        {children}
      </motion.div>
    </section>
  );
}
