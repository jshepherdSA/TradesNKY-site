import { PagePlaceholder } from "../../_components/PagePlaceholder";
import { CtaCard as NewsletterBanner } from "../../_components/CtaCard";

export default async function InsightPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <>
      <PagePlaceholder
        eyebrow="Insight"
        title={slug
          .split("-")
          .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
          .join(" ")}
      />
      <NewsletterBanner />
    </>
  );
}
