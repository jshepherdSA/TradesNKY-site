"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { cn } from "@/lib/utils";

type Story = {
  /** Reel video served from /public. */
  src: string;
  tag: string;
  caption?: string;
};

// Reels live in /public/videos/reels. Large files, so each <video> uses
// preload="metadata" — the full clip only downloads when played.
const stories: Story[] = [
  {
    src: "/videos/reels/ccms-virtual-welding.mp4",
    tag: "Welding",
    caption: "Virtual welding at Campbell County Middle School",
  },
  {
    src: "/videos/reels/campbell-county-hs-event.mp4",
    tag: "Event",
    caption: "TradesNKY event at Campbell County High School",
  },
  {
    src: "/videos/reels/tradesnky-reel-1.mp4",
    tag: "TradesNKY",
  },
  {
    src: "/videos/reels/tradesnky-reel-2.mp4",
    tag: "TradesNKY",
  },
];

// Stage tuning — distance from the active index maps to a translateX
// percentage (relative to card width), a scale factor, and a dark vignette
// opacity. Cards beyond distance 2 fade out completely.
const STAGE_TRANSFORMS: Record<
  number,
  { x: number; scale: number; overlay: number; z: number }
> = {
  0: { x: 0, scale: 1, overlay: 0, z: 30 },
  1: { x: 70, scale: 0.8, overlay: 0.5, z: 20 },
  2: { x: 125, scale: 0.65, overlay: 0.7, z: 10 },
};

