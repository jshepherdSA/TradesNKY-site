"use client";

import { useRef, useState, type FormEvent } from "react";
import {
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react";

// brand --ease-tnky cubic-bezier(0.22, 1, 0.36, 1)
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

type Role =
  | "Student"
  | "Parent"
  | "Educator"
  | "Employer"
  | "Partner"
  | "Other";

const ROLES: Role[] = [
  "Student",
  "Parent",
  "Educator",
  "Employer",
  "Partner",
  "Other",
];

type Status = "idle" | "submitting" | "success";

type FormFields = {
  name: string;
  email: string;
  role: Role | "";
  subject: string;
  message: string;
};

type Errors = Partial<Record<keyof FormFields, string>>;

const EMPTY: FormFields = {
  name: "",
  email: "",
  role: "",
  subject: "",
  message: "",
};

// Format-only check (length / shape), not deliverability.
const isValidEmail = (value: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

function validate(fields: FormFields): Errors {
  const errors: Errors = {};
  if (!fields.name.trim()) {
    errors.name = "Please enter your name.";
  }
  if (!fields.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!isValidEmail(fields.email)) {
    errors.email =
      "Email address must include @ and a domain (e.g. you@example.com).";
  }
  if (!fields.role) {
    errors.role = "Please choose the option that best describes you.";
  }
  if (!fields.subject.trim()) {
    errors.subject = "Please enter a subject.";
  }
  if (!fields.message.trim()) {
    errors.message = "Please enter your message.";
  }
  return errors;
}

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.05 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: EASE },
  },
};

