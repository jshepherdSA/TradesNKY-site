import type { Metadata } from "next";
import {
  BoardMemberCard,
  type BoardMemberCardProps,
} from "@/components/ui/board-member-card";
import { CtaCard as NewsletterBanner } from "../../_components/CtaCard";

export const metadata: Metadata = {
  title: "Our Team | Trades NKY",
  description:
    "The TradesNKY board of directors and staff — workforce, education, industry, and community leaders driving Northern Kentucky's skilled-trades pipeline.",
};

// Board profiles taken from https://tradesnky.org/about-us/board-of-directors/.
// Per request, board cards show only name + organization (the member /
// officer / secretary labels have been dropped). Cover photos use a neutral
// placeholder avatar until real headshots are supplied.
const PLACEHOLDER_PHOTO = "/brand/avatar-placeholder.svg";

// ── Board of Directors ──────────────────────────────────────────────
// `bio` carries the organization line. Co-founders and officers also carry
// a `title` (Board Chair, Secretary, Treasurer, …) and are ordered first;
// the remaining directors render just name + affiliation.
const BOARD_MEMBERS: BoardMemberCardProps[] = [
  {
    name: "Phillipe Griffin",
    title: "Co-Founder / Board Chair",
    bio: "AnyWeather Companies",
    image: "/brand/board/phil-griffin.jpg",
    imageAlt: "",
  },
  {
    name: "Sara Bray",
    title: "Co-Founder / Secretary",
    bio: "Bray Construction Services",
    image: "/brand/board/sara-bray.png",
    imageAlt: "",
  },
  {
    // TODO: add Brandon Bray's headshot when supplied.
    name: "Brandon Bray",
    title: "Co-Founder",
    bio: "Bray Construction Services",
    image: PLACEHOLDER_PHOTO,
    imageAlt: "",
  },
  {
    name: "Stephen Mann",
    title: "Treasurer",
    bio: "Blue and Co. LLC",
    image: "/brand/board/stephen-mann.jpg",
    imageAlt: "",
  },
  {
    name: "Larisa Sims",
    title: "Vice-Chair",
    bio: "CVG Airport",
    image: "/brand/board/larisa-sims.png",
    imageAlt: "",
  },
  {
    name: "Jeff Schlosser",
    bio: "DBL Law",
    image: "/brand/board/jeff-schlosser.jpg",
    imageAlt: "",
  },
  {
    name: "John Strawser",
    bio: "Valley Interior Systems",
    image: "/brand/board/john-strawser.webp",
    imageAlt: "",
  },
  {
    name: "Phillipe Garnier",
    bio: "Safran Landing Systems",
    image: "/brand/board/phillipe-garnier.jpg",
    imageAlt: "",
  },
  {
    name: "Steve Pendery",
    bio: "Campbell County Fiscal Court",
    image: "/brand/board/steve-pendery.webp",
    imageAlt: "",
  },
  {
    name: "Randy Hemmerle",
    bio: "Krauss Maffei",
    image: "/brand/board/randy-hemmerle.png",
    imageAlt: "",
  },
  {
    name: "Carolyn Stewart",
    bio: "Campbell County ATC",
    image: "/brand/board/carolyn-stewart.jpg",
    imageAlt: "",
  },
  {
    name: "Michael Taylor",
    bio: "Riegler Blacktop",
    image: "/brand/board/michael-taylor.jpeg",
    imageAlt: "",
  },
  {
    name: "Kevin Cheek",
    bio: "Mazak Corporation",
    image: "/brand/board/kevin-cheek.jpg",
    imageAlt: "",
  },
];

// ── Team (staff) ────────────────────────────────────────────────────
const TEAM_MEMBERS: BoardMemberCardProps[] = [
  {
    name: "Lorraine O'Moore",
    title: "Executive Director",
    image: "/brand/board/lorraine-omoore.webp",
    imageAlt: "",
  },
  {
    name: "Elly Neltner",
    title: "Program Coordinator",
    image: "/brand/board/elly-neltner.jpeg",
    imageAlt: "",
  },
];

// Section heading — display italic title + yellow underline, matching the
// other About sub-pages.
function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <h2 className="font-display italic font-extrabold text-3xl md:text-4xl text-tnky-ink [text-wrap:balance]">
        {children}
      </h2>
      <div
        aria-hidden="true"
        className="mt-4 h-[3px] w-14 rounded-full bg-tnky-safety"
      />
    </div>
  );
}

export default function OurTeamPage() {
  return (
    <main className="bg-tnky-cream">
      {/* Hero — same compact tnky-blue treatment as the other About
          sub-pages (Mission/Vision, Partners). */}
      <section className="bg-tnky-blue text-tnky-white">
        <div className="max-w-content mx-auto grid grid-cols-1 items-center gap-8 px-4 py-10 sm:px-8 md:grid-cols-2 md:gap-10 md:py-12 lg:py-14">
          <div>
            <h1 className="font-display font-tnky-black italic leading-none tracking-wide text-h1 text-tnky-white [text-wrap:balance]">
              <span className="inline-block px-1">Our Team</span>
            </h1>
            <div
              aria-hidden="true"
              className="mt-4 h-1 w-20 rounded-full bg-tnky-safety"
            />
          </div>
          <p className="max-w-xl text-lead text-tnky-cream/95 [text-wrap:pretty] md:justify-self-end">
            The board members and staff steering TradesNKY&apos;s work across
            Northern Kentucky.
          </p>
        </div>
      </section>

      {/* ── Board of Directors ──────────────────────────────────── */}
      <section className="bg-tnky-cream">
        <div className="max-w-content mx-auto px-4 pt-10 sm:px-8 md:pt-12 lg:pt-14">
          <SectionHeading>Board of Directors</SectionHeading>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 md:gap-8">
            {BOARD_MEMBERS.map((member) => (
              <div key={member.name} className="h-80">
                <BoardMemberCard {...member} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ─────────────────────────────────────────────────── */}
      <section className="bg-tnky-cream">
        <div className="max-w-content mx-auto px-4 py-10 sm:px-8 md:py-12 lg:py-14">
          <SectionHeading>Team</SectionHeading>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:max-w-3xl">
            {TEAM_MEMBERS.map((member) => (
              <div key={member.name} className="h-80">
                <BoardMemberCard {...member} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <NewsletterBanner />
    </main>
  );
}
