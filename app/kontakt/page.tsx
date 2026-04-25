import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import ScrollReveal from "@/components/ScrollReveal";
import ContactForm from "@/components/ContactForm";
import { locations } from "@/lib/locations";

export const metadata: Metadata = {
  title: "Kontakt — EIS & HEISS Café",
  description:
    "Kontaktieren Sie uns für Reservierungen, Event-Anfragen oder allgemeine Fragen.",
};

export default function KontaktPage() {
  const flagship = locations.find((l) => l.isFlagship)!;

  return (
    <>
      <section className="relative overflow-hidden pt-12 pb-14 md:pt-20 md:pb-20">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 right-0 h-[460px] w-[460px] rounded-full opacity-50 blur-3xl bg-[radial-gradient(closest-side,#e7a9a3,transparent_70%)]"
        />
        <div className="relative mx-auto max-w-7xl px-5 md:px-8">
          <SectionTitle
            eyebrow="Kontakt"
            title={
              <>
                Schreiben Sie uns —{" "}
                <span className="font-display italic text-amber">
                  wir antworten gerne.
                </span>
              </>
            }
            intro="Haben Sie Fragen, möchten Sie einen Tisch reservieren oder ein Event bei uns planen? Schreiben Sie uns einfach eine Nachricht."
          />
        </div>
      </section>

      <section className="pb-28 md:pb-36">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-12 lg:grid-cols-12">
            <ScrollReveal className="lg:col-span-7">
              <div className="rounded-3xl border border-espresso/10 bg-cream-soft p-8 md:p-10">
                <h3 className="font-display text-3xl text-espresso">
                  Nachricht senden
                </h3>
                <p className="mt-2 text-sm text-espresso/65">
                  Wir melden uns innerhalb von 24 Stunden zurück.
                </p>
                <div className="mt-8">
                  <ContactForm />
                </div>
              </div>
            </ScrollReveal>

            <div className="space-y-6 lg:col-span-5">
              <ScrollReveal>
                <div className="rounded-3xl border border-espresso/10 bg-espresso p-8 text-cream md:p-10">
                  <h4 className="text-xs font-semibold uppercase tracking-[0.22em] text-amber">
                    Direkter Draht
                  </h4>
                  <ul className="mt-6 space-y-5">
                    <li className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cream/10 text-amber">
                        <MapPin size={18} />
                      </div>
                      <div>
                        <div className="text-xs uppercase tracking-wider text-cream/60">
                          Flagship Adresse
                        </div>
                        <div className="mt-1">
                          {flagship.street}<br />
                          {flagship.postal} {flagship.city}
                        </div>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cream/10 text-amber">
                        <Phone size={18} />
                      </div>
                      <div>
                        <div className="text-xs uppercase tracking-wider text-cream/60">
                          Telefon
                        </div>
                        <a
                          href={`tel:${flagship.phone.replace(/\s/g, "")}`}
                          className="mt-1 block hover:text-amber"
                        >
                          {flagship.phone}
                        </a>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cream/10 text-amber">
                        <Mail size={18} />
                      </div>
                      <div>
                        <div className="text-xs uppercase tracking-wider text-cream/60">
                          E-Mail
                        </div>
                        <a
                          href="mailto:info@eis-und-heiss.de"
                          className="mt-1 block hover:text-amber"
                        >
                          info@eis-und-heiss.de
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.08}>
                <div className="rounded-3xl border border-espresso/10 bg-cream-soft p-8 md:p-10">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-espresso text-cream">
                      <Clock size={18} />
                    </div>
                    <div>
                      <h4 className="font-display text-2xl text-espresso">
                        Öffnungszeiten Ostfildern
                      </h4>
                      <ul className="mt-4 space-y-2 text-sm text-espresso/80">
                        {flagship.hours.map((h) => (
                          <li
                            key={h.days}
                            className="flex items-center justify-between gap-3 border-b border-dashed border-espresso/15 pb-2 last:border-none last:pb-0"
                          >
                            <span>{h.days}</span>
                            <span className="font-semibold text-espresso">
                              {h.hours}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
