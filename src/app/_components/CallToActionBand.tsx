import Link from "next/link";

export function CallToActionBand() {
  return (
    <section className="bg-tnky-black text-tnky-white py-band">
      <div className="max-w-content mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-10 items-center">
          <div>
            <div className="font-display font-extrabold uppercase text-eyebrow text-tnky-safety mb-3">
              Get involved
            </div>
            <h2 className="font-display font-extrabold text-section text-tnky-white">
              Northern Kentucky needs every kid who&apos;d rather build than scroll.
            </h2>
          </div>
          <div className="flex gap-3 flex-wrap lg:justify-end">
            <Link
              href="/contact#volunteer"
              className="inline-flex items-center gap-2 bg-tnky-safety text-tnky-safety-ink rounded-pill px-pill-x py-3.5 font-display font-bold text-button shadow-tnky-safety transition-all duration-200 ease-tnky hover:-translate-y-px"
            >
              Volunteer <span aria-hidden>→</span>
            </Link>
            <Link
              href="/contact#sponsor"
              className="inline-flex items-center gap-2 bg-transparent text-tnky-white border-2 border-tnky-white/70 rounded-pill px-5 py-3 font-display font-bold text-button transition-all duration-200 ease-tnky hover:bg-tnky-white hover:text-tnky-blue"
            >
              Sponsor a program
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
