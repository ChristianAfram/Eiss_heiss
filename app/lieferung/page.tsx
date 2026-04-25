import type { Metadata } from "next";
import Link from "next/link";
import { Truck, Clock, MapPin, Phone, Bike, ShoppingBag } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Lieferung — EIS & HEISS Café",
  description:
    "Bestellen Sie Eis, Frühstück und Café-Spezialitäten direkt nach Hause. Lieferzonen, Zeiten und Konditionen.",
};

const steps = [
  {
    icon: ShoppingBag,
    title: "Bestellung aufgeben",
    text: "Per Telefon oder über unsere Lieferpartner — bequem von zu Hause.",
  },
  {
    icon: Bike,
    title: "Frische Zubereitung",
    text: "Wir bereiten alles frisch zu — sorgfältig verpackt für den Transport.",
  },
  {
    icon: Truck,
    title: "Schnelle Lieferung",
    text: "Innerhalb von 30–45 Minuten bei Ihnen vor der Tür.",
  },
];

const zones = [
  { name: "Ostfildern Stadt", time: "20–30 Min.", min: "15 €" },
  { name: "Ruit & Nellingen", time: "25–35 Min.", min: "20 €" },
  { name: "Stuttgart Ost", time: "35–45 Min.", min: "25 €" },
  { name: "Esslingen", time: "30–40 Min.", min: "20 €" },
];

export default function LieferungPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-12 pb-14 md:pt-20 md:pb-20">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 right-0 h-[420px] w-[420px] rounded-full opacity-50 blur-3xl bg-[radial-gradient(closest-side,#e8b46c,transparent_70%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-40 -left-32 h-[460px] w-[460px] rounded-full opacity-50 blur-3xl bg-[radial-gradient(closest-side,#e7a9a3,transparent_70%)]"
        />
        <div className="relative mx-auto max-w-7xl px-5 md:px-8">
          <SectionTitle
            eyebrow="Lieferung"
            title={
              <>
                Genuss{" "}
                <span className="font-display italic text-amber">
                  direkt nach Hause
                </span>
                .
              </>
            }
            intro="Frisch zubereitet, sorgfältig verpackt und schnell geliefert. Bestellen Sie unsere Eis-, Frühstücks- und Café-Spezialitäten bequem zu sich."
          />
        </div>
      </section>

      {/* Process */}
      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {steps.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 0.06}>
                <div className="group relative h-full overflow-hidden rounded-3xl border border-espresso/10 bg-cream-soft p-8">
                  <div className="absolute right-6 top-6 font-display text-5xl italic text-espresso/10">
                    0{i + 1}
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-espresso text-cream">
                    <s.icon size={20} />
                  </div>
                  <h3 className="mt-5 font-display text-2xl text-espresso">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-espresso/70">
                    {s.text}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Zones table */}
      <section className="bg-cream-dark/40 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <ScrollReveal>
            <div className="grid gap-12 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <SectionTitle
                  eyebrow="Liefergebiete"
                  title={
                    <>
                      Wir kommen{" "}
                      <span className="font-display italic text-berry">
                        zu Ihnen
                      </span>
                      .
                    </>
                  }
                  intro="Aktuelle Liefergebiete rund um Ostfildern. Mindestbestellwerte und ungefähre Lieferzeiten finden Sie in der Übersicht."
                />
              </div>

              <div className="lg:col-span-7">
                <div className="overflow-hidden rounded-3xl border border-espresso/10 bg-cream-soft">
                  <table className="w-full text-left text-sm">
                    <thead className="border-b border-espresso/10 bg-espresso text-cream">
                      <tr>
                        <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider">
                          Gebiet
                        </th>
                        <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider">
                          Lieferzeit
                        </th>
                        <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider">
                          Mindestbestellwert
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-espresso/10">
                      {zones.map((z) => (
                        <tr key={z.name} className="transition-colors hover:bg-cream">
                          <td className="px-6 py-4 font-medium text-espresso">
                            <span className="inline-flex items-center gap-2">
                              <MapPin size={14} className="text-amber" />
                              {z.name}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-espresso/75">
                            <span className="inline-flex items-center gap-2">
                              <Clock size={14} className="text-amber" />
                              {z.time}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-espresso/75">{z.min}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
          <ScrollReveal>
            <h2 className="font-display text-4xl text-espresso md:text-5xl">
              Direkt bestellen
            </h2>
            <p className="mt-4 text-espresso/70">
              Rufen Sie uns an oder schreiben Sie eine kurze Nachricht — wir
              kümmern uns um den Rest.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href="tel:+4915731635618"
                className="inline-flex items-center gap-2 rounded-full bg-espresso px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-cream transition-colors hover:bg-amber hover:text-ink"
              >
                <Phone size={16} />
                +49 157 31635618
              </a>
              <Link
                href="/kontakt/"
                className="inline-flex items-center gap-2 rounded-full border border-espresso/25 px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-espresso transition-colors hover:border-espresso hover:bg-espresso hover:text-cream"
              >
                Nachricht senden
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