export function ContactForm() {
  const reducedMotion = useReducedMotion();
  const formRef = useRef<HTMLFormElement>(null);
  const [fields, setFields] = useState<FormFields>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<
    Partial<Record<keyof FormFields, boolean>>
  >({});
  const [status, setStatus] = useState<Status>("idle");
  const [submitError, setSubmitError] = useState<string | null>(null);

  const setField = <K extends keyof FormFields>(key: K, value: FormFields[K]) => {
    setFields((prev) => {
      const next = { ...prev, [key]: value };
      // If this field is currently showing an error, re-validate on
      // change so the message clears as soon as it's fixed (clears
      // the "I see your error" feedback once they've addressed it).
      if (touched[key]) {
        const fresh = validate(next);
        setErrors((prevErr) => ({ ...prevErr, [key]: fresh[key] }));
      }
      return next;
    });
  };

  const handleBlur = (key: keyof FormFields) => {
    setTouched((prev) => ({ ...prev, [key]: true }));
    const fresh = validate(fields);
    setErrors((prev) => ({ ...prev, [key]: fresh[key] }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fresh = validate(fields);
    setErrors(fresh);
    setTouched({
      name: true,
      email: true,
      role: true,
      subject: true,
      message: true,
    });

    if (Object.keys(fresh).length > 0) {
      // Focus the first invalid field so keyboard / screen-reader
      // users land directly on the problem.
      const firstError = (
        ["name", "email", "role", "subject", "message"] as const
      ).find((k) => fresh[k]);
      if (firstError) {
        const el = formRef.current?.querySelector<HTMLElement>(
          `[id="contact-${firstError}"]`,
        );
        el?.focus();
      }
      return;
    }

    setSubmitError(null);
    setStatus("submitting");

    try {
      // TODO(backend): replace with a real submission endpoint
      // (e.g. `await fetch("/api/contact", { method: "POST", body: ... })`).
      // For now we log the submission so the flow is reviewable
      // without a backend.
      // eslint-disable-next-line no-console
      console.log("[contact form submission]", fields);
      await new Promise((resolve) => setTimeout(resolve, 900));
      setStatus("success");
    } catch {
      setStatus("idle");
      setSubmitError(
        "We couldn't send your message. Please try again, or email us directly at info@tradesnky.org.",
      );
    }
  };

  // Success state — replaces the form with a confirmation panel.
  // `role="status"` + `aria-live="polite"` announces the result to
  // screen-reader users; `Reset` lets the user submit another message.
  if (status === "success") {
    return (
      <motion.div
        role="status"
        aria-live="polite"
        initial={reducedMotion ? false : { opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={reducedMotion ? { duration: 0 } : { duration: 0.35, ease: EASE }}
        className="flex flex-col items-start gap-4 rounded-lg border border-tnky-edge bg-tnky-white p-8 shadow-tnky-2"
      >
        <CheckCircle2
          aria-hidden="true"
          className="h-10 w-10 shrink-0 text-tnky-blue"
          strokeWidth={1.75}
        />
        <div>
          <h2 className="font-display font-extrabold leading-tight text-h3 text-tnky-ink">
            Thanks — your message is on its way.
          </h2>
          <p className="mt-3 text-body leading-relaxed text-tnky-mute [text-wrap:pretty]">
            A member of the TradesNKY team will be in touch soon. In the
            meantime, feel free to{" "}
            <a
              href="/insights"
              className="font-semibold text-tnky-blue underline underline-offset-4 hover:text-tnky-safety focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tnky-blue focus-visible:ring-offset-2"
            >
              browse Insights
            </a>{" "}
            for student stories, employer features, and the latest from the
            NKY trades community.
          </p>
        </div>
        <button
          type="button"
          onClick={() => {
            setFields(EMPTY);
            setErrors({});
            setTouched({});
            setStatus("idle");
          }}
          className="mt-2 inline-flex items-center gap-2 rounded-pill border border-tnky-edge px-5 py-2.5 font-display font-bold text-button text-tnky-ink transition-colors duration-200 ease-tnky hover:bg-tnky-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tnky-blue focus-visible:ring-offset-2"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <motion.form
      ref={formRef}
      onSubmit={handleSubmit}
      noValidate
      aria-busy={status === "submitting"}
      aria-labelledby="contact-form-heading"
      variants={reducedMotion ? undefined : containerVariants}
      initial={reducedMotion ? false : "hidden"}
      animate={reducedMotion ? undefined : "visible"}
      className="flex flex-col gap-5"
    >
      <motion.div variants={reducedMotion ? undefined : itemVariants}>
        <h2
          id="contact-form-heading"
          className="font-display font-extrabold text-section text-tnky-ink"
        >
          Send us a message
        </h2>
        <p className="mt-2 text-small text-tnky-mute">
          All fields are required. We&apos;ll get back to you within a few
          business days.
        </p>
      </motion.div>

      {/* Top-level submit error — only shown after a failed POST.
          `role="alert"` so it's announced; close to the submit button
          where the user just acted. */}
      {submitError ? (
        <motion.div
          role="alert"
          variants={reducedMotion ? undefined : itemVariants}
          className="flex items-start gap-3 rounded-md border border-tnky-safety/40 bg-tnky-safety/10 p-4 text-tnky-ink"
        >
          <AlertCircle
            aria-hidden="true"
            className="mt-0.5 h-5 w-5 shrink-0 text-tnky-safety-ink"
          />
          <p className="text-small leading-relaxed [text-wrap:pretty]">
            {submitError}
          </p>
        </motion.div>
      ) : null}

      <Field
        id="contact-name"
        label="Name"
        error={errors.name}
        touched={touched.name}
        reducedMotion={reducedMotion}
      >
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          required
          value={fields.name}
          onChange={(e) => setField("name", e.target.value)}
          onBlur={() => handleBlur("name")}
          aria-invalid={Boolean(touched.name && errors.name) ? true : undefined}
          aria-describedby={
            touched.name && errors.name ? "contact-name-error" : undefined
          }
          className={inputClasses(Boolean(touched.name && errors.name))}
        />
      </Field>

      <Field
        id="contact-email"
        label="Email"
        error={errors.email}
        touched={touched.email}
        reducedMotion={reducedMotion}
      >
        <input
          id="contact-email"
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          required
          value={fields.email}
          onChange={(e) => setField("email", e.target.value)}
          onBlur={() => handleBlur("email")}
          aria-invalid={Boolean(touched.email && errors.email) ? true : undefined}
          aria-describedby={
            touched.email && errors.email ? "contact-email-error" : undefined
          }
          className={inputClasses(Boolean(touched.email && errors.email))}
        />
      </Field>

      <Field
        id="contact-role"
        label="I am a…"
        error={errors.role}
        touched={touched.role}
        reducedMotion={reducedMotion}
      >
        <select
          id="contact-role"
          name="role"
          required
          value={fields.role}
          onChange={(e) => setField("role", e.target.value as Role | "")}
          onBlur={() => handleBlur("role")}
          aria-invalid={Boolean(touched.role && errors.role) ? true : undefined}
          aria-describedby={
            touched.role && errors.role ? "contact-role-error" : undefined
          }
          className={inputClasses(Boolean(touched.role && errors.role))}
        >
          <option value="" disabled>
            Choose one…
          </option>
          {ROLES.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
      </Field>

      <Field
        id="contact-subject"
        label="Subject"
        error={errors.subject}
        touched={touched.subject}
        reducedMotion={reducedMotion}
      >
        <input
          id="contact-subject"
          name="subject"
          type="text"
          required
          value={fields.subject}
          onChange={(e) => setField("subject", e.target.value)}
          onBlur={() => handleBlur("subject")}
          aria-invalid={
            Boolean(touched.subject && errors.subject) ? true : undefined
          }
          aria-describedby={
            touched.subject && errors.subject
              ? "contact-subject-error"
              : undefined
          }
          className={inputClasses(Boolean(touched.subject && errors.subject))}
        />
      </Field>

      <Field
        id="contact-message"
        label="Message"
        error={errors.message}
        touched={touched.message}
        reducedMotion={reducedMotion}
      >
        <textarea
          id="contact-message"
          name="message"
          required
          rows={6}
          value={fields.message}
          onChange={(e) => setField("message", e.target.value)}
          onBlur={() => handleBlur("message")}
          aria-invalid={
            Boolean(touched.message && errors.message) ? true : undefined
          }
          aria-describedby={
            touched.message && errors.message
              ? "contact-message-error"
              : undefined
          }
          className={`${inputClasses(Boolean(touched.message && errors.message))} resize-y`}
        />
      </Field>

      <motion.div variants={reducedMotion ? undefined : itemVariants}>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex h-12 items-center justify-center gap-2 rounded-pill bg-tnky-blue px-7 font-display font-bold text-button text-tnky-white shadow-tnky-blue transition-all duration-200 ease-tnky hover:bg-tnky-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tnky-blue focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "submitting" ? (
            <>
              <Loader2
                aria-hidden="true"
                className="h-4 w-4 animate-spin"
              />
              Sending&hellip;
            </>
          ) : (
            <>
              Send message
              <Send aria-hidden="true" className="h-4 w-4" />
            </>
          )}
        </button>
      </motion.div>
    </motion.form>
  );
}

/** Visible-error variant of the shared input class string. The error
 *  border is paired with a visible message + an icon — never relies on
 *  color alone to signal the state. */
function inputClasses(hasError: boolean) {
  return [
    "block w-full rounded-md border bg-tnky-white px-4 py-3 text-body text-tnky-ink shadow-sm transition-colors duration-150",
    "placeholder:text-tnky-mute",
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    hasError
      ? "border-tnky-safety-ink focus-visible:ring-tnky-safety"
      : "border-tnky-edge focus-visible:ring-tnky-blue focus-visible:border-tnky-blue",
  ].join(" ");
}

type FieldProps = {
  id: string;
  label: string;
  error?: string;
  touched?: boolean;
  reducedMotion: boolean | null;
  children: React.ReactNode;
};

function Field({
  id,
  label,
  error,
  touched,
  reducedMotion,
  children,
}: FieldProps) {
  const showError = Boolean(touched && error);

  return (
    <motion.div
      variants={reducedMotion ? undefined : itemVariants}
      className="flex flex-col gap-1.5"
    >
      <label
        htmlFor={id}
        className="font-display font-bold text-small text-tnky-ink"
      >
        {label}
      </label>
      {children}
      {showError ? (
        <p
          id={`${id}-error`}
          className="mt-0.5 flex items-start gap-1.5 text-small text-tnky-safety-ink"
        >
          <AlertCircle
            aria-hidden="true"
            className="mt-0.5 h-4 w-4 shrink-0"
          />
          <span>{error}</span>
        </p>
      ) : null}
    </motion.div>
  );
}
