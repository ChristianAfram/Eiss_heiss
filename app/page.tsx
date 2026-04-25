import Link from "next/link";
import { ArrowUpRight, Heart, Leaf, Sparkles } from "lucide-react";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import ScrollReveal from "@/components/ScrollReveal";
import SectionTitle from "@/components/SectionTitle";
import ZoneCard from "@/components/ZoneCard";
import LocationCard from "@/components/LocationCard";
import GradientPlaceholder from "@/components/GradientPlaceholder";
import { zones } from "@/lib/zones";
import { locations } from "@/lib/locations";
import { categories, formatPrice, menu } from "@/lib/menu";

const highlightSlugs = [
  "boutique-fruehstueck",
  "italienisches-eis",
  "arabisches-eis",
  "chill-menu",
] as const;

const story = [
  {
    year: "2023",
    place: "Pforzheim",
    title: "Wo alles begann",
    body: "In der Anshelmstraße 4 öffneten wir unsere kleine Eisdiele — mit ganz viel Herz, Leidenschaft und Persönlichkeit.",
  },
  {
    year: "2024 – 2025",
    place: "Stuttgart",
    title: "Wir wachsen",
    body: "Dank unserer Gäste wurde aus der Eisdiele ein Café in der Haldenrainstraße 184 — Eis, Desserts und gemütliches Verweilen.",
  },
  {
    year: "21. März 2026",
    place: "Ostfildern",
    title: "Unser Flagship",
    body: "Die größte Filiale eröffnet in der Ruiter Straße 5 — mit Boutique-Frühstück, Kidzone, Gaming-Lounge und privaten Eventflächen.",
  },
];

