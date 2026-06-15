import type { Metadata } from "next";
import type { SVGProps } from "react";
import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { ContactForm } from "../_components/contact-form";
import { CtaCard as NewsletterBanner } from "../_components/CtaCard";

// Inline brand-mark SVGs — the project's pinned `lucide-react@1.14`
// doesn't include `Facebook` / `Instagram` / `Linkedin`. Single-path
// icons, `fill="currentColor"` so they inherit the link's text color
// (default tnky-ink, white on hover when the chip flips to tnky-blue).
function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export const metadata: Metadata = {
  title: "Contact | Trades NKY",
  description:
    "Get in touch with TradesNKY — connecting students, parents, educators, and employers across Northern Kentucky's skilled-trades community.",
};

const SOCIAL_LINKS = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/tradesnky",
    icon: FacebookIcon,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/tradesnky",
    icon: InstagramIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/tradesnky",
    icon: LinkedinIcon,
  },
];

export default function ContactPage() {
  return (
    <main className="bg-tnky-cream">
      {/* Hero — same compact tnky-blue treatment as the rest of the
          site's section heros. */}
      <section className="bg-tnky-blue text-tnky-white">
        <div className="max-w-content mx-auto grid grid-cols-1 items-center gap-8 px-4 py-10 sm:px-8 md:grid-cols-2 md:gap-10 md:py-12 lg:py-14">
          <div>
            <h1 className="font-display font-tnky-black italic leading-none tracking-wide text-h1 text-tnky-white [text-wrap:balance]">
              <span className="inline-block px-1">Get in Touch</span>
            </h1>
            <div
              aria-hidden="true"
              className="mt-4 h-1 w-20 rounded-full bg-tnky-safety"
            />
          </div>
          <p className="max-w-xl text-lead text-tnky-cream/95 [text-wrap:pretty] md:justify-self-end">
            Whether you&apos;re a student, parent, educator, or employer —
            we&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Body — form on the left (or stacked on mobile), contact info
          + CTA on the right. The form is the primary action so it
          gets the wider column at lg+. */}
      <section className="bg-tnky-cream">
        <div className="max-w-content mx-auto grid grid-cols-1 gap-10 px-4 py-12 sm:px-8 md:py-16 lg:grid-cols-[3fr_2fr] lg:gap-16">
          <ContactForm />

          <aside
            aria-labelledby="contact-info-heading"
            className="flex flex-col gap-8"
          >
            <div>
              <h2
                id="contact-info-heading"
                className="font-display font-extrabold text-section text-tnky-ink"
              >
                Other ways to reach us
              </h2>
              <div
                aria-hidden="true"
                className="mt-3 h-[3px] w-14 rounded-full bg-tnky-safety"
              />
            </div>

            <ul className="flex flex-col gap-5 text-tnky-ink">
              <li className="flex items-start gap-3">
                <MapPin
                  aria-hidden="true"
                  className="mt-0.5 h-5 w-5 shrink-0 text-tnky-blue"
                />
                <div>
                  <p className="font-display font-bold uppercase tracking-tag text-eyebrow text-tnky-mute">
                    Address
                  </p>
                  <p className="mt-1 text-body leading-relaxed text-tnky-ink">
                    TradesNKY
                    <br />
                    Northern Kentucky
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Mail
                  aria-hidden="true"
                  className="mt-0.5 h-5 w-5 shrink-0 text-tnky-blue"
                />
                <div>
                  <p className="font-display font-bold uppercase tracking-tag text-eyebrow text-tnky-mute">
                    Email
                  </p>
                  <a
                    href="mailto:info@tradesnky.org"
                    className="mt-1 inline-block text-body text-tnky-ink underline-offset-4 transition-colors duration-150 hover:text-tnky-blue hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tnky-blue focus-visible:ring-offset-2"
                  >
                    info@tradesnky.org
                  </a>
                </div>
              </li>
            </ul>

            <div>
              <p className="font-display font-bold uppercase tracking-tag text-eyebrow text-tnky-mute">
                Follow Us
              </p>
              <ul className="mt-3 flex items-center gap-3">
                {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`TradesNKY on ${label}`}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-tnky-edge bg-tnky-white text-tnky-ink transition-colors duration-150 hover:border-tnky-blue hover:bg-tnky-blue hover:text-tnky-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tnky-blue focus-visible:ring-offset-2"
                    >
                      <Icon aria-hidden="true" className="h-5 w-5" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quiz CTA card — tnky-blue tile pointing at the quiz */}
            <Link
              href="/students/quiz"
              className="group block rounded-lg bg-tnky-blue p-6 text-tnky-white shadow-tnky-2 transition-colors duration-200 ease-tnky hover:bg-tnky-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tnky-blue focus-visible:ring-offset-2 md:p-7"
            >
              <p className="font-display font-extrabold uppercase tracking-tag text-eyebrow text-tnky-safety">
                Not sure where to start?
              </p>
              <p className="mt-3 font-display font-extrabold italic leading-tight text-h3 text-tnky-white [text-wrap:balance]">
                Ready to find your path?
              </p>
              <p className="mt-4 inline-flex items-center gap-2 font-display font-bold uppercase tracking-tag text-button text-tnky-white">
                Take the Career Quiz
                <span
                  aria-hidden="true"
                  className="transition-transform duration-200 ease-tnky group-hover:translate-x-1"
                >
                  →
                </span>
              </p>
            </Link>
          </aside>
        </div>
      </section>

      <NewsletterBanner />
    </main>
  );
}
