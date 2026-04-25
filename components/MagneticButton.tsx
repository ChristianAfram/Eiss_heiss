"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import Link from "next/link";
import type { MouseEvent, ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
};

export default function MagneticButton({
  href,
  children,
  variant = "primary",
  className = "",
}: Props) {
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 200, damping: 18, mass: 0.4 });

  const onMove = (e: MouseEvent<HTMLAnchorElement>) => {
    if (reduce) return;
    const r = e.currentTarget.getBoundingClientRect();
    const dx = e.clientX - (r.left + r.width / 2);
    const dy = e.clientY - (r.top + r.height / 2);
    x.set(dx * 0.15);
    y.set(dy * 0.15);
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  const base =
    "group relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-semibold uppercase tracking-wider transition-colors duration-300 will-change-transform";
  const styles =
    variant === "primary"
      ? "bg-espresso text-cream hover:bg-amber hover:text-ink"
      : "border border-espresso/20 text-espresso hover:border-espresso hover:bg-espresso hover:text-cream";

  return (
    <motion.div
      style={{ x: sx, y: sy }}
      className={`inline-block ${className}`}
    >
      <Link
        href={href}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className={`${base} ${styles}`}
      >
        {children}
      </Link>
    </motion.div>
  );
}
