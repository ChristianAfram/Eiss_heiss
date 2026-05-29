"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import MagneticButton from "./MagneticButton";
import ClawLogo from "./ClawLogo";

const links = [
  { href: "/flavors", label: "Flavors" },
  { href: "/lab", label: "The Lab" },
  { href: "/beasts", label: "Beasts" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors ${
        scrolled
          ? "bg-bone/85 backdrop-blur-md border-ink/10"
          : "bg-transparent border-transparent"
      }`}
      style={{ height: "var(--nav-h)" }}
    >
      <div className="mx-auto flex h-full max-w-[1400px] items-center justify-between px-5 sm:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 font-display text-2xl tracking-[0.04em]"
          aria-label="Monster White home"
        >
          <ClawLogo
            className="h-8 w-7"
            tone="black"
            halftone={false}
            title="Monster White"
          />
          <span>MONSTER</span>
          <span className="text-ice-deep">WHITE</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`relative px-4 py-2 font-mono text-[11px] uppercase tracking-[0.25em] transition-colors ${
                  active ? "text-ink" : "text-steel hover:text-ink"
                }`}
              >
                {l.label}
                {active && (
                  <span className="absolute inset-x-4 -bottom-px h-[2px] bg-ice" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <MagneticButton href="/flavors" variant="ink" size="md">
            Find Yours
          </MagneticButton>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden flex h-10 w-10 items-center justify-center border-2 border-ink"
        >
          <span className="relative block h-3 w-5">
            <span
              className={`absolute inset-x-0 top-0 h-[2px] bg-ink transition-transform ${
                open ? "translate-y-[6px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute inset-x-0 bottom-0 h-[2px] bg-ink transition-transform ${
                open ? "-translate-y-[6px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-ink/15 bg-bone">
          <div className="mx-auto flex max-w-[1400px] flex-col px-5 py-4 sm:px-8">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="border-b border-ink/10 py-3 font-display text-2xl tracking-[0.04em]"
              >
                {l.label}
              </Link>
            ))}
            <div className="pt-4">
              <MagneticButton href="/flavors" variant="ink" size="md">
                Find Yours
              </MagneticButton>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
