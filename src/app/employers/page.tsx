import { PagePlaceholder } from "../_components/PagePlaceholder";
import { CtaCard as NewsletterBanner } from "../_components/CtaCard";

export default function EmployersPage() {
  return (
    <>
      <PagePlaceholder
        eyebrow="For employers"
        title="Hire the next generation of NKY tradespeople."
      />
      <NewsletterBanner />
    </>
  );
}
