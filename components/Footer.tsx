import Link from "next/link";
import { Instagram, Facebook, MapPin, Phone, Mail } from "lucide-react";
import Wordmark from "./Wordmark";

const TikTokIcon = ({ size = 18 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden
  >
    <path d="M19.6 6.7a5.4 5.4 0 01-3-2.7h-2.9v12.4a2.9 2.9 0 11-2-2.7v-3a5.9 5.9 0 105.9 5.9V9.4a8.4 8.4 0 005 1.6V8a5.4 5.4 0 01-3-1.3z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="relative bg-espresso text-cream">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link href="/" className="text-3xl">
              <span className="font-display italic font-medium tracking-tight">
                <span className="text-cream">Eis</span>
                <span className="text-amber"> &amp; </span>
                <span className="text-rose">Heiss</span>
              </span>
            </Link>
            <p className="mt-6 max-w-md text-cream/70">
              Ein Ort voller Genuss und familiärer Wärme. Mit viel Herz servieren
              wir Eis, Desserts und Frühstück für besondere Momente mit Familie
              und Freunden.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <a
                aria-label="Instagram"
                href="https://instagram.com/eis.und.heiss"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-cream/20 transition-colors hover:bg-amber hover:text-ink"
              >
                <Instagram size={18} />
              </a>
              <a
                aria-label="TikTok"
                href="https://tiktok.com/@eis.und.heiss"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-cream/20 transition-colors hover:bg-amber hover:text-ink"
              >
                <TikTokIcon />
              </a>
              <a
                aria-label="Facebook"
                href="https://facebook.com/eis.und.heiss"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-cream/20 transition-colors hover:bg-amber hover:text-ink"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-amber">
              Entdecken
            </h4>
            <ul className="space-y-3 text-cream/80">
              <li><Link href="/" className="hover:text-amber">Home</Link></li>
              <li><Link href="/menu/" className="hover:text-amber">Menu</Link></li>
              <li><Link href="/standorte/" className="hover:text-amber">Standorte</Link></li>
              <li><Link href="/lieferung/" className="hover:text-amber">Lieferung</Link></li>
              <li><Link href="/kontakt/" className="hover:text-amber">Kontakt</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-amber">
              Flagship Ostfildern
            </h4>
            <ul className="space-y-3 text-cream/80">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-1 shrink-0 text-amber" />
                <span>Ruiter Straße 5<br />73760 Ostfildern</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="shrink-0 text-amber" />
                <a href="tel:+4915731635618" className="hover:text-amber">
                  +49 157 31635618
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="shrink-0 text-amber" />
                <a href="mailto:info@eis-und-heiss.de" className="hover:text-amber">
                  info@eis-und-heiss.de
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-cream/15 pt-8 text-xs text-cream/55 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} <Wordmark className="text-base" /> Café · Alle Rechte vorbehalten.</p>
          <p className="flex flex-wrap gap-x-6">
            <Link href="/kontakt/" className="hover:text-amber">Impressum</Link>
            <Link href="/kontakt/" className="hover:text-amber">Datenschutz</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
