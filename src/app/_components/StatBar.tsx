const STATS = [
  { num: "$63K", lbl: "median journey-level salary in NKY" },
  { num: "1M+", lbl: "unfilled skilled-trade jobs nationwide" },
  { num: "43%", lbl: "earnings jump for apprentices within 2.5 years" },
  { num: "40%+", lbl: "of the workforce retiring this decade" },
];

export function StatBar() {
  return (
    <section
      aria-labelledby="stat-bar-heading"
      className="bg-tnky-blue py-20 text-tnky-white md:py-24"
    >
      <h2 id="stat-bar-heading" className="sr-only">
        NKY trades by the numbers
      </h2>
      <div className="max-w-content mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map((s) => (
            <div key={s.lbl}>
              <div className="font-display font-tnky-black italic text-stat-xl leading-none">
                {s.num}
              </div>
              <div className="text-mini text-tnky-white/75 mt-2 uppercase tracking-label font-display font-semibold">
                {s.lbl}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
