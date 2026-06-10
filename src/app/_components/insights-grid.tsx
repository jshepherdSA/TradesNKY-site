"use client";

import { useMemo, useState } from "react";
import { BlogPostCard, type BlogPost } from "./blog-post-card";
import { InsightsSearchBar } from "./insights-search-bar";

type Props = {
  posts: BlogPost[];
};

/**
 * Owns the search query state for the Insights index, filters the post
 * list in real time as the user types, and renders either the grid, an
 * "X results" announcement, or an empty state.
 *
 * Filtering matches against `title`, `excerpt`, `category`, and the
 * optional `body` field on each post — case-insensitive substring match.
 */
export function InsightsGrid({ posts }: Props) {
  const [query, setQuery] = useState("");
  const trimmed = query.trim();
  const needle = trimmed.toLowerCase();

  const filtered = useMemo(() => {
    if (!needle) return posts;
    return posts.filter((post) => {
      const fields = [
        post.title,
        post.excerpt,
        post.category,
        post.body ?? "",
      ];
      return fields.some((field) => field.toLowerCase().includes(needle));
    });
  }, [posts, needle]);

  const isFiltering = trimmed.length > 0;
  const hasResults = filtered.length > 0;

  return (
    <div className="max-w-content mx-auto px-4 pt-6 pb-12 sm:px-6 sm:pt-8 sm:pb-16 lg:px-8 lg:pt-10 lg:pb-20">
      {/* Header row — heading + yellow underline on the left, search bar on
          the right, vertically centered. Stacks below 768px. The subtext
          paragraph sits on its own line below the row so it falls just past
          the fold on first load at a typical laptop viewport. */}
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between md:gap-8">
        <div>
          <h2 className="font-display font-extrabold text-section text-tnky-ink">
            All Insights
          </h2>
          <div
            aria-hidden="true"
            className="mt-3 h-[3px] w-14 rounded-full bg-tnky-safety"
          />
        </div>
        <div className="w-full md:w-auto md:flex-shrink-0">
          <InsightsSearchBar
            value={query}
            onChange={setQuery}
            placeholder="Search articles by title, topic, or keyword…"
          />
        </div>
      </div>

      <p className="mb-10 mt-8 max-w-lead text-lead text-tnky-mute [text-wrap:pretty] sm:mt-10 lg:mt-12">
        Student stories, employer spotlights, career guides, and the latest
        on Northern Kentucky&apos;s skilled trades community.
      </p>

      {/* Results count — only when actively filtering AND there are matches.
          aria-live="polite" so screen readers hear the count update. */}
      <p
        aria-live="polite"
        aria-atomic="true"
        className={isFiltering && hasResults ? "mb-6 text-small text-tnky-mute" : "sr-only"}
      >
        {isFiltering && hasResults
          ? `Showing ${filtered.length} ${
              filtered.length === 1 ? "result" : "results"
            } for “${trimmed}”`
          : ""}
      </p>

      {hasResults ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
          {filtered.map((post) => (
            <BlogPostCard key={post.href} post={post} />
          ))}
        </div>
      ) : (
        <div
          role="status"
          className="rounded-lg border border-tnky-edge bg-tnky-white px-6 py-12 text-center"
        >
          <p className="text-lead font-display font-extrabold text-tnky-ink">
            No articles found for “{trimmed}”.
          </p>
          <p className="mt-2 text-small text-tnky-mute">
            Try a different search.
          </p>
        </div>
      )}
    </div>
  );
}
