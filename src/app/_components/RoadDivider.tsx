export function RoadDivider({ animated = false }: { animated?: boolean }) {
  return (
    <div className="w-full h-3.5">
      <svg
        viewBox="0 0 1200 14"
        preserveAspectRatio="none"
        className="w-full h-full block"
      >
        <line x1="0" y1="7" x2="1200" y2="7" stroke="#081d82" strokeWidth="4" />
        <line
          x1="0"
          y1="7"
          x2="1200"
          y2="7"
          stroke="#faf8f3"
          strokeWidth="2"
          strokeDasharray="22 22"
          className={animated ? "animate-road-march" : ""}
        />
      </svg>
    </div>
  );
}
