import Link from "next/link";

type Pillar = {
  id: string;
  title: string;
  desc: string;
  bg: string;
  icon: React.ReactNode;
};

const ICON_PROPS = {
  viewBox: "0 0 24 24",
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 2.2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const PILLARS: Pillar[] = [
  {
    id: "build",
    title: "BUILD",
    desc: "Design/Engineer, Construction, Plumbing, Electrical, and HVAC",
    bg: "bg-pillar-build",
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M15 12l-8.5 8.5a2.12 2.12 0 1 1-3-3L12 9" />
        <path d="M17.64 15L22 10.64" />
        <path d="M20.91 11.7l-1.25-1.25c-.6-.6-.93-1.4-.93-2.25v-.86L16.01 4.6a5.56 5.56 0 0 0-3.94-1.64H9l.92.82A6.18 6.18 0 0 1 12 8.4v1.56l2 2h2.47l2.26 1.91" />
      </svg>
    ),
  },
  {
    id: "make",
    title: "MAKE",
    desc: "Manufacturing, Machining, Robotics, Fabrication, and Welding",
    bg: "bg-pillar-make",
    icon: (
      <svg {...ICON_PROPS}>
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  },
  {
    id: "move",
    title: "MOVE",
    desc: "Logistics, Transportation, and Supply Chain",
    bg: "bg-pillar-move",
    icon: (
      <svg {...ICON_PROPS}>
        <rect x="1" y="6" width="13" height="11" rx="1" />
        <path d="M14 9h4l3 3v5h-7z" />
        <circle cx="6" cy="19" r="2" />
        <circle cx="17" cy="19" r="2" />
      </svg>
    ),
  },
  {
    id: "power",
    title: "POWER",
    desc: "Energy, Utilities, Environmental Systems, and Lineman",
    bg: "bg-pillar-power",
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M9 18h6" />
        <path d="M10 22h4" />
        <path d="M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.2 1 2v.3h6v-.3c0-.8.4-1.5 1-2A7 7 0 0 0 12 2z" />
      </svg>
    ),
  },
  {
    id: "protect",
    title: "PROTECT",
    desc: "Facility Operations, Public Safety, Community Infrastructure, Cybersecurity, and Disaster Response",
    bg: "bg-pillar-protect",
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
];

const CLIP =
  "[clip-path:polygon(0_0,100%_0,100%_18%,88%_26%,88%_74%,100%_82%,100%_100%,0_100%,0_82%,12%_74%,12%_26%,0_18%)]";

export function PillarsGrid() {
  return (
    <section className="py-24">
      <div className="max-w-content mx-auto px-4 sm:px-8">
        <div className="text-center mb-12 flex flex-col gap-2.5 items-center">
          <div className="font-display font-extrabold uppercase text-eyebrow text-tnky-blue">
            The five paths
          </div>
          <h2 className="font-display font-extrabold text-section">
            The Essential Workforce Starts Here.
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5">
          {PILLARS.map((p) => (
            <Link
              key={p.id}
              href={`/students/pillars/${p.id}`}
              className="group bg-transparent flex flex-col items-stretch transition-transform duration-200 ease-tnky hover:-translate-y-1"
            >
              <div className={`relative h-55 flex items-center justify-center ${p.bg} ${CLIP}`}>
                <div className="absolute top-3.5 left-0 right-0 text-center text-tnky-white font-display font-extrabold text-xl tracking-pillar">
                  {p.title}
                </div>
                <div className="text-tnky-white [&_svg]:w-14 [&_svg]:h-14 [&_svg]:block">
                  {p.icon}
                </div>
              </div>
              <div className="bg-pillar-base px-3.5 pt-card pb-5 -mt-0.5 min-h-35">
                <div className="text-mini text-tnky-mute leading-snug text-center">
                  {p.desc}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
