import type { Metadata } from "next";
import { CtaCard as NewsletterBanner } from "../_components/CtaCard";
import { CookiePreferencesButton } from "../_components/cookie-preferences-button";

export const metadata: Metadata = {
  title: "Privacy Policy | Trades NKY",
  description:
    "How TradesNKY collects, uses, discloses, and protects personal information when you visit tradesnky.org or interact with our Services.",
};

/**
 * Privacy Policy content. Text is reproduced verbatim from the source document
 * (public/Trades Privacy Policy.docx) — headings, subheadings, paragraphs, and
 * lists mirror the document's structure. Do not paraphrase or summarize.
 */
type Block =
  | { k: "h2"; n: string; t: string }
  | { k: "h3"; t: string }
  | { k: "p"; t: string }
  | { k: "ul"; items: string[] }
  | { k: "email"; addr: string };

const CONTENT: Block[] = [
  {
    k: "p",
    t: "TradesNKY (“Company,” “we,” “us,” or “our”) respects your privacy. This Privacy Policy explains how we collect, use, disclose, and protect information when you visit tradesnky.org or otherwise interact with our websites, digital services, communications, advertisements, forms, social media pages, events, products, or services that link to this Privacy Policy collectively, the “Services.”",
  },
  {
    k: "p",
    t: "By accessing or using the Services, you acknowledge the practices described in this Privacy Policy.",
  },

  { k: "h2", n: "1", t: "Scope of This Privacy Policy" },
  {
    k: "p",
    t: "This Privacy Policy applies to personal information collected through the Services and through related interactions with us.",
  },
  {
    k: "p",
    t: "“Personal information” means information that identifies, relates to, describes, is reasonably capable of being associated with, or could reasonably be linked to an individual or household. The definition may vary depending on applicable law.",
  },
  {
    k: "p",
    t: "This Privacy Policy does not apply to information governed by a separate privacy notice provided by us, including any industry-specific, customer-specific, employee, applicant, financial, medical, or other legally required privacy notice.",
  },

  { k: "h2", n: "2", t: "Information We Collect" },
  {
    k: "p",
    t: "The information we collect depends on how you interact with us and which Services you use.",
  },
  { k: "h3", t: "Information You Provide Directly" },
  { k: "p", t: "We may collect information you provide to us, including:" },
  {
    k: "ul",
    items: [
      "Name;",
      "Email address;",
      "Telephone number;",
      "Mailing or billing address;",
      "Company, organization, or employer;",
      "Job title;",
      "Account or login information;",
      "Information submitted through contact, registration, request-information, appointment, application, reservation, donation, or inquiry forms;",
      "Communications and correspondence with us;",
      "Customer service requests;",
      "Survey, contest, promotion, or event information;",
      "Transaction, order, billing, or payment-related information;",
      "Reviews, testimonials, comments, or other content you submit;",
      "Employment application information, such as work history, education, qualifications, and résumé information; and",
      "Any other information you choose to provide.",
    ],
  },
  {
    k: "p",
    t: "Payment information may be collected and processed directly by a third-party payment provider. We may not receive or store complete payment card details.",
  },
  { k: "h3", t: "Information Collected Automatically" },
  {
    k: "p",
    t: "When you use the Services, we and our service providers may automatically collect information such as:",
  },
  {
    k: "ul",
    items: [
      "Internet Protocol address;",
      "Browser type and version;",
      "Device type;",
      "Operating system;",
      "Device identifiers;",
      "Referring and exit pages;",
      "Pages viewed;",
      "Links, buttons, or advertisements clicked;",
      "Dates and times of visits;",
      "Time spent using the Services;",
      "General or approximate geographic location;",
      "Search activity;",
      "Form interactions;",
      "Advertising identifiers;",
      "Conversion and attribution information;",
      "Website errors and performance information; and",
      "Other information regarding your interaction with the Services.",
    ],
  },
  {
    k: "p",
    t: "We may collect this information through cookies, pixels, tags, web beacons, scripts, local storage, software development kits, device identifiers, and similar technologies.",
  },
  {
    k: "p",
    t: "Please review our Cookie Policy for additional information about these technologies and the choices that may be available to you.",
  },
  { k: "h3", t: "Information From Other Sources" },
  { k: "p", t: "We may receive information from other sources, including:" },
  {
    k: "ul",
    items: [
      "Advertising and analytics providers;",
      "Social media platforms;",
      "Marketing and technology partners;",
      "Customer relationship management platforms;",
      "Publicly available sources;",
      "Business partners;",
      "Referral sources;",
      "Event organizers;",
      "Data providers;",
      "Affiliates;",
      "Service providers; and",
      "Other individuals or organizations.",
    ],
  },
  {
    k: "p",
    t: "If you interact with us through a social media platform or another third-party service, that platform may provide us with information in accordance with its own policies and your account settings.",
  },

  { k: "h2", n: "3", t: "Categories of Personal Information" },
  {
    k: "p",
    t: "Depending on how you interact with us, we may collect the following categories of personal information:",
  },
  { k: "h3", t: "Identifiers" },
  {
    k: "p",
    t: "Examples include your name, email address, postal address, telephone number, account name, online identifier, Internet Protocol address, or similar identifiers.",
  },
  { k: "h3", t: "Customer and Contact Information" },
  {
    k: "p",
    t: "Examples include contact details, account information, signature, communication preferences, and other information you provide when requesting or receiving products, information, or services.",
  },
  { k: "h3", t: "Commercial Information" },
  {
    k: "p",
    t: "Examples include records of products or services considered, requested, purchased, scheduled, donated to, applied for, or otherwise obtained, as well as transaction and engagement history.",
  },
  { k: "h3", t: "Internet or Other Electronic Network Activity" },
  {
    k: "p",
    t: "Examples include browsing history, search history, pages viewed, advertisements viewed, links clicked, device information, and interactions with websites, applications, advertisements, emails, or other digital content.",
  },
  { k: "h3", t: "Geolocation Information" },
  {
    k: "p",
    t: "We may collect general or approximate location information based on your Internet Protocol address, device information, or interaction with the Services.",
  },
  { k: "h3", t: "Audio, Electronic, Visual, or Similar Information" },
  {
    k: "p",
    t: "Examples may include photographs, videos, voicemail messages, recordings, or other content submitted to us or captured during interactions where permitted by law.",
  },
  { k: "h3", t: "Professional, Employment, or Education Information" },
  {
    k: "p",
    t: "Examples include employer, job title, professional qualifications, employment history, résumé information, education history, or information submitted in connection with employment or educational opportunities.",
  },
  { k: "h3", t: "Inferences" },
  {
    k: "p",
    t: "We may draw inferences from information we collect to understand interests, preferences, likely behavior, advertising effectiveness, or interactions with our Services.",
  },
  { k: "h3", t: "Sensitive Personal Information" },
  {
    k: "p",
    t: "In limited circumstances, you may choose to provide information that is considered sensitive under applicable law.",
  },
  {
    k: "p",
    t: "We do not use or disclose sensitive personal information for the purpose of inferring characteristics about an individual except where permitted by applicable law. Please do not provide sensitive information through general website forms unless it is specifically requested and necessary for the applicable service.",
  },

  { k: "h2", n: "4", t: "How We Use Personal Information" },
  { k: "p", t: "We may use personal information to:" },
  {
    k: "ul",
    items: [
      "Provide, operate, maintain, and improve the Services;",
      "Respond to inquiries and requests;",
      "Provide requested information, products, or services;",
      "Process registrations, applications, appointments, reservations, transactions, donations, or orders;",
      "Communicate with customers, prospective customers, applicants, donors, students, patients, residents, members, business partners, or other individuals;",
      "Provide customer service and support;",
      "Personalize content and user experiences;",
      "Maintain accounts and preferences;",
      "Send administrative information;",
      "Send marketing, promotional, educational, fundraising, or informational communications;",
      "Measure and improve advertising and marketing campaigns;",
      "Conduct analytics and research;",
      "Understand how people use and interact with the Services;",
      "Develop and improve products, services, websites, communications, and marketing;",
      "Authenticate users and protect accounts;",
      "Detect, investigate, and prevent fraud, misuse, security incidents, or illegal activity;",
      "Protect our rights, property, security, employees, customers, users, and others;",
      "Comply with legal, regulatory, contractual, and reporting obligations;",
      "Enforce agreements, policies, and terms;",
      "Evaluate or complete a merger, acquisition, financing, restructuring, sale, transfer, or similar business transaction;",
      "Process employment applications and manage recruiting activities; and",
      "Fulfill any other purpose disclosed when information is collected or with your direction or consent.",
    ],
  },
  {
    k: "p",
    t: "We may combine information collected from different sources for the purposes described in this Privacy Policy.",
  },
  {
    k: "p",
    t: "We may also aggregate or de-identify information so that it can no longer reasonably be associated with an individual. We may use and disclose aggregated or de-identified information for lawful purposes.",
  },

  { k: "h2", n: "5", t: "How We Disclose Personal Information" },
  {
    k: "p",
    t: "We may disclose personal information to the following categories of recipients:",
  },
  { k: "h3", t: "Service Providers" },
  {
    k: "p",
    t: "We may disclose information to companies that perform services on our behalf, such as:",
  },
  {
    k: "ul",
    items: [
      "Website hosting;",
      "Cloud storage;",
      "Information technology;",
      "Cybersecurity;",
      "Analytics;",
      "Advertising;",
      "Email and text message delivery;",
      "Customer relationship management;",
      "Payment processing;",
      "Call tracking;",
      "Form processing;",
      "Scheduling;",
      "Customer support;",
      "Professional consulting;",
      "Data management;",
      "Marketing;",
      "Printing and mailing; and",
      "Other operational services.",
    ],
  },
  {
    k: "p",
    t: "These providers may access personal information as necessary to perform services for us.",
  },
  { k: "h3", t: "Advertising and Analytics Partners" },
  {
    k: "p",
    t: "We may disclose identifiers, device information, Internet or electronic network activity, approximate location, advertising information, and inferences to advertising, analytics, social media, and technology partners.",
  },
  { k: "p", t: "These partners may use information to:" },
  {
    k: "ul",
    items: [
      "Measure website traffic;",
      "Analyze user activity;",
      "Attribute conversions;",
      "Create advertising audiences;",
      "Measure advertising effectiveness;",
      "Limit advertising frequency;",
      "Personalize content; and",
      "Provide or measure targeted, personalized, or interest-based advertising.",
    ],
  },
  {
    k: "p",
    t: "Some privacy laws may define certain digital advertising disclosures as a “sale,” “sharing,” or use for “targeted advertising,” even when no money is exchanged.",
  },
  {
    k: "p",
    t: "We do not sell personal information in exchange for money. Where required by applicable law, we provide individuals with the ability to opt out of activities legally defined as selling, sharing, or targeted advertising.",
  },
  { k: "h3", t: "Affiliates and Related Organizations" },
  {
    k: "p",
    t: "We may disclose information to affiliated companies, parent organizations, subsidiaries, related entities, franchisees, locations, departments, or organizations under common ownership or control.",
  },
  { k: "h3", t: "Business Partners" },
  {
    k: "p",
    t: "We may disclose information to business partners in connection with jointly offered programs, events, promotions, services, referrals, or other business activities.",
  },
  { k: "h3", t: "Legal, Safety, and Compliance Recipients" },
  {
    k: "p",
    t: "We may disclose information when we believe disclosure is necessary or appropriate to:",
  },
  {
    k: "ul",
    items: [
      "Comply with applicable laws, regulations, legal processes, court orders, or government requests;",
      "Cooperate with law enforcement or regulatory authorities;",
      "Protect legal rights or defend legal claims;",
      "Enforce agreements and policies;",
      "Detect or prevent fraud, misuse, security incidents, or illegal activity; or",
      "Protect the safety, rights, property, or security of the Company, our users, or others.",
    ],
  },
  { k: "h3", t: "Business Transactions" },
  {
    k: "p",
    t: "We may disclose or transfer information in connection with a proposed or completed merger, acquisition, financing, reorganization, bankruptcy, sale of assets, transfer of operations, or similar business transaction.",
  },
  { k: "h3", t: "At Your Direction or With Your Consent" },
  {
    k: "p",
    t: "We may disclose information when you direct us to do so, consent to the disclosure, or intentionally use the Services to interact with a third party.",
  },

  { k: "h2", n: "6", t: "Cookies and Similar Technologies" },
  {
    k: "p",
    t: "We and third parties may use cookies and similar technologies to operate the Services, remember preferences, analyze activity, measure performance, prevent fraud, personalize content, and conduct or measure advertising.",
  },
  { k: "p", t: "The technologies used through our Services may include:" },
  {
    k: "ul",
    items: [
      "Essential cookies;",
      "Functional cookies;",
      "Analytics cookies;",
      "Advertising cookies;",
      "Conversion tracking technologies;",
      "Social media pixels;",
      "Remarketing and retargeting technologies;",
      "Embedded content; and",
      "Similar tracking technologies.",
    ],
  },
  {
    k: "p",
    t: "You can learn more about these practices and available choices by reviewing our Cookie Policy and using any cookie preference tool available on the Website.",
  },
  {
    k: "p",
    t: "Browser controls that delete or block cookies may affect the availability or functionality of certain features.",
  },

  { k: "h2", n: "7", t: "Targeted Advertising and Privacy Preference Signals" },
  {
    k: "p",
    t: "We and our advertising partners may use personal information collected across websites, applications, or services to provide or measure advertising that may be more relevant to your interests.",
  },
  {
    k: "p",
    t: "Depending on where you live, you may have the right to opt out of:",
  },
  {
    k: "ul",
    items: [
      "The sale of personal information;",
      "The sharing of personal information;",
      "Targeted advertising;",
      "Cross-context behavioral advertising; or",
      "Certain profiling activities.",
    ],
  },
  {
    k: "p",
    t: "You may exercise applicable rights through any “Your Privacy Choices,” “Do Not Sell or Share My Personal Information,” or cookie preference link made available through the Services. You may also contact us at info@tradesnky.org.",
  },
  {
    k: "p",
    t: "Certain browsers and browser extensions allow users to transmit opt-out preference signals, such as Global Privacy Control. Where required by applicable law, we process recognized preference signals as requests to opt out of applicable selling, sharing, or targeted advertising for the browser or device transmitting the signal.",
  },
  {
    k: "p",
    t: "Because these signals may be browser- and device-specific, you may need to apply the preference separately on each browser and device you use.",
  },

  { k: "h2", n: "8", t: "Email and Text Message Communications" },
  {
    k: "p",
    t: "You may unsubscribe from promotional emails by selecting the unsubscribe link included in the email.",
  },
  {
    k: "p",
    t: "Even if you unsubscribe from promotional messages, we may continue to send non-promotional communications, such as responses to inquiries, transaction information, account notices, security alerts, or other service-related messages.",
  },
  {
    k: "p",
    t: "Where text messaging is offered, you may opt out of promotional text messages by following the instructions in the message, such as replying “STOP.” Message and data rates may apply.",
  },

  { k: "h2", n: "9", t: "Retention of Personal Information" },
  {
    k: "p",
    t: "We retain personal information for as long as reasonably necessary to fulfill the purposes described in this Privacy Policy, unless a longer retention period is required or permitted by law.",
  },
  {
    k: "p",
    t: "The criteria used to determine retention periods may include:",
  },
  {
    k: "ul",
    items: [
      "The length of our relationship with you;",
      "The nature and sensitivity of the information;",
      "The purposes for which the information was collected;",
      "Operational and business requirements;",
      "Legal, contractual, accounting, and reporting obligations;",
      "Applicable limitation periods;",
      "Security and fraud-prevention needs; and",
      "The need to establish, exercise, or defend legal claims.",
    ],
  },
  {
    k: "p",
    t: "When information is no longer reasonably necessary, we may delete, de-identify, or securely dispose of it in accordance with applicable requirements and our retention practices.",
  },

  { k: "h2", n: "10", t: "Information Security" },
  {
    k: "p",
    t: "We use reasonable administrative, technical, and physical safeguards designed to protect personal information.",
  },
  {
    k: "p",
    t: "However, no website, Internet transmission, electronic storage system, or security measure is completely secure. We cannot guarantee the absolute security of information.",
  },
  {
    k: "p",
    t: "You are responsible for using appropriate precautions when submitting information online and for maintaining the confidentiality of any account credentials.",
  },

  { k: "h2", n: "11", t: "Your Privacy Rights" },
  {
    k: "p",
    t: "Depending on where you live and applicable law, you may have the right to:",
  },
  {
    k: "ul",
    items: [
      "Confirm whether we process your personal information;",
      "Request access to personal information;",
      "Request correction of inaccurate personal information;",
      "Request deletion of personal information;",
      "Obtain a portable copy of certain personal information;",
      "Opt out of the sale or sharing of personal information;",
      "Opt out of targeted advertising;",
      "Opt out of certain profiling activities;",
      "Limit certain uses or disclosures of sensitive personal information;",
      "Withdraw consent where processing is based on consent;",
      "Object to or restrict certain processing; and",
      "Appeal a decision regarding a privacy request.",
    ],
  },
  {
    k: "p",
    t: "These rights are subject to applicable limitations, exceptions, eligibility requirements, and verification procedures.",
  },
  { k: "h3", t: "Submitting a Request" },
  { k: "p", t: "To submit a privacy request, contact us at:" },
  { k: "email", addr: "info@tradesnky.org" },
  {
    k: "p",
    t: "Please describe the nature of your request and provide enough information for us to reasonably identify you and respond.",
  },
  {
    k: "p",
    t: "We may need to verify your identity before completing a request. Verification may require us to confirm information associated with you or request additional information. We will use verification information only for identity verification, security, fraud prevention, and legal compliance.",
  },
  {
    k: "p",
    t: "We may deny or limit a request where permitted by law, including when we cannot reasonably verify identity, the request is fraudulent or excessive, or the information is subject to a legal exception. When required, we will explain the reason for the denial and provide information about any available appeal process.",
  },
  { k: "h3", t: "Authorized Agents" },
  {
    k: "p",
    t: "Where permitted by law, you may designate an authorized agent to submit a request on your behalf.",
  },
  {
    k: "p",
    t: "We may require proof that you authorized the agent and may also require you to verify your identity directly with us.",
  },
  { k: "h3", t: "Non-Discrimination" },
  {
    k: "p",
    t: "We will not unlawfully discriminate against you for exercising an applicable privacy right.",
  },
  { k: "h3", t: "Appeals" },
  {
    k: "p",
    t: "If we deny a privacy request and applicable law provides a right to appeal, you may submit an appeal by emailing info@tradesnky.org and including “Privacy Request Appeal” in the subject line.",
  },

  { k: "h2", n: "12", t: "Additional California Disclosures" },
  {
    k: "p",
    t: "This section applies where the California Consumer Privacy Act, as amended, applies to our processing of personal information.",
  },
  {
    k: "p",
    t: "During the preceding 12 months, we may have collected the categories of personal information described in Section 3 of this Privacy Policy.",
  },
  { k: "p", t: "We may obtain personal information from:" },
  {
    k: "ul",
    items: [
      "You directly;",
      "Your browser or device;",
      "Your interactions with our Services;",
      "Service providers;",
      "Advertising and analytics companies;",
      "Social media platforms;",
      "Business partners;",
      "Affiliates;",
      "Publicly available sources; and",
      "Other individuals or organizations.",
    ],
  },
  {
    k: "p",
    t: "We may collect, use, and disclose these categories of information for the business and commercial purposes described in Sections 4 and 5.",
  },
  {
    k: "p",
    t: "During the preceding 12 months, we may have disclosed personal information to service providers, affiliates, business partners, advertising and analytics partners, government or legal recipients, and parties involved in business transactions.",
  },
  { k: "p", t: "We do not sell personal information in exchange for money." },
  {
    k: "p",
    t: "Our disclosure of identifiers, Internet or electronic network activity, approximate location information, advertising information, and inferences to advertising or analytics partners may be considered “selling” or “sharing” under California law.",
  },
  {
    k: "p",
    t: "California residents may exercise applicable rights as described in Section 11. Applicable opt-out requests may also be submitted through any “Your Privacy Choices” or “Do Not Sell or Share My Personal Information” link available on the Website.",
  },
  {
    k: "p",
    t: "We do not knowingly sell or share the personal information of individuals under 16 years of age.",
  },
  {
    k: "p",
    t: "We do not use or disclose sensitive personal information for purposes that require a right to limit under applicable California law unless otherwise stated at or before the time of collection.",
  },
  {
    k: "p",
    t: "California residents may also request information regarding certain disclosures of personal information to third parties for their own direct marketing purposes, where applicable.",
  },

  { k: "h2", n: "13", t: "Children’s Privacy" },
  {
    k: "p",
    t: "The Services are intended for a general audience and are not directed to children under 13.",
  },
  {
    k: "p",
    t: "We do not knowingly collect personal information online from children under 13 through general-audience Services. If we learn that we collected personal information from a child under 13 in a manner not permitted by law, we will take reasonable steps to delete it.",
  },
  {
    k: "p",
    t: "A parent or legal guardian who believes a child has provided personal information may contact us at info@tradesnky.org.",
  },
  {
    k: "p",
    t: "Services specifically directed to children, students, minors, or families may provide an additional privacy notice or obtain consent where required.",
  },

  { k: "h2", n: "14", t: "Third-Party Websites and Services" },
  {
    k: "p",
    t: "The Services may contain links to websites, platforms, applications, or services operated by third parties.",
  },
  {
    k: "p",
    t: "We do not control and are not responsible for the privacy, security, content, or practices of third parties. This Privacy Policy does not apply to third-party services.",
  },
  {
    k: "p",
    t: "We encourage you to review the privacy policies of any third-party services you use.",
  },

  { k: "h2", n: "15", t: "Social Media" },
  { k: "p", t: "We may maintain pages or profiles on social media platforms." },
  {
    k: "p",
    t: "Information you provide through a social media platform may be collected and processed by both us and the applicable platform. Your interactions with the platform are governed by its own terms, settings, and privacy policies.",
  },
  {
    k: "p",
    t: "Information posted publicly or shared through public social media features may be visible to others.",
  },

  { k: "h2", n: "16", t: "International Visitors" },
  {
    k: "p",
    t: "The Services may be operated from or supported in the United States. If you access the Services from another country, your information may be transferred to, processed, or stored in the United States or other countries where we or our service providers operate.",
  },
  {
    k: "p",
    t: "Privacy and data protection laws in those countries may differ from the laws in your country.",
  },
  {
    k: "p",
    t: "Where required by applicable law, we rely on an appropriate legal basis to process personal information, which may include:",
  },
  {
    k: "ul",
    items: [
      "Performance of a contract;",
      "Compliance with a legal obligation;",
      "Our legitimate interests or the legitimate interests of others;",
      "Protection of vital interests; or",
      "Your consent.",
    ],
  },
  {
    k: "p",
    t: "Individuals in certain jurisdictions may have rights to access, correct, delete, restrict, object to, or obtain a portable copy of personal information and may have the right to withdraw consent.",
  },
  {
    k: "p",
    t: "You may contact us at info@tradesnky.org regarding an applicable privacy right. You may also have the right to submit a complaint to the data protection authority where you live or work.",
  },

  { k: "h2", n: "17", t: "Changes to This Privacy Policy" },
  {
    k: "p",
    t: "We may update this Privacy Policy periodically to reflect changes in our Services, technologies, practices, legal requirements, or other factors.",
  },
  {
    k: "p",
    t: "When we update this Privacy Policy, we will revise the Effective Date at the top of the policy. Material changes may also be communicated through the Website or by other appropriate means.",
  },
  {
    k: "p",
    t: "Your continued use of the Services after an updated Privacy Policy becomes effective indicates your acknowledgment of the updated policy.",
  },

  { k: "h2", n: "18", t: "Contact Us" },
  {
    k: "p",
    t: "Questions, concerns, or requests regarding this Privacy Policy or our privacy practices may be submitted to:",
  },
];

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
    case "email":
      return (
        <p className="mt-4 text-body leading-relaxed text-tnky-ink/85">
          Email: <EmailLink addr={block.addr} />
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

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-tnky-cream">
      <article className="max-w-content mx-auto px-4 pb-20 pt-12 sm:px-8 md:pb-24 md:pt-16">
        {/* Header — eyebrow, title, accent rule, effective date. */}
        <header className="mx-auto max-w-3xl">
          <p className="font-display font-extrabold uppercase tracking-eyebrow text-eyebrow text-tnky-blue">
            Legal
          </p>
          <h1 className="mt-3 font-display font-extrabold leading-tight text-h1 text-tnky-ink [text-wrap:balance]">
            Privacy Policy
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

          {/* Section 18 contact block — the source lists the organization and
              email on the same line; the email is rendered as a mailto link. */}
          <address className="mt-4 not-italic text-body leading-relaxed text-tnky-ink/85">
            TradesNKY
            <br />
            Email: <EmailLink addr="info@tradesnky.org" />
          </address>

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
