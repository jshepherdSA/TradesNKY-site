import type { Metadata } from "next";
import {
  InsightsHeroCarousel,
  type InsightsHeroSlide,
} from "../_components/insights-hero-carousel";
import { type BlogPost } from "../_components/blog-post-card";
import { InsightsGrid } from "../_components/insights-grid";
import { CtaCard as NewsletterBanner } from "../_components/CtaCard";

export const metadata: Metadata = {
  title: "Insights | Trades NKY",
  description:
    "Student spotlights, employer features, career guides, and workforce news from Northern Kentucky's skilled trades community.",
};

const FEATURED: InsightsHeroSlide[] = [
  {
    category: "Student Spotlight",
    title:
      "From Ryle High Shop Class to a Signed Welding Apprenticeship Before Graduation",
    excerpt:
      "How one Boone County senior traded a question mark for a five-year apprenticeship — and a paycheck — before the cap-and-gown.",
    imageSrc:
      "https://images.unsplash.com/photo-1581094271901-8022df4466f9?q=80&w=2070&auto=format&fit=crop",
    imageAlt: "",
    href: "/insights/ryle-high-welding-apprenticeship",
  },
  {
    category: "Employer Feature",
    title:
      "How a Florence Plumbing Company Built Its Talent Pipeline From NKY High Schools",
    excerpt:
      "Three apprentices, zero regrets — why a Boone County employer stopped waiting for résumés and started hiring straight out of shop class.",
    imageSrc:
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=2070&auto=format&fit=crop",
    imageAlt: "",
    href: "/insights/florence-plumbing-hires-local",
  },
  {
    category: "Workforce News",
    title:
      "NKY Trades Hiring Surges 12% as Manufacturing Expands Along the Ohio River",
    excerpt:
      "12,400 open trade roles across Northern Kentucky and counting — a new regional report shows where the demand is concentrated and which credentials open the most doors.",
    imageSrc:
      "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?q=80&w=2070&auto=format&fit=crop",
    imageAlt: "",
    href: "/insights/nky-trades-hiring-surge-2026",
  },
  {
    category: "Program News",
    title:
      "TradesNKY Launches Apprenticeship Pipeline With 12 Regional Employers",
    excerpt:
      "A new partnership connects Northern Kentucky high schoolers directly to paid apprenticeships in construction, manufacturing, and energy — no degree, no debt.",
    imageSrc:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop",
    imageAlt: "",
    href: "/insights/apprenticeship-pipeline-launch",
  },
];

