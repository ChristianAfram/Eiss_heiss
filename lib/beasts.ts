export type Beast = {
  name: string;
  initials: string;
  discipline: string;
  location: string;
  quote: string;
  gradient: [string, string];
  stats: { label: string; value: string }[];
};

export const beasts: Beast[] = [
  {
    name: "Kaia Voss",
    initials: "KV",
    discipline: "FREERIDE MTB",
    location: "WHISTLER · BC",
    quote:
      "I crack one open and the line stops being scary. White Out has a way of making gravity feel optional.",
    gradient: ["#1a1a1a", "#3a3a3a"],
    stats: [
      { label: "Drops", value: "45ft" },
      { label: "Top Spd", value: "82km" },
      { label: "Wins", value: "11" },
    ],
  },
  {
    name: "Ren Okafor",
    initials: "RO",
    discipline: "SPRINT FREESTYLE",
    location: "LAGOS → BERLIN",
    quote:
      "Track sessions hit different on Ghost. The first sip is calm, the second one is a starting pistol.",
    gradient: ["#161616", "#2a2a2a"],
    stats: [
      { label: "100m PB", value: "9.96" },
      { label: "Heats", value: "62" },
      { label: "Medals", value: "8" },
    ],
  },
  {
    name: "Sasha Ito",
    initials: "SI",
    discipline: "LO-FI PRODUCER",
    location: "TOKYO · JP",
    quote:
      "Blanc Noir in the studio at 2am, four open sessions, and suddenly I'm shipping the album.",
    gradient: ["#0d0d0d", "#262626"],
    stats: [
      { label: "Albums", value: "3" },
      { label: "Streams", value: "94M" },
      { label: "Tours", value: "2" },
    ],
  },
  {
    name: "Mateo Aguilar",
    initials: "MA",
    discipline: "BIG WAVE SURF",
    location: "NAZARÉ · PT",
    quote:
      "Salt is electrolytes, citrus, and 150mg of don't-die. I keep two cans in the ski every paddle out.",
    gradient: ["#141414", "#3a3a3a"],
    stats: [
      { label: "Biggest", value: "78ft" },
      { label: "Tows", value: "210" },
      { label: "Years", value: "12" },
    ],
  },
];
