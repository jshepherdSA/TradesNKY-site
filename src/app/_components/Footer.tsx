import Image from "next/image";
import Link from "next/link";
import { CookiePreferencesButton } from "./cookie-preferences-button";

const COLS: { h: string; links: { href: string; label: string }[] }[] = [
  {
    h: "Audiences",
    links: [
      { href: "/students", label: "Students" },
      { href: "/parents", label: "Parents" },
      { href: "/educators", label: "Educators" },
      { href: "/employers", label: "Employers" },
      { href: "/policymakers", label: "Policymakers" },
    ],
  },
  {
    h: "Programs",
    links: [
      { href: "/students/pillars/build", label: "Build" },
      { href: "/students/pillars/make", label: "Make" },
      { href: "/students/pillars/move", label: "Move" },
      { href: "/students/pillars/power", label: "Power" },
      { href: "/students/pillars/protect", label: "Protect" },
    ],
  },
  {
    h: "About",
    links: [
      { href: "/about/what-is-tradesnky", label: "Mission" },
      { href: "/insights", label: "Insights" },
      { href: "/about/board", label: "Board" },
      { href: "/about/what-is-tradesnky", label: "Annual report" },
    ],
  },
  {
    h: "Get in touch",
    links: [
      { href: "/contact", label: "Contact" },
      { href: "/contact#volunteer", label: "Volunteer" },
      { href: "/contact#donate", label: "Donate" },
      { href: "/contact#newsletter", label: "Newsletter" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-tnky-black text-tnky-white pt-band pb-8">
      <div className="max-w-content mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 md:gap-14 pb-12 border-b border-tnky-white/10">
          <div>
            <Image
              src="/brand/logo-white.svg"
              alt="Trades NKY"
              width={140}
              height={32}
              className="h-8 w-auto"
            />
            <p className="text-tnky-white/60 text-sm leading-relaxed mt-4 max-w-narrow">
              Build skills. Build futures. Northern Kentucky&apos;s trades pipeline, K through career.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {COLS.map((c) => (
              <div key={c.h}>
                <div className="font-display font-extrabold text-xs uppercase tracking-eyebrow text-tnky-safety mb-3.5">
                  {c.h}
                </div>
                <ul className="flex flex-col gap-2.5">
                  {c.links.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="text-tnky-white/80 text-sm hover:text-tnky-white hover:underline hover:decoration-dashed hover:underline-offset-4"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="pt-7 flex flex-col gap-3 md:flex-row md:items-center md:justify-between text-tnky-white/50 text-mini">
          <span>© Trades NKY · 501(c)(3)</span>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link
              href="/privacy-policy"
              className="hover:text-tnky-white hover:underline hover:decoration-dashed hover:underline-offset-4"
            >
              Privacy Policy
            </Link>
            <Link
              href="/accessibility"
              className="hover:text-tnky-white hover:underline hover:decoration-dashed hover:underline-offset-4"
            >
              Accessibility
            </Link>
            <Link
              href="/cookie-policy"
              className="hover:text-tnky-white hover:underline hover:decoration-dashed hover:underline-offset-4"
            >
              Cookie Policy
            </Link>
            <CookiePreferencesButton className="hover:text-tnky-white hover:underline hover:decoration-dashed hover:underline-offset-4" />
          </div>
        </div>
      </div>
    </footer>
  );
}
