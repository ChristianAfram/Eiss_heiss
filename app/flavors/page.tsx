import type { Metadata } from "next";
import ClawMark from "@/components/ClawMark";
import MonsterCan from "@/components/MonsterCan";
import Marquee from "@/components/Marquee";
import ScrollReveal from "@/components/ScrollReveal";
import MagneticButton from "@/components/MagneticButton";
import { flavors } from "@/lib/flavors";

export const metadata: Metadata = {
  title: "Flavors — MONSTER WHITE",
  description:
    "Six shades of white. One palette of chaos. Each MONSTER WHITE flavor is tuned to a different kind of beast mode.",
};

export default function FlavorsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-bone">
        <div className="absolute inset-0 bg-grid opacity-50" aria-hidden />
        <ClawMark
          className="pointer-events-none absolute -top-6 right-0 h-[360px] w-[280px] opacity-50"
          color="#B8FF00"
          strokeWidth={9}
        />
        <div className="relative mx-auto max-w-[1400px] px-5 py-24 sm:px-8 lg:py-32">
          <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-steel">
            ⌬ THE LINEUP / VOL. 01
          </p>
          <h1 className="mt-4 font-display text-[clamp(3.5rem,12vw,10rem)] leading-[0.85] tracking-tight">
            SIX
            <br />
            <span className="text-volt-deep glow-volt">SHADES.</span>
          </h1>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-graphite sm:text-lg">
            Same chassis. Different weather. Each flavor is a tuned response
            to a specific kind of moment — track day, studio session,
            hangover, deadline, whiteout drop-in.
          </p>
        </div>
      </section>

      <Marquee
        items={["WHITE", "FROST", "BLANC", "SALT", "GHOST", "ICE"]}
        variant="dark"
      />

      <section className="bg-bone">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          {flavors.map((f, i) => {
            const reverse = i % 2 === 1;
            return (
              <ScrollReveal key={f.slug}>
                <article
                  className={`grid grid-cols-1 items-center gap-12 border-b-2 border-ink py-16 lg:gap-16 lg:py-24 ${
                    reverse ? "lg:grid-cols-[1fr_1.2fr]" : "lg:grid-cols-[1.2fr_1fr]"
                  }`}
                >
                  <div className={reverse ? "order-1 lg:order-2" : ""}>
                    <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-steel">
                      NO. {String(i + 1).padStart(2, "0")} / {f.tier}
                    </p>
                    <h2 className="mt-3 font-display text-[clamp(3rem,8vw,6rem)] leading-[0.9] tracking-tight">
                      {f.name}
                    </h2>
                    <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.25em] text-volt-deep">
                      {f.kicker}
                    </p>
                    <p className="mt-6 max-w-xl text-base leading-relaxed text-graphite">
                      {f.description}
                    </p>

                    <dl className="mt-8 grid max-w-md grid-cols-3 gap-4 border-t-2 border-ink pt-6">
                      <div>
                        <dt className="font-mono text-[10px] uppercase tracking-[0.25em] text-steel">
                          Caffeine
                        </dt>
                        <dd className="mt-1 font-display text-2xl">
                          {f.caffeine}MG
                        </dd>
                      </div>
                      <div>
                        <dt className="font-mono text-[10px] uppercase tracking-[0.25em] text-steel">
                          Sugar
                        </dt>
                        <dd className="mt-1 font-display text-2xl">0G</dd>
                      </div>
                      <div>
                        <dt className="font-mono text-[10px] uppercase tracking-[0.25em] text-steel">
                          Volume
                        </dt>
                        <dd className="mt-1 font-display text-2xl">500ML</dd>
                      </div>
                    </dl>
                  </div>

                  <div
                    className={`flex justify-center ${reverse ? "order-2 lg:order-1" : ""}`}
                  >
                    <div className="relative">
                      <div
                        aria-hidden
                        className="absolute inset-0 -z-10 bg-gradient-to-br from-volt/30 to-transparent blur-3xl"
                      />
                      <MonsterCan
                        variant={f.canVariant}
                        label={f.label}
                        tagline={f.tagline}
                        floating
                      />
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      <section className="bg-volt">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center px-5 py-20 text-center sm:px-8">
          <h2 className="font-display text-[clamp(2.5rem,8vw,6rem)] leading-[0.9] tracking-tight text-ink">
            CAN&apos;T DECIDE?
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-ink/80">
            Take the variety pack. Six cans, six moods, one box. Made to be
            stocked in fridges that take their owners seriously.
          </p>
          <div className="mt-8">
            <MagneticButton href="/contact" variant="ink" size="lg">
              Order The Crate
            </MagneticButton>
          </div>
        </div>
      </section>
    </>
  );
}
