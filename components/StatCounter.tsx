"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  to: number;
  label: string;
  unit?: string;
  duration?: number;
  decimals?: number;
};

export default function StatCounter({
  to,
  label,
  unit,
  duration = 1400,
  decimals = 0,
}: Props) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const tick = (now: number) => {
              const t = Math.min(1, (now - start) / duration);
              const eased = 1 - Math.pow(1 - t, 3);
              setValue(eased * to);
              if (t < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 },
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, [to, duration]);

  return (
    <div ref={ref} className="flex flex-col">
      <div className="font-display text-[clamp(3rem,8vw,5.5rem)] leading-none tracking-tight">
        {value.toFixed(decimals)}
        {unit && <span className="text-ice-deep">{unit}</span>}
      </div>
      <div className="mt-2 font-mono text-[11px] uppercase tracking-[0.25em] text-steel">
        {label}
      </div>
    </div>
  );
}
