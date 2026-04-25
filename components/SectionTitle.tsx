import type { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  invert?: boolean;
};

export default function SectionTitle({
  eyebrow,
  title,
  intro,
  align = "left",
  invert = false,
}: Props) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";
  const eyebrowColor = invert ? "text-amber" : "text-berry";
  const titleColor = invert ? "text-cream" : "text-espresso";
  const introColor = invert ? "text-cream/80" : "text-espresso/70";

  return (
    <div className={`max-w-2xl ${alignment}`}>
      {eyebrow && (
        <div
          className={`mb-4 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] ${eyebrowColor}`}
        >
          <span className="h-px w-8 bg-current opacity-60" />
          {eyebrow}
        </div>
      )}
      <h2
        className={`font-display text-4xl leading-[1.05] sm:text-5xl md:text-6xl ${titleColor}`}
      >
        {title}
      </h2>
      {intro && (
        <p className={`mt-5 text-base leading-relaxed sm:text-lg ${introColor}`}>
          {intro}
        </p>
      )}
    </div>
  );
}
