import type { Palette } from "@/lib/menu";

const paletteClass: Record<Palette, string> = {
  breakfast: "placeholder-breakfast",
  gelato: "placeholder-gelato",
  arabic: "placeholder-arabic",
  hot: "placeholder-hot",
  cocktail: "placeholder-cocktail",
  shake: "placeholder-shake",
  bowl: "placeholder-bowl",
  waffle: "placeholder-waffle",
  savory: "placeholder-savory",
  special: "placeholder-special",
};

type Props = {
  palette: Palette;
  className?: string;
};

export default function GradientPlaceholder({
  palette,
  className = "",
}: Props) {
  return (
    <div
      aria-hidden
      className={`placeholder-grain relative overflow-hidden ${paletteClass[palette]} ${className}`}
    />
  );
}
