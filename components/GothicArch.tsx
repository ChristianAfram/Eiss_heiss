type Props = {
  className?: string;
  stroke?: string;
};

// Lancet (equilateral pointed) arch frame — cathedral window.
export default function GothicArch({
  className = "",
  stroke = "#9aa1a6",
}: Props) {
  return (
    <svg
      viewBox="0 0 300 470"
      fill="none"
      className={className}
      aria-hidden
      preserveAspectRatio="xMidYMid meet"
    >
      <g stroke={stroke} strokeWidth="2.5" strokeLinecap="round">
        {/* Outer arch */}
        <path d="M48 452 L48 180 A180 180 0 0 1 150 24 A180 180 0 0 1 252 180 L252 452" />
        {/* Inner arch */}
        <path
          d="M64 452 L64 184 A158 158 0 0 1 150 46 A158 158 0 0 1 236 184 L236 452"
          opacity="0.55"
        />
        {/* Base line */}
        <path d="M30 452 L270 452" strokeWidth="3" />
        {/* Springing knobs */}
        <circle cx="48" cy="180" r="4.5" fill={stroke} stroke="none" />
        <circle cx="252" cy="180" r="4.5" fill={stroke} stroke="none" />
      </g>
      {/* Apex finial — cross fleur */}
      <g stroke={stroke} strokeWidth="2.5" strokeLinecap="round">
        <path d="M150 6 L150 30" />
        <path d="M140 14 L160 14" />
        <circle cx="150" cy="6" r="2.6" fill={stroke} stroke="none" />
      </g>
      {/* Trefoil at apex inner */}
      <g fill="none" stroke={stroke} strokeWidth="2" opacity="0.7">
        <circle cx="150" cy="78" r="9" />
        <circle cx="134" cy="96" r="9" />
        <circle cx="166" cy="96" r="9" />
      </g>
    </svg>
  );
}
