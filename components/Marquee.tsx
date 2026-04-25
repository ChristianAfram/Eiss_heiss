type Props = { items: string[] };

export default function Marquee({ items }: Props) {
  const doubled = [...items, ...items];

  return (
    <div className="relative overflow-hidden border-y border-espresso/15 bg-espresso py-6 text-cream">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-espresso to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-espresso to-transparent" />
      <div className="flex w-max animate-marquee gap-12 whitespace-nowrap will-change-transform">
        {doubled.map((label, i) => (
          <span
            key={`${label}-${i}`}
            className="flex items-center gap-12 font-display text-3xl italic md:text-4xl"
          >
            {label}
            <span className="inline-block h-2 w-2 rounded-full bg-amber" />
          </span>
        ))}
      </div>
    </div>
  );
}