export function RealStories() {
  // Start at the middle card so neighbors are visible on both sides
  // from the very first paint of the carousel.
  const [active, setActive] = useState(() => Math.floor(stories.length / 2));
  // Index of the reel currently playing (null = none).
  const [playing, setPlaying] = useState<number | null>(null);
  const reducedMotion = useReducedMotion();

  const go = useCallback((dir: 1 | -1) => {
    setActive((cur) => (cur + dir + stories.length) % stories.length);
    setPlaying(null);
  }, []);

  // Click/keyboard on a card: bring it to center, or — if already centered —
  // start its reel.
  const activate = useCallback(
    (i: number, isActive: boolean) => {
      if (isActive) {
        setPlaying(i);
      } else {
        setActive(i);
        setPlaying(null);
      }
    },
    [],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        go(-1);
      } else if (e.key === "ArrowRight") {
        go(1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  const transition = reducedMotion
    ? { duration: 0 }
    : { type: "spring" as const, stiffness: 180, damping: 26 };

  return (
    <section className="bg-tnky-white py-20 md:py-24">
      <div className="max-w-content mx-auto px-4 sm:px-8">
        {/* Header — large centered blue oval, white text. */}
        <div className="flex justify-center">
          <h2 className="rounded-full bg-tnky-blue px-12 py-4 text-center font-display italic font-extrabold text-section text-tnky-white">
            Real Stories
          </h2>
        </div>

        {/* Coverflow stage — active card centered, neighbors scaled down
            and darkened with a vignette overlay, far cards smaller still. */}
        <div className="relative mt-10 md:mt-12">
          <button
            type="button"
            aria-label="Show previous story"
            onClick={() => go(-1)}
            className="absolute left-0 top-1/2 z-40 hidden -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-tnky-edge bg-tnky-white p-3 text-tnky-ink shadow-tnky-2 transition-colors duration-200 ease-tnky hover:bg-tnky-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tnky-blue focus-visible:ring-offset-2 focus-visible:ring-offset-tnky-white md:inline-flex"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>

          <div className="relative h-[500px] overflow-hidden sm:h-[560px] md:h-[540px] lg:h-[600px]">
            <div className="absolute inset-0 flex items-center justify-center">
              {stories.map((story, i) => {
                // Wrap distance so the carousel is bidirectionally infinite:
                // a card at raw distance -3 in a 6-card list shows as +3 from
                // the other side, etc. Ties (exactly halfway) resolve to the
                // positive direction; those cards are invisible anyway.
                const raw = (i - active + stories.length) % stories.length;
                const distance =
                  raw > stories.length / 2 ? raw - stories.length : raw;
                const abs = Math.abs(distance);
                const sign = Math.sign(distance);
                const visible = abs <= 2;
                const t = STAGE_TRANSFORMS[abs] ?? {
                  x: 175,
                  scale: 0.5,
                  overlay: 1,
                  z: 0,
                };
                const isActive = abs === 0;

                return (
                  <motion.div
                    key={story.src}
                    className={cn(
                      "absolute",
                      isActive &&
                        "drop-shadow-[0_20px_40px_rgba(15,23,42,0.25)]",
                    )}
                    initial={false}
                    animate={{
                      x: `${t.x * sign}%`,
                      scale: t.scale,
                      opacity: visible ? 1 : 0,
                    }}
                    transition={transition}
                    style={{
                      zIndex: t.z,
                      pointerEvents: visible ? undefined : "none",
                    }}
                  >
                    <StoryCard
                      story={story}
                      isActive={isActive}
                      isPlaying={playing === i}
                      reducedMotion={Boolean(reducedMotion)}
                      onActivate={() => activate(i, isActive)}
                    />
                    {/* Vignette — sits on top of the card, fades to 0 on the
                        active card. Wrapped on a motion.div so the opacity
                        change tweens in lockstep with the scale/position. */}
                    <motion.div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 rounded-2xl bg-tnky-ink"
                      initial={false}
                      animate={{ opacity: t.overlay }}
                      transition={transition}
                    />
                  </motion.div>
                );
              })}
            </div>
          </div>

          <button
            type="button"
            aria-label="Show next story"
            onClick={() => go(1)}
            className="absolute right-0 top-1/2 z-40 hidden translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-tnky-edge bg-tnky-white p-3 text-tnky-ink shadow-tnky-2 transition-colors duration-200 ease-tnky hover:bg-tnky-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tnky-blue focus-visible:ring-offset-2 focus-visible:ring-offset-tnky-white md:inline-flex"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}

function StoryCard({
  story,
  isActive,
  isPlaying,
  reducedMotion,
  onActivate,
}: {
  story: Story;
  isActive: boolean;
  isPlaying: boolean;
  reducedMotion: boolean;
  onActivate: () => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Play on becoming active+selected; pause and rewind otherwise so only one
  // reel ever plays and inactive cards show their first frame again.
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (isPlaying) {
      void v.play().catch(() => {});
    } else {
      v.pause();
      v.currentTime = 0;
    }
  }, [isPlaying]);

  const hoverProps = reducedMotion
    ? {}
    : { whileHover: "hover", whileFocus: "hover" };

  return (
    <motion.article
      data-story-card
      tabIndex={0}
      role="button"
      aria-label={
        story.caption ? `Play reel: ${story.caption}` : "Play TradesNKY reel"
      }
      onClick={onActivate}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onActivate();
        }
      }}
      initial="idle"
      animate="idle"
      {...hoverProps}
      variants={{
        idle: { y: 0, boxShadow: "0 4px 12px rgba(15,23,42,0.08)" },
        hover: { y: -6, boxShadow: "0 20px 40px rgba(15,23,42,0.18)" },
      }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 24,
      }}
      className="relative aspect-[9/16] w-[70vw] shrink-0 cursor-pointer snap-start overflow-hidden rounded-2xl bg-tnky-ink text-tnky-white focus:outline-none focus-visible:ring-2 focus-visible:ring-tnky-blue focus-visible:ring-offset-2 focus-visible:ring-offset-tnky-white sm:w-72 md:w-[17rem] lg:w-[19rem]"
    >
      {/* The reel itself. Native controls appear only while playing; otherwise
          the card shows the first frame plus a play affordance. */}
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        preload="metadata"
        playsInline
        controls={isPlaying}
        controlsList="nodownload"
        tabIndex={-1}
      >
        <source src={`${story.src}#t=0.1`} type="video/mp4" />
      </video>

      {!isPlaying && (
        <>
          {/* Centered play button */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <motion.div
              variants={{
                idle: { scale: 1 },
                hover: { scale: 1.1 },
              }}
              transition={{ type: "spring", stiffness: 320, damping: 18 }}
              className="flex h-20 w-20 items-center justify-center rounded-full bg-tnky-white/15 backdrop-blur-sm ring-1 ring-tnky-white/30"
            >
              <Play
                className="h-9 w-9 translate-x-0.5 fill-tnky-white text-tnky-white"
                aria-hidden="true"
              />
            </motion.div>
          </div>

          {/* Bottom gradient + meta */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 flex flex-col gap-1 bg-gradient-to-t from-tnky-ink/90 via-tnky-ink/60 to-transparent p-5 pt-16">
            <span className="font-display font-extrabold uppercase tracking-eyebrow text-meta text-tnky-safety">
              {story.tag}
            </span>
            {story.caption ? (
              <p className="text-small text-tnky-white/90 [text-wrap:pretty]">
                {story.caption}
              </p>
            ) : null}
          </div>
        </>
      )}

      {/* Active-but-not-playing affordance for screen readers. */}
      {isActive && !isPlaying ? (
        <span className="sr-only">Press to play this reel</span>
      ) : null}
    </motion.article>
  );
}
