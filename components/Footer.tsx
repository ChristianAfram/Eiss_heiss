import Link from "next/link";
import NewsletterForm from "./NewsletterForm";

const cols = [
  {
    heading: "Hunt",
    items: [
      { label: "Flavors", href: "/flavors" },
      { label: "The Lab", href: "/lab" },
      { label: "Beasts", href: "/beasts" },
    ],
  },
  {
    heading: "Pack",
    items: [
      { label: "Contact", href: "/contact" },
      { label: "Press kit", href: "/contact" },
      { label: "Wholesale", href: "/contact" },
    ],
  },
  {
    heading: "Legal",
    items: [
      { label: "Imprint", href: "/contact" },
      { label: "Privacy", href: "/contact" },
      { label: "Terms", href: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-bone">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.05]" />
      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 py-16">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
          <div className="max-w-md">
            <div className="font-display text-[clamp(3.5rem,8vw,6rem)] leading-[0.85] tracking-tight">
              MONSTER
              <br />
              <span className="text-volt">WHITE</span>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-mist">
              Zero sugar. Ultra energy. A concept brand built for the kind of
              chaos you can drink. Don&apos;t blink.
            </p>
            <NewsletterForm />
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            {cols.map((c) => (
              <div key={c.heading}>
                <h4 className="font-mono text-[11px] uppercase tracking-[0.3em] text-volt">
                  {c.heading}
                </h4>
                <ul className="mt-4 space-y-3 text-sm">
                  {c.items.map((it) => (
                    <li key={it.label}>
                      <Link
                        href={it.href}
                        className="text-bone hover:text-volt"
                      >
                        {it.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-bone/20 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-fog">
            © {new Date().getFullYear()} Monster White — Concept Brand · Not for Resale
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-fog">
            Designed with chaos · Built with caffeine
          </p>
        </div>
      </div>
    </footer>
  );
}
