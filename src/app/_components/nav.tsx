"use client";

import { useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  BookOpen,
  Briefcase,
  ChevronDown,
  Factory,
  GraduationCap,
  Hammer,
  Handshake,
  Heart,
  Landmark,
  Menu,
  Shield,
  Truck,
  X,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

type SubMenuItem = {
  label: string;
  description: string;
  href: string;
  icon: LucideIcon;
  pillarColor: string;
  // Optional Tailwind class(es) for the icon container background. When set,
  // the icon tile renders as a solid colored chip with a white icon (used for
  // the career pillar items). When omitted, the default cream-bg + colored-icon
  // pattern applies.
  accentBg?: string;
};

type SubMenuSection = {
  title?: string;
  items: SubMenuItem[];
};

type NavItem = {
  id: number;
  label: string;
  link?: string;
  subMenus?: SubMenuSection[];
};

const NAV_ITEMS: NavItem[] = [
  {
    id: 1,
    label: "Explore Careers",
    subMenus: [
      {
        items: [
          {
            label: "Build",
            description: "Design, construct, and finish — foundation to handover.",
            href: "/students/pillars/build",
            icon: Hammer,
            pillarColor: "var(--color-pillar-build)",
            accentBg: "bg-pillar-build",
          },
          {
            label: "Make",
            description: "Machining, welding, robotics, production.",
            href: "/students/pillars/make",
            icon: Factory,
            pillarColor: "var(--color-pillar-make)",
            accentBg: "bg-pillar-make",
          },
          {
            label: "Power",
            description: "Generate and maintain the grid the region depends on.",
            href: "/students/pillars/power",
            icon: Zap,
            pillarColor: "var(--color-pillar-power)",
            accentBg: "bg-pillar-power",
          },
          {
            label: "Move",
            description: "Drive, dispatch, route — keep freight moving.",
            href: "/students/pillars/move",
            icon: Truck,
            pillarColor: "var(--color-pillar-move)",
            accentBg: "bg-pillar-move",
          },
          {
            label: "Protect",
            description: "Facilities, utilities, safety — keep systems running.",
            href: "/students/pillars/protect",
            icon: Shield,
            pillarColor: "var(--color-pillar-protect)",
            accentBg: "bg-pillar-protect",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    label: "Who We Serve",
    subMenus: [
      {
        items: [
          {
            label: "Students",
            description: "Career paths, schools, and the next step.",
            href: "/students",
            icon: GraduationCap,
            pillarColor: "var(--color-tnky-blue)",
          },
          {
            label: "Parents",
            description: "How to support your student's next chapter.",
            href: "/parents",
            icon: Heart,
            pillarColor: "var(--color-tnky-blue)",
          },
          {
            label: "Educators",
            description: "Tools and partnerships for K-12 schools.",
            href: "/educators",
            icon: BookOpen,
            pillarColor: "var(--color-tnky-blue)",
          },
          {
            label: "Employers",
            description: "Build your talent pipeline and workforce.",
            href: "/employers",
            icon: Briefcase,
            pillarColor: "var(--color-tnky-blue)",
          },
          {
            label: "Policymakers",
            description: "Workforce strategy across Northern Kentucky.",
            href: "/policymakers",
            icon: Landmark,
            pillarColor: "var(--color-tnky-blue)",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    label: "About",
    subMenus: [
      {
        items: [
          {
            label: "What is TradesNKY?",
            description: "Our mission and vision, and how the program works from K-12 through post-graduation.",
            href: "/about/what-is-tradesnky",
            icon: BookOpen,
            pillarColor: "var(--color-tnky-blue)",
          },
          {
            label: "Our Team",
            description: "The board and staff steering the organization.",
            href: "/about/board",
            icon: Briefcase,
            pillarColor: "var(--color-tnky-blue)",
          },
          {
            label: "Partners",
            description: "Schools, employers, and workforce partners we work with.",
            href: "/about/partners",
            icon: Handshake,
            pillarColor: "var(--color-tnky-blue)",
          },
        ],
      },
    ],
  },
  { id: 4, label: "Insights", link: "/insights" },
  { id: 5, label: "Contact", link: "/contact" },
];

// Top-level `link` items match their target plus any subpath under it —
// so e.g. /insights/<slug> still lights up the Insights link. This is
// the existing behavior, kept for top-level entries only.
function isActivePrefix(pathname: string, target: string) {
  if (target === "/") return pathname === "/";
  return pathname === target || pathname.startsWith(target + "/");
}

// Sub-menu items must match the path EXACTLY. Otherwise the Who We
// Serve dropdown (whose `/students` item is a prefix of the pillar
// pages at `/students/pillars/[slug]`) would light up on the pillar
// pages — and so would Explore Careers, because its own items live
// under that same `/students/pillars/...` prefix. Exact matching means
// each pillar page lights up only its own Explore Careers item, and
// `/students` lights up only Who We Serve.
function isActiveExact(pathname: string, target: string) {
  return pathname === target;
}

function getActive(pathname: string, item: NavItem): boolean {
  if (item.link) return isActivePrefix(pathname, item.link);
  if (item.subMenus) {
    return item.subMenus.some((section) =>
      section.items.some((sub) => isActiveExact(pathname, sub.href))
    );
  }
  return false;
}

export function Nav() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<Set<number>>(new Set());

  const headerRef = useRef<HTMLElement | null>(null);
  const triggerRefs = useRef<Map<string, HTMLButtonElement>>(new Map());
  const hamburgerRef = useRef<HTMLButtonElement | null>(null);
  const drawerCloseRef = useRef<HTMLButtonElement | null>(null);

  const panelIdPrefix = useId();
  const drawerId = `${panelIdPrefix}-drawer`;

  useEffect(() => {
    setOpenMenu(null);
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!openMenu) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        const trigger = triggerRefs.current.get(openMenu);
        setOpenMenu(null);
        trigger?.focus();
      }
    };
    const onClickOutside = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClickOutside);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, [openMenu]);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        hamburgerRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    drawerCloseRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [mobileOpen]);

  const closeMobile = () => {
    setMobileOpen(false);
    hamburgerRef.current?.focus();
  };

  const toggleMenu = (label: string) =>
    setOpenMenu((cur) => (cur === label ? null : label));

  const toggleMobileExpanded = (id: number) =>
    setMobileExpanded((cur) => {
      const next = new Set(cur);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  return (
    <>
      <header
        ref={headerRef}
        className="sticky top-0 z-40 bg-tnky-white border-b border-tnky-edge shadow-tnky-1"
      >
        <div className="max-w-content mx-auto px-4 sm:px-8">
          <div className="flex items-center gap-4 md:gap-6 h-16 md:h-18 xl:h-20">
            <Link
              href="/"
              className="shrink-0 flex items-center"
              aria-label="Trades NKY home"
            >
              <Image
                src="/brand/tradesnkylogo-clean.png"
                alt="Trades NKY"
                width={497}
                height={100}
                priority
                style={{ width: "auto" }}
                className="h-10 md:h-12 xl:h-14"
              />
            </Link>

            <nav
              aria-label="Primary"
              className="hidden md:flex flex-1 items-center justify-center"
            >
              <ul className="flex items-center gap-0.5 lg:gap-1">
                {NAV_ITEMS.map((item) => {
                  const panelId = `${panelIdPrefix}-${item.id}`;
                  const hasSubMenu = !!item.subMenus?.length;
                  const isOpen = openMenu === item.label;
                  const active = getActive(pathname, item);

                  return (
                    <li
                      key={item.id}
                      className="relative"
                      onMouseEnter={() => hasSubMenu && setOpenMenu(item.label)}
                      onMouseLeave={() => hasSubMenu && setOpenMenu(null)}
                    >
                      {hasSubMenu ? (
                        <button
                          ref={(el) => {
                            if (el) triggerRefs.current.set(item.label, el);
                            else triggerRefs.current.delete(item.label);
                          }}
                          type="button"
                          aria-haspopup="true"
                          aria-expanded={isOpen}
                          aria-controls={panelId}
                          onClick={() => toggleMenu(item.label)}
                          className={cn(
                            "relative flex items-center gap-1 px-2 lg:px-3 py-1.5 font-display font-semibold text-sm rounded-pill transition-colors duration-150",
                            "hover:text-tnky-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tnky-blue focus-visible:ring-offset-2 focus-visible:ring-offset-tnky-white",
                            active ? "text-tnky-blue" : "text-tnky-ink"
                          )}
                        >
                          <span>{item.label}</span>
                          <ChevronDown
                            className={cn(
                              "h-4 w-4 transition-transform duration-200 ease-tnky",
                              isOpen && "rotate-180"
                            )}
                            aria-hidden="true"
                          />
                        </button>
                      ) : (
                        <Link
                          href={item.link!}
                          className={cn(
                            "relative flex items-center px-2 lg:px-3 py-1.5 font-display font-semibold text-sm rounded-pill transition-colors duration-150",
                            "hover:text-tnky-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tnky-blue focus-visible:ring-offset-2 focus-visible:ring-offset-tnky-white",
                            active ? "text-tnky-blue" : "text-tnky-ink"
                          )}
                        >
                          {item.label}
                        </Link>
                      )}

                      <AnimatePresence>
                        {hasSubMenu && isOpen && (
                          <div
                            id={panelId}
                            className="absolute left-1/2 top-full -translate-x-1/2 pt-3"
                          >
                            <motion.div
                              initial={{ opacity: 0, y: -8 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -8 }}
                              transition={{
                                duration: 0.18,
                                ease: [0.22, 1, 0.36, 1],
                              }}
                              className="rounded-xl border border-tnky-edge bg-tnky-white p-5 shadow-tnky-3"
                            >
                              <div className="flex gap-6 xl:gap-8">
                                {item.subMenus!.map((section, sIdx) => (
                                  <div
                                    key={section.title ?? sIdx}
                                    className="min-w-44 xl:min-w-56"
                                  >
                                    {section.title && (
                                      <h3 className="mb-3 text-eyebrow uppercase font-display font-semibold text-tnky-mute">
                                        {section.title}
                                      </h3>
                                    )}
                                    <ul className="space-y-1 xl:space-y-2">
                                      {section.items.map((sub) => {
                                        const Icon = sub.icon;
                                        return (
                                          <li key={sub.href}>
                                            <Link
                                              href={sub.href}
                                              className="group flex items-center gap-3 rounded-md p-2 -mx-2 transition-colors duration-150 hover:bg-tnky-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tnky-blue"
                                            >
                                              <span
                                                className={cn(
                                                  "flex h-9 w-9 xl:h-10 xl:w-10 shrink-0 items-center justify-center rounded-md transition-colors duration-150",
                                                  sub.accentBg
                                                    ? `${sub.accentBg} text-tnky-white`
                                                    : "border border-tnky-edge bg-tnky-cream group-hover:bg-tnky-white"
                                                )}
                                                style={
                                                  sub.accentBg
                                                    ? undefined
                                                    : { color: sub.pillarColor }
                                                }
                                              >
                                                <Icon
                                                  className="h-5 w-5"
                                                  strokeWidth={1.5}
                                                  aria-hidden="true"
                                                />
                                              </span>
                                              <span className="flex flex-col leading-snug">
                                                <span className="font-display font-semibold text-sm text-tnky-ink group-hover:text-tnky-blue">
                                                  {sub.label}
                                                </span>
                                                <span className="hidden xl:block text-mini text-tnky-mute">
                                                  {sub.description}
                                                </span>
                                              </span>
                                            </Link>
                                          </li>
                                        );
                                      })}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            </motion.div>
                          </div>
                        )}
                      </AnimatePresence>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <Link
              href="/students/quiz"
              className="shrink-0 hidden md:inline-flex items-center gap-2 bg-tnky-safety text-tnky-safety-ink rounded-pill px-4 xl:px-6 py-2 xl:py-3 font-display font-bold text-button shadow-tnky-safety transition-all duration-200 ease-tnky hover:-translate-y-px hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tnky-blue focus-visible:ring-offset-2 focus-visible:ring-offset-tnky-white whitespace-nowrap"
            >
              Take the Quiz <span aria-hidden>→</span>
            </Link>

            <button
              ref={hamburgerRef}
              type="button"
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              aria-controls={drawerId}
              onClick={() => setMobileOpen(true)}
              className="ml-auto md:hidden inline-flex h-11 w-11 items-center justify-center rounded-md text-tnky-ink hover:bg-tnky-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tnky-blue"
            >
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            onClick={closeMobile}
            aria-hidden="true"
            className="fixed inset-0 z-50 bg-tnky-black/40 md:hidden"
          />
        )}
        {mobileOpen && (
          <motion.div
            key="drawer"
            id={drawerId}
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-tnky-cream flex flex-col shadow-tnky-3 md:hidden"
          >
            <div className="flex items-center justify-between px-5 py-4 border-b border-tnky-line">
              <span className="font-display font-semibold text-tnky-ink">
                Menu
              </span>
              <button
                ref={drawerCloseRef}
                type="button"
                onClick={closeMobile}
                aria-label="Close menu"
                className="flex h-10 w-10 items-center justify-center rounded-md text-tnky-ink hover:bg-tnky-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tnky-blue"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <div className="px-4 pt-4 pb-2">
              <Link
                href="/students/quiz"
                onClick={() => setMobileOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 bg-tnky-safety text-tnky-safety-ink rounded-pill px-6 py-3 font-display font-bold text-button shadow-tnky-safety hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tnky-blue focus-visible:ring-offset-2 focus-visible:ring-offset-tnky-cream"
              >
                Take the Quiz <span aria-hidden>→</span>
              </Link>
            </div>

            <nav
              aria-label="Mobile primary"
              className="flex-1 overflow-y-auto px-2 pb-4"
            >
              <ul className="space-y-1">
                {NAV_ITEMS.map((item) => {
                  const hasSubMenu = !!item.subMenus?.length;
                  const isExp = mobileExpanded.has(item.id);
                  const subId = `${drawerId}-sub-${item.id}`;

                  if (hasSubMenu) {
                    return (
                      <li key={item.id}>
                        <button
                          type="button"
                          aria-expanded={isExp}
                          aria-controls={subId}
                          onClick={() => toggleMobileExpanded(item.id)}
                          className="w-full flex items-center justify-between px-4 py-3 rounded-md font-display font-semibold text-tnky-ink hover:bg-tnky-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tnky-blue"
                        >
                          <span>{item.label}</span>
                          <ChevronDown
                            className={cn(
                              "h-4 w-4 transition-transform duration-200 ease-tnky",
                              isExp && "rotate-180"
                            )}
                            aria-hidden="true"
                          />
                        </button>
                        <AnimatePresence initial={false}>
                          {isExp && (
                            <motion.div
                              id={subId}
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.22 }}
                              className="overflow-hidden"
                            >
                              <div className="pt-1 pb-2 space-y-3">
                                {item.subMenus!.map((section, sIdx) => (
                                  <div key={section.title ?? sIdx}>
                                    {section.title && (
                                      <h3 className="px-4 mb-1 text-eyebrow uppercase font-display font-semibold text-tnky-mute">
                                        {section.title}
                                      </h3>
                                    )}
                                    <ul>
                                      {section.items.map((sub) => {
                                        const Icon = sub.icon;
                                        return (
                                          <li key={sub.href}>
                                            <Link
                                              href={sub.href}
                                              onClick={() =>
                                                setMobileOpen(false)
                                              }
                                              className="flex items-center gap-3 px-4 py-2.5 rounded-md hover:bg-tnky-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tnky-blue"
                                            >
                                              <span
                                                className={cn(
                                                  "flex h-9 w-9 shrink-0 items-center justify-center rounded-md",
                                                  sub.accentBg
                                                    ? `${sub.accentBg} text-tnky-white`
                                                    : "border border-tnky-edge bg-tnky-white"
                                                )}
                                                style={
                                                  sub.accentBg
                                                    ? undefined
                                                    : { color: sub.pillarColor }
                                                }
                                              >
                                                <Icon
                                                  className="h-5 w-5"
                                                  strokeWidth={1.5}
                                                  aria-hidden="true"
                                                />
                                              </span>
                                              <span className="flex flex-col leading-snug">
                                                <span className="font-display font-semibold text-sm text-tnky-ink">
                                                  {sub.label}
                                                </span>
                                                <span className="text-mini text-tnky-mute">
                                                  {sub.description}
                                                </span>
                                              </span>
                                            </Link>
                                          </li>
                                        );
                                      })}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </li>
                    );
                  }

                  return (
                    <li key={item.id}>
                      <Link
                        href={item.link!}
                        onClick={() => setMobileOpen(false)}
                        className="block px-4 py-3 rounded-md font-display font-semibold text-tnky-ink hover:bg-tnky-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tnky-blue"
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
