import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { INSIGHTS, getInsight } from "../insights-data";
import { CtaCard as NewsletterBanner } from "../../_components/CtaCard";

export function generateStaticParams() {
  return INSIGHTS.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const insight = getInsight(slug);
  if (!insight) return {};
  return {
    title: `${insight.title} | Trades NKY`,
    description: insight.excerpt,
  };
}

export default async function InsightPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const insight = getInsight(slug);
  if (!insight) notFound();

  return (
    <main className="bg-tnky-cream">
      <article className="max-w-content mx-auto px-4 pb-20 pt-12 sm:px-8 md:pb-24 md:pt-16">
        <Link
          href="/insights"
          className="inline-flex items-center gap-1.5 font-display font-bold uppercase tracking-tag text-small text-tnky-blue underline-offset-4 transition-colors duration-150 hover:text-tnky-safety focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tnky-blue focus-visible:ring-offset-2"
        >
          <ChevronLeft className="h-4 w-4" aria-hidden="true" />
          All Insights
        </Link>

        {/* Header — category eyebrow, title, date. */}
        <header className="mx-auto mt-8 max-w-3xl">
          <p className="font-display font-extrabold uppercase tracking-eyebrow text-eyebrow text-tnky-blue">
            {insight.category}
          </p>
          <h1 className="mt-3 font-display font-extrabold leading-tight text-h1 text-tnky-ink [text-wrap:balance]">
            {insight.title}
          </h1>
          <div
            aria-hidden="true"
            className="mt-5 h-1 w-20 rounded-full bg-tnky-safety"
          />
          <time
            dateTime={insight.dateTime}
            className="mt-5 block font-display font-bold uppercase tracking-tag text-meta text-tnky-mute"
          >
            {insight.date}
          </time>
        </header>

        {/* Lead image */}
        <div className="relative mx-auto mt-8 aspect-[16/9] w-full max-w-3xl overflow-hidden rounded-2xl shadow-tnky-2">
          <Image
            src={insight.imageSrc}
            alt={insight.imageAlt}
            fill
            priority
            sizes="(min-width: 768px) 768px, 100vw"
            className="object-cover"
          />
        </div>

        {/* Body */}
        <div className="mx-auto mt-10 max-w-2xl space-y-5">
          {insight.body.map((block, i) =>
            block.type === "list" ? (
              <ul key={i} className="space-y-3 pl-1">
                {block.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-body leading-relaxed text-tnky-ink [text-wrap:pretty]"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-tnky-safety"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p
                key={i}
                className="text-body leading-relaxed text-tnky-ink [text-wrap:pretty]"
              >
                {block.text}
              </p>
            ),
          )}
        </div>
      </article>

      <NewsletterBanner />
    </main>
  );
}
