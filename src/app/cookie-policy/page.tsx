import type { Metadata } from "next";
import { CtaCard as NewsletterBanner } from "../_components/CtaCard";
import { CookiePreferencesButton } from "../_components/cookie-preferences-button";

export const metadata: Metadata = {
  title: "Cookie Policy | Trades NKY",
  description:
    "How TradesNKY uses cookies and similar technologies when you visit tradesnky.org.",
};

/**
 * Cookie Policy content. Text is reproduced verbatim from the source
 * document (public/Cookie Policy TradesNKY.docx) — headings, paragraphs, and
 * lists mirror the document's structure. Do not paraphrase or summarize.
 */
type Block =
  | { k: "h2"; n: string; t: string }
  | { k: "h3"; t: string }
  | { k: "p"; t: string }
  | { k: "ul"; items: string[] }
  | { k: "dl"; items: { term: string; desc: string }[] };

const CONTENT: Block[] = [
  {
    k: "p",
    t: "This Cookie Policy explains how TradesNKY (“we,” “us,” or “our”) uses cookies and similar technologies when you visit tradesnky.org (the “Website”).",
  },
  {
    k: "p",
    t: "This Cookie Policy should be read together with our Privacy Policy, which provides additional information about how we collect, use, disclose, and protect personal information.",
  },

  { k: "h2", n: "1", t: "What Are Cookies?" },
  {
    k: "p",
    t: "Cookies are small text files or pieces of data that are stored on or accessed from your computer, smartphone, tablet, or other device when you visit a website.",
  },
  {
    k: "p",
    t: "Cookies and similar technologies can help websites function properly, remember user preferences, understand how visitors interact with a website, measure advertising performance, and deliver more relevant content and advertising.",
  },
  {
    k: "p",
    t: "Depending on the technology involved, we may use cookies as well as similar technologies such as pixels, tags, web beacons, scripts, software development kits, local storage, and device identifiers. For purposes of this Cookie Policy, we generally refer to these technologies collectively as “cookies.”",
  },
  { k: "p", t: "Cookies may be:" },
  {
    k: "dl",
    items: [
      {
        term: "First-party cookies:",
        desc: "Cookies placed directly by us or on our behalf.",
      },
      {
        term: "Third-party cookies:",
        desc: "Cookies placed by third-party companies whose technologies or services are incorporated into our Website.",
      },
      {
        term: "Session cookies:",
        desc: "Cookies that generally expire when you close your browser.",
      },
      {
        term: "Persistent cookies:",
        desc: "Cookies that remain on your device for a specified period of time or until you delete them.",
      },
    ],
  },

  { k: "h2", n: "2", t: "How We Use Cookies" },
  { k: "p", t: "We may use cookies for the following purposes:" },
  { k: "h3", t: "Strictly Necessary Cookies" },
  {
    k: "p",
    t: "These cookies are necessary for the Website to operate and provide features or services you request. They may support functions such as website security, fraud prevention, network management, accessibility, session management, form functionality, or remembering your privacy preferences.",
  },
  {
    k: "p",
    t: "Because these cookies are necessary for the Website to function, they generally cannot be disabled through our cookie preference tools.",
  },
  { k: "h3", t: "Functional Cookies" },
  {
    k: "p",
    t: "Functional cookies allow the Website to provide enhanced functionality and personalization. For example, they may remember preferences you have selected, your location or language preferences, or information you previously provided.",
  },
  {
    k: "p",
    t: "If you do not allow these cookies, certain Website features may not function as intended.",
  },
  { k: "h3", t: "Analytics and Performance Cookies" },
  {
    k: "p",
    t: "We may use analytics and performance cookies to understand how visitors use our Website.",
  },
  { k: "p", t: "These technologies may collect information such as:" },
  {
    k: "ul",
    items: [
      "Pages visited;",
      "Time spent on particular pages;",
      "Links or buttons clicked;",
      "Referring websites;",
      "Browser and device information;",
      "General geographic information;",
      "Website errors;",
      "Traffic patterns; and",
      "Other information regarding interactions with our Website.",
    ],
  },
  {
    k: "p",
    t: "We use this information to measure Website performance, understand how users interact with our content, improve user experience, and make informed decisions about our Website and marketing activities.",
  },
  { k: "h3", t: "Advertising, Targeting, and Remarketing Cookies" },
  {
    k: "p",
    t: "We and our advertising partners may use cookies and similar technologies to measure advertising effectiveness, understand interactions with our advertisements, create audiences, and provide advertising that may be more relevant to your interests.",
  },
  { k: "p", t: "These technologies may help us:" },
  {
    k: "ul",
    items: [
      "Determine whether an advertisement resulted in a Website visit or other action;",
      "Measure advertising campaign performance;",
      "Limit how frequently advertisements are displayed;",
      "Create advertising audiences;",
      "Conduct remarketing or retargeting campaigns;",
      "Understand interactions across websites, applications, or devices; and",
      "Deliver or measure interest-based or targeted advertising.",
    ],
  },
  {
    k: "p",
    t: "Depending on applicable law, some of these activities may be considered “targeted advertising,” “cross-context behavioral advertising,” “sharing,” or a “sale” of personal information.",
  },
  {
    k: "p",
    t: "Where required by applicable law, we provide mechanisms for users to consent to or opt out of these activities.",
  },
  { k: "h3", t: "Social Media and Embedded Content" },
  {
    k: "p",
    t: "Our Website may contain features, videos, maps, social media tools, or other content provided by third parties.",
  },
  {
    k: "p",
    t: "These third parties may use cookies or similar technologies when you interact with their content. Information collected by these third parties is governed by their own privacy policies and practices.",
  },

  { k: "h2", n: "3", t: "Third-Party Technologies" },
  {
    k: "p",
    t: "Depending on the services and features used on our Website, we may utilize technologies provided by third parties, such as:",
  },
  {
    k: "ul",
    items: [
      "Website analytics providers;",
      "Search engine advertising platforms;",
      "Social media advertising platforms;",
      "Programmatic advertising platforms;",
      "Customer relationship management platforms;",
      "Marketing automation platforms;",
      "Call tracking providers;",
      "Video hosting providers;",
      "Mapping services;",
      "Website hosting and content delivery providers;",
      "Security and fraud prevention providers; and",
      "Other technology and advertising partners.",
    ],
  },
  {
    k: "p",
    t: "These third parties may collect information directly from your browser or device through cookies and similar technologies. Their collection and use of information are subject to their respective privacy policies.",
  },

  { k: "h2", n: "4", t: "Cookie Preferences and Choices" },
  {
    k: "p",
    t: "Depending on your location and applicable law, you may have choices regarding the use of certain cookies.",
  },
  { k: "h3", t: "Cookie Preference Center" },
  {
    k: "p",
    t: "Where available, you can manage your cookie preferences by selecting “Cookie Preferences,” “Privacy Choices,” or a similar link available on our Website.",
  },
  {
    k: "p",
    t: "You may be able to accept or reject certain categories of cookies. Strictly necessary cookies may remain active because they are required for the Website to operate.",
  },
  {
    k: "p",
    t: "If you change or delete cookies, use another browser or device, or clear your browser storage, you may need to update your preferences again.",
  },
  { k: "h3", t: "Browser Controls" },
  {
    k: "p",
    t: "Most web browsers allow you to manage cookies through browser settings. Depending on your browser, you may be able to block cookies, receive notifications before cookies are stored, or delete cookies that have already been placed on your device.",
  },
  {
    k: "p",
    t: "Blocking certain cookies may affect the functionality or performance of the Website.",
  },
  { k: "h3", t: "Global Privacy Control and Other Opt-Out Preference Signals" },
  {
    k: "p",
    t: "Certain browsers, browser extensions, and devices allow users to transmit privacy preference signals, such as the Global Privacy Control (“GPC”).",
  },
  {
    k: "p",
    t: "Where we are legally required to recognize an applicable opt-out preference signal, we will process the signal in accordance with applicable law.",
  },
  {
    k: "p",
    t: "Depending on applicable law and our data practices, an applicable signal may be treated as a request to opt out of the sale or sharing of personal information or the use of personal information for targeted advertising.",
  },

  { k: "h2", n: "5", t: "Advertising Choices" },
  {
    k: "p",
    t: "Some third-party advertising providers participate in industry programs that allow users to make choices regarding interest-based advertising.",
  },
  {
    k: "p",
    t: "You may also be able to limit advertising tracking through your browser, mobile device, advertising platform account settings, or the cookie preference tools available on our Website.",
  },
  {
    k: "p",
    t: "Opting out of interest-based or targeted advertising does not necessarily mean that you will stop receiving advertisements. Instead, advertisements you receive may be less tailored to your interests.",
  },

  { k: "h2", n: "6", t: "How Long Cookies Remain on Your Device" },
  {
    k: "p",
    t: "The length of time a cookie remains on your device varies depending on the type and purpose of the cookie.",
  },
  {
    k: "p",
    t: "Some cookies expire when you close your browser, while others may remain for a specified period of time unless you delete them earlier.",
  },
  {
    k: "p",
    t: "Where appropriate, more information regarding individual cookies and their duration may be available through our cookie preference management tool.",
  },

  { k: "h2", n: "7", t: "Personal Information Collected Through Cookies" },
  {
    k: "p",
    t: "Depending on the technology used, cookies and similar technologies may collect or generate information such as:",
  },
  {
    k: "ul",
    items: [
      "Internet Protocol (IP) address;",
      "Browser type;",
      "Device type;",
      "Operating system;",
      "Device identifiers;",
      "Pages viewed;",
      "Links clicked;",
      "Referring and exit pages;",
      "Approximate geographic location;",
      "Date and time of visits;",
      "Advertising identifiers;",
      "Website interactions;",
      "Conversion information; and",
      "Other online activity information.",
    ],
  },
  {
    k: "p",
    t: "Some of this information may constitute personal information or personal data under applicable privacy laws.",
  },
  {
    k: "p",
    t: "For more information regarding the personal information we collect, how we use it, the circumstances in which we disclose it, and the privacy rights that may be available to you, please review our Privacy Policy.",
  },

  { k: "h2", n: "8", t: "Your Privacy Rights" },
  {
    k: "p",
    t: "Depending on where you live and applicable law, you may have certain rights regarding your personal information, including rights to access, correct, delete, or obtain a copy of certain personal information.",
  },
  {
    k: "p",
    t: "You may also have the right to opt out of certain uses or disclosures of personal information, including, where applicable:",
  },
  {
    k: "ul",
    items: [
      "The sale of personal information;",
      "The sharing of personal information;",
      "Targeted advertising; or",
      "Certain types of profiling.",
    ],
  },
  {
    k: "p",
    t: "Please review our Privacy Policy for additional information regarding available privacy rights and instructions for submitting a privacy request.",
  },

  { k: "h2", n: "9", t: "International Visitors" },
  { k: "p", t: "Privacy and cookie requirements vary by jurisdiction." },
  {
    k: "p",
    t: "Where required by applicable law, we may request your consent before using non-essential cookies or similar technologies.",
  },
  {
    k: "p",
    t: "You may withdraw or modify your consent through the cookie preference tools available on the Website, where applicable. Withdrawal of consent does not affect processing that occurred before consent was withdrawn.",
  },

  { k: "h2", n: "10", t: "Changes to This Cookie Policy" },
  {
    k: "p",
    t: "We may update this Cookie Policy periodically to reflect changes in our use of cookies, technologies, services, business practices, or applicable laws.",
  },
  {
    k: "p",
    t: "When we update this Cookie Policy, we will revise the “Last Updated” date at the top of this page.",
  },
  {
    k: "p",
    t: "We encourage you to review this Cookie Policy periodically for information about our use of cookies and similar technologies.",
  },

  { k: "h2", n: "11", t: "Contact Us" },
  {
    k: "p",
    t: "Questions regarding this Cookie Policy or our privacy practices may be directed to:",
  },
];

