import type { Metadata } from "next";
import { NewsletterSignupForm } from "../_components/newsletter-signup-form";
import { ContactAside } from "../_components/contact-aside";

export const metadata: Metadata = {
  title: "Newsletter | Trades NKY",
  description:
    "Sign up for the TradesNKY newsletter for the latest on skilled-trades careers, programs, and opportunities in Northern Kentucky.",
};

/**
 * Newsletter signup page — same layout as /contact, with the newsletter form
 * in place of the contact form. The site-wide newsletter banner is omitted
 * here since the page itself is the signup.
 */
export default function NewsletterPage() {
  return (
    <main className="bg-tnky-cream">
      {/* Hero — same compact tnky-blue treatment as the contact page. */}
      <section className="bg-tnky-blue text-tnky-white">
        <div className="max-w-content mx-auto grid grid-cols-1 items-center gap-8 px-4 py-10 sm:px-8 md:grid-cols-2 md:gap-10 md:py-12 lg:py-14">
          <div>
            <h1 className="font-display font-tnky-black italic leading-none tracking-wide text-h1 text-tnky-white [text-wrap:balance]">
              <span className="inline-block px-1">Stay Connected</span>
            </h1>
            <div
              aria-hidden="true"
              className="mt-4 h-1 w-20 rounded-full bg-tnky-safety"
            />
          </div>
          <p className="max-w-xl text-lead text-tnky-cream/95 [text-wrap:pretty] md:justify-self-end">
            Sign up for our newsletter and get the latest on careers, programs,
            and opportunities in Northern Kentucky.
          </p>
        </div>
      </section>

      {/* Body — signup form on the left, contact info + CTA on the right. */}
      <section className="bg-tnky-cream">
        <div className="max-w-content mx-auto grid grid-cols-1 gap-10 px-4 py-12 sm:px-8 md:py-16 lg:grid-cols-[3fr_2fr] lg:gap-16">
          <NewsletterSignupForm />
          <ContactAside />
        </div>
      </section>
    </main>
  );
}
