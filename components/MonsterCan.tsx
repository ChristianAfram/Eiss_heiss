type Props = {
  variant?: "white" | "ice" | "blanc" | "ghost" | "salt" | "frost";
  label?: string;
  tagline?: string;
  className?: string;
  floating?: boolean;
};

const variantStyles: Record<
  NonNullable<Props["variant"]>,
  { body: string; sheen: string; accent: string; ink: string }
> = {
  white: {
    body: "linear-gradient(180deg, #ffffff 0%, #f0f0ec 50%, #d8d8d2 100%)",
    sheen: "linear-gradient(180deg, rgba(255,255,255,0.9), rgba(255,255,255,0))",
    accent: "#B8FF00",
    ink: "#050505",
  },
  ice: {
    body: "linear-gradient(180deg, #f5fbff 0%, #d8ecf6 60%, #aac6d6 100%)",
    sheen: "linear-gradient(180deg, rgba(255,255,255,0.8), rgba(255,255,255,0))",
    accent: "#00F0FF",
    ink: "#050505",
  },
  blanc: {
    body: "linear-gradient(180deg, #fffaf2 0%, #f4ead4 60%, #d6c9a8 100%)",
    sheen: "linear-gradient(180deg, rgba(255,255,255,0.85), rgba(255,255,255,0))",
    accent: "#E8B46C",
    ink: "#050505",
  },
  ghost: {
    body: "linear-gradient(180deg, #f8f8f8 0%, #d0d0d0 60%, #888888 100%)",
    sheen: "linear-gradient(180deg, rgba(255,255,255,0.7), rgba(255,255,255,0))",
    accent: "#B8FF00",
    ink: "#0a0a0a",
  },
  salt: {
    body: "linear-gradient(180deg, #ffffff 0%, #ecf0e8 60%, #b8c9a5 100%)",
    sheen: "linear-gradient(180deg, rgba(255,255,255,0.8), rgba(255,255,255,0))",
    accent: "#8fcc00",
    ink: "#050505",
  },
  frost: {
    body: "linear-gradient(180deg, #ffffff 0%, #e3e6ee 55%, #9aa3c0 100%)",
    sheen: "linear-gradient(180deg, rgba(255,255,255,0.85), rgba(255,255,255,0))",
    accent: "#B8FF00",
    ink: "#050505",
  },
};

export default function MonsterCan({
  variant = "white",
  label = "WHITE",
  tagline = "ZERO SUGAR · ULTRA",
  className = "",
  floating = false,
}: Props) {
  const v = variantStyles[variant];
  return (
    <div
      className={`relative ${floating ? "animate-float" : ""} ${className}`}
      aria-label={`Monster ${label} can`}
    >
      <div
        className="relative mx-auto"
        style={{
          width: "200px",
          height: "420px",
          filter: "drop-shadow(0 30px 30px rgba(0,0,0,0.25))",
        }}
      >
        {/* Top rim */}
        <div
          className="absolute left-1/2 -translate-x-1/2 rounded-[40%] border border-black/20"
          style={{
            top: "0",
            width: "180px",
            height: "26px",
            background:
              "linear-gradient(180deg, #d6d6d2 0%, #f4f4f1 50%, #c0c0bd 100%)",
            zIndex: 3,
          }}
        />
        {/* Body */}
        <div
          className="absolute left-1/2 -translate-x-1/2 overflow-hidden"
          style={{
            top: "18px",
            width: "182px",
            height: "388px",
            borderRadius: "14px",
            background: v.body,
            border: "1px solid rgba(0,0,0,0.15)",
            zIndex: 2,
          }}
        >
          {/* Highlight */}
          <div
            className="absolute"
            style={{
              top: 0,
              left: "10%",
              width: "20%",
              height: "100%",
              background: v.sheen,
              opacity: 0.6,
            }}
          />
          {/* Side shadow */}
          <div
            className="absolute"
            style={{
              top: 0,
              right: 0,
              width: "22%",
              height: "100%",
              background:
                "linear-gradient(270deg, rgba(0,0,0,0.18), rgba(0,0,0,0))",
            }}
          />
          {/* Claw mark */}
          <div className="absolute inset-0 flex items-start justify-center pt-12">
            <svg
              viewBox="0 0 120 160"
              width="100"
              height="130"
              fill="none"
              aria-hidden
            >
              <g
                stroke={v.accent}
                strokeWidth="5"
                strokeLinecap="round"
                opacity="0.95"
              >
                <path d="M22 8 C 30 60, 32 110, 28 152" />
                <path d="M50 4 C 56 60, 58 116, 50 156" />
                <path d="M78 8 C 80 60, 80 116, 70 154" />
                <path d="M102 14 C 100 60, 98 110, 90 150" />
              </g>
            </svg>
          </div>
          {/* Wordmark */}
          <div
            className="absolute left-0 right-0 text-center font-display"
            style={{
              top: "50%",
              color: v.ink,
              fontSize: "30px",
              letterSpacing: "0.04em",
              transform: "translateY(-50%)",
            }}
          >
            MONSTER
          </div>
          <div
            className="absolute left-0 right-0 text-center font-display"
            style={{
              top: "62%",
              color: v.accent,
              fontSize: "44px",
              letterSpacing: "0.06em",
              textShadow: `0 0 12px ${v.accent}55`,
            }}
          >
            {label}
          </div>
          {/* Tagline */}
          <div
            className="absolute left-0 right-0 text-center font-mono"
            style={{
              top: "75%",
              color: v.ink,
              fontSize: "9px",
              letterSpacing: "0.2em",
              opacity: 0.75,
            }}
          >
            {tagline}
          </div>
          {/* Barcode-ish bottom */}
          <div
            className="absolute left-0 right-0 flex justify-center gap-[2px]"
            style={{ bottom: "22px" }}
          >
            {[3, 1, 2, 1, 3, 2, 1, 3, 1, 2].map((w, i) => (
              <span
                key={i}
                style={{
                  width: `${w}px`,
                  height: "16px",
                  background: v.ink,
                  opacity: 0.55,
                }}
              />
            ))}
          </div>
          {/* Volume */}
          <div
            className="absolute left-0 right-0 text-center font-mono"
            style={{
              bottom: "6px",
              color: v.ink,
              fontSize: "9px",
              letterSpacing: "0.18em",
              opacity: 0.7,
            }}
          >
            500 ML
          </div>
        </div>
        {/* Bottom rim */}
        <div
          className="absolute left-1/2 -translate-x-1/2 rounded-[40%]"
          style={{
            bottom: "0",
            width: "180px",
            height: "16px",
            background:
              "linear-gradient(180deg, #b8b8b5 0%, #80807e 100%)",
            zIndex: 3,
          }}
        />
      </div>
    </div>
  );
}