const POSTS: BlogPost[] = [
  {
    category: "Student Spotlight",
    title:
      "Boone County Senior Trades Senior-Year Pre-Calc for a Welding Helmet",
    excerpt:
      "Why one Ryle student dropped a college-track elective to spend half her day at the Boone County Career Center — and what it earned her by spring.",
    body: "By second semester she was logging eight hours a week at a welding bench inside the Boone County Career Center. By April she'd taken her AWS D1.1 certification and had a signed apprenticeship offer with a Hebron structural fabricator. She graduates in May with a 4-year journey-card pathway in front of her instead of a pile of loan paperwork.",
    date: "May 18, 2026",
    dateTime: "2026-05-18",
    imageSrc:
      "https://images.unsplash.com/photo-1581094271901-8022df4466f9?q=80&w=2070&auto=format&fit=crop",
    imageAlt: "",
    href: "/insights/boone-county-welding-helmet",
  },
  {
    category: "Employer Spotlight",
    title:
      "A Family-Run NKY HVAC Shop Hires Apprentices Straight From Bracken County",
    excerpt:
      "Three generations in, a Northern Kentucky HVAC company explains why every new tech they hire now comes through a regional career center.",
    body: "The shop runs residential and light-commercial HVAC across Bracken, Mason, and Pendleton counties. Owner Mark Hensley stopped advertising for techs three years ago — every new hire since has come through the Bracken County ATC's HVAC program. \"They show up knowing how to take a refrigerant gauge reading,\" Hensley says. \"That's the bar.\"",
    date: "May 11, 2026",
    dateTime: "2026-05-11",
    imageSrc:
      "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?q=80&w=2070&auto=format&fit=crop",
    imageAlt: "",
    href: "/insights/bracken-county-hvac-apprenticeship",
  },
  {
    category: "Career Guide",
    title:
      "What Northern Kentucky Electricians Actually Earn — and How to Get There",
    excerpt:
      "Apprentice wages, journeyman take-home, overtime that pays for a house: a real look at the Power pathway in NKY in 2026.",
    body: "First-year IBEW apprentices on commercial work in the Cincinnati / NKY local are starting at $19.50/hr with full health and a pension contribution. Top-of-the-book journeyman wages clear $42/hr base before overtime. The five-year apprenticeship runs through the joint training center in Sharonville with classroom credit recognized by Gateway Community & Technical College.",
    date: "May 04, 2026",
    dateTime: "2026-05-04",
    imageSrc:
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=2070&auto=format&fit=crop",
    imageAlt: "",
    href: "/insights/nky-electrician-wages-2026",
  },
  {
    category: "Career Guide",
    title:
      "How to Get a Diesel Mechanic Apprenticeship in NKY Without a Four-Year Degree",
    excerpt:
      "From Florence to Covington, NKY's logistics corridor is hiring diesel techs — here's the credential path that gets you on a shop floor by 19.",
    body: "Gateway Community & Technical College's diesel program in Edgewood is the most direct pipeline into the region's freight, package, and fleet-maintenance jobs. Two-year associate, stackable certificates along the way, and most students are working in a shop part-time by the second semester. Major fleet employers — Amazon, FedEx, DHL, Castellini — all recruit out of the program.",
    date: "April 27, 2026",
    dateTime: "2026-04-27",
    imageSrc:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop",
    imageAlt: "",
    href: "/insights/nky-diesel-apprenticeship-path",
  },
  {
    category: "Workforce News",
    title:
      "12,400 Open Trade Jobs Across Northern Kentucky — Here's Where They Are",
    excerpt:
      "A county-by-county breakdown of where the openings are concentrated and which five pillars are hiring fastest right now.",
    body: "The Boone-Kenton-Campbell tri-county accounts for roughly two-thirds of the open trade jobs across NKY, with manufacturing and logistics leading the demand. Boone County alone has more than 4,000 openings across construction, advanced manufacturing, and transportation, driven by warehouse buildouts along I-75 and the airport's continued cargo expansion.",
    date: "April 22, 2026",
    dateTime: "2026-04-22",
    imageSrc:
      "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?q=80&w=2070&auto=format&fit=crop",
    imageAlt: "",
    href: "/insights/nky-12k-open-trade-jobs",
  },
  {
    category: "Program Update",
    title:
      "New Dual-Credit Manufacturing Course Opens at Two NKY High Schools",
    excerpt:
      "Students can now earn college credit and industry certifications in advanced manufacturing before they graduate from Ryle or Conner.",
    body: "Conner and Ryle high schools will both offer a new Introduction to Advanced Manufacturing dual-credit course in the 2026-27 school year, taught in partnership with Gateway Community & Technical College. Students who complete the course earn three college credits and sit for the MSSC Certified Production Technician exam.",
    date: "April 15, 2026",
    dateTime: "2026-04-15",
    imageSrc:
      "https://images.unsplash.com/photo-1581094271901-8022df4466f9?q=80&w=2070&auto=format&fit=crop",
    imageAlt: "",
    href: "/insights/dual-credit-manufacturing-course",
  },
  {
    category: "Apprenticeship 101",
    title:
      "Registered Apprenticeship in Kentucky — How Earn-While-You-Learn Actually Works",
    excerpt:
      "OJT hours, related instruction, wage steps, journey papers: a plain-English walkthrough of the system that pays you to train.",
    body: "A registered apprenticeship in Kentucky is a four- to five-year program combining 144 hours/year of classroom instruction with at least 2,000 hours/year of paid on-the-job training. Apprentices earn progressive wage steps tied to documented hours and skill milestones, and finish with a nationally portable journeyman credential — no tuition debt, no four-year degree required.",
    date: "April 09, 2026",
    dateTime: "2026-04-09",
    imageSrc:
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=2070&auto=format&fit=crop",
    imageAlt: "",
    href: "/insights/registered-apprenticeship-kentucky",
  },
  {
    category: "Student Spotlight",
    title:
      "From Campbell County Cars Class to a Cincinnati Bell Lineworker Bid",
    excerpt:
      "How a high-school auto-shop kid worked his way into a coveted line-tech opening — without owing a dollar in student debt.",
    body: "He spent senior year at Campbell County's automotive program but knew he didn't want to spend his career in a garage. A Cincinnati Bell recruiter visited the school in November; by spring break he'd passed the line-tech climbing assessment and signed an apprenticeship offer. First-year wage: $24/hr. Tuition owed: zero.",
    date: "April 03, 2026",
    dateTime: "2026-04-03",
    imageSrc:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop",
    imageAlt: "",
    href: "/insights/campbell-county-lineworker-bid",
  },
  {
    category: "Employer Spotlight",
    title:
      "Why a Boone County Concrete Contractor Hires Out of NKY Career Centers",
    excerpt:
      "Three jobsite leads, all under 25, all hired before they graduated. The owner explains why he stopped advertising and started visiting classrooms.",
    body: "Riverside Concrete now sources every new field hire through visits to the Boone County and Kenton County career centers. Three of the company's current jobsite leads — all in their early twenties — were originally hired as high-school co-op apprentices and worked their way up. \"The kids who come through the career centers already know what a finisher does,\" the owner says. \"They've already touched the work.\"",
    date: "March 27, 2026",
    dateTime: "2026-03-27",
    imageSrc:
      "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?q=80&w=2070&auto=format&fit=crop",
    imageAlt: "",
    href: "/insights/boone-county-concrete-hires-local",
  },
  {
    category: "Career Guide",
    title:
      "HVAC vs Plumbing vs Electrical — Which Northern Kentucky Trade Pays Best in 2026",
    excerpt:
      "Real apprentice wages, journeyman ceilings, and which pathway has the steepest first-five-years curve right now in NKY.",
    body: "Electricians edge the top-end ceiling in NKY ($85K+ for IBEW journeymen on commercial work), but plumbers have the steepest early curve — a third-year plumbing apprentice in NKY commonly clears $32/hr with overtime. HVAC sits in the middle on wages but tops both for demand, with shop owners region-wide reporting they can't fill open seats.",
    date: "March 20, 2026",
    dateTime: "2026-03-20",
    imageSrc:
      "https://images.unsplash.com/photo-1581094271901-8022df4466f9?q=80&w=2070&auto=format&fit=crop",
    imageAlt: "",
    href: "/insights/hvac-vs-plumbing-vs-electrical-2026",
  },
];

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
