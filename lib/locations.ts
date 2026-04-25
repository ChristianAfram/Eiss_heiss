export type Hours = {
  days: string;
  hours: string;
};

export type Location = {
  slug: string;
  city: string;
  isFlagship?: boolean;
  street: string;
  postal: string;
  phone: string;
  since: string;
  description: string;
  features: string[];
  hours: Hours[];
  mapsUrl: string;
};

export const locations: Location[] = [
  {
    slug: "ostfildern",
    city: "Ostfildern",
    isFlagship: true,
    street: "Ruiter Straße 5",
    postal: "73760",
    phone: "+49 157 31635618",
    since: "Eröffnet 21. März 2026",
    description:
      "Unser Flagship — die größte Filiale mit Eisbar, Frühstücksbereich, Kidzone, Gaming-Lounge und privaten Eventflächen.",
    features: ["Lieferung", "Parkplätze", "EC-Karte", "Kidzone", "Eventbereich"],
    hours: [
      { days: "Montag – Donnerstag", hours: "16:00 – 23:00" },
      { days: "Freitag – Sonntag", hours: "09:00 – 14:00" },
    ],
    mapsUrl: "https://maps.google.com/?q=Ruiter+Stra%C3%9Fe+5+73760+Ostfildern",
  },
  {
    slug: "stuttgart",
    city: "Stuttgart",
    street: "Haldenrainstraße 184",
    postal: "70437",
    phone: "+49 157 31635618",
    since: "Seit 2024",
    description:
      "Unsere zweite Heimat — gemütliche Café-Atmosphäre mit Eis, Desserts und Kaffeespezialitäten.",
    features: ["Lieferung", "EC-Karte", "Außenbereich"],
    hours: [
      { days: "Montag – Freitag", hours: "12:00 – 22:00" },
      { days: "Samstag – Sonntag", hours: "10:00 – 22:00" },
    ],
    mapsUrl: "https://maps.google.com/?q=Haldenrainstra%C3%9Fe+184+Stuttgart",
  },
  {
    slug: "pforzheim",
    city: "Pforzheim",
    street: "Anshelmstraße 4",
    postal: "75172",
    phone: "+49 157 31635618",
    since: "Wo alles begann — seit 2023",
    description:
      "Unsere Wurzeln. Hier startete die Geschichte mit einer kleinen Eisdiele und ganz viel Herzblut.",
    features: ["Lieferung", "EC-Karte"],
    hours: [
      { days: "Montag – Sonntag", hours: "12:00 – 22:00" },
    ],
    mapsUrl: "https://maps.google.com/?q=Anshelmstra%C3%9Fe+4+Pforzheim",
  },
];
