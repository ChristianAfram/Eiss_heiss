type Props = {
  className?: string;
  tone?: "ink" | "bone";
};

export default function OrnamentDivider({
  className = "",
  tone = "ink",
}: Props) {
  const c = tone === "ink" ? "#0a0a0a" : "#f4f6f7";
  const accent = "#1f9fd1";
  return (
    <div
      className={`flex w-full items-center justify-center py-2 ${className}`}
      aria-hidden
    >
      <svg
        viewBox="0 0 640 40"
        className="h-8 w-full max-w-2xl"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
      >
        <g stroke={c} strokeWidth="1.4" strokeLinecap="round">
          <line x1="20" y1="20" x2="232" y2="20" />
          <line x1="408" y1="20" x2="620" y2="20" />
          {/* left scrolls */}
          <path d="M232 20 C 258 20, 262 8, 282 10 C 296 11, 296 22, 284 22" />
          <path d="M250 20 C 256 28, 268 30, 276 28" opacity="0.7" />
          {/* right scrolls (mirror) */}
          <path d="M408 20 C 382 20, 378 8, 358 10 C 344 11, 344 22, 356 22" />
          <path d="M390 20 C 384 28, 372 30, 364 28" opacity="0.7" />
        </g>
        {/* center diamond + accent */}
        <g>
          <path
            d="M320 6 L334 20 L320 34 L306 20 Z"
            fill="none"
            stroke={c}
            strokeWidth="1.6"
          />
          <path d="M320 13 L327 20 L320 27 L313 20 Z" fill={accent} />
        </g>
      </svg>
    </div>
  );
}
