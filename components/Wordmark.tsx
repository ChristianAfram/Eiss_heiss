type Props = { className?: string };

export default function Wordmark({ className = "" }: Props) {
  return (
    <span
      className={`font-display italic font-medium tracking-tight ${className}`}
      aria-label="Eis und Heiss"
    >
      <span className="text-espresso">Eis</span>
      <span className="text-amber"> &amp; </span>
      <span className="text-berry">Heiss</span>
    </span>
  );
}
