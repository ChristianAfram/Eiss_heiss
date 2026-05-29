import MonsterCan from "./MonsterCan";
import type { Flavor } from "@/lib/flavors";
import Link from "next/link";

export default function FlavorCard({
  flavor,
  index,
}: {
  flavor: Flavor;
  index: number;
}) {
  return (
    <Link
      href="/flavors"
      className="group relative block brutal-card brutal-card-ice p-6 sm:p-8"
    >
      <div className="flex items-start justify-between font-mono text-[11px] uppercase tracking-[0.25em] text-steel">
        <span>NO. {String(index + 1).padStart(2, "0")}</span>
        <span>{flavor.caffeine}MG · 0G SUGAR</span>
      </div>

      <div className="mt-2 flex items-end justify-center py-2">
        <MonsterCan
          variant={flavor.canVariant}
          label={flavor.label}
          tagline={flavor.tagline}
          floating
        />
      </div>

      <div className="mt-4 border-t-2 border-ink pt-4">
        <h3 className="font-display text-[clamp(2rem,4vw,2.75rem)] leading-none tracking-tight">
          {flavor.name}
        </h3>
        <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.25em] text-steel">
          {flavor.kicker}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-graphite">
          {flavor.description}
        </p>
      </div>

      <div className="mt-5 flex items-center justify-between font-display text-xs tracking-[0.25em]">
        <span className="bg-ink px-2 py-1 text-bone">{flavor.tier}</span>
        <span className="text-steel transition-colors group-hover:text-ink">
          UNLEASH →
        </span>
      </div>
    </Link>
  );
}
