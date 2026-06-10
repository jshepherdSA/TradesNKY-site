"use client";

import Link from "next/link";
import { Factory, Hammer, Shield, Truck, Zap, type LucideIcon } from "lucide-react";
import {
  pillarDisplayNames,
  pillarRoutes,
  type Occupation,
  type Pillar,
} from "@/lib/quiz-data";

// Pillar → lucide icon + brand bg-token mapping used by the result
// card. Icons MUST match the canonical set in
// `src/app/students/pillars/data.ts` so the quiz result and the
// pillar page agree on iconography.
const pillarIcons: Record<Pillar, LucideIcon> = {
  Build: Hammer,
  Make: Factory,
  Move: Truck,
  Power: Zap,
  Protect: Shield,
};

const pillarBgClasses: Record<Pillar, string> = {
  Build: "bg-pillar-build",
  Make: "bg-pillar-make",
  Move: "bg-pillar-move",
  Power: "bg-pillar-power",
  Protect: "bg-pillar-protect",
};

export type QuizResultCardProps = {
  pillar: Pillar;
  occupation: Occupation;
  onReset: () => void;
};

/**
 * Shared result panel rendered identically by the full Career Quiz
 * page (`src/app/students/quiz/page.tsx`) and the homepage teaser
 * (`src/app/_components/QuizPreview.tsx`). Renders the large
 * rounded pillar-colored card (icon + name + Explore link), the
 * recommended occupation line below, and a "Retake the Quiz" button
 * that calls `onReset`.
 */
export function QuizResultCard({
  pillar,
  occupation,
  onReset,
}: QuizResultCardProps) {
  const ResultIcon = pillarIcons[pillar];
  return (
    <div className="rounded-3xl bg-white p-8 text-center shadow-lg">
      <p className="mx-auto mb-3 w-fit rounded-full bg-tnky-safety px-4 py-1 text-sm font-semibold text-tnky-ink">
        Your Match
      </p>

      {/* Pillar-colored result box — icon, pillar name, recommended
          occupation, and the outline Explore button all live inside
          it with generous `p-10` breathing room so the button never
          crowds the box edges. Vertical flex stack, center-aligned. */}
      <div
        className={`flex flex-col items-center gap-5 rounded-2xl p-10 text-center text-tnky-white ${pillarBgClasses[pillar]}`}
      >
        <ResultIcon
          className="h-16 w-16 shrink-0 text-tnky-white"
          strokeWidth={1.5}
          aria-hidden="true"
        />
        <h2 className="font-display italic font-tnky-black leading-none text-display text-tnky-white">
          {pillarDisplayNames[pillar]}
        </h2>
        <div className="mt-2">
          <p className="text-sm text-tnky-white/80">Recommended occupation:</p>
          <p className="mt-1 text-2xl font-bold text-tnky-white">
            {occupation}
          </p>
        </div>
        <Link
          href={`${pillarRoutes[pillar]}?match=true&occupation=${encodeURIComponent(occupation)}`}
          className="mt-6 inline-flex items-center gap-2 rounded-pill border-2 border-tnky-white bg-transparent px-7 py-3 font-display font-bold text-button text-tnky-white transition-colors duration-200 ease-tnky hover:bg-tnky-white hover:text-tnky-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tnky-white focus-visible:ring-offset-2 focus-visible:ring-offset-current"
        >
          Explore the {pillarDisplayNames[pillar]} Path{" "}
          <span aria-hidden="true">→</span>
        </Link>
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <button
          type="button"
          onClick={onReset}
          className="inline-flex items-center gap-2 rounded-pill border-2 border-tnky-blue px-6 py-3 font-display font-bold text-button text-tnky-blue transition-colors duration-200 ease-tnky hover:bg-tnky-blue hover:text-tnky-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tnky-blue focus-visible:ring-offset-2 focus-visible:ring-offset-white"
        >
          Retake the Quiz
        </button>
      </div>
    </div>
  );
}
