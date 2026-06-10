import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PATHS, PATH_SLUGS } from "../data";
import { OccupationMarquee, RotatingWord } from "../_components/pillar-hero-fx";
import { CtaCard as NewsletterBanner } from "../../../_components/CtaCard";

export function generateStaticParams() {
  return PATH_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const path = PATHS[slug];
  if (!path) return {};
  return {
    title: `${path.name} — Career Path | Trades NKY`,
    description: path.blurb,
  };
}

export default async function PillarPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const path = PATHS[slug];
  if (!path) notFound();

  const Icon = path.icon;

  return (
    <main>
      {/* 1. Hero banner — full-bleed pillar color */}
      <section className={`${path.bgClass} text-tnky-white`}>
        <div className="max-w-content mx-auto px-4 py-8 sm:px-8 md:py-10">
          {/* Single non-wrapping flex row: icon + path name + rotating word.
              `flex-nowrap` + inherited `whitespace-nowrap` keep everything on
              one line at md+. Mobile (<md) drops to a smaller size and is
              allowed to wrap if the combined string is too long. */}
          {/* Single non-wrapping flex row: icon vertically centered with the
              path-name text. Rotating word may extend toward the right edge
              of the page — that's acceptable per spec; no max-w shrinks it. */}
          <div className="flex flex-nowrap items-center gap-3 whitespace-nowrap sm:gap-4">
            <Icon
              className="h-14 w-14 shrink-0 self-center md:h-20 md:w-20"
              strokeWidth={1.5}
              aria-hidden="true"
            />
            <h1 className="flex min-w-0 flex-nowrap items-baseline gap-2 whitespace-nowrap font-display italic font-tnky-black leading-none text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              {/* inline-block + px-1 reserves ~4px each side for italic
                  glyph overhang on the path name's first/last letters. */}
              <span className="inline-block whitespace-nowrap px-1 uppercase text-tnky-white">
                {path.name}
              </span>
              <RotatingWord words={path.rotatingWords} />
            </h1>
          </div>
        </div>

        {/* Occupation marquee — base of the hero banner */}
        <div className="border-t border-tnky-white/15 py-4">
          <OccupationMarquee occupations={path.occupations} />
        </div>
      </section>

      {/* 2. Careers and wages */}
      <section className="bg-tnky-cream py-24">
        <div className="max-w-content mx-auto px-4 sm:px-8">
          <div className="mb-12 max-w-lead">
            <p className="mb-3 font-display font-extrabold uppercase text-eyebrow text-tnky-blue">
              Careers &amp; wages
            </p>
            <h2 className="font-display font-extrabold text-section">
              Where the {path.name} path leads
            </h2>
            <p className="mt-4 text-lead text-tnky-mute [text-wrap:pretty]">
              {path.blurb}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {path.careers.map((career) => (
              <article
                key={career.title}
                className="flex h-full flex-col rounded-lg border border-tnky-edge bg-tnky-white p-6 shadow-tnky-2"
              >
                <h3 className="font-display font-extrabold leading-tight text-card-title text-tnky-ink">
                  {career.title}
                </h3>
                <p
                  className={`mt-1 font-display font-tnky-black italic text-stat-md ${path.textClass}`}
                >
                  {career.wage}
                </p>
                <p className="mt-3 text-small leading-relaxed text-tnky-mute [text-wrap:pretty]">
                  {career.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Available jobs count — prominent pillar-colored stat band */}
      <section className={`${path.bgClass} text-tnky-white py-band`}>
        <div className="max-w-content mx-auto px-4 text-center sm:px-8">
          <p className="mb-3 font-display font-extrabold uppercase text-eyebrow text-tnky-white/80">
            Open roles right now
          </p>
          <p className="font-display font-tnky-black italic text-stat-xl leading-none">
            {path.jobCount.toLocaleString()}
          </p>
          <p className="mt-3 text-lead text-tnky-white/85 [text-wrap:pretty]">
            {path.name} jobs available across Northern Kentucky
          </p>
        </div>
      </section>

      <NewsletterBanner />
    </main>
  );
}
