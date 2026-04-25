export type Palette =
  | "breakfast"
  | "gelato"
  | "arabic"
  | "hot"
  | "cocktail"
  | "shake"
  | "bowl"
  | "waffle"
  | "savory"
  | "special";

export type CategorySlug =
  | "boutique-fruehstueck"
  | "hauptmenue"
  | "dessert-eis-fruechte"
  | "chill-menu"
  | "salty-snacks"
  | "geburtstagsset"
  | "arabisches-eis"
  | "italienisches-eis"
  | "cocktails"
  | "heisse-getraenke"
  | "fitness-shakes"
  | "fruechte-bowls"
  | "milkshakes"
  | "smoothies-limonaden"
  | "waffeln"
  | "spezialitaeten"
  | "diaet-spezialitaeten";

export type Category = {
  slug: CategorySlug;
  name: string;
  blurb: string;
  palette: Palette;
};

export type MenuItem = {
  name: string;
  price: number;
  description?: string;
  category: CategorySlug;
};

export const categories: Category[] = [
  {
    slug: "boutique-fruehstueck",
    name: "Boutique-Frühstück",
    blurb: "Liebevoll arrangierte Frühstückssets — orientalisch, gesund oder klassisch.",
    palette: "breakfast",
  },
  {
    slug: "hauptmenue",
    name: "Hauptmenü",
    blurb: "Herzhafte Klassiker und Café-Favoriten für jede Tageszeit.",
    palette: "savory",
  },
  {
    slug: "dessert-eis-fruechte",
    name: "Dessert · Eis · Früchte",
    blurb: "Süße Verführungen, frisch zubereitet aus besten Zutaten.",
    palette: "gelato",
  },
  {
    slug: "chill-menu",
    name: "Chill Menu",
    blurb: "Großzügige Sharing-Platten zum Entspannen mit Freunden.",
    palette: "special",
  },
  {
    slug: "salty-snacks",
    name: "Salty Snacks",
    blurb: "Knusprig, würzig, perfekt zum Kaffee oder Cocktail.",
    palette: "savory",
  },
  {
    slug: "geburtstagsset",
    name: "Geburtstagsset",
    blurb: "Komplette Pakete für unvergessliche Geburtstagsmomente.",
    palette: "special",
  },
  {
    slug: "arabisches-eis",
    name: "Arabisches Eis",
    blurb: "Traditionelle Rezepturen mit Pistazie, Rosenwasser und Mastix.",
    palette: "arabic",
  },
  {
    slug: "italienisches-eis",
    name: "Italienisches Eis",
    blurb: "Cremiges Gelato — täglich frisch hergestellt, nur im Sommer.",
    palette: "gelato",
  },
  {
    slug: "cocktails",
    name: "Cocktails",
    blurb: "Alkoholfreie Drinks, kunstvoll gemixt und perfekt erfrischend.",
    palette: "cocktail",
  },
  {
    slug: "heisse-getraenke",
    name: "Heiße Getränke",
    blurb: "Espresso, Spezialitätenkaffee und arabische Tees.",
    palette: "hot",
  },
  {
    slug: "fitness-shakes",
    name: "Fitness Shakes",
    blurb: "Proteinreich, leicht und voller Energie für aktive Genießer.",
    palette: "shake",
  },
  {
    slug: "fruechte-bowls",
    name: "Früchte Bowls",
    blurb: "Bunte Bowls mit saisonalem Obst, Granola und Toppings.",
    palette: "bowl",
  },
  {
    slug: "milkshakes",
    name: "Milkshakes",
    blurb: "Cremige Shakes mit Eiscreme — der Klassiker neu interpretiert.",
    palette: "shake",
  },
  {
    slug: "smoothies-limonaden",
    name: "Smoothies & Limonaden",
    blurb: "Hausgemachte Limos und vitaminreiche Smoothies.",
    palette: "cocktail",
  },
  {
    slug: "waffeln",
    name: "Waffeln",
    blurb: "Knusprig-fluffige Waffeln mit süßen oder fruchtigen Toppings.",
    palette: "waffle",
  },
  {
    slug: "spezialitaeten",
    name: "Spezialitäten",
    blurb: "Hauseigene Kreationen, die es nur bei uns gibt.",
    palette: "special",
  },
  {
    slug: "diaet-spezialitaeten",
    name: "Diät-Spezialitäten",
    blurb: "Leichte Genüsse — zuckerreduziert und kalorienbewusst.",
    palette: "special",
  },
];

