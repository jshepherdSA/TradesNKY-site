"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { gsap } from "gsap";
import { CtaCard as NewsletterBanner } from "../_components/CtaCard";

// ===========================================================================
// Parallax — direct port of brand-assets/components/simple-scroll-paralax.tsx
// with the issues called out in component-guide.md for that file fixed:
//   • Full TypeScript prop types on every sub-component (source was
//     effectively untyped JS).
//   • framer-motion only — no react-icons.
//   • Honors `prefers-reduced-motion`: skips the sticky 150vh container and
//     renders a static fixed-aspect hero with the same copy.
//
// The scroll logic, scale 1 → 0.85, opacity 0 → 1, y 250 → -250, and the
// useScroll offset pairs are all taken verbatim from the source — no
// invented scroll math.
// ===========================================================================

const IMG_PADDING = 12;

type ParallaxProps = {
  imgUrl: string;
  imgAlt: string;
  subheading: string;
  heading: string;
  children?: ReactNode;
  /** When true (Section 1 only): the sticky image fills exactly
   *  `100vh - var(--nav-h)` and pins to the bottom edge of the nav
   *  (no IMG_PADDING gap), and the OverlayCopy starts at full
   *  opacity / y=0 instead of fading in from below. Fade-out logic
   *  is unchanged. */
  firstSection?: boolean;
};

