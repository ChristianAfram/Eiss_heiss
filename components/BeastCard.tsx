import type { Beast } from "@/lib/beasts";

export default function BeastCard({
  beast,
  index,
}: {
  beast: Beast;
  index: number;
}) {
  return (
    <article className="group relative overflow-hidden border-2 border-bone/30 bg-graphite p-6 sm:p-8 transition-colors hover:border-ice">
      <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.25em] text-fog">
        <span>BEAST_{String(index + 1).padStart(3, "0")}</span>
        <span>{beast.discipline}</span>
      </div>

      <div className="mt-6 flex items-center gap-4">
        <div
          className="flex h-16 w-16 shrink-0 items-center justify-center border-2 border-bone/30 font-display text-2xl text-ice"
          style={{
            background: `linear-gradient(135deg, ${beast.gradient[0]}, ${beast.gradient[1]})`,
          }}
        >
          {beast.initials}
        </div>
        <div>
          <h3 className="font-display text-2xl leading-none text-bone">
            {beast.name}
          </h3>
          <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.2em] text-fog">
            {beast.location}
          </p>
        </div>
      </div>

      <p className="mt-6 text-sm leading-relaxed text-mist">
        “{beast.quote}”
      </p>

      <dl className="mt-6 grid grid-cols-3 gap-4 border-t border-bone/20 pt-5">
        {beast.stats.map((s) => (
          <div key={s.label}>
            <dt className="font-mono text-[10px] uppercase tracking-[0.25em] text-fog">
              {s.label}
            </dt>
            <dd className="mt-1 font-display text-xl text-ice">{s.value}</dd>
          </div>
        ))}
      </dl>
    </article>
  );
}
