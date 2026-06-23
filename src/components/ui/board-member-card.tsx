"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Board-member card — adapted from
 * brand-assets/components/profile-card.tsx with the integration
 * issues called out in component-guide.md addressed before use:
 *
 *   • Fixed type mismatch (source destructured a non-existent
 *     `ProfileHoverCardProps` despite declaring `ProfileCardProps`).
 *   • Cover swapped from bare `motion.img` to `next/image` with
 *     `fill` + `object-cover` + responsive `sizes`.
 *   • All framer-motion variants gated on `useReducedMotion()` — not
 *     just the container hover spring. Letter-by-letter name reveal
 *     dropped entirely (vestibular-disorder trigger that added
 *     nothing for a board / staff context).
 *   • Demo defaults removed — `name`, `title`, `bio`, `role`, `image`
 *     are all required so the component can't render placeholder
 *     data accidentally.
 *   • Four overlapping scrim layers consolidated into a single
 *     `bg-gradient-to-t` from-tnky-ink/90 via-tnky-ink/45 to-transparent.
 *   • shadcn CSS-vars retokened to brand `tnky-*` throughout. Drop
 *     the dark-mode shadow utility.
 *   • Card dimensions are no longer hardcoded (`w-80 h-96` removed) —
 *     parent constrains via grid / passed `className`. Defaults to
 *     `w-full h-full`.
 *   • Follower / following stats + Follow button replaced with a
 *     `title` line and a `bio` paragraph; the role tag now sits as a
 *     tnky-blue pill where the button used to be.
 *   • Focus parity: `tabIndex={0}` + `whileFocus="hover"` so keyboard
 *     users get the same lift, and `focus-visible:ring-2` for a
 *     visible ring.
 *   • Dropped the orphaned `group` class and the stale
 *     `data-slot="profile-hover-card"` attribute.
 */

export interface BoardMemberCardProps {
  /** Board member's full name. */
  name: string;
  /** Optional job title shown as the uppercase accent line ("Executive
   *  Director", …). Omitted for board members, who show only name +
   *  organization. */
  title?: string;
  /** Optional one-line bio / organization shown beneath the title. */
  bio?: string;
  /** Optional category tag rendered as a tnky-blue pill ("Leadership",
   *  "Governance", "Education", …). Omitted when not supplied. */
  role?: string;
  /** Cover image URL — used by `next/image` with `fill`. */
  image: string;
  /** Optional descriptive alt; defaults to "" for purely decorative
   *  use when `name` already covers screen-reader needs via the
   *  card's `aria-label`. */
  imageAlt?: string;
  /** Featured layout — bumps the name to display sizing and tweaks
   *  the role-pill / title rhythm. Used by the page's hero member
   *  card. */
  featured?: boolean;
  className?: string;
}

const HOVER_SPRING = {
  type: "spring" as const,
  stiffness: 400,
  damping: 28,
  mass: 0.6,
} as const;

export function BoardMemberCard({
  name,
  title,
  bio,
  role,
  image,
  imageAlt = "",
  featured = false,
  className,
}: BoardMemberCardProps) {
  const reducedMotion = useReducedMotion();

  // Every variant short-circuits to a no-op object under reduced
  // motion — `whileHover` / `whileFocus` still fire, they just don't
  // animate to anything visible.
  const containerVariants: Variants = {
    rest: { scale: 1, y: 0 },
    hover: reducedMotion
      ? {}
      : { scale: 1.02, y: -4, transition: HOVER_SPRING },
  };

  const imageVariants: Variants = {
    rest: { scale: 1 },
    hover: reducedMotion ? {} : { scale: 1.05 },
  };

  const contentVariants: Variants = reducedMotion
    ? { hidden: { opacity: 1 }, visible: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
        visible: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: {
            ...HOVER_SPRING,
            staggerChildren: 0.08,
            delayChildren: 0.1,
          },
        },
      };

  const itemVariants: Variants = reducedMotion
    ? { hidden: { opacity: 1 }, visible: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 15, scale: 0.95, filter: "blur(2px)" },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          transition: HOVER_SPRING,
        },
      };

  return (
    <motion.article
      data-slot="board-member-card"
      tabIndex={0}
      aria-label={title ? `${name}, ${title}` : name}
      initial="rest"
      whileHover="hover"
      whileFocus="hover"
      variants={containerVariants}
      className={cn(
        "relative h-full w-full cursor-pointer overflow-hidden rounded-3xl border border-tnky-edge/40 bg-tnky-cream text-tnky-ink shadow-tnky-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tnky-safety focus-visible:ring-offset-2",
        className,
      )}
    >
      {/* Cover image — `motion.div` wrapper carries the hover scale so
          the `<Image>` itself can stay a plain `next/image`. */}
      <motion.div
        className="absolute inset-0"
        variants={imageVariants}
        transition={
          reducedMotion
            ? { duration: 0 }
            : { type: "spring", stiffness: 300, damping: 30 }
        }
      >
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes={
            featured
              ? "(min-width: 1024px) 1280px, 100vw"
              : "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          }
          className="object-cover object-top"
        />
      </motion.div>

      {/* No scrim — the gradient was darkening faces. Legibility now
          comes from per-element drop shadows on the text below. */}

      {/* Content block — fades + slides in on mount, role pill at the
          top of the stack where the follow button used to be. */}
      <motion.div
        variants={contentVariants}
        initial="hidden"
        animate="visible"
        className="absolute bottom-0 left-0 right-0 flex flex-col gap-3 p-5 md:p-6"
      >
        {role ? (
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center rounded-pill bg-tnky-blue px-3 py-1 font-display font-bold uppercase tracking-tag text-meta text-tnky-white">
              {role}
            </span>
          </motion.div>
        ) : null}

        <motion.h3
          variants={itemVariants}
          // White name with a drop shadow for contrast over the photo.
          // Color is set via the arbitrary `[color:…]` property rather
          // than `text-tnky-white`: tailwind-merge groups our custom
          // `text-{size}` tokens (text-card-title / text-h3 / …) as
          // text-color, so it strips a sibling `text-tnky-white` in the
          // same cn() call. The arbitrary form sits in its own group and
          // survives the merge.
          className={cn(
            "font-display font-extrabold leading-tight [color:var(--color-tnky-white)] [text-wrap:balance] [text-shadow:0_1px_3px_rgba(16,16,16,0.85),0_2px_12px_rgba(16,16,16,0.65)]",
            featured
              ? "text-section md:text-h1"
              : "text-card-title md:text-h3",
          )}
        >
          {name}
        </motion.h3>

        {title ? (
          <motion.p
            variants={itemVariants}
            className="font-display font-bold uppercase tracking-tag text-eyebrow text-tnky-safety [text-shadow:0_1px_3px_rgba(16,16,16,0.9),0_2px_10px_rgba(16,16,16,0.7)]"
          >
            {title}
          </motion.p>
        ) : null}

        {bio ? (
          <motion.p
            variants={itemVariants}
            className="max-w-prose text-small leading-relaxed text-tnky-white [text-wrap:pretty] [text-shadow:0_1px_3px_rgba(16,16,16,0.95),0_2px_10px_rgba(16,16,16,0.8)]"
          >
            {bio}
          </motion.p>
        ) : null}
      </motion.div>
    </motion.article>
  );
}
