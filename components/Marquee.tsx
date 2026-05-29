type Props = {
  items: string[];
  variant?: "light" | "dark" | "ice";
  speed?: "slow" | "normal" | "fast";
  reverse?: boolean;
  className?: string;
};

export default function Marquee({
  items,
  variant = "light",
  speed = "normal",
  reverse = false,
  className = "",
}: Props) {
  const variantClass = {
    light: "bg-bone text-ink border-y-2 border-ink",
    dark: "bg-ink text-bone border-y-2 border-ink",
    ice: "bg-ice text-ink border-y-2 border-ink",
  }[variant];
  const speedClass = reverse
    ? "animate-marquee-rev"
    : speed === "slow"
      ? "animate-marquee-slow"
      : "animate-marquee";

  const tripled = [...items, ...items, ...items];
  return (
    <div
      className={`relative overflow-hidden ${variantClass} ${className}`}
      aria-hidden
    >
      <div className={`flex whitespace-nowrap ${speedClass}`}>
        {tripled.map((it, i) => (
          <span
            key={i}
            className="font-display text-[clamp(2rem,5vw,4rem)] leading-none px-6 py-3"
          >
            {it}
            <span className="inline-block px-6 align-middle text-ice-deep">
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