function BodyBlock({ block }: { block: Block }) {
  switch (block.k) {
    case "h2":
      return (
        <h2
          id={`section-${block.n}`}
          style={{ scrollMarginTop: "var(--nav-h, 64px)" }}
          className="mt-12 font-display font-extrabold text-h3 text-tnky-ink"
        >
          {block.n}. {block.t}
        </h2>
      );
    case "h3":
      return (
        <h3 className="mt-8 font-display font-bold text-lead text-tnky-ink">
          {block.t}
        </h3>
      );
    case "p":
      return (
        <p className="mt-4 text-body leading-relaxed text-tnky-ink/85 [text-wrap:pretty]">
          {block.t}
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
    case "dl":
      return (
        <ul className="mt-4 space-y-3">
          {block.items.map((item) => (
            <li
              key={item.term}
              className="flex items-start gap-3 text-body leading-relaxed text-tnky-ink/85 [text-wrap:pretty]"
            >
              <span
                aria-hidden="true"
                className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-tnky-safety"
              />
              <span>
                <span className="font-semibold text-tnky-ink">
                  {item.term}
                </span>{" "}
                {item.desc}
              </span>
            </li>
          ))}
        </ul>
      );
  }
}

export default function CookiePolicyPage() {
  return (
    <main className="bg-tnky-cream">
      <article className="max-w-content mx-auto px-4 pb-20 pt-12 sm:px-8 md:pb-24 md:pt-16">
        {/* Header — eyebrow, title, accent rule, last-updated date. */}
        <header className="mx-auto max-w-3xl">
          <p className="font-display font-extrabold uppercase tracking-eyebrow text-eyebrow text-tnky-blue">
            Legal
          </p>
          <h1 className="mt-3 font-display font-extrabold leading-tight text-h1 text-tnky-ink [text-wrap:balance]">
            Cookie Policy
          </h1>
          <div
            aria-hidden="true"
            className="mt-5 h-1 w-20 rounded-full bg-tnky-safety"
          />
          <p className="mt-5 font-display font-bold uppercase tracking-tag text-meta text-tnky-mute">
            Last Updated: July 1, 2026
          </p>
        </header>

        {/* Body */}
        <div className="mx-auto mt-8 max-w-3xl">
          {CONTENT.map((block, i) => (
            <BodyBlock key={i} block={block} />
          ))}

          {/* Section 11 contact block — the source lists the organization and
              email on separate lines; the email is rendered as a mailto link. */}
          <address className="mt-4 not-italic text-body leading-relaxed text-tnky-ink/85">
            TradesNKY
            <br />
            Email:{" "}
            <a
              href="mailto:info@tradesnky.org"
              className="font-semibold text-tnky-blue underline underline-offset-4 transition-colors duration-150 hover:text-tnky-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tnky-blue focus-visible:ring-offset-2"
            >
              info@tradesnky.org
            </a>
          </address>
          <p className="mt-4 text-body leading-relaxed text-tnky-ink/85 [text-wrap:pretty]">
            For more information about our privacy practices, please review our
            Privacy Policy.
          </p>

          {/* Preference control — reopen the on-site cookie banner. */}
          <div className="mt-10 border-t border-tnky-edge pt-6">
            <CookiePreferencesButton className="inline-flex items-center gap-2 font-display font-bold uppercase tracking-tag text-small text-tnky-blue underline-offset-4 transition-colors duration-150 hover:text-tnky-blue-700 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tnky-blue focus-visible:ring-offset-2">
              Manage cookie preferences
            </CookiePreferencesButton>
          </div>
        </div>
      </article>

      <NewsletterBanner />
    </main>
  );
}