function TextParallaxContent({
  imgUrl,
  imgAlt,
  subheading,
  heading,
  children,
  firstSection,
}: ParallaxProps) {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return (
      <section>
        <div className="relative mx-3 my-3 h-[60vh] min-h-[420px] overflow-hidden rounded-3xl">
          <div
            role="img"
            aria-label={imgAlt}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${imgUrl})` }}
          />
          <div aria-hidden="true" className="absolute inset-0 bg-tnky-black/65" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-tnky-white">
            <p className="font-display font-extrabold uppercase tracking-tag text-eyebrow text-tnky-safety">
              {subheading}
            </p>
            <h2 className="mt-3 font-display font-extrabold italic leading-tight text-h1 text-tnky-white [text-wrap:balance]">
              <span className="inline-block px-1">{heading}</span>
            </h2>
          </div>
        </div>
        {children}
      </section>
    );
  }

  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative h-[150vh]">
        <StickyImage
          imgUrl={imgUrl}
          imgAlt={imgAlt}
          firstSection={firstSection}
        />
        <OverlayCopy
          heading={heading}
          subheading={subheading}
          firstSection={firstSection}
        />
      </div>
      {children}
    </div>
  );
}

function StickyImage({
  imgUrl,
  imgAlt,
  firstSection,
}: {
  imgUrl: string;
  imgAlt: string;
  firstSection?: boolean;
}) {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  // First section: image pins flush to the bottom edge of the nav and
  // fills exactly the viewport below it (nav + image = 100vh, zero gap).
  // Other sections keep the original IMG_PADDING gutter.
  const height = firstSection
    ? "calc(100vh - var(--nav-h, 64px))"
    : `calc(100vh - ${IMG_PADDING * 2}px)`;
  const top: string | number = firstSection
    ? "var(--nav-h, 64px)"
    : IMG_PADDING;

  return (
    <motion.div
      ref={targetRef}
      role="img"
      aria-label={imgAlt}
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height,
        top,
        scale,
      }}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 bg-tnky-black/70"
        style={{ opacity }}
      />
    </motion.div>
  );
}

function OverlayCopy({
  subheading,
  heading,
  firstSection,
}: {
  subheading: string;
  heading: string;
  firstSection?: boolean;
}) {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  // First section: text is fully visible and centered at progress 0
  // (no fade-in / no downward y offset on page load). The fade-out
  // window between progress 0.5 → 0.75 is identical to the default
  // path — opacity 1 → 0 and y drifting up — so the scroll-past
  // animation is unchanged.
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    firstSection ? [0, -250] : [250, -250],
  );
  const opacity = useTransform(
    scrollYProgress,
    firstSection ? [0, 0.5, 0.75] : [0.25, 0.5, 0.75],
    firstSection ? [1, 1, 0] : [0, 1, 0],
  );

  return (
    <motion.div
      ref={targetRef}
      style={{
        y,
        opacity,
        // First section only: shift the whole overlay block ~8vh
        // below the natural top so the centered content lands
        // slightly below screen center. Doesn't touch the y / opacity
        // motion values — purely a layout-side baseline offset.
        top: firstSection ? "8vh" : 0,
      }}
      className="absolute left-0 flex h-screen w-full flex-col items-center justify-center px-4 text-center text-tnky-white"
    >
      <p className="font-display font-extrabold uppercase tracking-tag text-eyebrow text-tnky-safety md:text-meta">
        {subheading}
      </p>
      <h2 className="mt-4 font-display font-extrabold italic leading-none text-display text-tnky-white [text-shadow:0_2px_16px_rgba(0,0,0,0.65)] [text-wrap:balance]">
        <span className="inline-block px-1">{heading}</span>
      </h2>
    </motion.div>
  );
}

// ===========================================================================
// Rolling principles list — adapted from brand-assets/components/step-block-text.tsx
// with the issues called out in component-guide.md for that file fixed:
//   • `"use client"` at file top, all hooks SSR-safe (window guarded
//     before any matchMedia / GSAP setup).
//   • Per-row timeline owned by the row's own refs — no document-wide
//     selector, no global side effects.
//   • `useEffect` not `useLayoutEffect` (matches the source, kept
//     explicit so a future refactor doesn't drift).
//   • Real `prefers-reduced-motion` handling — GSAP timeline is never
//     built, hover/focus listeners are never attached, name stays
//     static at rest.
//   • Hover AND keyboard parity: `mouseenter`/`mouseleave` AND
//     `focusin`/`focusout` drive the same timeline; each row is
//     `tabIndex={0}` so keyboard users see the same swap.
//   • Single skew direction dropped (the source's alternating skew
//     warps text unreadably at display size); the readable principle
//     name stays upright, only the number column keeps an italic
//     tilt.
// ===========================================================================

type Principle = {
  number: string;
  name: string;
  description: string;
};

const PRINCIPLES: Principle[] = [
  {
    number: "01",
    name: "Student-Centric Focus",
    description:
      "Our foremost commitment is to prioritize the well-being and educational growth of every student we engage with, ensuring their unique needs and aspirations are at the forefront of our initiatives.",
  },
  {
    number: "02",
    name: "Inclusive Learning",
    description:
      "We embrace diversity and foster an inclusive environment where students from all backgrounds feel welcome. By tailoring our trades education, we strive to create an equitable platform for skill development.",
  },
  {
    number: "03",
    name: "Holistic Development",
    description:
      "Recognizing the importance of a well-rounded education, we integrate trades curriculum to not only cultivate workforce skills but also creatively enhance students' understanding of core subjects like math, fostering a comprehensive learning experience.",
  },
  {
    number: "04",
    name: "Project Based Learning",
    description:
      "We believe in the power of experiential learning. Our hands-on approach to trades education not only equips students with practical skills but also instills a passion for learning through active engagement.",
  },
  {
    number: "05",
    name: "Collaboration with Educational Partners",
    description:
      "We actively collaborate with schools, educators, and other stakeholders to ensure a seamless integration of our trades education programs into existing curricula. This collaborative effort enhances the overall educational experience for students.",
  },
  {
    number: "06",
    name: "Community Engagement",
    description:
      "TradesNKY is committed to building strong connections within the community. By actively involving parents, local businesses, and trade professionals, we create a network of support that enriches the educational journey of our students.",
  },
  {
    number: "07",
    name: "Adaptability and Innovation",
    description:
      "In an ever-evolving landscape, we remain adaptable and innovative. We continuously seek new ways to enhance our trades education programs, staying current with industry trends and educational best practices.",
  },
  {
    number: "08",
    name: "Empowering Future Leaders",
    description:
      "Beyond skill development, our goal is to empower students to become future leaders. We instill confidence, resilience, and a strong work ethic, preparing them not just for trades careers but for success in any path they choose.",
  },
];

function RollingPrinciples({ items }: { items: Principle[] }) {
  return (
    // Horizontal bounds match the Mission / Vision body sections above
    // (`max-w-content mx-auto px-4 sm:px-8`). Vertical padding gives
    // breathing room from the third parallax section above and the
    // bottom of the page. The list no longer fills the entire viewport
    // — each row has a fixed compact height (`--row-h`) so all 8 stack
    // into ~512px regardless of viewport height.
    <div className="max-w-content mx-auto px-4 py-16 sm:px-8 sm:py-20 md:py-24">
      {/* Section heading — same treatment as the Five Pillars and
          TradesNKY Pathway headings: display font, extra-bold, dark
          ink with a short tnky-safety yellow rule beneath. */}
      <div className="mb-8 md:mb-10">
        <h2 className="font-display font-extrabold text-section text-tnky-ink">
          Guiding Principles
        </h2>
        <div
          aria-hidden="true"
          className="mt-3 h-[3px] w-14 rounded-full bg-tnky-safety"
        />
      </div>

      <section
        aria-label="Guiding principles"
        className="flex w-full flex-col overflow-hidden bg-tnky-cream"
        style={{ "--row-h": "4rem" } as CSSProperties}
      >
        {items.map((item) => (
          <PrincipleRow key={item.number} item={item} />
        ))}
      </section>
    </div>
  );
}

function PrincipleRow({ item }: { item: Principle }) {
  const rowRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  // Tracks pointer/keyboard hover for the row — drives the right-side
  // "paragraph" motif's framer-motion animation. The GSAP timeline
  // still owns the layered roll via its own listeners; this state is
  // purely for the icon animation and runs in parallel.
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    // SSR guard — never touch matchMedia / GSAP during server render.
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const row = rowRef.current;
    const inner = innerRef.current;
    if (!row || !inner) return;

    const tl = gsap.timeline({ paused: true });
    // 2× row-height inner; translating it up by 50% of its own height
    // swaps the visible layer (name → description) in a single row of
    // distance. Resize-safe — no live `window.innerWidth` reads.
    tl.to(inner, {
      yPercent: -50,
      duration: 0.5,
      ease: "power3.out",
    });

    // Forward play uses the timeline's 0.5s duration. Reverse on
    // pointer leave runs at 3× speed (≈ 0.17s) so the rollback feels
    // snappy without affecting the hover-in animation.
    const play = () => {
      tl.timeScale(1);
      tl.play();
    };
    const reverse = () => {
      tl.timeScale(3);
      tl.reverse();
    };

    row.addEventListener("mouseenter", play);
    row.addEventListener("mouseleave", reverse);
    row.addEventListener("focusin", play);
    row.addEventListener("focusout", reverse);

    return () => {
      row.removeEventListener("mouseenter", play);
      row.removeEventListener("mouseleave", reverse);
      row.removeEventListener("focusin", play);
      row.removeEventListener("focusout", reverse);
      tl.kill();
    };
  }, []);

  return (
    <div
      ref={rowRef}
      tabIndex={0}
      role="group"
      aria-label={`Principle ${item.number}: ${item.name}`}
      style={{ height: "var(--row-h)" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      className="group flex items-center gap-3 border-b border-tnky-edge bg-tnky-cream px-3 transition-colors duration-300 ease-tnky last:border-b-0 hover:bg-tnky-blue focus-visible:bg-tnky-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-tnky-safety sm:gap-6 sm:px-6 md:gap-8 md:px-8"
    >
      {/* Fixed-width number column so the 01–08 form a straight
          vertical column regardless of row content changes. One size
          step down from the previous text-stat-md / md:text-stat-lg. */}
      <span
        aria-hidden="true"
        className="inline-block w-12 shrink-0 text-center font-display font-tnky-black italic leading-none text-h4 text-tnky-safety md:w-16 md:text-stat-md"
      >
        {item.number}
      </span>

      {/* Roll clip — h-full = the row's explicit height (`var(--row-h)`).
          Inner is 2× that, stacked name (top) + description (bottom);
          GSAP translates it up by 50% on hover/focus so the
          description rolls into view. `px-1` reserves room for italic
          glyph overhang on the principle name. */}
      <div className="relative h-full flex-1 overflow-hidden px-1">
        <div
          ref={innerRef}
          className="absolute inset-x-0 top-0 will-change-transform"
        >
          <div
            className="flex items-center font-display font-extrabold italic leading-tight text-body text-tnky-ink transition-colors duration-300 ease-tnky group-hover:text-tnky-white group-focus-visible:text-tnky-white md:text-card-title"
            style={{ height: "var(--row-h)" }}
          >
            <span className="line-clamp-2">{item.name}</span>
          </div>
          <div
            className="flex items-center text-tnky-white"
            style={{ height: "var(--row-h)" }}
          >
            <p className="line-clamp-2 font-display italic text-mini font-medium leading-snug text-tnky-white [text-wrap:pretty] sm:text-small sm:leading-normal">
              {item.description}
            </p>
          </div>
        </div>
      </div>

      {/* Right-side "paragraph" motif: a single horizontal line by
          default; on hover the second line fades + slides in from the
          left, then the shorter third line follows on a small delay.
          `bg-current` + `text-tnky-ink` / `group-hover:text-tnky-white`
          gives the same dark→white color transition the rest of the
          row uses. */}
      <div
        aria-hidden="true"
        className="flex shrink-0 flex-col items-end gap-1 text-tnky-ink transition-colors duration-300 ease-tnky group-hover:text-tnky-white group-focus-visible:text-tnky-white"
      >
        <div className="h-0.5 w-6 rounded-full bg-current" />
        <motion.div
          initial={false}
          animate={hovered ? { opacity: 1, x: 0 } : { opacity: 0, x: -8 }}
          transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="h-0.5 w-6 rounded-full bg-current"
        />
        <motion.div
          initial={false}
          animate={hovered ? { opacity: 1, x: 0 } : { opacity: 0, x: -8 }}
          transition={{
            duration: 0.2,
            delay: hovered ? 0.08 : 0,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="h-0.5 w-4 rounded-full bg-current"
        />
      </div>
    </div>
  );
}

// ===========================================================================
// Page
// ===========================================================================

export default function AboutPage() {
  // Reset scroll to top on mount so the user always begins at the
  // first parallax section.
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <main className="bg-tnky-cream">
      {/* Section 1 — Mission */}
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop"
        imgAlt=""
        subheading="Our Mission"
        heading="Built for Northern Kentucky"
        firstSection
      >
        <div className="bg-tnky-cream">
          <div className="max-w-content mx-auto grid grid-cols-1 gap-10 px-4 pb-24 pt-16 sm:px-8 md:grid-cols-12 md:gap-12 md:pb-32 md:pt-20">
            <div className="md:col-span-4">
              <p className="font-display font-extrabold uppercase tracking-tag text-eyebrow text-tnky-blue">
                Mission Statement
              </p>
              <h3 className="mt-3 font-display font-extrabold italic leading-tight text-h2 text-tnky-ink [text-wrap:balance]">
                Built for Northern Kentucky
              </h3>
              <div
                aria-hidden="true"
                className="mt-4 h-1 w-16 rounded-full bg-tnky-safety"
              />
            </div>
            <div className="md:col-span-8">
              <p className="text-lead leading-relaxed text-tnky-ink/85 [text-wrap:pretty] md:text-xl md:leading-[1.55]">
                TradesNKY connects schools, industry, and community partners
                to prepare students for high-demand, high-skilled careers
                that build, power, and move our region forward. We create
                pathways for students in K-12th grade to allow them to gain
                exposure (K-5th), explore (6th-8th), and engage (9th-12th)
                with the essential workforce that keeps our community
                running.
              </p>
            </div>
          </div>
        </div>
      </TextParallaxContent>

      {/* Section 2 — Vision */}
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1581094271901-8022df4466f9?q=80&w=2070&auto=format&fit=crop"
        imgAlt=""
        subheading="Our Vision"
        heading="Every Student Every Path"
      >
        <div className="bg-tnky-cream">
          <div className="max-w-content mx-auto grid grid-cols-1 gap-10 px-4 pb-12 pt-16 sm:px-8 md:grid-cols-12 md:gap-12 md:pb-16 md:pt-20">
            <div className="md:col-span-4">
              <p className="font-display font-extrabold uppercase tracking-tag text-eyebrow text-tnky-blue">
                Vision Statement
              </p>
              <h3 className="mt-3 font-display font-extrabold italic leading-tight text-h2 text-tnky-ink [text-wrap:balance]">
                Every Student. Every Path.
              </h3>
              <div
                aria-hidden="true"
                className="mt-4 h-1 w-16 rounded-full bg-tnky-safety"
              />
            </div>
            <div className="md:col-span-8">
              <p className="text-lead leading-relaxed text-tnky-ink/85 [text-wrap:pretty] md:text-xl md:leading-[1.55]">
                TradesNKY envisions a future where innovative trades
                education empowers every student academically and
                professionally, fosters diverse talents, and inspires a
                lifelong love for knowledge. We aspire to be a catalyst for
                transformative education, shaping skilled professionals and
                well-rounded individuals poised to lead in a dynamic world,
                building bridges to brighter futures extending beyond the
                trades.
              </p>
            </div>
          </div>

          <div className="max-w-content mx-auto px-4 pb-24 sm:px-8 md:pb-32">
            <blockquote className="mx-auto max-w-4xl text-center">
              <p className="text-lg italic leading-relaxed text-tnky-blue [text-wrap:balance] md:text-xl">
                &ldquo;The trades are more than just construction &mdash;
                they are the essential workforce that keeps our communities
                going. They build, make, move, power, and protect.&rdquo;
              </p>
            </blockquote>
          </div>
        </div>
      </TextParallaxContent>

      {/* Section 3 — Guiding Principles (no body — transitions
          directly into the rolling list below). */}
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1572981779307-38b8cabb2407?q=80&w=2070&auto=format&fit=crop"
        imgAlt=""
        subheading="How We Work"
        heading="Our Guiding Principles"
      />

      {/* Rolling principles list — 8 rows, all fit within 100vh, GSAP
          hover/focus swap from step-block-text. */}
      <RollingPrinciples items={PRINCIPLES} />

      <NewsletterBanner />
    </main>
  );
}
