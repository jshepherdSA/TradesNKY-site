import Link from "next/link";
import {
  BookOpen,
  Briefcase,
  ChevronRight,
  GraduationCap,
  Heart,
  Landmark,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

type Audience = {
  label: string;
  description: string;
  href: string;
  icon: LucideIcon;
};

const audiences: Audience[] = [
  {
    label: "Student",
    description: "Find your career path and get started",
    href: "/students",
    icon: GraduationCap,
  },
  {
    label: "Parent",
    description: "Support your child's trades journey",
    href: "/parents",
    icon: Heart,
  },
  {
    label: "Educator",
    description: "Bring trades programs to your school",
    href: "/educators",
    icon: BookOpen,
  },
  {
    label: "Employer",
    description: "Connect with NKY's next workforce",
    href: "/employers",
    icon: Briefcase,
  },
  {
    label: "Policymaker",
    description: "Drive workforce policy in NKY",
    href: "/policymakers",
    icon: Landmark,
  },
];

export function WhoAreYouBanner() {
  return (
    // Fills its parent slot (35% of the hero+wrapper). Header row up top
    // (heading+underline left / subtext right on md+, stacked on mobile),
    // five audience cards below.
    <section className="h-full overflow-hidden bg-tnky-blue py-3 text-tnky-white">
      <div className="max-w-content mx-auto flex h-full w-full flex-col justify-center gap-4 px-4 sm:px-8 md:gap-5">
        {/* Header — heading + inline subtext on a single baseline-aligned
            row, yellow rule sits below them. */}
        <div>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <h2 className="font-display italic font-extrabold text-h3 text-tnky-white">
              Who Are You?
            </h2>
            <p className="max-w-lead text-body text-tnky-white/70 [text-wrap:pretty]">
              Find resources, pathways, and opportunities built for you.
            </p>
          </div>
          <div
            aria-hidden="true"
            className="mt-2 h-[3px] w-14 rounded-full bg-tnky-safety"
          />
        </div>

        {/* Audience cards — single flex row of 5 equal-width tiles on md+
            (icon left, label right, chevron tucked at the far right).
            Mobile (<md) falls back to a 2-col grid with the fifth tile
            centered on its own row to match sibling width. */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:flex md:flex-row md:flex-nowrap">
          {audiences.map((audience, i) => {
            const Icon = audience.icon;
            const isLast = i === audiences.length - 1;
            return (
              <Link
                key={audience.href}
                href={audience.href}
                className={cn(
                  "group relative flex flex-row items-center gap-3 rounded-2xl border-2 border-tnky-white/35 bg-tnky-white/5 px-3 py-2 text-tnky-white transition-all duration-200 ease-tnky hover:-translate-y-1 hover:border-tnky-white hover:bg-tnky-white hover:text-tnky-ink hover:shadow-tnky-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tnky-safety focus-visible:ring-offset-2 focus-visible:ring-offset-tnky-blue md:flex-1",
                  isLast &&
                    "col-span-2 mx-auto w-[calc(50%-0.375rem)] sm:w-[calc(50%-0.5rem)] md:mx-0 md:w-auto",
                )}
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-tnky-white/15 text-tnky-white transition-colors duration-200 ease-tnky group-hover:bg-tnky-blue group-hover:text-tnky-white">
                  <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                </span>

                <p className="min-w-0 font-display font-extrabold text-button leading-tight text-current">
                  {audience.label}
                </p>

                <ChevronRight
                  className="ml-auto h-4 w-4 shrink-0 -translate-x-1 text-tnky-white/0 transition-all duration-200 ease-tnky group-hover:translate-x-0 group-hover:text-tnky-ink/60"
                  aria-hidden="true"
                />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
