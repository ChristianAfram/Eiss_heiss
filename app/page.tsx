import Link from "next/link";
import ClawMark from "@/components/ClawMark";
import ClawLogo from "@/components/ClawLogo";
import MonsterCan from "@/components/MonsterCan";
import Marquee from "@/components/Marquee";
import MagneticButton from "@/components/MagneticButton";
import ScrollReveal from "@/components/ScrollReveal";
import StatCounter from "@/components/StatCounter";
import SectionLabel from "@/components/SectionLabel";
import FlavorCard from "@/components/FlavorCard";
import BeastCard from "@/components/BeastCard";
import { flavors } from "@/lib/flavors";
import { beasts } from "@/lib/beasts";
import { lab } from "@/lib/specs";

export default function Home() {
  return (
    <>
      {/* ───────────── HERO ───────────── */}
      <section className="relative overflow-hidden bg-bone">
        <div className="absolute inset-0 bg-filigree opacity-50" aria-hidden />
        <ClawLogo
          className="pointer-events-none absolute left-1/2 top-1/2 h-[120vh] w-[105vh] -translate-x-1/2 -translate-y-1/2 opacity-[0.05]"
          tone="black"
          halftone={false}
        />
        <ClawMark
          className="pointer-events-none absolute -top-10 -left-16 h-[420px] w-[320px] opacity-40 sm:opacity-50"
          color="#6dcff6"
          strokeWidth={10}
        />

        <div className="relative mx-auto grid min-h-[88vh] max-w-[1400px] grid-cols-1 items-center gap-8 px-5 py-24 sm:px-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-steel">
              <span className="mr-3 inline-block h-2 w-2 translate-y-[-2px] bg-ice-deep align-middle" />
              ZERO ZUCKER · ULTRA ENERGY
            </p>

            <h1 className="mt-6 font-display leading-[0.8] tracking-tight">
              <span className="block text-[clamp(4.5rem,16vw,12rem)] text-ink">
                MONSTER
              </span>
              <span className="relative block w-fit text-[clamp(4.5rem,16vw,12rem)]">
                <span className="relative z-10 text-chrome-grad">WHITE</span>
                <span
                  aria-hidden
                  className="absolute -bottom-1 left-0 z-0 h-[8px] w-full bg-ice-deep"
                />
              </span>
            </h1>

            <p className="mt-5 font-display text-[clamp(0.9rem,2vw,1.3rem)] tracking-[0.4em] text-ice-deep">
              ENERGY · ULTRA · ZERO
            </p>

            <p className="mt-8 max-w-xl text-base leading-relaxed text-graphite sm:text-lg">
              The white-out flavor of beast mode. Engineered for the kind of
              chaos you can drink — citrus snap, glacial finish, and 160mg of
              please-don&apos;t-talk-to-me-yet.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <MagneticButton href="/flavors" variant="ink" size="lg">
                Taste The White Out
              </MagneticButton>
              <MagneticButton href="/lab" variant="ghost" size="lg">
                See the Science
              </MagneticButton>
            </div>

            <dl className="mt-14 grid max-w-xl grid-cols-3 gap-6 border-t-2 border-ink pt-6">
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.25em] text-steel">
                  Caffeine
                </dt>
                <dd className="mt-1 font-display text-3xl">
                  160<span className="text-ice-deep">MG</span>
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.25em] text-steel">
                  Sugar
                </dt>
                <dd className="mt-1 font-display text-3xl">
                  00<span className="text-ice-deep">G</span>
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.25em] text-steel">
                  Calories
                </dt>
                <dd className="mt-1 font-display text-3xl">
                  10<span className="text-ice-deep">KCAL</span>
                </dd>
              </div>
            </dl>
          </div>

          <div className="relative lg:col-span-5">
            <div className="relative mx-auto flex max-w-md items-center justify-center">
              <div
                aria-hidden
                className="absolute inset-0 -z-10 bg-gradient-to-br from-ice/40 via-bone to-bone blur-3xl"
              />
              <div className="absolute inset-0 -z-10 flex items-center justify-center">
                <div className="h-72 w-72 rounded-full border-2 border-ink/20" />
                <div className="absolute h-72 w-72 rounded-full border-2 border-ink/20 pulse-ring" />
              </div>
              <MonsterCan variant="white" floating />
            </div>

            <div className="mt-8 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.25em] text-steel">
              <span>SKU · MW–WHT–500</span>
              <span>BATCH · 2026/Q2</span>
              <span>EUR / DE</span>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── MARQUEE 1 ───────────── */}
      <Marquee
        items={[
          "UNLEASH THE BEAST",
          "ZERO SUGAR",
          "ULTRA ENERGY",
          "WHITE OUT",
          "DON'T BLINK",
          "FUEL THE CHAOS",
        ]}
        variant="dark"
      />

      {/* ───────────── MANIFESTO ───────────── */}
      <section className="relative bg-bone">
        <div className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 lg:py-32">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <ScrollReveal className="lg:col-span-5">
              <SectionLabel
                index="01"
                subtitle="MANIFESTO"
                title="DRINK THE NOISE."
              />
            </ScrollReveal>
            <ScrollReveal delay={0.1} className="lg:col-span-7">
              <p className="text-xl leading-relaxed text-graphite sm:text-2xl">
                We&apos;re not selling a beverage. We&apos;re selling a
                <span className="bg-ink px-2 text-ice"> mode </span>—
                the second between the alarm and the answer, between the
                drop-in and the line, between the cursor and the verdict.
              </p>
              <p className="mt-6 text-base leading-relaxed text-steel">
                MONSTER WHITE is engineered for that second. White can,
                glacial citrus, zero sugar, and enough caffeine to make
                Tuesday feel like Friday. Built for makers, athletes,
                night-shift lunatics, and anyone who treats <em>good
                enough</em> as a personal insult.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {["INVENTED", "BREWED", "CHILLED", "UNLEASHED"].map((t) => (
                  <div
                    key={t}
                    className="border-2 border-ink bg-paper p-4 text-center"
                  >
                    <span className="font-display tracking-[0.2em]">{t}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ───────────── FLAVORS ───────────── */}
      <section className="relative bg-mist">
        <div className="absolute inset-0 bg-dotted opacity-50" aria-hidden />
        <div className="relative mx-auto max-w-[1400px] px-5 py-24 sm:px-8 lg:py-32">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <ScrollReveal>
              <SectionLabel
                index="02"
                subtitle="THE LINEUP"
                title="SIX SHADES OF WHITE."
              />
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="max-w-md text-sm leading-relaxed text-steel">
                One palette. Six flavors. Each one tuned to a different kind
                of chaos. Pick your weapon — they&apos;re all zero sugar,
                always 500ml, always cold.
              </p>
            </ScrollReveal>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {flavors.map((f, i) => (
              <ScrollReveal key={f.slug} delay={i * 0.05}>
                <FlavorCard flavor={f} index={i} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── MARQUEE 2 ───────────── */}
      <Marquee
        items={[
          "160 MG CAFFEINE",
          "0 G SUGAR",
          "10 KCAL",
          "1000 MG TAURINE",
          "B3 · B5 · B6 · B12",
          "L-CARNITINE",
        ]}
        variant="ice"
        reverse
      />

      {/* ───────────── STATS ───────────── */}
      <section className="relative overflow-hidden bg-ink text-bone">
        <ClawMark
          className="pointer-events-none absolute -top-20 right-0 h-[480px] w-[360px] opacity-30"
          color="#6dcff6"
          strokeWidth={14}
        />
        <div className="relative mx-auto max-w-[1400px] px-5 py-24 sm:px-8 lg:py-32">
          <ScrollReveal>
            <SectionLabel
              invert
              index="03"
              subtitle="BY THE NUMBERS"
              title="WHAT'S ACTUALLY IN THE CAN."
            />
          </ScrollReveal>

          <div className="mt-16 grid grid-cols-2 gap-10 sm:grid-cols-4">
            <ScrollReveal>
              <StatCounter to={160} label="Caffeine (mg)" />
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <StatCounter to={0} label="Sugar (g)" />
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <StatCounter to={1000} label="Taurine (mg)" />
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <StatCounter to={95} label="Peak focus (min)" unit="'" />
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.2}>
            <p className="mt-16 max-w-2xl text-sm leading-relaxed text-mist">
              A 500ml can is dosed for a 35–95 minute focus window from
              intake. Don&apos;t mix with sleep. Don&apos;t mix with cowardice.
              If you&apos;re under 16, pregnant, or sensitive to caffeine —
              sit this one out.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ───────────── LAB TEASER ───────────── */}
      <section className="relative bg-bone">
        <div className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 lg:py-32">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <ScrollReveal className="lg:col-span-5">
              <SectionLabel
                index="04"
                subtitle="THE LAB"
                title="FOUR PHASES. NINETY MINUTES."
              />
              <p className="mt-6 max-w-md text-base leading-relaxed text-graphite">
                We obsess over the curve. Intake, uptake, ignition, unleash —
                every can is engineered to hit those four beats with the
                precision of a metronome.
              </p>
              <div className="mt-8">
                <MagneticButton href="/lab" variant="ink" size="md">
                  Tour the Lab
                </MagneticButton>
              </div>
            </ScrollReveal>

            <ol className="lg:col-span-7 space-y-4">
              {lab.map((phase, i) => (
                <ScrollReveal key={phase.title} delay={i * 0.07}>
                  <li className="grid grid-cols-[64px_1fr] items-start gap-4 border-2 border-ink bg-paper p-6 transition-colors hover:bg-ink hover:text-bone">
                    <span className="font-display text-4xl text-ice-deep">
                      0{i + 1}
                    </span>
                    <div>
                      <h3 className="font-display text-xl tracking-[0.05em]">
                        {phase.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed">
                        {phase.body}
                      </p>
                    </div>
                  </li>
                </ScrollReveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ───────────── BEASTS ───────────── */}
      <section className="relative overflow-hidden bg-graphite text-bone">
        <div className="absolute inset-0 bg-filigree opacity-[0.06]" aria-hidden />
        <div className="relative mx-auto max-w-[1400px] px-5 py-24 sm:px-8 lg:py-32">
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
            <ScrollReveal>
              <SectionLabel
                invert
                index="05"
                subtitle="THE PACK"
                title="WHO DRINKS WHITE."
              />
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="max-w-md text-sm leading-relaxed text-mist">
                Athletes, producers, surgeons, surfers, students. The kind of
                people who treat 11pm like a starting whistle.
              </p>
            </ScrollReveal>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {beasts.map((b, i) => (
              <ScrollReveal key={b.name} delay={i * 0.06}>
                <BeastCard beast={b} index={i} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── MARQUEE 3 ───────────── */}
      <Marquee
        items={[
          "DON'T BLINK",
          "WHITE OUT",
          "CHAOS / CHILLED",
          "FUEL THE CHAOS",
          "GLACIAL CITRUS",
          "BEAST MODE",
        ]}
        variant="light"
        speed="slow"
      />

      {/* ───────────── CTA ───────────── */}
      <section className="relative overflow-hidden bg-ice">
        <div className="absolute inset-0 bg-filigree opacity-30" aria-hidden />
        <ClawMark
          className="pointer-events-none absolute -top-10 left-10 h-[480px] w-[300px] opacity-30"
          color="#050505"
          strokeWidth={12}
        />
        <ClawMark
          className="pointer-events-none absolute -bottom-10 right-10 h-[480px] w-[300px] -scale-x-100 opacity-30"
          color="#050505"
          strokeWidth={12}
        />
        <div className="relative mx-auto flex max-w-[1400px] flex-col items-center px-5 py-28 text-center sm:px-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-ink">
            ★ FINAL CALL ★
          </p>
          <h2 className="mt-4 font-display text-[clamp(3rem,11vw,9rem)] leading-[0.85] tracking-tight text-ink">
            UNLEASH
            <br />
            <span className="italic">THE</span> BEAST.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink/80">
            One can. Ninety minutes. The next version of you. You can find it
            wherever serious beverages live.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/flavors"
              className="inline-flex items-center gap-2 border-4 border-ink bg-bone px-8 py-4 font-display tracking-[0.2em] text-ink transition-transform hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0_0_#050505]"
            >
              FIND YOUR FLAVOR →
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border-4 border-ink bg-ink px-8 py-4 font-display tracking-[0.2em] text-bone transition-transform hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0_0_#fff]"
            >
              GET WHOLESALE
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
