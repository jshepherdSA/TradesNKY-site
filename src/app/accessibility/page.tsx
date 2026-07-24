import type { Metadata } from "next";
import { CtaCard as NewsletterBanner } from "../_components/CtaCard";

export const metadata: Metadata = {
  title: "Accessibility Statement | Trades NKY",
  description:
    "TradesNKY's commitment to providing an accessible and inclusive experience for all individuals, including people with disabilities.",
};

/**
 * Accessibility Statement content. Text is reproduced verbatim from the source
 * document (public/ACCESSIBILITY STATEMENT_Trades.docx) — headings,
 * paragraphs, and lists mirror the document's structure. Do not paraphrase or
 * summarize.
 */
type Block =
  | { k: "h2"; t: string }
  | { k: "p"; t: string }
  | { k: "ul"; items: string[] }
  | { k: "email"; addr: string };

const CONTENT: Block[] = [
  {
    k: "p",
    t: "TradesNKY is committed to providing an accessible and inclusive experience for all individuals, including people with disabilities.",
  },
  {
    k: "p",
    t: "We believe everyone should be able to access information, products, services, programs, and resources offered through our website and digital properties. We continually work to improve the accessibility and usability of our digital experiences and to provide reasonable access to all users.",
  },

  { k: "h2", t: "Our Accessibility Commitment" },
  {
    k: "p",
    t: "We strive to design, develop, maintain, and improve our website with accessibility in mind.",
  },
  {
    k: "p",
    t: "As part of these efforts, we use generally recognized accessibility standards and best practices as guidance, including the Web Content Accessibility Guidelines (“WCAG”) published by the World Wide Web Consortium (“W3C”).",
  },
  {
    k: "p",
    t: "Our general accessibility goal is to work toward substantial conformance with WCAG 2.2 Level AA, where appropriate. Where another accessibility standard or legal requirement applies, we seek to address the applicable requirements.",
  },
  {
    k: "p",
    t: "Accessibility is an ongoing effort. Technologies, standards, content, and user needs continue to evolve, and we regularly evaluate opportunities to improve the accessibility of our digital experiences.",
  },

  { k: "h2", t: "Accessibility Features and Practices" },
  {
    k: "p",
    t: "Depending on the content and functionality of the website, our accessibility efforts may include practices designed to support:",
  },
  {
    k: "ul",
    items: [
      "Keyboard navigation;",
      "Screen readers and other assistive technologies;",
      "Alternative text for meaningful images;",
      "Appropriate headings and page structure;",
      "Descriptive links and buttons;",
      "Sufficient color contrast;",
      "Text resizing and browser zoom;",
      "Form labels and instructions;",
      "Visible keyboard focus indicators;",
      "Captions, transcripts, or other alternatives for multimedia where appropriate;",
      "Consistent navigation and page organization; and",
      "Responsive functionality across different devices and screen sizes.",
    ],
  },
  {
    k: "p",
    t: "We may use a combination of automated accessibility testing, manual review, user feedback, accessibility tools, and ongoing website maintenance to identify and address potential accessibility barriers.",
  },

  { k: "h2", t: "Assistive Technology" },
  {
    k: "p",
    t: "Our website is designed to work with commonly used browsers, operating systems, and assistive technologies.",
  },
  {
    k: "p",
    t: "Because assistive technologies, browsers, devices, and individual user settings vary, the experience may differ depending on the technology being used.",
  },
  {
    k: "p",
    t: "For the best experience, users are encouraged to use current versions of their web browser, operating system, and assistive technology whenever possible.",
  },

  { k: "h2", t: "Third-Party Content and Services" },
  {
    k: "p",
    t: "Our website may contain links to, integrations with, or content provided by third-party websites, platforms, applications, documents, maps, videos, payment systems, scheduling tools, social media services, or other external technologies that we do not own or control.",
  },
  {
    k: "p",
    t: "While we encourage third parties to provide accessible and user-friendly experiences, we cannot control or guarantee the accessibility of third-party content or services.",
  },
  {
    k: "p",
    t: "If you encounter an accessibility issue involving third-party content accessed through our website, please contact us and we will make reasonable efforts to assist you or provide an alternative method of accessing the applicable information or service when possible.",
  },

  { k: "h2", t: "Documents and Downloadable Content" },
  {
    k: "p",
    t: "Our website may contain documents, PDFs, presentations, forms, or other downloadable materials.",
  },
  {
    k: "p",
    t: "We strive to make digital documents accessible where reasonably possible. However, some older, archived, externally provided, or highly specialized documents may not be fully accessible.",
  },
  {
    k: "p",
    t: "If you experience difficulty accessing a document, please contact us. We will make reasonable efforts to provide the information in an alternative accessible format when possible.",
  },

  { k: "h2", t: "Video, Audio, and Multimedia" },
  {
    k: "p",
    t: "Where multimedia content is used, we strive to provide accessible alternatives such as captions, transcripts, descriptive text, or other accommodations where appropriate.",
  },
  {
    k: "p",
    t: "Certain archived, live, third-party, or externally provided multimedia content may have accessibility limitations.",
  },
  {
    k: "p",
    t: "If you need assistance accessing multimedia content, please contact us.",
  },

  { k: "h2", t: "Alternative Access" },
  {
    k: "p",
    t: "If a disability prevents you from accessing information, completing a transaction, submitting a form, requesting a service, or otherwise using a feature of our website, please contact us.",
  },
  {
    k: "p",
    t: "We will make reasonable efforts to provide the information, communication, product, service, or functionality through an alternative accessible method when possible.",
  },
  {
    k: "p",
    t: "Our goal is to provide an alternative that offers substantially equivalent access to the information or service.",
  },

  { k: "h2", t: "Accessibility Feedback and Assistance" },
  {
    k: "p",
    t: "We welcome feedback about the accessibility of our website.",
  },
  {
    k: "p",
    t: "If you experience an accessibility barrier, have difficulty accessing any part of the website, or need information in an alternative format, please contact us at:",
  },
  { k: "email", addr: "info@tradesnky.org" },
  {
    k: "p",
    t: "When contacting us, please provide, if possible:",
  },
  {
    k: "ul",
    items: [
      "The webpage, document, or feature where you experienced difficulty;",
      "A brief description of the accessibility issue;",
      "The type of assistive technology or browser you were using, if relevant; and",
      "Your preferred method of contact.",
    ],
  },
  {
    k: "p",
    t: "Providing this information is optional but may help us better understand and address the issue.",
  },
  {
    k: "p",
    t: "We will make reasonable efforts to respond to accessibility requests and work toward an appropriate solution.",
  },

  { k: "h2", t: "Ongoing Improvement" },
  {
    k: "p",
    t: "Accessibility is not a one-time project. We view accessibility as an ongoing responsibility and continue to assess our website, digital content, technologies, and practices.",
  },
  {
    k: "p",
    t: "As websites and technologies change, accessibility issues may occasionally arise despite our efforts. We encourage users to notify us when they encounter a barrier so that we can investigate and address the issue where reasonably possible.",
  },

  { k: "h2", t: "No Retaliation or Discrimination" },
  {
    k: "p",
    t: "TradesNKY is committed to providing individuals with disabilities an equal opportunity to access our digital information and services.",
  },
  {
    k: "p",
    t: "We will not discriminate against an individual because they request an accessibility accommodation, report an accessibility concern, or use assistive technology to access our website.",
  },

  { k: "h2", t: "Changes to This Accessibility Statement" },
  {
    k: "p",
    t: "We may update this Accessibility Statement periodically to reflect changes in our website, technology, accessibility practices, standards, or applicable requirements.",
  },
  {
    k: "p",
    t: "When we update this statement, we will revise the Effective Date at the top of this page.",
  },

  { k: "h2", t: "Contact Us" },
  {
    k: "p",
    t: "For accessibility assistance, accommodations, alternative formats, or questions regarding the accessibility of our website, please contact:",
  },
];

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function EmailLink({ addr }: { addr: string }) {
  return (
    <a
      href={`mailto:${addr}`}
      className="font-semibold text-tnky-blue underline underline-offset-4 transition-colors duration-150 hover:text-tnky-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tnky-blue focus-visible:ring-offset-2"
    >
      {addr}
    </a>
  );
}

