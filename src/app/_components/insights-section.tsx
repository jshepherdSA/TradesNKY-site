import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { INSIGHTS } from "../insights/insights-data";

type FeaturedPost = {
  eyebrow: string;
  tag: string;
  title: string;
  description: string;
  date: string;
  dateTime: string;
  href: string;
};

type SupportingPost = {
  tag: string;
  title: string;
  excerpt: string;
  date: string;
  dateTime: string;
  href: string;
};

type InsightsSectionProps = {
  heading?: string;
  subheading?: string;
  featured?: FeaturedPost;
  posts?: SupportingPost[];
};

const DEFAULT_HEADING = "Latest Insights";
const DEFAULT_SUBHEADING =
  "News, stories, and resources from the TradesNKY community";

// Homepage teaser — derived from the shared insights data so it stays in sync
// with the Insights page. Featured = newest insight; supporting = next three.
const DEFAULT_FEATURED: FeaturedPost = {
  eyebrow: "Featured Story",
  tag: INSIGHTS[0].category,
  title: INSIGHTS[0].title,
  description: INSIGHTS[0].excerpt,
  date: INSIGHTS[0].date,
  dateTime: INSIGHTS[0].dateTime,
  href: `/insights/${INSIGHTS[0].slug}`,
};

const DEFAULT_POSTS: SupportingPost[] = INSIGHTS.slice(1, 4).map((i) => ({
  tag: i.category,
  title: i.title,
  excerpt: i.excerpt,
  date: i.date,
  dateTime: i.dateTime,
  href: `/insights/${i.slug}`,
}));

const ACCENT_BASE =
  "absolute bg-tnky-blue opacity-0 transition-all duration-500 ease-tnky motion-safe:md:group-hover:opacity-100 motion-safe:md:group-focus-visible:opacity-100";

function FeaturedCard({ post }: { post: FeaturedPost }) {
  return (
    <Link
      href={post.href}
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-tnky-edge bg-tnky-white shadow-tnky-2 transition-shadow duration-200 ease-tnky focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tnky-blue focus-visible:ring-offset-2 focus-visible:ring-offset-tnky-cream motion-safe:md:hover:shadow-tnky-3 motion-safe:md:focus-visible:shadow-tnky-3"
    >
      <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-tnky-cream-2 to-tnky-cream-3 transition-transform duration-700 ease-tnky motion-safe:md:group-hover:scale-105 motion-safe:md:group-focus-visible:scale-105" />
        <span
          aria-hidden="true"
          className={`${ACCENT_BASE} left-4 top-4 h-5 w-0.5 origin-top scale-y-0 delay-75 motion-safe:md:group-hover:scale-y-100 motion-safe:md:group-focus-visible:scale-y-100`}
        />
        <span
          aria-hidden="true"
          className={`${ACCENT_BASE} left-4 top-4 h-0.5 w-5 origin-left scale-x-0 delay-100 motion-safe:md:group-hover:scale-x-100 motion-safe:md:group-focus-visible:scale-x-100`}
        />
        <span
          aria-hidden="true"
          className={`${ACCENT_BASE} bottom-4 right-4 h-5 w-0.5 origin-bottom scale-y-0 delay-150 motion-safe:md:group-hover:scale-y-100 motion-safe:md:group-focus-visible:scale-y-100`}
        />
        <span
          aria-hidden="true"
          className={`${ACCENT_BASE} bottom-4 right-4 h-0.5 w-5 origin-right scale-x-0 delay-200 motion-safe:md:group-hover:scale-x-100 motion-safe:md:group-focus-visible:scale-x-100`}
        />
      </div>

      <div className="flex flex-1 flex-col p-6 md:p-8">
        <div className="mb-4 flex items-center gap-3">
          <span className="h-px w-8 bg-tnky-blue transition-all duration-700 ease-tnky motion-safe:md:group-hover:w-12 motion-safe:md:group-focus-visible:w-12" />
          <span className="text-eyebrow font-display font-extrabold uppercase text-tnky-blue">
            {post.eyebrow}
          </span>
        </div>

        <h3 className="text-h3 font-display font-extrabold text-tnky-ink transition-transform duration-700 ease-tnky motion-safe:md:group-hover:-translate-y-1 motion-safe:md:group-focus-visible:-translate-y-1">
          {post.title}
        </h3>

        <p className="mt-3 text-body leading-relaxed text-tnky-mute [text-wrap:pretty]">
          {post.description}
        </p>

        <div className="mt-auto flex items-center justify-between gap-4 pt-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-pill bg-tnky-blue-100 px-3 py-1 text-meta font-display font-extrabold uppercase tracking-label text-tnky-blue">
              {post.tag}
            </span>
            <time dateTime={post.dateTime} className="text-micro text-tnky-mute">
              {post.date}
            </time>
          </div>
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-tnky-edge bg-tnky-cream text-tnky-blue transition-colors duration-500 ease-tnky motion-safe:md:group-hover:bg-tnky-blue motion-safe:md:group-hover:text-tnky-white motion-safe:md:group-focus-visible:bg-tnky-blue motion-safe:md:group-focus-visible:text-tnky-white">
            <ArrowUpRight
              className="h-5 w-5 transition-transform duration-500 ease-tnky motion-safe:md:group-hover:rotate-45 motion-safe:md:group-focus-visible:rotate-45"
              strokeWidth={1.5}
              aria-hidden="true"
            />
          </span>
        </div>
      </div>
    </Link>
  );
}

