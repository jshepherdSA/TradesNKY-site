"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export type PartnerTile = {
  name: string;
  category: string;
  description: string;
  /** Partner's official website — rendered as a "Visit website" link in the
   *  hover dropdown. */
  website: string;
  /** Logo path under /public. When omitted, a gray placeholder is shown. */
  logoSrc?: string;
  /** Optional extra classes for the logo image — e.g. a scale to make one
   *  partner's mark read larger than the others in its row. */
  logoClassName?: string;
};

export type PartnerTileGroup = {
  label: string;
  /** Optional descriptive paragraph rendered beneath the label + rule,
   *  explaining what this tier of partners contributes. */
  description?: string;
  partners: PartnerTile[];
  /** Tailwind grid-column classes controlling how this row's tiles lay out
   *  (e.g. "grid-cols-2 md:grid-cols-3"). */
  gridCols: string;
};

// brand --ease-tnky cubic-bezier(0.22, 1, 0.36, 1)
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function PartnerTiles({ groups }: { groups: PartnerTileGroup[] }) {
  // Only one dropdown open at a time — keyed by partner name. Hovering a new
  // tile replaces the active key; leaving a tile clears it.
  const [active, setActive] = useState<string | null>(null);
  const reduce = useReducedMotion();

  return (
    <div className="flex flex-col gap-12 md:gap-16">
      {groups.map((group) => (
        <div key={group.label}>
          {/* Category subheading — bold uppercase tnky-ink + yellow rule. */}
          <p className="font-display font-bold uppercase tracking-eyebrow text-eyebrow text-tnky-ink">
            {group.label}
          </p>
          <div
            aria-hidden="true"
            className="mt-2 h-[3px] w-12 rounded-full bg-tnky-safety"
          />

          {group.description && (
            <p className="mt-3 max-w-3xl text-body text-tnky-mute [text-wrap:pretty]">
              {group.description}
            </p>
          )}

          <div className={cn("mt-6 grid gap-6", group.gridCols)}>
            {group.partners.map((p) => {
              const open = active === p.name;
              return (
                <div
                  key={p.name}
                  className="relative"
                  onMouseEnter={() => setActive(p.name)}
                  onMouseLeave={() => setActive(null)}
                >
                  <motion.div
                    whileHover={reduce ? undefined : { y: -6 }}
                    transition={{ type: "spring", stiffness: 300, damping: 22 }}
                    className="flex h-full flex-col rounded-2xl border-2 border-tnky-blue bg-tnky-white p-8 shadow-tnky-2 transition-shadow duration-200 ease-tnky hover:shadow-tnky-3 md:p-10"
                  >
                    <div className="relative h-20 w-full">
                      {p.logoSrc ? (
                        <Image
                          src={p.logoSrc}
                          alt={`${p.name} logo`}
                          fill
                          sizes="(min-width: 768px) 20vw, 50vw"
                          className={cn(
                            "object-contain object-left",
                            p.logoClassName,
                          )}
                        />
                      ) : (
                        <div
                          aria-hidden="true"
                          className="h-full w-full rounded-lg bg-tnky-edge/50"
                        />
                      )}
                    </div>
                    <h4 className="mt-6 font-display font-extrabold text-card-title text-tnky-ink [text-wrap:balance]">
                      {p.name}
                    </h4>
                    <p className="mt-1 text-small font-medium text-tnky-mute">
                      {p.category}
                    </p>
                  </motion.div>

                  <AnimatePresence>
                    {open && (
                      <motion.div
                        initial={reduce ? { opacity: 0 } : { opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={reduce ? { opacity: 0 } : { opacity: 0, y: 8 }}
                        transition={{ duration: 0.18, ease: EASE }}
                        className="absolute left-0 top-full z-30 mt-3 min-w-80 max-w-sm rounded-2xl border border-tnky-edge bg-tnky-white p-6 shadow-tnky-3"
                      >
                        <p className="font-display font-extrabold text-card-title text-tnky-ink [text-wrap:balance]">
                          {p.name}
                        </p>
                        <p className="mt-1 font-display font-bold uppercase tracking-tag text-meta text-tnky-blue">
                          {p.category}
                        </p>
                        <p className="mt-3 text-body font-medium leading-relaxed text-tnky-ink [text-wrap:pretty]">
                          {p.description}
                        </p>
                        <a
                          href={p.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-4 inline-block text-small font-semibold text-tnky-blue underline underline-offset-4 transition-colors duration-150 hover:text-tnky-safety focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tnky-blue focus-visible:ring-offset-2"
                        >
                          Visit website →
                        </a>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
