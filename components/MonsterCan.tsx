import ClawLogo from "./ClawLogo";
import Wordmark from "./Wordmark";

type Variant = "white" | "ice" | "blanc" | "ghost" | "salt" | "frost";

type Props = {
  variant?: Variant;
  label?: string;
  tagline?: string;
  className?: string;
  floating?: boolean;
};

const bodies: Record<Variant, string> = {
  white: "linear-gradient(180deg, #ffffff 0%, #f1f3f4 55%, #d9dde0 100%)",
  ice: "linear-gradient(180deg, #fbfeff 0%, #e2f1f8 58%, #c0dae6 100%)",
  blanc: "linear-gradient(180deg, #fffdf8 0%, #f4efe3 58%, #ddd3c1 100%)",
  ghost: "linear-gradient(180deg, #fafafa 0%, #e2e4e6 58%, #c2c6c9 100%)",
  salt: "linear-gradient(180deg, #ffffff 0%, #eef2f0 58%, #d2ddd6 100%)",
  frost: "linear-gradient(180deg, #ffffff 0%, #e7ebf2 56%, #c6cedd 100%)",
};

const accents: Record<Variant, string> = {
  white: "#1f9fd1",
  ice: "#00b4d8",
  blanc: "#c79a4e",
  ghost: "#6b7177",
  salt: "#3aa66f",
  frost: "#5a78d6",
};

export default function MonsterCan({
  variant = "white",
  label = "WHITE",
  tagline = "ZERO ZUCKER",
  className = "",
  floating = false,
}: Props) {
  const accent = accents[variant];
  return (
    <div
      className={`relative ${floating ? "animate-float" : ""} ${className}`}
      aria-label={`Monster Energy Ultra ${label} can`}
    >
      <div
        className="relative mx-auto"
        style={{
          width: "204px",
          height: "430px",
          filter: "drop-shadow(0 34px 30px rgba(0,0,0,0.28))",
        }}
      >
        {/* Top rim */}
        <div
          className="absolute left-1/2 -translate-x-1/2 rounded-[45%]"
          style={{
            top: 0,
            width: "176px",
            height: "26px",
            background:
              "linear-gradient(180deg, #cfd2d4 0%, #f6f7f8 45%, #b6babd 100%)",
            border: "1px solid rgba(0,0,0,0.18)",
            zIndex: 3,
          }}
        />
        {/* Body */}
        <div
          className="absolute left-1/2 -translate-x-1/2 overflow-hidden"
          style={{
            top: "16px",
            width: "184px",
            height: "402px",
            borderRadius: "16px",
            background: bodies[variant],
            border: "1px solid rgba(0,0,0,0.14)",
            zIndex: 2,
          }}
        >
          {/* Filigree */}
          <div className="absolute inset-0 bg-filigree opacity-[0.28]" />
          {/* Left sheen */}
          <div
            className="absolute inset-y-0"
            style={{
              left: "8%",
              width: "22%",
              background:
                "linear-gradient(90deg, rgba(255,255,255,0.95), rgba(255,255,255,0))",
              opacity: 0.7,
            }}
          />
          {/* Right shadow */}
          <div
            className="absolute inset-y-0 right-0"
            style={{
              width: "26%",
              background:
                "linear-gradient(270deg, rgba(0,0,0,0.16), rgba(0,0,0,0))",
            }}
          />

          {/* ZERO ZUCKER */}
          <div
            className="absolute left-0 right-0 text-center font-display"
            style={{
              top: "7%",
              color: "#0a0a0a",
              fontSize: "15px",
              letterSpacing: "0.16em",
            }}
          >
            {tagline}
          </div>

          {/* Claw */}
          <div className="absolute left-1/2 -translate-x-1/2" style={{ top: "15%" }}>
            <ClawLogo className="h-[150px] w-[124px]" tone="silver" />
          </div>

          {/* Wordmark */}
          <div
            className="absolute left-1/2 -translate-x-1/2 text-center"
            style={{ top: "58%" }}
          >
            <Wordmark size="md" ultra tone="ink" />
          </div>

          {/* Flavor tag */}
          <div
            className="absolute left-1/2 -translate-x-1/2"
            style={{ bottom: "13%" }}
          >
            <span
              className="font-display"
              style={{
                fontSize: "11px",
                letterSpacing: "0.28em",
                color: "#fff",
                background: accent,
                padding: "3px 12px",
                borderRadius: "999px",
              }}
            >
              {label}
            </span>
          </div>

          {/* Barcode */}
          <div
            className="absolute left-0 right-0 flex justify-center gap-[2px]"
            style={{ bottom: "26px" }}
          >
            {[3, 1, 2, 1, 3, 2, 1, 3, 1, 2, 2, 1].map((w, i) => (
              <span
                key={i}
                style={{
                  width: `${w}px`,
                  height: "14px",
                  background: "#0a0a0a",
                  opacity: 0.6,
                }}
              />
            ))}
          </div>
          {/* Volume */}
          <div
            className="absolute left-0 right-0 text-center font-mono"
            style={{
              bottom: "8px",
              color: "#0a0a0a",
              fontSize: "9px",
              letterSpacing: "0.18em",
              opacity: 0.7,
            }}
          >
            500 ML · ZERO SUGAR
          </div>
        </div>
        {/* Bottom rim */}
        <div
          className="absolute left-1/2 -translate-x-1/2 rounded-[45%]"
          style={{
            bottom: 0,
            width: "176px",
            height: "16px",
            background: "linear-gradient(180deg, #b4b8bb 0%, #7c8084 100%)",
            zIndex: 3,
          }}
        />
      </div>
    </div>
  );
}
