"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MapPin, Phone, Clock, ArrowUpRight } from "lucide-react";
import type { Location } from "@/lib/locations";

type Props = { location: Location; index: number };

export default function LocationCard({ location, index }: Props) {
  const reduce = useReducedMotion();

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={reduce ? undefined : { y: -4 }}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-espresso/10 bg-cream-soft transition-shadow duration-300 hover:shadow-[0_24px_48px_-24px_rgba(42,24,16,0.25)]"
    >
      {/* Top visual band */}
      <div className="relative h-44 overflow-hidden">
        <div className="placeholder-grain absolute inset-0 placeholder-default" />
        {location.isFlagship && (
          <span className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-espresso px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-cream">
            <span className="h-1.5 w-1.5 rounded-full bg-amber" />
            Flagship
          </span>
        )}
        <div className="absolute bottom-5 left-5 right-5">
          <h3 className="font-display text-3xl text-espresso">{location.city}</h3>
          <p className="mt-1 text-xs uppercase tracking-[0.2em] text-espresso/60">
            {location.since}
          </p>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-5 p-6">
        <p className="text-sm leading-relaxed text-espresso/75">
          {location.description}
        </p>

        <div className="space-y-2.5 text-sm">
          <div className="flex items-start gap-3 text-espresso/80">
            <MapPin size={16} className="mt-0.5 shrink-0 text-amber" />
            <span>
              {location.street}, {location.postal} {location.city}
            </span>
          </div>
          <div className="flex items-center gap-3 text-espresso/80">
            <Phone size={16} className="shrink-0 text-amber" />
            <a href={`tel:${location.phone.replace(/\s/g, "")}`} className="hover:text-espresso">
              {location.phone}
            </a>
          </div>
          {location.hours.length > 0 && (
            <div className="flex items-start gap-3 text-espresso/80">
              <Clock size={16} className="mt-0.5 shrink-0 text-amber" />
              <ul className="space-y-1">
                {location.hours.map((h) => (
                  <li key={h.days}>
                    <span className="font-medium text-espresso">{h.days}:</span>{" "}
                    {h.hours}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="flex flex-wrap gap-2">
          {location.features.map((f) => (
            <span
              key={f}
              className="rounded-full border border-espresso/15 bg-cream px-3 py-1 text-xs text-espresso/70"
            >
              {f}
            </span>
          ))}
        </div>

        <a
          href={location.mapsUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-auto inline-flex items-center gap-2 self-start rounded-full bg-espresso px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-cream transition-colors hover:bg-amber hover:text-ink"
        >
          Auf Karte ansehen
          <ArrowUpRight size={14} />
        </a>
      </div>
    </motion.article>
  );
}
