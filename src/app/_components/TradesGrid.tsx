type Trade = {
  name: string;
  pay: string;
  time: string;
  icon: React.ReactNode;
};

const STROKE = {
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
  width: 22,
  height: 22,
};

const TRADES: Trade[] = [
  {
    name: "Electrician",
    pay: "$58–82K",
    time: "4 yr apprenticeship",
    icon: (
      <svg {...STROKE}>
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    name: "Welder",
    pay: "$48–72K",
    time: "1–2 yr program",
    icon: (
      <svg {...STROKE}>
        <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
      </svg>
    ),
  },
  {
    name: "HVAC Tech",
    pay: "$52–78K",
    time: "2–4 yr program",
    icon: (
      <svg {...STROKE}>
        <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2" />
        <path d="M9.6 4.6A2 2 0 1 1 11 8H2" />
        <path d="M12.6 19.4A2 2 0 1 0 14 16H2" />
      </svg>
    ),
  },
  {
    name: "Plumber",
    pay: "$58–85K",
    time: "4–5 yr apprenticeship",
    icon: (
      <svg {...STROKE}>
        <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />
      </svg>
    ),
  },
  {
    name: "Carpenter",
    pay: "$46–70K",
    time: "3–4 yr apprenticeship",
    icon: (
      <svg {...STROKE}>
        <path d="m15 12-8.373 8.373a1 1 0 1 1-3-3L12 9" />
        <path d="m18 15 4-4" />
        <path d="m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172V7l-2.26-2.26a6 6 0 0 0-4.202-1.756L9 2.96l.92.82A6.18 6.18 0 0 1 12 8.4V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5" />
      </svg>
    ),
  },
  {
    name: "Diesel Mechanic",
    pay: "$52–76K",
    time: "2–3 yr program",
    icon: (
      <svg {...STROKE}>
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
];

export function TradesGrid() {
  return (
    <section className="py-24">
      <div className="max-w-content mx-auto px-4 sm:px-8">
        <div className="text-center mb-12 flex flex-col gap-2.5 items-center">
          <div className="font-display font-extrabold uppercase text-eyebrow text-tnky-blue">
            In demand · Northern Kentucky
          </div>
          <h2 className="font-display font-extrabold text-section">
            Real careers — real paychecks.
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-card">
          {TRADES.map((t) => (
            <div
              key={t.name}
              className="bg-tnky-white border border-tnky-edge rounded-2xl p-pill-x transition-all duration-200 ease-tnky hover:-translate-y-0.5 hover:shadow-tnky-3 hover:border-tnky-ink"
            >
              <div className="w-11 h-11 rounded-xl bg-tnky-blue-100 text-tnky-blue flex items-center justify-center mb-3.5">
                {t.icon}
              </div>
              <div className="font-display font-extrabold text-xl mb-3.5">{t.name}</div>
              <div className="flex gap-6">
                <div className="flex flex-col gap-0.5">
                  <span className="text-meta uppercase tracking-data text-tnky-mute font-display font-bold">
                    Starting
                  </span>
                  <span className="font-display font-bold text-button text-tnky-ink">{t.pay}</span>
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-meta uppercase tracking-data text-tnky-mute font-display font-bold">
                    Path
                  </span>
                  <span className="font-display font-bold text-button text-tnky-ink">{t.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
