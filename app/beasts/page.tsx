import type { Metadata } from "next";
import ClawMark from "@/components/ClawMark";
import Marquee from "@/components/Marquee";
import ScrollReveal from "@/components/ScrollReveal";
import SectionLabel from "@/components/SectionLabel";
import BeastCard from "@/components/BeastCard";
import MagneticButton from "@/components/MagneticButton";
import { beasts } from "@/lib/beasts";

export const metadata: Metadata = {
  title: "The Pack — MONSTER WHITE",
  description:
    "The riders, makers, and night-shift lunatics that fuel the chaos with MONSTER WHITE.",
};

export default function BeastsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-graphite text-bone">
        <div className="absolute inset-0 bg-filigree opacity-[0.07]" aria-hidden />
        <ClawMark
          className="pointer-events-none absolute -top-12 right-10 h-[480px] w-[320px] opacity-30"
          color="#6dcff6"
          strokeWidth={11}
        />
        <div className="relative mx-auto max-w-[1400px] px-5 py-24 sm:px-8 lg:py-32">
          <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-ice">
            ⌬ THE PACK
          </p>
          <h1 className="mt-4 font-display text-[clamp(3.5rem,12vw,10rem)] leading-[0.85] tracking-tight">
            BEASTS,
            <br />
            <span className="text-ice glow-ice">NOT FANS.</span>
          </h1>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-mist sm:text-lg">
            Athletes, producers, surgeons, surfers, students. The kind of
            people who treat 11pm like a starting whistle and Monday like
            a personal project.
          </p>
        </div>
      </section>

      <Marquee
        items={[
          "WE DON'T DO INFLUENCERS",
          "WE DO BEASTS",
          "WE DON'T DO FANS",
          "WE DO LIFERS",
        ]}
        variant="ice"
      />

      <section className="bg-bone">
        <div className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 lg:py-32">
          <ScrollReveal>
            <SectionLabel
              index="01"
              subtitle="ROSTER"
              title="THE CURRENT PACK."
            />
          </ScrollReveal>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-2">
            {beasts.map((b, i) => (
              <ScrollReveal key={b.name} delay={i * 0.07}>
                <BeastCard beast={b} index={i} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink text-bone">
        <div className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 lg:py-32">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <ScrollReveal className="lg:col-span-5">
              <SectionLabel
                invert
                index="02"
                subtitle="JOIN"
                title="WANT IN?"
              />
            </ScrollReveal>
            <ScrollReveal delay={0.1} className="lg:col-span-7">
              <p className="text-lg leading-relaxed text-mist">
                We sponsor riders, producers, fighters, programmers — anyone
                actually moving things. Submissions get read by humans, not
                algorithms. No follower count required. Just a body of work
                and a pulse.
              </p>
              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {[
                  { label: "Send a reel", note: "<60s, raw, no music." },
                  { label: "Send a track", note: "WAV or stream link." },
                  { label: "Send a story", note: "What you build, why." },
                ].map((t) => (
                  <div
                    key={t.label}
                    className="border-2 border-bone/40 bg-graphite p-5"
                  >
                    <div className="font-display text-xl tracking-[0.04em]">
                      {t.label}
                    </div>
                    <p className="mt-2 text-sm text-mist">{t.note}</p>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <MagneticButton href="/contact" variant="ice" size="lg">
                  Apply To The Pack
                </MagneticButton>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
