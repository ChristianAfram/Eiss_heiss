export type Flavor = {
  slug: string;
  name: string;
  label: string;
  kicker: string;
  tagline: string;
  description: string;
  caffeine: number;
  tier: string;
  canVariant: "white" | "ice" | "blanc" | "ghost" | "salt" | "frost";
};

export const flavors: Flavor[] = [
  {
    slug: "white",
    name: "WHITE OUT",
    label: "WHITE",
    kicker: "ORIGINAL · CITRUS · BEAST",
    tagline: "ZERO SUGAR · ULTRA",
    description:
      "The mother of all whites. Bright citrus, glacial finish, zero sugar — the standard everything else gets measured against.",
    caffeine: 160,
    tier: "ICONIC",
    canVariant: "white",
  },
  {
    slug: "frostbite",
    name: "FROSTBITE",
    label: "FROST",
    kicker: "ARCTIC · MENTHOL · SNAP",
    tagline: "ZERO SUGAR · ARCTIC",
    description:
      "Subzero menthol pulled across a sharp white grapefruit. Inhale, and your lungs go quiet.",
    caffeine: 160,
    tier: "COLD STORAGE",
    canVariant: "frost",
  },
  {
    slug: "blanc",
    name: "BLANC NOIR",
    label: "BLANC",
    kicker: "VANILLA · CARAMEL · DARK",
    tagline: "ZERO SUGAR · NOIR",
    description:
      "Cream-soda smooth, then a left hook of espresso. Built for 3 a.m. studio sessions and questionable decisions.",
    caffeine: 200,
    tier: "AFTER HOURS",
    canVariant: "blanc",
  },
  {
    slug: "salt",
    name: "WHITE SALT",
    label: "SALT",
    kicker: "LIME · SEA SALT · VOLT",
    tagline: "ZERO SUGAR · MARGARITA",
    description:
      "Crystalline lime, a rim of sea salt, electrolytes for days. Hangovers fear it. Surfers worship it.",
    caffeine: 150,
    tier: "ELECTROLYTE",
    canVariant: "salt",
  },
  {
    slug: "ghost",
    name: "GHOST PEPPER",
    label: "GHOST",
    kicker: "WHITE PEACH · CHILI · HEAT",
    tagline: "ZERO SUGAR · SPICED",
    description:
      "White peach gone feral. Slow burn from a whisper of ghost pepper extract. The chillest panic attack you will ever drink.",
    caffeine: 180,
    tier: "LIMITED",
    canVariant: "ghost",
  },
  {
    slug: "ice",
    name: "POLAR ICE",
    label: "ICE",
    kicker: "BLUE RASP · MINT · STORM",
    tagline: "ZERO SUGAR · POLAR",
    description:
      "Blue raspberry chased with mountain mint and the kind of cold that resets your nervous system.",
    caffeine: 160,
    tier: "COLD STORAGE",
    canVariant: "ice",
  },
];
