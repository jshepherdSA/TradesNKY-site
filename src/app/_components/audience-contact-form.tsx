"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";

export const AUDIENCE_ROLES = ["Educator", "Employer", "Policymaker"] as const;
export type AudienceRole = (typeof AUDIENCE_ROLES)[number];

type Fields = {
  name: string;
  organization: string;
  email: string;
  role: AudienceRole;
  message: string;
};

const inputClasses =
  "block w-full rounded-md border border-tnky-edge bg-tnky-white px-4 py-3 text-body text-tnky-ink shadow-sm transition-colors duration-150 placeholder:text-tnky-mute focus:outline-none focus-visible:border-tnky-blue focus-visible:ring-2 focus-visible:ring-tnky-blue focus-visible:ring-offset-2";
const labelClasses = "font-display font-bold text-small text-tnky-ink";

/**
 * Audience contact form for the Educators / Employers / Policymakers pages.
 * The Role dropdown defaults to the page's audience (`defaultRole`) but all
 * three options remain selectable. Submission logs to the console for now;
 * see the TODO where a real endpoint connects. On submit it shows a success
 * confirmation.
 */
export function AudienceContactForm({
  defaultRole,
}: {
  defaultRole: AudienceRole;
}) {
  const [fields, setFields] = useState<Fields>({
    name: "",
    organization: "",
    email: "",
    role: defaultRole,
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const set = <K extends keyof Fields>(key: K, value: Fields[K]) =>
    setFields((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO(backend): POST to the real contact endpoint here, e.g.
    // await fetch("/api/contact", { method: "POST", body: JSON.stringify(fields) }).
    // For now we log the submission so the flow is reviewable without a backend.
    console.log("[audience contact form submission]", fields);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="flex flex-col items-center gap-4 py-8 text-center"
      >
        <CheckCircle2
          aria-hidden="true"
          className="h-12 w-12 text-tnky-blue"
          strokeWidth={1.75}
        />
        <p className="font-display font-extrabold leading-tight text-h3 text-tnky-ink [text-wrap:balance]">
          Thank you — we will be in touch soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 text-left">
      <div className="flex flex-col gap-1.5">
        <label htmlFor="ac-name" className={labelClasses}>
          Name
        </label>
        <input
          id="ac-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          value={fields.name}
          onChange={(e) => set("name", e.target.value)}
          className={inputClasses}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="ac-organization" className={labelClasses}>
          Organization
        </label>
        <input
          id="ac-organization"
          name="organization"
          type="text"
          required
          autoComplete="organization"
          value={fields.organization}
          onChange={(e) => set("organization", e.target.value)}
          className={inputClasses}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="ac-email" className={labelClasses}>
          Email
        </label>
        <input
          id="ac-email"
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          required
          value={fields.email}
          onChange={(e) => set("email", e.target.value)}
          className={inputClasses}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="ac-role" className={labelClasses}>
          Role
        </label>
        <select
          id="ac-role"
          name="role"
          value={fields.role}
          onChange={(e) => set("role", e.target.value as AudienceRole)}
          className={inputClasses}
        >
          {AUDIENCE_ROLES.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="ac-message" className={labelClasses}>
          Message
        </label>
        <textarea
          id="ac-message"
          name="message"
          rows={5}
          value={fields.message}
          onChange={(e) => set("message", e.target.value)}
          className={`${inputClasses} resize-y`}
        />
      </div>

      <button
        type="submit"
        className="inline-flex h-12 items-center justify-center gap-2 rounded-pill bg-tnky-blue px-7 font-display font-bold text-button text-tnky-white shadow-tnky-blue transition-all duration-200 ease-tnky hover:bg-tnky-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tnky-blue focus-visible:ring-offset-2"
      >
        Send Message
      </button>
    </form>
  );
}
