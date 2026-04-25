import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import LocationCard from "@/components/LocationCard";
import ScrollReveal from "@/components/ScrollReveal";
import { locations } from "@/lib/locations";

export const metadata: Metadata = {
  title: "Standorte — EIS & HEISS Café",
  description:
    "Unsere Café-Standorte in Ostfildern, Stuttgart und Pforzheim mit Adressen, Öffnungszeiten und Highlights.",
};

export default function StandortePage() {
  return (
    <>
      <section className="relative overflow-hidden pt-12 pb-14 md:pt-20 md:pb-20">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 -left-32 h-[460px] w-[460px] rounded-full opacity-50 blur-3xl bg-[radial-gradient(closest-side,#b8c9a5,transparent_70%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-32 -right-24 h-[420px] w-[420px] rounded-full opacity-50 blur-3xl bg-[radial-gradient(closest-side,#e8b46c,transparent_70%)]"
        />
        <div className="relative mx-auto max-w-7xl px-5 md:px-8">
          <SectionTitle
            eyebrow="Standorte"
            title={
              <>
                Drei Filialen.{" "}
                <span className="font-display italic text-berry">
                  Eine Familie.
                </span>
              </>
            }
            intro="Besuchen Sie uns in Ostfildern, Stuttgart oder Pforzheim. Jede Filiale hat ihren eigenen Charakter — und alle teilen die gleiche Leidenschaft."
          />
        </div>
      </section>

      <section className="pb-28 md:pb-36">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {locations.map((loc, i) => (
              <LocationCard key={loc.slug} location={loc} index={i} />
            ))}
          </div>

          <ScrollReveal>
            <div className="mt-20 rounded-3xl border border-espresso/10 bg-cream-soft p-8 md:p-12">
              <div className="grid gap-8 md:grid-cols-2 md:items-center">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.22em] text-amber">
                    Hinweis
                  </div>
                  <h3 className="mt-3 font-display text-3xl text-espresso md:text-4xl">
                    Reservierungen &amp; Events
                  </h3>
                </div>
                <p className="text-espresso/75">
                  Sie möchten einen Tisch reservieren oder ein Event bei uns
                  planen? Schreiben Sie uns einfach eine Nachricht — wir melden
                  uns so schnell wie möglich bei Ihnen zurück.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
