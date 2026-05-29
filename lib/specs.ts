export type SpecRow = {
  label: string;
  value: string;
  note?: string;
};

export const coreSpecs: SpecRow[] = [
  { label: "Caffeine", value: "160mg", note: "From green coffee + guarana" },
  { label: "Sugar", value: "0g", note: "Sweetened with ace-K + sucralose" },
  { label: "Carbs", value: "4g", note: "Erythritol-based" },
  { label: "Calories", value: "10", note: "Per 500ml can" },
  { label: "B-Vitamins", value: "B3·B5·B6·B12", note: "100% RDV" },
  { label: "Taurine", value: "1000mg", note: "Per 500ml" },
  { label: "L-Carnitine", value: "210mg", note: "Mitochondrial fuel" },
  { label: "Ginseng", value: "200mg", note: "Panax extract" },
];

export const lab = [
  {
    title: "PHASE 01 — INTAKE",
    body: "Sip enters at 4°C. Volt receptors on the tongue snap awake within 800ms.",
  },
  {
    title: "PHASE 02 — UPTAKE",
    body: "Caffeine + taurine cross into bloodstream. The room sharpens. Your playlist gets louder.",
  },
  {
    title: "PHASE 03 — IGNITION",
    body: "L-Carnitine routes fat into mitochondria. B-vitamins ride shotgun. You stop checking the clock.",
  },
  {
    title: "PHASE 04 — UNLEASH",
    body: "Peak focus window: 35–95 minutes post-can. Use it to ship, send, send.",
  },
];
