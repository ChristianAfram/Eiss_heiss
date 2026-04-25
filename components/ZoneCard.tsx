"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Coffee,
  Croissant,
  IceCreamCone,
  Baby,
  Gamepad2,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import type { Zone, ZoneIcon } from "@/lib/zones";

const iconMap: Record<ZoneIcon, LucideIcon> = {
  coffee: Coffee,
  croissant: Croissant,
  "ice-cream": IceCreamCone,
  baby: Baby,
  gamepad: Gamepad2,
  sparkles: Sparkles,
};

type Props = { zone: Zone; index: number };

export default function ZoneCard({ zone, index }: Props) {
  const reduce = useReducedMotion();
  const Icon = iconMap[zone.icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      whileHover={reduce ? undefined : { y: -6 }}
      className={`group relative overflow-hidden rounded-3xl border border-espresso/10 bg-gradient-to-br ${zone.palette} p-8 transition-shadow duration-300 hover:shadow-[0_24px_48px_-24px_rgba(42,24,16,0.25)]`}
    >
      <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-cream/40 blur-2xl transition-transform duration-500 group-hover:scale-125" />
      <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-espresso text-cream">
        <Icon size={22} />
      </div>
      <h3 className="relative mt-5 font-display text-2xl text-espresso">
        {zone.name}
      </h3>
      <p className="relative mt-3 text-sm leading-relaxed text-espresso/70">
        {zone.blurb}
      </p>
    </motion.div>
  );
}
