type Stage = {
  band: string;
  title: string;
  desc: string;
  nodeBg: string;
  nodeText: string;
};

const STAGES: Stage[] = [
  {
    band: "K–5",
    title: "Expose",
    desc: "Visits, classroom kits, hands-on demos. Trades become real, named jobs.",
    nodeBg: "bg-tnky-sky",
    nodeText: "text-tnky-white",
  },
  {
    band: "6–8",
    title: "Explore",
    desc: "Shadow days, summer build camps, intro skills labs.",
    nodeBg: "bg-tnky-blue",
    nodeText: "text-tnky-white",
  },
  {
    band: "9–12",
    title: "Engage",
    desc: "Pre-apprenticeship, dual-credit certifications, paid internships.",
    nodeBg: "bg-tnky-safety",
    nodeText: "text-tnky-safety-ink",
  },
  {
    band: "18+",
    title: "Earn",
    desc: "Apprentice → journeyman. Debt-free. Local employer placement.",
    nodeBg: "bg-tnky-grass",
    nodeText: "text-tnky-white",
  },
];

export function PathwayTimeline() {
  return (
    <section className="py-24 bg-tnky-paper">
      <div className="max-w-content mx-auto px-4 sm:px-8">
        <div className="text-center mb-14 flex flex-col gap-3 items-center">
          <div className="font-display font-extrabold uppercase text-eyebrow text-tnky-blue">
            The pathway
          </div>
          <h2 className="font-display font-extrabold text-section">
            From 1st grade to first paycheck.
          </h2>
          <p className="text-tnky-mute text-lead max-w-lead [text-wrap:pretty]">
            Trades NKY runs programs at every grade band — so curiosity in second grade can compound
            into a real apprenticeship by senior year.
          </p>
        </div>
        <div className="relative pt-7">
          <div className="hidden md:block absolute top-14 left-[4%] right-[4%] h-1 bg-road" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {STAGES.map((s) => (
              <div key={s.band} className="flex flex-col items-center">
                <div
                  className={`w-19 h-19 rounded-full flex items-center justify-center font-display font-tnky-black text-button border-4 border-tnky-paper relative z-10 shadow-tnky-node ${s.nodeBg} ${s.nodeText}`}
                >
                  {s.band}
                </div>
                <div className="mt-pill-x bg-tnky-white border border-tnky-edge rounded-2xl px-5 py-card text-center w-full">
                  <div className="font-display font-extrabold text-card-title mb-1.5">{s.title}</div>
                  <div className="text-mini text-tnky-mute leading-relaxed">{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
