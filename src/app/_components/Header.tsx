"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV = [
  { href: "/students", label: "Students" },
  { href: "/parents", label: "Parents" },
  { href: "/educators", label: "Educators" },
  { href: "/employers", label: "Employers" },
  { href: "/about/what-is-tradesnky", label: "About" },
];

export function Header() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 py-4 bg-tnky-cream/85 backdrop-blur-tnky">
      <div className="max-w-content mx-auto px-4 sm:px-8">
        <div className="flex items-center gap-4 md:gap-8 bg-tnky-white border border-tnky-edge rounded-pill pl-5 pr-2.5 py-2.5 shadow-tnky-1">
          <Link href="/" className="shrink-0 flex items-center" aria-label="Trades NKY home">
            <Image
              src="/brand/logo-primary.svg"
              alt="Trades NKY"
              width={240}
              height={80}
              priority
              className="h-12 md:h-16 lg:h-20 w-auto"
            />
          </Link>
          <nav className="hidden md:flex gap-6 flex-1">
            {NAV.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href || pathname.startsWith(item.href + "/");
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={
                    "relative px-0.5 py-1.5 font-display font-semibold text-sm transition-colors duration-150 hover:text-tnky-blue " +
                    (active
                      ? "text-tnky-blue after:absolute after:left-0 after:right-0 after:-bottom-0.5 after:h-0.5 after:bg-tnky-blue after:rounded-sm"
                      : "text-tnky-ink")
                  }
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <Link
            href="/students/quiz"
            className="shrink-0 inline-flex items-center gap-2 bg-tnky-blue text-tnky-white rounded-pill px-5 md:px-6 py-3 font-display font-bold text-button shadow-tnky-blue transition-all duration-200 ease-tnky hover:bg-tnky-blue-700 hover:-translate-y-px whitespace-nowrap"
          >
            Take the quiz <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
