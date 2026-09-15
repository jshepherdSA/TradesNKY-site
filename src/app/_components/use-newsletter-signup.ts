"use client";

import { useState, type FormEvent } from "react";

/**
 * Shared newsletter-signup behavior for every subscribe form on the site (the
 * site-wide banner and the /newsletter page). Submissions go to the
 * /api/subscribe route, which records them on the TradesNKY Newsletter
 * JotForm.
 */

export type NewsletterStatus = "idle" | "submitting" | "success" | "error";

const isValidEmail = (value: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

export function useNewsletterSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<NewsletterStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isValidEmail(email)) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }
    setStatus("submitting");
    setErrorMessage(null);
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });
      if (!res.ok) throw new Error(`Subscribe failed: ${res.status}`);
      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again.");
    }
  };

  const reset = () => {
    setEmail("");
    setStatus("idle");
    setErrorMessage(null);
  };

  return { email, setEmail, status, errorMessage, handleSubmit, reset };
}
