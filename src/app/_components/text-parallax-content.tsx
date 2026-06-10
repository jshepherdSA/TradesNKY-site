"use client";

import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type RefObject,
} from "react";
import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

type Props = {
  imgUrl: string;
  imgAlt: string;
  subheading: string;
  heading: string;
  children?: ReactNode;
};

/** Desktop = ≥768px. The parallax interaction is disabled below that. */
function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return isDesktop;
}

/**
 * Scroll-driven parallax section. Each section is a 200vh container
 * with a full-bleed sticky image that fills the viewport below the
 * nav for the entire scroll-through, and an overlay copy that's
 * already centered + fully visible the moment the user enters the
 * section, fading and drifting up as they scroll past.
 *
 * Animation curves:
 *   • Image scale: `useScroll(["end end", "end start"])` on the sticky
 *     image → `scale 1 → 0.85` only during the section's exit. The
 *     image stays at scale 1 throughout the entire stuck phase.
 *   • Overlay opacity: `useScroll(["start end", "end start"])` on the
 *     section container → `opacity 1 (0..0.25) → 0 (0.75)`. Starts
 *     fully visible the moment the section is reachable, fades out as
 *     the section exits.
 *   • Overlay y: same scroll source → `0 → -100`. Subtle upward drift
 *     during exit, no downward entry animation.
 *
 * Reduced-motion / sub-768px fallback: `StaticBlock` renders a fixed
 * aspect-ratio hero with the same copy and image — no sticky, no
 * scroll-driven transforms.
 */
export function TextParallaxContent(props: Props) {
  const reducedMotion = useReducedMotion();
  const isDesktop = useIsDesktop();

  if (reducedMotion || !isDesktop) {
    return <StaticBlock {...props} />;
  }
  return <ParallaxBlock {...props} />;
}

function ParallaxBlock({
  imgUrl,
  imgAlt,
  subheading,
  heading,
  children,
}: Props) {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section>
      <div
        ref={sectionRef}
        className="relative h-[200vh] overflow-hidden"
      >
        <StickyImage imgUrl={imgUrl} imgAlt={imgAlt}>
          <OverlayCopy
            subheading={subheading}
            heading={heading}
            sectionRef={sectionRef}
          />
        </StickyImage>
      </div>
      {children}
    </section>
  );
}

function StickyImage({
  imgUrl,
  imgAlt,
  children,
}: {
  imgUrl: string;
  imgAlt: string;
  children?: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);

  return (
    <div
      ref={ref}
      className="sticky overflow-hidden"
      style={{
        top: "var(--nav-h, 64px)",
        height: "calc(100vh - var(--nav-h, 64px))",
      }}
    >
      {/* Image lives inside its own motion wrapper so the scale only
          applies to the photograph — children (the overlay copy) sit
          outside this wrapper and aren't scaled with the image. */}
      <motion.div className="absolute inset-0" style={{ scale }}>
        <Image
          src={imgUrl}
          alt={imgAlt}
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>
      {children}
    </div>
  );
}

function OverlayCopy({
  subheading,
  heading,
  sectionRef,
}: {
  subheading: string;
  heading: string;
  sectionRef: RefObject<HTMLDivElement | null>;
}) {
  // Scroll progress is tracked against the section container (not the
  // overlay itself), so the fade timing is anchored to the section's
  // full 200vh scroll range rather than the overlay's own position.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.25, 0.75],
    [1, 1, 0],
  );
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <motion.div
      style={{ opacity, y }}
      className="absolute inset-0 flex items-center justify-center px-4 text-center text-tnky-white"
    >
      <div className="max-w-4xl">
        <p className="font-display font-extrabold uppercase tracking-tag text-eyebrow text-tnky-safety md:text-meta">
          {subheading}
        </p>
        <h2 className="mt-4 font-display font-extrabold italic leading-none text-display text-tnky-white [text-shadow:0_2px_16px_rgba(0,0,0,0.65)] [text-wrap:balance]">
          {/* inline-block + px-1 reserves room for italic glyph
              overhang at display size. */}
          <span className="inline-block px-1">{heading}</span>
        </h2>
      </div>
    </motion.div>
  );
}

/**
 * Mobile + reduced-motion fallback. Renders the same image and copy at
 * a fixed aspect ratio with the eyebrow + heading overlaid — no
 * sticky, no scroll-driven transforms — then renders any `children`
 * below. Same DOM shape and same content as the parallax variant,
 * just no animation.
 */
function StaticBlock({
  imgUrl,
  imgAlt,
  subheading,
  heading,
  children,
}: Props) {
  return (
    <section>
      <div className="relative mx-3 my-3 h-[60vh] min-h-[420px] overflow-hidden rounded-3xl">
        <Image
          src={imgUrl}
          alt={imgAlt}
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-tnky-black/65"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-tnky-white">
          <p className="font-display font-extrabold uppercase tracking-tag text-eyebrow text-tnky-safety">
            {subheading}
          </p>
          <h2 className="mt-3 font-display font-extrabold italic leading-tight text-h1 text-tnky-white [text-shadow:0_2px_16px_rgba(0,0,0,0.65)] [text-wrap:balance]">
            <span className="inline-block px-1">{heading}</span>
          </h2>
        </div>
      </div>
      {children}
    </section>
  );
}
