import type { Metadata } from "next";
import ClawMark from "@/components/ClawMark";
import Marquee from "@/components/Marquee";
import ScrollReveal from "@/components/ScrollReveal";
import SectionLabel from "@/components/SectionLabel";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — MONSTER WHITE",
  description:
    "Send signal. Wholesale, press, pack applications, or just chaos — we read everything.",
};

const channels = [
  {
    heading: "WHOLESALE",
    body: "Stock your fridge, your gym, your venue. Pallets ship from Rotterdam.",
    handle: "wholesale@monsterwhite.cc",
  },
  {
    heading: "PRESS",
    body: "Photo kits, exec interviews, embargoed news. We answer same week.",
    handle: "press@monsterwhite.cc",
  },
  {
    heading: "THE PACK",
    body: "Athlete + creator submissions. Read by humans, not bots.",
    handle: "pack@monsterwhite.cc",
  },
  {
    heading: "THE LAB",
    body: "Ingredients, datasheets, allergen statements, sourcing.",
    handle: "lab@monsterwhite.cc",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-bone">
        <div className="absolute inset-0 bg-filigree opacity-50" aria-hidden />
        <ClawMark
          className="pointer-events-none absolute -top-12 -right-6 h-[420px] w-[300px] -scale-x-100 opacity-60"
          color="#6dcff6"
          strokeWidth={10}
        />
        <div className="relative mx-auto max-w-[1400px] px-5 py-24 sm:px-8 lg:py-32">
          <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-steel">
            ⌂ SIGNAL → INBOUND
          </p>
          <h1 className="mt-4 font-display text-[clamp(3.5rem,12vw,10rem)] leading-[0.85] tracking-tight">
            SEND
            <br />
            <span className="text-ice-deep glow-ice">SIGNAL.</span>
          </h1>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-graphite sm:text-lg">
            We&apos;re a small lab. No call center, no chatbots, no hold music.
            Pick a channel below or use the form — both land in the same
            place.
          </p>
        </div>
      </section>

      <Marquee
        items={[
          "WE READ EVERYTHING",
          "WE ANSWER MOST",
          "NO CHATBOTS",
          "NO HOLD MUSIC",
        ]}
        variant="dark"
      />

      <section className="bg-bone">
        <div className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 lg:py-32">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
            <ScrollReveal className="lg:col-span-5">
              <SectionLabel
                index="01"
                subtitle="CHANNELS"
                title="PICK YOUR LANE."
              />

              <div className="mt-10 space-y-4">
                {channels.map((c) => (
                  <a
                    key={c.heading}
                    href={`mailto:${c.handle}`}
                    className="group block border-2 border-ink bg-paper p-5 transition-colors hover:bg-ink hover:text-bone"
                  >
                    <div className="flex items-center justify-between font-display tracking-[0.2em]">
                      <span className="text-xl">{c.heading}</span>
                      <span className="text-ice-deep transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed">{c.body}</p>
                    <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.2em]">
                      {c.handle}
                    </p>
                  </a>
                ))}
              </div>

              <div className="mt-10 border-2 border-ink bg-ink p-5 text-bone">
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-ice">
                  HQ · COORDINATES
                </p>
                <p className="mt-2 font-display text-xl leading-tight tracking-[0.04em]">
                  MONSTER WHITE LAB
                  <br />
                  KASTANIENALLEE 12
                  <br />
                  10435 BERLIN · DE
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1} className="lg:col-span-7">
              <ContactForm />
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
