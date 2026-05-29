"use client";

import { useId } from "react";

type Tone = "silver" | "black" | "white";

type Props = {
  className?: string;
  tone?: Tone;
  halftone?: boolean;
  title?: string;
};

// Three tapered claw rips, outer two splayed — the Monster "M" gash.
const blade = (cx: number, w: number, lean: number) =>
  `M ${cx} 14 ` +
  `C ${cx + w} 72, ${cx + w} 150, ${cx + w * 0.55} 224 ` +
  `C ${cx + w * 0.28} 274, ${cx + lean + 7} 300, ${cx + lean} 330 ` +
  `C ${cx + lean - 7} 300, ${cx - w * 0.28} 274, ${cx - w * 0.55} 224 ` +
  `C ${cx - w} 150, ${cx - w} 72, ${cx} 14 Z`;

const RIPS = [
  blade(78, 27, -18),
  blade(150, 29, 0),
  blade(222, 27, 18),
];

export default function ClawLogo({
  className = "",
  tone = "silver",
  halftone = true,
  title = "Monster claw",
}: Props) {
  const id = useId().replace(/:/g, "");
  const gradId = `g-${id}`;
  const dotId = `d-${id}`;

  const stroke =
    tone === "white" ? "rgba(0,0,0,0.25)" : tone === "black" ? "none" : "#0a0a0a";
  const strokeW = tone === "black" ? 0 : 4;
  const baseFill =
    tone === "black" ? "#0a0a0a" : tone === "white" ? "#ffffff" : `url(#${gradId})`;

  return (
    <svg
      viewBox="0 0 300 344"
      className={className}
      role="img"
      aria-label={title}
    >
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="0.5" stopColor="#cfd5d9" />
          <stop offset="1" stopColor="#8c9398" />
        </linearGradient>
        <pattern
          id={dotId}
          width="7"
          height="7"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="1.4" cy="1.4" r="1.3" fill="rgba(10,10,10,0.4)" />
        </pattern>
      </defs>

      {RIPS.map((d, i) => (
        <path key={`f${i}`} d={d} fill={baseFill} />
      ))}
      {tone === "silver" && halftone &&
        RIPS.map((d, i) => (
          <path key={`h${i}`} d={d} fill={`url(#${dotId})`} opacity={0.5} />
        ))}
      {strokeW > 0 &&
        RIPS.map((d, i) => (
          <path
            key={`s${i}`}
            d={d}
            fill="none"
            stroke={stroke}
            strokeWidth={strokeW}
            strokeLinejoin="round"
          />
        ))}
    </svg>
  );
}