// Confirmed items from the existing site are marked. Plausible seed items
// are added to give every category visual depth — owner can refine later.
export const menu: MenuItem[] = [
  // Boutique-Frühstück (confirmed prices)
  { category: "boutique-fruehstueck", name: "Basic Frühstücksset", price: 14, description: "Brötchen, Aufschnitt, Käse, Marmelade und ein heißes Getränk." },
  { category: "boutique-fruehstueck", name: "Mix Frühstücksset", price: 16, description: "Eine Auswahl aus orientalischen und europäischen Spezialitäten." },
  { category: "boutique-fruehstueck", name: "Oriental Frühstücksset – klein", price: 15, description: "Hummus, Foul, Falafel, Oliven, Käse und frisches Brot." },
  { category: "boutique-fruehstueck", name: "Oriental Frühstücksset – groß", price: 19, description: "Großzügige orientalische Auswahl für genussvolle Stunden." },
  { category: "boutique-fruehstueck", name: "Healthy Frühstücksset", price: 18, description: "Avocado, Eier, Obst, Joghurt, Nüsse und Vollkornbrot." },

  // Hauptmenü (partial confirmed)
  { category: "hauptmenue", name: "5 in 1 (Kinderportion)", price: 6, description: "Kleine Auswahl unserer beliebtesten Häppchen für Kinder." },
  { category: "hauptmenue", name: "Affogato", price: 5, description: "Vanilleeis ertränkt in heißem Espresso." },
  { category: "hauptmenue", name: "Alkoholfreier Green Mojito", price: 7.5, description: "Limette, Minze, Apfel und Soda — frisch und belebend." },
  { category: "hauptmenue", name: "Alkoholfreier Red Mojito", price: 7.5, description: "Limette, Minze, Beeren und Soda — fruchtig und kühl." },
  { category: "hauptmenue", name: "Toast Royal", price: 8.5 },
  { category: "hauptmenue", name: "Croque Monsieur", price: 9.5 },

  // Dessert · Eis · Früchte
  { category: "dessert-eis-fruechte", name: "Tiramisu Klassik", price: 6.5, description: "Cremige Mascarpone, Espresso und Kakao." },
  { category: "dessert-eis-fruechte", name: "Knafeh", price: 7.5, description: "Orientalisches Highlight mit Käse, Sirup und Pistazien." },
  { category: "dessert-eis-fruechte", name: "Obstteller Saison", price: 8 },
  { category: "dessert-eis-fruechte", name: "Schokoladenfondant", price: 7 },

  // Chill Menu (confirmed)
  { category: "chill-menu", name: "Chill Menu Medium", price: 17, description: "Sharing-Platte für 2 — Auswahl aus süß und herzhaft." },
  { category: "chill-menu", name: "Chill Menu Large", price: 22, description: "Sharing-Platte für 3–4 mit erweiterter Auswahl." },
  { category: "chill-menu", name: "Chill Menu X-Large", price: 28, description: "Sharing-Platte für 4–6 — ideal zum Teilen." },

  // Salty Snacks
  { category: "salty-snacks", name: "Pommes Klassik", price: 4.5 },
  { category: "salty-snacks", name: "Süßkartoffel-Pommes", price: 5.5 },
  { category: "salty-snacks", name: "Hummus mit Brot", price: 6 },
  { category: "salty-snacks", name: "Mozzarella Sticks", price: 6.5 },

  // Geburtstagsset
  { category: "geburtstagsset", name: "Kids Birthday Set", price: 49, description: "Für 6 Kinder — Eis, Waffeln, Getränke und Deko." },
  { category: "geburtstagsset", name: "Family Birthday Set", price: 89, description: "Für 10 Personen — Sharing-Platte, Torte, Getränke." },
  { category: "geburtstagsset", name: "Premium Event Set", price: 149, description: "Für 15+ Personen — komplettes Eventpaket inkl. Lounge." },

  // Arabisches Eis
  { category: "arabisches-eis", name: "Booza Pistazie", price: 4.5, description: "Traditionelles Mastix-Eis mit gerösteten Pistazien." },
  { category: "arabisches-eis", name: "Booza Rosenwasser", price: 4.5 },
  { category: "arabisches-eis", name: "Booza Trio", price: 7.5, description: "Drei Sorten unserer arabischen Eisspezialitäten." },
  { category: "arabisches-eis", name: "Knafeh-Eis Bowl", price: 8.5 },

  // Italienisches Eis
  { category: "italienisches-eis", name: "Gelato Cono (1 Kugel)", price: 1.8 },
  { category: "italienisches-eis", name: "Gelato Cono (2 Kugeln)", price: 3.4 },
  { category: "italienisches-eis", name: "Gelato Cono (3 Kugeln)", price: 4.8 },
  { category: "italienisches-eis", name: "Coppa Mista", price: 6.5, description: "Auswahl aus 4 Kugeln mit Sahne und Toppings." },

  // Cocktails (alkoholfrei)
  { category: "cocktails", name: "Virgin Pina Colada", price: 7.5 },
  { category: "cocktails", name: "Berry Sunset", price: 7.5, description: "Beeren, Limette, Ingwer, Tonic." },
  { category: "cocktails", name: "Coconut Breeze", price: 8 },
  { category: "cocktails", name: "Citrus Bloom", price: 7 },

  // Heiße Getränke
  { category: "heisse-getraenke", name: "Espresso", price: 2.4 },
  { category: "heisse-getraenke", name: "Cappuccino", price: 3.4 },
  { category: "heisse-getraenke", name: "Latte Macchiato", price: 3.8 },
  { category: "heisse-getraenke", name: "Arabischer Mokka", price: 3.5, description: "Mit Kardamom — auf traditionelle Art zubereitet." },
  { category: "heisse-getraenke", name: "Heiße Schokolade Deluxe", price: 4.5 },
  { category: "heisse-getraenke", name: "Karak Chai", price: 3.5 },

  // Fitness Shakes
  { category: "fitness-shakes", name: "Whey Vanilla Boost", price: 6.5, description: "30g Protein, Vanille, Banane, Hafermilch." },
  { category: "fitness-shakes", name: "Choco Power Shake", price: 6.9 },
  { category: "fitness-shakes", name: "Green Performance", price: 6.9, description: "Spinat, Avocado, Apfel, Whey." },
  { category: "fitness-shakes", name: "Berry Recovery", price: 6.5 },

  // Früchte Bowls
  { category: "fruechte-bowls", name: "Açaí Bowl", price: 9.5, description: "Açaí, Banane, Granola, Beeren, Kokos." },
  { category: "fruechte-bowls", name: "Tropical Bowl", price: 9, description: "Mango, Ananas, Passionsfrucht, Joghurt." },
  { category: "fruechte-bowls", name: "Pistazien-Joghurt Bowl", price: 8.5 },
  { category: "fruechte-bowls", name: "Berry Power Bowl", price: 9 },

  // Milkshakes
  { category: "milkshakes", name: "Vanille Milkshake", price: 5.5 },
  { category: "milkshakes", name: "Schokoladen Milkshake", price: 5.5 },
  { category: "milkshakes", name: "Pistazien Milkshake", price: 6.5 },
  { category: "milkshakes", name: "Oreo Milkshake", price: 6 },

  // Smoothies & Limonaden
  { category: "smoothies-limonaden", name: "Mango-Maracuja Smoothie", price: 5.5 },
  { category: "smoothies-limonaden", name: "Erdbeer-Banane Smoothie", price: 5.5 },
  { category: "smoothies-limonaden", name: "Hausgemachte Zitronen-Minz Limo", price: 4.5 },
  { category: "smoothies-limonaden", name: "Hibiskus-Limonade", price: 4.5 },

  // Waffeln
  { category: "waffeln", name: "Waffel mit Puderzucker", price: 4.5 },
  { category: "waffeln", name: "Waffel mit Nutella & Banane", price: 6.5 },
  { category: "waffeln", name: "Waffel mit Pistaziencreme", price: 7.5 },
  { category: "waffeln", name: "Waffel Royale", price: 8.5, description: "Mit Eis, Sahne, Beeren und Schokoladensauce." },

  // Spezialitäten
  { category: "spezialitaeten", name: "Eis & Heiss Signature Bowl", price: 12.5, description: "Unsere Hausspezialität — überraschende Komposition." },
  { category: "spezialitaeten", name: "Pistazien-Knafeh-Crêpe", price: 10.5 },
  { category: "spezialitaeten", name: "Orientalischer Eisbecher", price: 9.5 },

  // Diät-Spezialitäten
  { category: "diaet-spezialitaeten", name: "Zuckerfreies Sorbet", price: 4.5 },
  { category: "diaet-spezialitaeten", name: "Low-Carb Pancakes", price: 8.5 },
  { category: "diaet-spezialitaeten", name: "Veganer Schoko-Mousse", price: 6.5 },
  { category: "diaet-spezialitaeten", name: "Skyr Bowl", price: 7.5 },
];

export function formatPrice(price: number): string {
  return price.toFixed(2).replace(".", ",") + " €";
}

export function itemsByCategory(slug: CategorySlug): MenuItem[] {
  return menu.filter((item) => item.category === slug);
}
