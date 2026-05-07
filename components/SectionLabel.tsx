type Props = {
  index: string;
  title: string;
  subtitle?: string;
  invert?: boolean;
  className?: string;
};

export default function SectionLabel({
  index,
  title,
  subtitle,
  invert = false,
  className = "",
}: Props) {
  const text = invert ? "text-bone" : "text-ink";
  const muted = invert ? "text-fog" : "text-steel";
  const border = invert ? "border-bone/40" : "border-ink/40";
  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      <div
        className={`flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] ${muted}`}
      >
        <span className={`inline-block h-px w-10 border-t ${border}`} />
        <span>{index}</span>
        <span>—</span>
        <span>{subtitle ?? "SECTION"}</span>
      </div>
      <h2
        className={`font-display text-[clamp(2.5rem,7vw,6rem)] leading-[0.95] tracking-tight ${text}`}
      >
        {title}
      </h2>
    </div>
  );
}
