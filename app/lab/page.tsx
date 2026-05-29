import type { Metadata } from "next";
import ClawMark from "@/components/ClawMark";
import Marquee from "@/components/Marquee";
import ScrollReveal from "@/components/ScrollReveal";
import StatCounter from "@/components/StatCounter";
import SectionLabel from "@/components/SectionLabel";
import MagneticButton from "@/components/MagneticButton";
import { coreSpecs, lab } from "@/lib/specs";

export const metadata: Metadata = {
  title: "The Lab — MONSTER WHITE",
  description:
    "Inside the engineered curve. Four phases, ninety minutes, zero sugar. The science of MONSTER WHITE.",
};

export default function LabPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink text-bone">
        <div className="absolute inset-0 bg-filigree opacity-[0.07]" aria-hidden />
        <ClawMark
          className="pointer-events-none absolute -top-12 -left-10 h-[480px] w-[320px] opacity-30"
          color="#6dcff6"
          strokeWidth={11}
        />
        <ClawMark
          className="pointer-events-none absolute bottom-10 right-0 h-[420px] w-[300px] -scale-x-100 opacity-30"
          color="#6dcff6"
          strokeWidth={11}
        />
        <div className="relative mx-auto max-w-[1400px] px-5 py-24 sm:px-8 lg:py-32">
          <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-ice">
            // THE LAB
          </p>
          <h1 className="mt-4 font-display text-[clamp(3.5rem,12vw,10rem)] leading-[0.85] tracking-tight">
            INSIDE
            <br />
            <span className="text-ice glow-ice">THE CAN.</span>
          </h1>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-mist sm:text-lg">
            Every batch is built around a 35–95 minute focus curve. We walk
            through it in four phases, each with a job description and an
            exit ramp.
          </p>
        </div>
      </section>

      {/* Phases */}
      <section className="bg-bone">
        <div className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 lg:py-32">
          <ScrollReveal>
            <SectionLabel
              index="01"
              subtitle="THE CURVE"
              title="FOUR PHASES."
            />
          </ScrollReveal>

          <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {lab.map((phase, i) => (
              <ScrollReveal key={phase.title} delay={i * 0.07}>
                <article className="brutal-card brutal-card-ice p-8">
                  <div className="flex items-baseline justify-between">
                    <span className="font-display text-6xl text-ice-deep">
                      0{i + 1}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-steel">
                      PHASE
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-2xl tracking-[0.04em]">
                    {phase.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-graphite">
                    {phase.body}
                  </p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Marquee
        items={[
          "INTAKE",
          "UPTAKE",
          "IGNITION",
          "UNLEASH",
          "REPEAT",
          "DON'T BLINK",
        ]}
        variant="ice"
        speed="slow"
      />

      {/* Spec table */}
      <section className="bg-graphite text-bone">
        <div className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 lg:py-32">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <ScrollReveal className="lg:col-span-4">
              <SectionLabel
                invert
                index="02"
                subtitle="DATASHEET"
                title="WHAT'S INSIDE."
              />
              <p className="mt-6 max-w-md text-sm leading-relaxed text-mist">
                Every can, every batch, every market. The numbers don&apos;t
                move. Sweetened with ace-K + sucralose. Carbonated to 4.0
                vols. Brewed in EU.
              </p>
            </ScrollReveal>

            <div className="lg:col-span-8">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="border-b-2 border-bone/30 font-mono text-[10px] uppercase tracking-[0.3em] text-fog">
                    <th className="py-3 pr-4 font-normal">Component</th>
                    <th className="py-3 pr-4 font-normal">Value</th>
                    <th className="py-3 font-normal">Note</th>
                  </tr>
                </thead>
                <tbody>
                  {coreSpecs.map((row) => (
                    <tr
                      key={row.label}
                      className="border-b border-bone/10 transition-colors hover:bg-bone/5"
                    >
                      <td className="py-4 pr-4 font-display text-xl tracking-[0.04em]">
                        {row.label}
                      </td>
                      <td className="py-4 pr-4 font-display text-xl text-ice">
                        {row.value}
                      </td>
                      <td className="py-4 text-sm text-mist">
                        {row.note}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-10 sm:grid-cols-4">
            <ScrollReveal>
              <StatCounter to={4} label="Carbonation (vols)" decimals={1} />
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <StatCounter to={500} label="Volume (ml)" />
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <StatCounter to={6} label="Flavors" />
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <StatCounter to={24} label="Months shelf" />
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="bg-bone">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center px-5 py-20 text-center sm:px-8">
          <h2 className="font-display text-[clamp(2.5rem,8vw,6rem)] leading-[0.9] tracking-tight">
            QUESTIONS?
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-graphite">
            We get it — caffeine is a real input. If you want full datasheets,
            allergen statements, or sourcing notes, ask the lab.
          </p>
          <div className="mt-8">
            <MagneticButton href="/contact" variant="ink" size="lg">
              Email The Lab
            </MagneticButton>
          </div>
        </div>
      </section>
    </>
  );
}
