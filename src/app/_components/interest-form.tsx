"use client";

import { useId, useState } from "react";
import { ArrowRight } from "lucide-react";

type FormState = {
  name: string;
  email: string;
  role: string;
  message: string;
};

const ROLES = ["Student", "Parent", "Educator", "Employer"] as const;

const FIELD_CLASS =
  "w-full rounded-lg border border-tnky-edge bg-tnky-white px-4 py-3 text-body font-medium text-tnky-ink placeholder:text-tnky-mute focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tnky-blue focus-visible:ring-offset-2 focus-visible:ring-offset-tnky-cream";
const LABEL_CLASS =
  "font-display font-bold text-small text-tnky-ink";

/**
 * Placeholder interest / contact form for the Students page. Captures name,
 * email, role, and a message. On submit it currently logs to the console —
 * see the TODO in `handleSubmit` for where the real endpoint goes.
 */
export function InterestForm() {
  const id = useId();
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    role: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO(backend): POST `form` to a real endpoint (e.g. /api/contact or a
    // CRM webhook). Until that exists, log the submission so the flow is
    // reviewable — nothing is sent or stored yet.
    console.log("Interest form submission:", form);
    setSubmitted(true);
  }

  return (
    <div className="rounded-3xl border border-tnky-edge bg-tnky-cream p-8 shadow-tnky-2 md:p-10">
      <h2 className="font-display italic font-extrabold text-3xl md:text-4xl text-tnky-ink [text-wrap:balance]">
        Have Questions? Reach Out.
      </h2>
      <div
        aria-hidden="true"
        className="mt-4 h-[3px] w-14 rounded-full bg-tnky-safety"
      />

      {submitted ? (
        <p
          role="status"
          className="mt-8 rounded-lg border border-tnky-edge bg-tnky-white p-5 text-body font-medium text-tnky-ink"
        >
          Thanks for reaching out — we&apos;ll be in touch soon.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label htmlFor={`${id}-name`} className={LABEL_CLASS}>
              Name
            </label>
            <input
              id={`${id}-name`}
              name="name"
              type="text"
              autoComplete="name"
              required
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
              placeholder="Your name"
              className={FIELD_CLASS}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor={`${id}-email`} className={LABEL_CLASS}>
              Email
            </label>
            <input
              id={`${id}-email`}
              name="email"
              type="email"
              autoComplete="email"
              required
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              placeholder="you@example.com"
              className={FIELD_CLASS}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor={`${id}-role`} className={LABEL_CLASS}>
              Role
            </label>
            <select
              id={`${id}-role`}
              name="role"
              required
              value={form.role}
              onChange={(e) => update("role", e.target.value)}
              className={FIELD_CLASS}
            >
              <option value="" disabled>
                Select your role
              </option>
              {ROLES.map((role) => (
                <option key={role} value={role}>
                  {role}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor={`${id}-message`} className={LABEL_CLASS}>
              Message
            </label>
            <textarea
              id={`${id}-message`}
              name="message"
              rows={4}
              value={form.message}
              onChange={(e) => update("message", e.target.value)}
              placeholder="How can we help?"
              className={`${FIELD_CLASS} resize-y`}
            />
          </div>

          <button
            type="submit"
            className="mt-1 inline-flex items-center justify-center gap-2 rounded-pill bg-tnky-blue px-8 py-4 font-display font-bold text-button text-tnky-white shadow-tnky-2 transition-all duration-200 ease-tnky hover:-translate-y-px hover:bg-tnky-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tnky-blue focus-visible:ring-offset-2 focus-visible:ring-offset-tnky-cream"
          >
            Send Message
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </form>
      )}
    </div>
  );
}
