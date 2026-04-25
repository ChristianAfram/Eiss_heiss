"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import Link from "next/link";
import { ArrowDown, MapPin } from "lucide-react";
import { useRef } from "react";

export default function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 120]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 200]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.2]);

  const lines = [
    { text: "Italienisches", color: "text-espresso" },
    { text: "&", color: "text-amber italic" },
    { text: "Arabisches", color: "text-berry" },
    { text: "Eis,", color: "text-espresso" },
  ];
  const second = [
    { text: "Boutique-", color: "text-espresso" },
    { text: "Frühstück", color: "text-pistachio-deep" },
    { text: "&", color: "text-amber italic" },
    { text: "mehr.", color: "text-espresso" },
  ];

  return (
    <section
      ref={ref}
      className="relative isolate overflow-hidden pt-10 pb-24 md:pt-16 md:pb-36"
    >
      {/* Animated gradient blobs */}
      <motion.div
        aria-hidden
        style={{ y: y1 }}
        className="pointer-events-none absolute -top-32 -left-24 h-[520px] w-[520px] rounded-full opacity-70 blur-3xl"
        initial={{ scale: 0.95 }}
        animate={reduce ? undefined : { scale: [0.95, 1.05, 0.95], rotate: [0, 8, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="h-full w-full rounded-full bg-[radial-gradient(closest-side,#e8b46c,transparent_70%)]" />
      </motion.div>
      <motion.div
        aria-hidden
        style={{ y: y2 }}
        className="pointer-events-none absolute -bottom-32 right-[-120px] h-[560px] w-[560px] rounded-full opacity-60 blur-3xl"
        animate={reduce ? undefined : { scale: [1, 1.08, 1], rotate: [0, -10, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="h-full w-full rounded-full bg-[radial-gradient(closest-side,#b8c9a5,transparent_70%)]" />
      </motion.div>
      <motion.div
        aria-hidden
        style={{ y: y1, opacity }}
        className="pointer-events-none absolute top-[20%] left-[40%] h-[360px] w-[360px] rounded-full opacity-50 blur-3xl"
        animate={reduce ? undefined : { scale: [0.9, 1.1, 0.9] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="h-full w-full rounded-full bg-[radial-gradient(closest-side,#e7a9a3,transparent_70%)]" />
      </motion.div>

      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-3 rounded-full border border-espresso/15 bg-cream-soft/70 px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-espresso/80 backdrop-blur"
        >
          <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-amber" />
          Mehr als ein Café — ein Erlebnis
        </motion.div>

        <h1 className="mt-8 font-display text-[clamp(2.75rem,8vw,7rem)] leading-[0.95] tracking-tight">
          {[lines, second].map((line, li) => (
            <motion.span
              key={li}
              initial="hidden"
              animate="visible"
              transition={{ staggerChildren: 0.07, delayChildren: 0.15 + li * 0.25 }}
              className="block"
            >
              {line.map((w, i) => (
                <motion.span
                  key={`${li}-${i}`}
                  variants={{
                    hidden: { opacity: 0, y: 32 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className={`mr-3 inline-block ${w.color}`}
                >
                  {w.text}
                </motion.span>
              ))}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="mt-8 max-w-xl text-lg leading-relaxed text-espresso/75 sm:text-xl"
        >
          Familiengeführt. Mit Herz, Leidenschaft und Persönlichkeit. In
          Ostfildern, Stuttgart und Pforzheim.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.25 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <Link
            href="/menu/"
            className="group inline-flex items-center gap-2 rounded-full bg-espresso px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-cream transition-all hover:bg-amber hover:text-ink"
          >
            Menü entdecken
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
          <Link
            href="/standorte/"
            className="inline-flex items-center gap-2 rounded-full border border-espresso/25 px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-espresso transition-colors hover:border-espresso hover:bg-espresso hover:text-cream"
          >
            <MapPin size={14} />
            Standorte
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          className="mt-20 hidden items-center gap-3 text-xs uppercase tracking-[0.25em] text-espresso/60 md:flex"
        >
          <ArrowDown size={14} className="animate-bounce" />
          Nach unten scrollen
        </motion.div>
      </div>
    </section>
  );
}
