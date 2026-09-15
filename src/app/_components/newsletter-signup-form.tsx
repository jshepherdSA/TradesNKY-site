"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { AlertCircle, ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { useNewsletterSignup } from "./use-newsletter-signup";

// brand --ease-tnky cubic-bezier(0.22, 1, 0.36, 1)
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/**
 * Full-page newsletter signup for /newsletter. Same behavior as the site-wide
 * banner (shared useNewsletterSignup hook), laid out as a light form panel to
 * match the contact page.
 */
export function NewsletterSignupForm() {
  const { email, setEmail, status, errorMessage, handleSubmit, reset } =
    useNewsletterSignup();
  const reducedMotion = useReducedMotion();
  const hasError = status === "error" && Boolean(errorMessage);

  if (status === "success") {
    return (
      <motion.div
        role="status"
        aria-live="polite"
        initial={reducedMotion ? false : { opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={
          reducedMotion ? { duration: 0 } : { duration: 0.35, ease: EASE }
        }
        className="flex flex-col items-start gap-4 self-start rounded-lg border border-tnky-edge bg-tnky-white p-8 shadow-tnky-2"
      >
        <CheckCircle2
          aria-hidden="true"
          className="h-10 w-10 shrink-0 text-tnky-blue"
          strokeWidth={1.75}
        />
        <div>
          <h2 className="font-display font-extrabold leading-tight text-h3 text-tnky-ink">
            You&apos;re on the list.
          </h2>
          <p className="mt-3 text-body leading-relaxed text-tnky-mute [text-wrap:pretty]">
            We&apos;ll be in touch with what&apos;s new in Northern
            Kentucky&apos;s trades community. In the meantime, feel free to{" "}
            <Link
              href="/insights"
              className="font-semibold text-tnky-blue underline underline-offset-4 hover:text-tnky-safety focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tnky-blue focus-visible:ring-offset-2"
            >
              browse Insights
            </Link>
            .
          </p>
        </div>
        <button
          type="button"
          onClick={reset}
          className="mt-2 inline-flex items-center gap-2 rounded-pill border border-tnky-edge px-5 py-2.5 font-display font-bold text-button text-tnky-ink transition-colors duration-200 ease-tnky hover:bg-tnky-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tnky-blue focus-visible:ring-offset-2"
        >
          Sign up another email
        </button>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-busy={status === "submitting"}
      aria-labelledby="newsletter-form-heading"
      className="flex flex-col gap-5"
    >
      <div>
        <h2
          id="newsletter-form-heading"
          className="font-display font-extrabold text-section text-tnky-ink"
        >
          Sign up for our newsletter
        </h2>
        <p className="mt-2 text-small text-tnky-mute">
          Get the latest on careers, programs, and opportunities in Northern
          Kentucky, delivered to your inbox.
        </p>
      </div>

      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="newsletter-email"
          className="font-display font-bold text-small text-tnky-ink"
        >
          Email
        </label>
        <input
          id="newsletter-email"
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          required
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === "submitting"}
          aria-invalid={hasError ? true : undefined}
          aria-describedby={hasError ? "newsletter-email-error" : undefined}
          className={[
            "block w-full rounded-md border bg-tnky-white px-4 py-3 text-body text-tnky-ink shadow-sm transition-colors duration-150",
            "placeholder:text-tnky-mute",
            "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
            hasError
              ? "border-tnky-safety-ink focus-visible:ring-tnky-safety"
              : "border-tnky-edge focus-visible:border-tnky-blue focus-visible:ring-tnky-blue",
          ].join(" ")}
        />
        {hasError && (
          <p
            id="newsletter-email-error"
            role="alert"
            className="mt-0.5 flex items-start gap-1.5 text-small text-tnky-safety-ink"
          >
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
            {errorMessage}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center justify-center gap-2 self-start rounded-pill bg-tnky-blue px-7 py-3 font-display font-bold text-button text-tnky-white shadow-tnky-blue transition-all duration-200 ease-tnky hover:-translate-y-px hover:bg-tnky-blue-700 disabled:pointer-events-none disabled:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tnky-blue focus-visible:ring-offset-2"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            Sending&hellip;
          </>
        ) : (
          <>
            Subscribe
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </>
        )}
      </button>
    </form>
  );
}
