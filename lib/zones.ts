export type ZoneIcon =
  | "coffee"
  | "croissant"
  | "ice-cream"
  | "baby"
  | "gamepad"
  | "sparkles";

export type Zone = {
  name: string;
  blurb: string;
  icon: ZoneIcon;
  palette: string;
};

export const zones: Zone[] = [
  {
    name: "Hauptsitzbereich",
    blurb:
      "Der Herzschlag des Cafés — gemütliche Sitzgelegenheiten für Kaffee, Desserts und gute Gespräche.",
    icon: "coffee",
    palette: "from-cream-dark to-cream",
  },
  {
    name: "Frühstücksbereich",
    blurb:
      "Eigener Bereich für unser Boutique-Frühstück — von orientalisch bis healthy.",
    icon: "croissant",
    palette: "from-amber-soft/40 to-cream-dark",
  },
  {
    name: "Eis- & Dessertbereich",
    blurb:
      "Hier dreht sich alles um italienisches Gelato, arabisches Booza, Waffeln und süße Träume.",
    icon: "ice-cream",
    palette: "from-pistachio/40 to-cream",
  },
  {
    name: "Kidzone",
    blurb:
      "Sicherer Spielbereich mit Monitor-Übersicht für Eltern — Kinder spielen, Eltern entspannen.",
    icon: "baby",
    palette: "from-rose/40 to-cream",
  },
  {
    name: "Gaming- & Spielebereich",
    blurb:
      "Brettspiele, Karten, Schach — analoge Pause vom digitalen Alltag.",
    icon: "gamepad",
    palette: "from-pistachio-deep/30 to-cream-dark",
  },
  {
    name: "Event- & Loungebereich",
    blurb:
      "Privater Bereich für Geburtstage, Familienfeiern und besondere Anlässe.",
    icon: "sparkles",
    palette: "from-berry/30 to-cream-dark",
  },
];
