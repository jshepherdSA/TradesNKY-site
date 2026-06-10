"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { AlertCircle, ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// brand --ease-tnky cubic-bezier(0.22, 1, 0.36, 1)
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

// Newsletter copy lives here so it stays identical everywhere the banner is
// used across the site. Pass only an optional image override.
const HEADING = "Stay Connected with TradesNKY";
const DESCRIPTION =
  "Sign up for our newsletter and get the latest on careers, programs, and opportunities in Northern Kentucky.";
const BUTTON_TEXT = "Subscribe";
const INPUT_PLACEHOLDER = "Enter your email address";
const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.05,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE },
  },
};

type Status = "idle" | "submitting" | "success" | "error";

type CtaCardProps = {
  imageSrc?: string;
  imageAlt?: string;
};

const isValidEmail = (value: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

export function CtaCard({
  imageSrc = DEFAULT_IMAGE,
  imageAlt = "",
}: CtaCardProps = {}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const reducedMotion = useReducedMotion();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isValidEmail(email)) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }
    setStatus("submitting");
    setErrorMessage(null);
    try {
      // TODO(backend): wire this up to a real subscribe endpoint
      // (e.g. POST /api/subscribe with { email }). Until that exists, the
      // brief delay + success transition below is a placeholder so the UI
      // flow is reviewable — no email is actually being sent or stored.
      await new Promise((resolve) => setTimeout(resolve, 900));
      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="relative overflow-hidden bg-tnky-blue py-band">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        sizes="100vw"
        className="object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-tnky-black/40" aria-hidden="true" />

      <motion.div
        initial={reducedMotion ? false : "hidden"}
        whileInView={reducedMotion ? undefined : "visible"}
        viewport={{ once: true, margin: "-100px" }}
        variants={reducedMotion ? undefined : containerVariants}
        className="relative z-10 mx-auto grid max-w-content grid-cols-1 items-center gap-x-12 gap-y-6 px-4 sm:px-8 md:grid-cols-2 md:gap-y-4"
      >
        <motion.h2
          variants={reducedMotion ? undefined : itemVariants}
          className="font-display italic font-extrabold text-section text-tnky-safety md:col-start-1 md:row-start-1"
        >
          {HEADING}
        </motion.h2>
        <motion.p
          variants={reducedMotion ? undefined : itemVariants}
          className="max-w-xl text-lead text-tnky-cream/90 md:col-start-1 md:row-start-2"
        >
          {DESCRIPTION}
        </motion.p>

        <motion.div
          variants={reducedMotion ? undefined : itemVariants}
          className="w-full max-w-md md:col-start-2 md:row-span-2 md:row-start-1 md:justify-self-end"
        >
          {status === "success" ? (
            <motion.div
              initial={reducedMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={reducedMotion ? { duration: 0 } : { duration: 0.3 }}
              role="status"
              className="flex items-start gap-3 rounded-md border border-tnky-white/20 bg-tnky-white/10 p-5 text-tnky-white"
            >
              <CheckCircle2
                className="h-6 w-6 shrink-0 text-tnky-safety"
                aria-hidden="true"
              />
              <div>
                <p className="font-display font-bold">You&apos;re on the list.</p>
                <p className="mt-1 text-small text-tnky-cream/90">
                  We&apos;ll be in touch with what&apos;s new in Northern
                  Kentucky&apos;s trades community.
                </p>
              </div>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              aria-busy={status === "submitting"}
              className="flex flex-col gap-3 sm:flex-row"
            >
              <Input
                type="email"
                name="email"
                autoComplete="email"
                inputMode="email"
                placeholder={INPUT_PLACEHOLDER}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === "submitting"}
                required
                aria-label={INPUT_PLACEHOLDER}
                aria-invalid={status === "error"}
                aria-describedby={
                  status === "error" ? "cta-form-error" : undefined
                }
                className="h-12 flex-1 rounded-md border-tnky-edge bg-tnky-white/95 text-tnky-ink placeholder:text-tnky-mute focus-visible:ring-tnky-safety"
              />
              <Button
                type="submit"
                size="lg"
                disabled={status === "submitting"}
                className="h-12 gap-2 rounded-pill bg-tnky-safety px-6 font-display font-bold text-tnky-safety-ink shadow-tnky-safety transition-all duration-200 ease-tnky hover:bg-tnky-safety hover:brightness-95"
              >
                {status === "submitting" ? (
                  <>
                    <Loader2
                      className="h-4 w-4 animate-spin"
                      aria-hidden="true"
                    />
                    Sending&hellip;
                  </>
                ) : (
                  <>
                    {BUTTON_TEXT}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </>
                )}
              </Button>
            </form>
          )}

          {status === "error" && errorMessage && (
            <p
              id="cta-form-error"
              role="alert"
              className="mt-3 flex items-center gap-2 text-small text-tnky-safety"
            >
              <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
              {errorMessage}
            </p>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
}
