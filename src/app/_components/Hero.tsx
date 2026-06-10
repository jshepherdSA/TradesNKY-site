import Link from "next/link";
import { RoadDivider } from "./RoadDivider";

export function Hero() {
  return (
    <section className="pt-14">
      <div className="max-w-content mx-auto px-4 sm:px-8 pb-20 grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 items-center">
        <div>
          <div className="font-display font-extrabold uppercase text-eyebrow text-tnky-blue mb-4">
            Trades NKY · Northern Kentucky
          </div>
          <h1 className="font-display italic font-tnky-black text-display mb-6">
            Build skills.
            <br />
            <span className="text-tnky-blue">Build futures.</span>
          </h1>
          <p className="text-tnky-mute text-lead mb-8 max-w-lead [text-wrap:pretty]">
            There&apos;s more than one path to a great career. We connect K–12 students in Northern
            Kentucky to the skilled trades — electricians, welders, HVAC techs, carpenters — who
            keep this region running.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/students/quiz"
              className="inline-flex items-center gap-2 bg-tnky-blue text-tnky-white rounded-pill px-pill-x py-3.5 font-display font-bold text-button shadow-tnky-blue transition-all duration-200 ease-tnky hover:bg-tnky-blue-700 hover:-translate-y-px"
            >
              Take the career quiz <span aria-hidden>→</span>
            </Link>
            <Link
              href="/parents"
              className="inline-flex items-center gap-2 bg-transparent text-tnky-blue border-2 border-tnky-blue rounded-pill px-5 py-3 font-display font-bold text-button transition-all duration-200 ease-tnky hover:bg-tnky-blue hover:text-tnky-white"
            >
              For parents
            </Link>
          </div>
        </div>
        <HeroPhotoFrame />
      </div>
      <RoadDivider animated />
    </section>
  );
}

function HeroPhotoFrame() {
  return (
    <div className="relative rounded-xl bg-tnky-paper border border-tnky-edge p-card shadow-tnky-3">
      <div className="absolute -top-3.5 left-pill-x bg-tnky-blue text-tnky-white font-display font-bold text-micro uppercase tracking-tag px-3 py-1.5 rounded-pill inline-flex items-center gap-2 shadow-tnky-tag">
        <span className="block w-1.5 h-1.5 bg-tnky-safety rounded-full" />
        Welding I · Boone County HS
      </div>
      <div className="aspect-[5/4] rounded-lg flex flex-col items-center justify-center text-center relative overflow-hidden bg-gradient-to-br from-tnky-cream-2 to-tnky-cream-3">
        <div className="text-tnky-blue p-6">
          <svg
            viewBox="0 0 200 200"
            width="120"
            height="120"
            fill="none"
            stroke="currentColor"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mx-auto"
          >
            <path d="M40 150 L100 50 L160 150 Z" />
            <path d="M70 130 L100 80 L130 130" />
            <circle cx="100" cy="170" r="6" fill="#ffb800" stroke="none" />
          </svg>
          <div className="font-display font-extrabold text-sm uppercase tracking-data mt-3.5">
            Hero photo placeholder
          </div>
          <div className="text-xs text-tnky-mute mt-1">
            Real student, real shop. Warm tone, slight grain.
          </div>
        </div>
      </div>
      <div className="absolute -right-3.5 bottom-7 bg-tnky-white border border-tnky-edge rounded-tag px-4 py-3 shadow-tnky-3 flex flex-col gap-0.5">
        <span className="font-display font-tnky-black italic text-stat-md text-tnky-blue leading-none">
          $62K
        </span>
        <span className="text-meta text-tnky-mute uppercase tracking-label font-display font-bold">
          avg journeyman wage · NKY
        </span>
      </div>
    </div>
  );
}
