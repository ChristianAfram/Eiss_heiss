"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { categories, itemsByCategory, type CategorySlug } from "@/lib/menu";
import CategoryTabs from "@/components/CategoryTabs";
import MenuCard from "@/components/MenuCard";
import SectionTitle from "@/components/SectionTitle";

export default function MenuPage() {
  const [active, setActive] = useState<CategorySlug>(categories[0].slug);

  // Sync from URL hash so highlight cards on home can deep-link
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash && categories.some((c) => c.slug === hash)) {
      setActive(hash as CategorySlug);
    }
    const onHash = () => {
      const h = window.location.hash.replace("#", "");
      if (h && categories.some((c) => c.slug === h)) {
        setActive(h as CategorySlug);
      }
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const onSelect = (slug: CategorySlug) => {
    setActive(slug);
    if (typeof window !== "undefined") {
      history.replaceState(null, "", `#${slug}`);
    }
  };

  const cat = categories.find((c) => c.slug === active)!;
  const items = itemsByCategory(active);

  return (
    <>
      {/* Hero band */}
      <section className="relative overflow-hidden pt-12 pb-14 md:pt-20 md:pb-20">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 -right-32 h-[460px] w-[460px] rounded-full opacity-50 blur-3xl bg-[radial-gradient(closest-side,#e8b46c,transparent_70%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-32 -left-24 h-[420px] w-[420px] rounded-full opacity-50 blur-3xl bg-[radial-gradient(closest-side,#b8c9a5,transparent_70%)]"
        />
        <div className="relative mx-auto max-w-7xl px-5 md:px-8">
          <SectionTitle
            eyebrow="Unser Menü"
            title={
              <>
                Alles, was{" "}
                <span className="font-display italic text-amber">schmeckt</span>{" "}
                — auf einen Blick.
              </>
            }
            intro="Boutique-Frühstück, italienisches Gelato, arabisches Booza, Cocktails, Waffeln und vieles mehr. Stöbern Sie durch unsere Kategorien."
          />
        </div>
      </section>

      <CategoryTabs categories={categories} active={active} onSelect={onSelect} />

      <section className="relative py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={cat.slug}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="mb-10 max-w-2xl">
                <h2 className="font-display text-4xl text-espresso md:text-5xl">
                  {cat.name}
                </h2>
                <p className="mt-3 text-espresso/70">{cat.blurb}</p>
              </div>

              {items.length === 0 ? (
                <p className="text-espresso/60">
                  Bald verfügbar — unser Team arbeitet an dieser Auswahl.
                </p>
              ) : (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((item) => (
                    <MenuCard
                      key={item.name}
                      item={item}
                      palette={cat.palette}
                    />
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}
