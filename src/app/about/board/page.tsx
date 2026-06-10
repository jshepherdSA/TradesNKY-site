import type { Metadata } from "next";
import {
  BoardMemberCard,
  type BoardMemberCardProps,
} from "@/components/ui/board-member-card";
import { CtaCard as NewsletterBanner } from "../../_components/CtaCard";

export const metadata: Metadata = {
  title: "Board of Directors | Trades NKY",
  description:
    "The TradesNKY Board of Directors — workforce, education, industry, and community leaders driving Northern Kentucky's skilled-trades pipeline.",
};

// Profiles taken from https://tradesnky.org/about-us/board-of-directors/.
// Source page lists names, board roles, and company affiliations; no
// bios are published, so the `bio` slot here renders the company /
// affiliation line. Cover photos use a neutral placeholder avatar until
// real headshots are supplied.
const PLACEHOLDER_PHOTO = "/brand/avatar-placeholder.svg";

const EXECUTIVE_DIRECTOR: BoardMemberCardProps = {
  name: "Lorraine O'Moore",
  title: "Executive Director",
  bio: "TradesNKY's staff lead, anchoring the organization's day-to-day work across Northern Kentucky.",
  role: "Leadership",
  image: PLACEHOLDER_PHOTO,
  imageAlt: "",
  featured: true,
};

const BOARD_MEMBERS: BoardMemberCardProps[] = [
  {
    name: "Phil Griffin",
    title: "President",
    bio: "AnyWeather Companies",
    role: "Officer",
    image: PLACEHOLDER_PHOTO,
    imageAlt: "",
  },
  {
    name: "Larisa Sims",
    title: "Vice President",
    bio: "CVG Airport",
    role: "Officer",
    image: PLACEHOLDER_PHOTO,
    imageAlt: "",
  },
  {
    name: "Stephen Mann",
    title: "Treasurer",
    bio: "Blue and Co. LLC",
    role: "Officer",
    image: PLACEHOLDER_PHOTO,
    imageAlt: "",
  },
  {
    name: "Sara Bray",
    title: "Secretary",
    bio: "Bray Construction Services",
    role: "Officer",
    image: PLACEHOLDER_PHOTO,
    imageAlt: "",
  },
  {
    name: "Jeff Schlosser",
    title: "Member",
    bio: "DBL Law",
    role: "Member",
    image: PLACEHOLDER_PHOTO,
    imageAlt: "",
  },
  {
    name: "John Strawser",
    title: "Member",
    bio: "Valley Interior Systems",
    role: "Member",
    image: PLACEHOLDER_PHOTO,
    imageAlt: "",
  },
  {
    name: "Phillipe Garnier",
    title: "Member",
    bio: "Safran Landing Systems",
    role: "Member",
    image: PLACEHOLDER_PHOTO,
    imageAlt: "",
  },
  {
    name: "Steve Pendery",
    title: "Member",
    bio: "Campbell County Fiscal Court",
    role: "Member",
    image: PLACEHOLDER_PHOTO,
    imageAlt: "",
  },
  {
    name: "Randy Hemmerle",
    title: "Member",
    bio: "Krauss Maffei",
    role: "Member",
    image: PLACEHOLDER_PHOTO,
    imageAlt: "",
  },
  {
    name: "Carolyn Stewart",
    title: "Member",
    bio: "Campbell County ATC",
    role: "Member",
    image: PLACEHOLDER_PHOTO,
    imageAlt: "",
  },
  {
    name: "Michael Taylor",
    title: "Member",
    bio: "Riegler Blacktop",
    role: "Member",
    image: PLACEHOLDER_PHOTO,
    imageAlt: "",
  },
];

export default function BoardPage() {
  return (
    <main className="bg-tnky-cream">
      {/* Hero — same compact tnky-blue treatment as the other About
          sub-pages (Mission/Vision, Partners). */}
      <section className="bg-tnky-blue text-tnky-white">
        <div className="max-w-content mx-auto grid grid-cols-1 items-center gap-8 px-4 py-10 sm:px-8 md:grid-cols-2 md:gap-10 md:py-12 lg:py-14">
          <div>
            <h1 className="font-display font-tnky-black italic leading-none tracking-wide text-h1 text-tnky-white [text-wrap:balance]">
              <span className="inline-block px-1">Board of Directors</span>
            </h1>
            <div
              aria-hidden="true"
              className="mt-4 h-1 w-20 rounded-full bg-tnky-safety"
            />
          </div>
          <p className="max-w-xl text-lead text-tnky-cream/95 [text-wrap:pretty] md:justify-self-end">
            Workforce, education, industry, and community leaders steering
            TradesNKY&apos;s work across Northern Kentucky.
          </p>
        </div>
      </section>

      {/* Board grid — Executive Director full-width on top, then the
          11 board members in a 1 / 2 / 3-column grid. */}
      <section className="bg-tnky-cream">
        <div className="max-w-content mx-auto px-4 py-10 sm:px-8 md:py-12 lg:py-14">
          <div className="mb-6 h-72 md:mb-8">
            <BoardMemberCard {...EXECUTIVE_DIRECTOR} />
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 md:gap-8">
            {BOARD_MEMBERS.map((member) => (
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
