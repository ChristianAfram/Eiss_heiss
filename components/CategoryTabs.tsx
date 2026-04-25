"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { Category, CategorySlug } from "@/lib/menu";

type Props = {
  categories: Category[];
  active: CategorySlug;
  onSelect: (slug: CategorySlug) => void;
};

export default function CategoryTabs({ categories, active, onSelect }: Props) {
  const reduce = useReducedMotion();

  return (
    <div className="sticky top-[var(--nav-h)] z-30 -mx-5 border-y border-espresso/10 bg-cream/85 backdrop-blur-md md:-mx-8">
      <div className="mx-auto max-w-7xl overflow-x-auto px-5 py-3 md:px-8">
        <ul className="flex gap-2 whitespace-nowrap">
          {categories.map((c) => {
            const isActive = c.slug === active;
            return (
              <li key={c.slug}>
                <button
                  onClick={() => onSelect(c.slug)}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "text-cream"
                      : "text-espresso/70 hover:text-espresso"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="cat-pill"
                      transition={
                        reduce
                          ? { duration: 0 }
                          : { type: "spring", stiffness: 400, damping: 32 }
                      }
                      className="absolute inset-0 -z-10 rounded-full bg-espresso"
                    />
                  )}
                  {c.name}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
