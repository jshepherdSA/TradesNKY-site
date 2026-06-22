import { HeroSection } from "./_components/hero-section";
import { FivePathsAccordion } from "./_components/five-paths-accordion";
import { SimplePathwaySection } from "./_components/simple-pathway-section";
import { StatBar as NKYStatsBanner } from "./_components/StatBar";
import { RealStories } from "./_components/real-stories";
import { InsightsSection } from "./_components/insights-section";
import { CtaCard as NewsletterBanner } from "./_components/CtaCard";

// PathwayScroll has moved off the homepage — kept here, commented out, for
// later reuse on /students.
// import { PathwayScroll } from "./_components/pathway-scroll";

export default function HomePage() {
  return (
    <main>
      {/* Hero + audience banner are now a single component that fills exactly
          the visible area below the sticky nav (calc(100vh - var(--nav-h))). */}
      <HeroSection />

      <SimplePathwaySection />

      <FivePathsAccordion />

      {/* Blank whitespace band above NKYStatsBanner — separates the pillars
          accordion from the stats band with breathing room instead of a rule. */}
      <div aria-hidden="true" className="h-16 bg-tnky-white md:h-20" />

      <NKYStatsBanner />

      {/* Yellow accent rule below NKYStatsBanner — bracket against the
          section below. */}
      <div
        aria-hidden="true"
        style={{
          width: "100%",
          height: "1px",
          backgroundColor: "var(--color-tnky-safety)",
        }}
      />

      <RealStories />

      <InsightsSection />

      <NewsletterBanner />
    </main>
  );
}