function BodyBlock({ block }: { block: Block }) {
  switch (block.k) {
    case "h2":
      return (
        <h2
          id={slugify(block.t)}
          style={{ scrollMarginTop: "var(--nav-h, 64px)" }}
          className="mt-12 font-display font-extrabold text-h3 text-tnky-ink"
        >
          {block.t}
        </h2>
      );
    case "p":
      return (
        <p className="mt-4 text-body leading-relaxed text-tnky-ink/85 [text-wrap:pretty]">
          {block.t}
        </p>
      );
    case "email":
      return (
        <p className="mt-4 text-body leading-relaxed text-tnky-ink/85">
          <EmailLink addr={block.addr} />
        </p>
      );
    case "ul":
      return (
        <ul className="mt-4 space-y-2.5">
          {block.items.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 text-body leading-relaxed text-tnky-ink/85 [text-wrap:pretty]"
            >
              <span
                aria-hidden="true"
                className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-tnky-safety"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
  }
}

export default function AccessibilityPage() {
  return (
    <main className="bg-tnky-cream">
      <article className="max-w-content mx-auto px-4 pb-20 pt-12 sm:px-8 md:pb-24 md:pt-16">
        {/* Header — eyebrow, title, accent rule, effective date. */}
        <header className="mx-auto max-w-3xl">
          <p className="font-display font-extrabold uppercase tracking-eyebrow text-eyebrow text-tnky-blue">
            Legal
          </p>
          <h1 className="mt-3 font-display font-extrabold leading-tight text-h1 text-tnky-ink [text-wrap:balance]">
            Accessibility Statement
          </h1>
          <div
            aria-hidden="true"
            className="mt-5 h-1 w-20 rounded-full bg-tnky-safety"
          />
          <p className="mt-5 font-display font-bold uppercase tracking-tag text-meta text-tnky-mute">
            Effective Date: July 1, 2026
          </p>
        </header>

        {/* Body */}
        <div className="mx-auto mt-8 max-w-3xl">
          {CONTENT.map((block, i) => (
            <BodyBlock key={i} block={block} />
          ))}

          {/* Contact Us block — the source lists the organization and email on
              separate lines; the email is rendered as a mailto link. */}
          <address className="mt-4 not-italic text-body leading-relaxed text-tnky-ink/85">
            TradesNKY
            <br />
            Email: <EmailLink addr="info@tradesnky.org" />
          </address>
        </div>
      </article>

      <NewsletterBanner />
    </main>
  );
}
