type Props = {
  className?: string;
  color?: string;
  strokeWidth?: number;
  animated?: boolean;
};

export default function ClawMark({
  className = "",
  color = "#B8FF00",
  strokeWidth = 8,
  animated = true,
}: Props) {
  return (
    <svg
      className={className}
      viewBox="0 0 240 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <g
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        className={animated ? "claw-stroke" : ""}
      >
        <path d="M30 20 C 60 110, 70 200, 50 300" />
        <path d="M95 8 C 120 110, 128 220, 110 308" />
        <path d="M160 14 C 178 110, 184 220, 162 305" />
        <path d="M220 28 C 232 120, 230 220, 210 300" />
      </g>
    </svg>
  );
}
