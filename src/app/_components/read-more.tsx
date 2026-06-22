"use client";

import { useId, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Splits a paragraph into its first sentence and the remainder. Finds the
 * first sentence-ending punctuation that is followed by whitespace.
 */
function splitFirstSentence(text: string): { first: string; rest: string } {
  const trimmed = text.trim();
  const match = trimmed.match(/[.!?](?=\s)/);
  if (!match || match.index === undefined) {
    return { first: trimmed, rest: "" };
  }
  const end = match.index + 1;
  return { first: trimmed.slice(0, end), rest: trimmed.slice(end).trim() };
}

type Props = {
  /** The section's body, one entry per paragraph. */
  paragraphs: string[];
  /** Typography classes applied to every <p>. */
  pClassName?: string;
  /** Wrapper classes (spacing, max-width, etc.). */
  className?: string;
  /** Toggle color. "blue" (default) for light backgrounds; "light" (safety
   *  yellow) for dark / tnky-blue bands where blue text would disappear. */
  tone?: "blue" | "light";
};

/**
 * Mobile "read more" for section body copy. Below the `sm` breakpoint
 * (<640px) only the first sentence is shown, followed by a blue italic
 * "read more" toggle that reveals the rest of the section. At `sm` and up the
 * full copy always renders and the toggle is hidden — so the collapse is a
 * phone-only affordance to cut scrolling.
 *
 * The collapse is CSS-driven (hidden below `sm`, shown at `sm:` regardless of
 * state), so there's no hydration flash; React state only toggles the
 * phone-collapsed view. The first paragraph stays intact at `sm`+ because its
 * remainder is an inline span continuing the first sentence.
 */
export function ReadMore({
  paragraphs,
  pClassName,
  className,
  tone = "blue",
}: Props) {
  const [expanded, setExpanded] = useState(false);
  const regionId = useId();

  const { first, rest } = splitFirstSentence(paragraphs[0] ?? "");
  const moreParagraphs = paragraphs.slice(1);
  const hasMore = rest.length > 0 || moreParagraphs.length > 0;

  // Nothing to collapse — render normally.
  if (!hasMore) {
    return (
      <div className={className}>
        {paragraphs.map((p, i) => (
          <p key={i} className={pClassName}>
            {p}
          </p>
        ))}
      </div>
    );
  }

  const toggleBtn = cn(
    "font-display font-bold italic underline underline-offset-4 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 sm:hidden",
    tone === "light"
      ? "text-tnky-safety hover:text-tnky-white focus-visible:ring-tnky-safety"
      : "text-tnky-blue hover:text-tnky-safety focus-visible:ring-tnky-blue",
  );

  return (
    <div className={cn(className, moreParagraphs.length > 0 && "space-y-4")}>
      <p className={pClassName}>
        {first}
        {rest ? (
          <span
            id={`${regionId}-rest`}
            className={cn(expanded ? "" : "hidden", "sm:inline")}
          >
            {" "}
            {rest}
          </span>
        ) : null}
        {!expanded ? (
          <>
            {" "}
            <button
              type="button"
              onClick={() => setExpanded(true)}
              aria-expanded={false}
              aria-controls={regionId}
              className={toggleBtn}
            >
              read more
            </button>
          </>
        ) : null}
      </p>

      {moreParagraphs.length > 0 ? (
        <div
          id={regionId}
          className={cn(expanded ? "" : "hidden", "space-y-4 sm:block")}
        >
          {moreParagraphs.map((p, i) => (
            <p key={i} className={pClassName}>
              {p}
            </p>
          ))}
        </div>
      ) : null}

      {expanded ? (
        <button
          type="button"
          onClick={() => setExpanded(false)}
          aria-expanded={true}
          aria-controls={regionId}
          className={cn(toggleBtn, "mt-1 block")}
        >
          show less
        </button>
      ) : null}
    </div>
  );
}
