type Props = {
  size?: "sm" | "md" | "lg" | "xl";
  ultra?: boolean;
  tone?: "ink" | "bone";
  className?: string;
};

const sizes = {
  sm: { m: "text-xl", e: "text-[0.5rem]", u: "text-[0.55rem]", o: "0.62em" },
  md: { m: "text-3xl", e: "text-[0.62rem]", u: "text-[0.7rem]", o: "0.62em" },
  lg: { m: "text-6xl", e: "text-base", u: "text-lg", o: "0.6em" },
  xl: {
    m: "text-[clamp(3rem,9vw,7rem)]",
    e: "text-[clamp(0.9rem,2.2vw,1.6rem)]",
    u: "text-[clamp(1rem,2.6vw,1.9rem)]",
    o: "0.58em",
  },
} as const;

function PowerO({ em, color }: { em: string; color: string }) {
  return (
    <span
      className="inline-block align-baseline"
      style={{ width: em, height: em, transform: "translateY(0.06em)" }}
      aria-hidden
    >
      <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none">
        <path
          d="M6.5 6.2 A8 8 0 1 0 17.5 6.2"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
        />
        <line
          x1="12"
          y1="1.6"
          x2="12"
          y2="11"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}

export default function Wordmark({
  size = "md",
  ultra = false,
  tone = "ink",
  className = "",
}: Props) {
  const s = sizes[size];
  const ink = tone === "ink" ? "#0a0a0a" : "#f4f6f7";
  return (
    <span
      className={`inline-flex flex-col items-center leading-none ${className}`}
      aria-label={`Monster Energy${ultra ? " Ultra" : ""}`}
    >
      <span
        className={`font-display ${s.m} flex items-baseline tracking-[0.04em]`}
        style={{ color: ink }}
      >
        M
        <PowerO em={s.o} color={ink} />
        NSTER
      </span>
      <span
        className={`font-display ${s.e} tracking-[0.55em] -mt-[0.15em]`}
        style={{ color: "#1f9fd1", paddingLeft: "0.55em" }}
      >
        ENERGY
      </span>
      {ultra && (
        <span
          className={`font-display ${s.u} tracking-[0.3em] mt-[0.1em]`}
          style={{ color: ink, paddingLeft: "0.3em" }}
        >
          ULTRA
        </span>
      )}
    </span>
  );
}
