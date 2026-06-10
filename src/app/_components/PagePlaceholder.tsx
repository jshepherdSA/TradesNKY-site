export function PagePlaceholder({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <main className="py-24">
      <div className="max-w-content mx-auto px-4 sm:px-8">
        <div className="font-display font-extrabold uppercase text-eyebrow text-tnky-blue mb-4">
          {eyebrow}
        </div>
        <h1 className="font-display font-extrabold text-h1 mb-6">{title}</h1>
        <p className="text-tnky-mute text-lead max-w-lead">
          This page is part of the new Trades NKY site and is coming together — designs forthcoming.
        </p>
      </div>
    </main>
  );
}