function SupportingCard({ post }: { post: SupportingPost }) {
  return (
    <Link
      href={post.href}
      className="group flex flex-1 overflow-hidden rounded-lg border border-tnky-edge bg-tnky-white shadow-tnky-2 transition-all duration-200 ease-tnky focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tnky-blue focus-visible:ring-offset-2 focus-visible:ring-offset-tnky-cream motion-safe:md:hover:-translate-y-1 motion-safe:md:hover:shadow-tnky-3 motion-safe:md:focus-visible:-translate-y-1 motion-safe:md:focus-visible:shadow-tnky-3"
    >
      <div
        aria-hidden="true"
        className="w-24 shrink-0 self-stretch bg-gradient-to-br from-tnky-cream-2 to-tnky-cream-3 sm:w-32"
      />
      <div className="flex min-w-0 flex-1 flex-col justify-center gap-1.5 p-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-pill bg-tnky-blue-100 px-2.5 py-0.5 text-meta font-display font-extrabold uppercase tracking-label text-tnky-blue">
            {post.tag}
          </span>
          <time dateTime={post.dateTime} className="text-micro text-tnky-mute">
            {post.date}
          </time>
        </div>
        <h3 className="text-body font-display font-extrabold leading-snug text-tnky-ink transition-colors duration-200 group-hover:text-tnky-blue group-focus-visible:text-tnky-blue">
          {post.title}
        </h3>
        <p className="line-clamp-2 text-small leading-relaxed text-tnky-mute [text-wrap:pretty]">
          {post.excerpt}
        </p>
      </div>
    </Link>
  );
}

export function InsightsSection({
  heading = DEFAULT_HEADING,
  subheading = DEFAULT_SUBHEADING,
  featured = DEFAULT_FEATURED,
  posts = DEFAULT_POSTS,
}: InsightsSectionProps) {
  return (
    <section className="bg-tnky-cream py-20 md:py-24">
      <div className="max-w-content mx-auto px-4 sm:px-8">
        {/* Section header — italic display heading + yellow rule on the
            left, subhead on the right (stacks on mobile). Matches the
            Five Pillars and Real Stories header pattern. */}
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-10">
          <div>
            <h2 className="font-display italic font-extrabold text-section text-tnky-ink">
              {heading}
            </h2>
            <div
              aria-hidden="true"
              className="mt-3 h-[3px] w-14 rounded-full bg-tnky-safety"
            />
          </div>
          <p className="max-w-lead text-lead text-tnky-mute [text-wrap:pretty]">
            {subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          <FeaturedCard post={featured} />
          <div className="flex h-full flex-col gap-6 md:gap-8">
            {posts.map((post) => (
              <SupportingCard key={post.href} post={post} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
