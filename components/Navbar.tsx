"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Wordmark from "./Wordmark";

const links = [
  { href: "/", label: "Home" },
  { href: "/menu/", label: "Menu" },
  { href: "/standorte/", label: "Standorte" },
  { href: "/lieferung/", label: "Lieferung" },
  { href: "/kontakt/", label: "Kontakt" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-espresso/10 bg-cream/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
      style={{ height: "var(--nav-h)" }}
    >
      <nav className="mx-auto flex h-full max-w-7xl items-center justify-between px-5 md:px-8">
        <Link
          href="/"
          className="text-2xl md:text-3xl"
          onClick={() => setOpen(false)}
        >
          <Wordmark />
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="group relative rounded-full px-4 py-2 text-sm font-medium text-espresso/80 transition-colors duration-300 hover:text-espresso"
              >
                {l.label}
                <span className="pointer-events-none absolute inset-x-4 -bottom-0.5 h-px origin-left scale-x-0 bg-amber transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/kontakt/"
          className="hidden rounded-full bg-espresso px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-cream transition-colors hover:bg-amber hover:text-ink md:inline-flex"
        >
          Tisch reservieren
        </Link>

        <button
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          className="relative z-50 inline-flex h-10 w-10 items-center justify-center rounded-full text-espresso md:hidden"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-cream md:hidden"
            style={{ paddingTop: "var(--nav-h)" }}
          >
            <motion.ul
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.06 } },
                hidden: {},
              }}
              className="flex flex-col gap-2 px-6 py-10"
            >
              {links.map((l) => (
                <motion.li
                  key={l.href}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-espresso/10 py-4 font-display text-3xl italic text-espresso"
                  >
                    {l.label}
                  </Link>
                </motion.li>
              ))}
              <motion.li
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 },
                }}
                className="mt-6"
              >
                <Link
                  href="/kontakt/"
                  onClick={() => setOpen(false)}
                  className="inline-flex w-full items-center justify-center rounded-full bg-espresso px-6 py-4 text-sm font-semibold uppercase tracking-wider text-cream"
                >
                  Tisch reservieren
                </Link>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
