"use client";

import { motion, useReducedMotion } from "framer-motion";
import GradientPlaceholder from "./GradientPlaceholder";
import { formatPrice, type MenuItem, type Palette } from "@/lib/menu";

type Props = { item: MenuItem; palette: Palette };

export default function MenuCard({ item, palette }: Props) {
  const reduce = useReducedMotion();

  return (
    <motion.article
      whileHover={reduce ? undefined : { y: -6 }}
      transition={{ type: "spring", stiffness: 200, damping: 18 }}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-espresso/10 bg-cream-soft shadow-[0_1px_0_0_rgba(42,24,16,0.04)] transition-shadow duration-300 hover:shadow-[0_24px_48px_-24px_rgba(42,24,16,0.25)]"
    >
      <div className="relative aspect-[5/4] w-full overflow-hidden">
        <motion.div
          whileHover={reduce ? undefined : { scale: 1.04 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <GradientPlaceholder palette={palette} className="h-full w-full" />
        </motion.div>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display text-xl leading-tight text-espresso">
            {item.name}
          </h3>
          <span className="shrink-0 rounded-full bg-espresso px-3 py-1 text-xs font-semibold tracking-wider text-cream">
            {formatPrice(item.price)}
          </span>
        </div>
        {item.description && (
          <p className="text-sm leading-relaxed text-espresso/65">
            {item.description}
          </p>
        )}
      </div>
    </motion.article>
  );
}