export default function Home() {
  const highlights = highlightSlugs.map((slug) => {
    const cat = categories.find((c) => c.slug === slug)!;
    const items = menu.filter((m) => m.category === slug);
    return { cat, items };
  });

  return (
    <>
      <Hero />

      <Marquee
        items={[
          "Italienisches Gelato",
          "Arabisches Booza",
          "Boutique-Frühstück",
          "Chill Menu",
          "Heiße Getränke",
          "Waffeln",
          "Cocktails",
        ]}
      />

      {/* Story / Über uns */}
      <section id="story" className="relative py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <ScrollReveal>
            <SectionTitle
              eyebrow="Unsere Geschichte"
              title={
                <>
                  Drei Städte, eine{" "}
                  <span className="font-display italic text-amber">Familie</span>.
                </>
              }
              intro="EIS & HEISS Café ist mehr als nur ein Café — es ist ein Ort zum Genießen, Entspannen und Zusammensein. Familiengeführt, mit Herz, Leidenschaft und Persönlichkeit."
            />
          </ScrollReveal>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {story.map((s, i) => (
              <ScrollReveal key={s.year} delay={i * 0.08}>
                <div className="relative h-full rounded-3xl border border-espresso/10 bg-cream-soft p-8">
                  <div className="text-xs font-semibold uppercase tracking-[0.22em] text-amber">
                    {s.year}
                  </div>
                  <div className="mt-1 text-xs uppercase tracking-[0.22em] text-espresso/50">
                    {s.place}
                  </div>
                  <h3 className="mt-5 font-display text-3xl text-espresso">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-espresso/70">
                    {s.body}
                  </p>
                  <div className="mt-8 h-px w-12 bg-espresso/20" />
                  <div className="mt-4 font-display text-6xl italic text-espresso/10">
                    0{i + 1}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              { icon: Heart, label: "Familiengeführt", text: "Mit Herz und Persönlichkeit." },
              { icon: Leaf, label: "Frische Zutaten", text: "Täglich frisch zubereitet." },
              { icon: Sparkles, label: "Besondere Momente", text: "Für Familie und Freunde." },
            ].map((b, i) => (
              <ScrollReveal key={b.label} delay={i * 0.06}>
                <div className="flex items-start gap-4 rounded-2xl border border-espresso/10 bg-cream p-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-espresso text-cream">
                    <b.icon size={18} />
                  </div>
                  <div>
                    <div className="font-display text-lg text-espresso">
                      {b.label}
                    </div>
                    <p className="text-sm text-espresso/70">{b.text}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section id="highlights" className="relative bg-cream-dark/40 py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <ScrollReveal>
              <SectionTitle
                eyebrow="Highlights"
                title={
                  <>
                    Was uns{" "}
                    <span className="font-display italic text-berry">
                      besonders
                    </span>{" "}
                    macht.
                  </>
                }
                intro="Vier Kategorien, die unsere Leidenschaft am besten erzählen."
              />
            </ScrollReveal>
            <Link
              href="/menu/"
              className="group inline-flex items-center gap-2 rounded-full border border-espresso/25 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-espresso transition-colors hover:border-espresso hover:bg-espresso hover:text-cream"
            >
              Komplettes Menü
              <ArrowUpRight size={14} className="transition-transform group-hover:rotate-45" />
            </Link>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {highlights.map(({ cat, items }, i) => {
              const sample = items.slice(0, 3);
              return (
                <ScrollReveal key={cat.slug} delay={i * 0.06}>
                  <Link
                    href={`/menu/#${cat.slug}`}
                    className="group block h-full overflow-hidden rounded-3xl border border-espresso/10 bg-cream-soft transition-shadow duration-300 hover:shadow-[0_24px_48px_-24px_rgba(42,24,16,0.25)]"
                  >
                    <div className="relative aspect-[5/4] w-full overflow-hidden">
                      <GradientPlaceholder
                        palette={cat.palette}
                        className="h-full w-full transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-espresso/40 to-transparent p-5">
                        <h3 className="font-display text-2xl text-cream">
                          {cat.name}
                        </h3>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-sm leading-relaxed text-espresso/70">
                        {cat.blurb}
                      </p>
                      <ul className="mt-5 space-y-2 text-sm">
                        {sample.map((item) => (
                          <li
                            key={item.name}
                            className="flex items-center justify-between gap-3 border-b border-dashed border-espresso/15 pb-2 last:border-none last:pb-0"
                          >
                            <span className="truncate text-espresso/85">
                              {item.name}
                            </span>
                            <span className="shrink-0 font-semibold text-espresso">
                              {formatPrice(item.price)}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Zones */}
      <section id="zones" className="relative py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <ScrollReveal>
            <SectionTitle
              eyebrow="Unser Café"
              title={
                <>
                  Sechs Bereiche.{" "}
                  <span className="font-display italic text-pistachio-deep">
                    Ein Erlebnis.
                  </span>
                </>
              }
              intro="Vom Frühstücksbereich bis zur Kidzone — bei uns findet jeder seinen Lieblingsplatz."
            />
          </ScrollReveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {zones.map((z, i) => (
              <ZoneCard key={z.name} zone={z} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Locations preview */}
      <section id="standorte" className="relative bg-espresso py-28 text-cream md:py-36">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <ScrollReveal>
              <SectionTitle
                invert
                eyebrow="Unsere Standorte"
                title={
                  <>
                    Drei Orte voller{" "}
                    <span className="font-display italic text-amber">
                      Genuss
                    </span>.
                  </>
                }
                intro="Besuchen Sie uns in Ostfildern, Stuttgart oder Pforzheim — wir freuen uns auf Sie."
              />
            </ScrollReveal>
            <Link
              href="/standorte/"
              className="group inline-flex items-center gap-2 rounded-full border border-cream/25 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-cream transition-colors hover:border-amber hover:bg-amber hover:text-ink"
            >
              Alle Standorte
              <ArrowUpRight size={14} className="transition-transform group-hover:rotate-45" />
            </Link>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {locations.map((loc, i) => (
              <LocationCard key={loc.slug} location={loc} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-28 md:py-36">
        <div className="mx-auto max-w-5xl px-5 text-center md:px-8">
          <ScrollReveal>
            <h2 className="font-display text-5xl leading-[1.05] sm:text-6xl md:text-7xl">
              <span className="block text-espresso">Eis &amp; Heiss —</span>
              <span className="block italic text-amber">
                so genießen Sie das Leben.
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-espresso/70">
              Reservieren Sie Ihren Tisch oder planen Sie ein Event mit uns. Wir
              freuen uns auf Ihre Nachricht.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Link
                href="/kontakt/"
                className="inline-flex items-center gap-2 rounded-full bg-espresso px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-cream transition-colors hover:bg-amber hover:text-ink"
              >
                Kontakt aufnehmen
              </Link>
              <Link
                href="/lieferung/"
                className="inline-flex items-center gap-2 rounded-full border border-espresso/25 px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-espresso transition-colors hover:border-espresso hover:bg-espresso hover:text-cream"
              >
                Lieferung
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
