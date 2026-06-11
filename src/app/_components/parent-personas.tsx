"use client";

import { useId, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type Persona = {
  tab: string;
  concern: string;
  message: string;
};

// Three parent personas from the TradesNKY communication plan — each pairs the
// parent's real concern with the plan's reassurance message.
const PERSONAS: Persona[] = [
  {
    tab: "Practical & Debt-Averse",
    concern:
      "You worry about choosing the wrong path, about trades being seen as “less than” college, and about whether the work really leads somewhere.",
    message:
      "Why gamble on high tuition when there are stable careers that pay while you learn? Skilled trades cost far less in time and training than a four-year degree — so your child can avoid years of loan payments and start building a financial future from day one.",
  },
  {
    tab: "Growth & ROI",
    concern:
      "You're open to the trades, but you want proof of prestige, a real ceiling, and a clear path to leadership — not a dead end.",
    message:
      "Technical fields offer structured pathways from trainee to specialist to supervisor to entrepreneur. Many journey-level professionals earn $63,456/year with employer-funded training — strong ROI and earlier adult stability, with room to keep climbing.",
  },
  {
    tab: "Affordable & Supported",
    concern:
      "You worry about wasted time and money, about debt and dropping out, and about your child falling through the cracks.",
    message:
      "Your child can start a stable, good-paying career without the burden of college costs or debt — on a clear, structured pathway with training, guidance, and support every step of the way.",
  },
];

export function ParentPersonas() {
  const [active, setActive] = useState(0);
  const id = useId();
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  function onKeyDown(e: React.KeyboardEvent<HTMLButtonElement>, i: number) {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const next =
      e.key === "ArrowRight"
        ? (i + 1) % PERSONAS.length
        : (i - 1 + PERSONAS.length) % PERSONAS.length;
    setActive(next);
    tabRefs.current[next]?.focus();
  }

  return (
    <div>
      <div
        role="tablist"
        aria-label="Which describes you?"
        className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center"
      >
        {PERSONAS.map((p, i) => (
          <button
            key={p.tab}
            ref={(el) => {
              tabRefs.current[i] = el;
            }}
            type="button"
            role="tab"
            id={`${id}-tab-${i}`}
            aria-selected={active === i}
            aria-controls={`${id}-panel-${i}`}
            tabIndex={active === i ? 0 : -1}
            onClick={() => setActive(i)}
            onKeyDown={(e) => onKeyDown(e, i)}
            className={cn(
              "rounded-pill px-6 py-3 font-display font-bold text-button transition-all duration-200 ease-tnky focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tnky-blue focus-visible:ring-offset-2 focus-visible:ring-offset-tnky-white",
              active === i
                ? "bg-tnky-blue text-tnky-white shadow-tnky-2"
                : "border border-tnky-edge bg-tnky-white text-tnky-ink hover:border-tnky-blue",
            )}
          >
            {p.tab}
          </button>
        ))}
      </div>

      {PERSONAS.map((p, i) => (
        <div
          key={p.tab}
          role="tabpanel"
          id={`${id}-panel-${i}`}
          aria-labelledby={`${id}-tab-${i}`}
          hidden={active !== i}
          className="mt-8 rounded-3xl border border-tnky-edge bg-tnky-cream p-8 shadow-tnky-2 md:p-10"
        >
          <p className="font-display font-bold uppercase tracking-tag text-meta text-tnky-blue">
            Your concern
          </p>
          <p className="mt-2 text-lead font-medium leading-relaxed text-tnky-ink [text-wrap:pretty]">
            {p.concern}
          </p>
          <div className="mt-6 border-t border-tnky-edge pt-6">
            <p className="font-display font-bold uppercase tracking-tag text-meta text-tnky-blue">
              What TradesNKY offers
            </p>
            <p className="mt-2 text-lead font-medium leading-relaxed text-tnky-ink [text-wrap:pretty]">
              {p.message}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
