import type { Metadata } from "next";
import {
  InsightsHeroCarousel,
  type InsightsHeroSlide,
} from "../_components/insights-hero-carousel";
import { type BlogPost } from "../_components/blog-post-card";
import { InsightsGrid } from "../_components/insights-grid";
import { CtaCard as NewsletterBanner } from "../_components/CtaCard";
import { INSIGHTS, insightBodyText } from "./insights-data";

export const metadata: Metadata = {
  title: "Insights | Trades NKY",
  description:
    "News, partnerships, and announcements from Northern Kentucky's skilled trades community.",
};

// All insights drive both the featured hero carousel (3 newest) and the full
// searchable grid (all of them). Single source of truth lives in insights-data.
const FEATURED: InsightsHeroSlide[] = INSIGHTS.slice(0, 3).map((i) => ({
  category: i.category,
  title: i.title,
  excerpt: i.excerpt,
  imageSrc: i.imageSrc,
  imageAlt: i.imageAlt,
  href: `/insights/${i.slug}`,
}));

const POSTS: BlogPost[] = INSIGHTS.map((i) => ({
  category: i.category,
  title: i.title,
  excerpt: i.excerpt,
  date: i.date,
  dateTime: i.dateTime,
  imageSrc: i.imageSrc,
  imageAlt: i.imageAlt,
  href: `/insights/${i.slug}`,
  body: insightBodyText(i),
}));

export default function InsightsPage() {
  return (
    <main>
      <InsightsHeroCarousel posts={FEATURED} />

      <section className="bg-tnky-cream">
        <InsightsGrid posts={POSTS} />
      </section>

      <NewsletterBanner />
    </main>
  );
}
