"use client";

import { useState } from "react";
import MagneticButton from "./MagneticButton";

const intents = [
  { value: "wholesale", label: "Wholesale" },
  { value: "press", label: "Press" },
  { value: "pack", label: "Apply to the pack" },
  { value: "lab", label: "Ask the lab" },
  { value: "other", label: "Other chaos" },
];

export default function ContactForm() {
  const [intent, setIntent] = useState("wholesale");
  const [sent, setSent] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="grid gap-6"
      aria-label="Contact form"
    >
      <div className="grid gap-3">
        <label className="font-mono text-[11px] uppercase tracking-[0.25em] text-steel">
          Intent
        </label>
        <div className="flex flex-wrap gap-2">
          {intents.map((i) => {
            const active = intent === i.value;
            return (
              <button
                key={i.value}
                type="button"
                onClick={() => setIntent(i.value)}
                className={`border-2 border-ink px-4 py-2 font-display tracking-[0.18em] transition-colors ${
                  active
                    ? "bg-ink text-bone"
                    : "bg-paper text-ink hover:bg-volt"
                }`}
              >
                {i.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <label className="grid gap-2">
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-steel">
            Name
          </span>
          <input
            required
            type="text"
            placeholder="LAST FIRST"
            className="border-2 border-ink bg-paper px-4 py-3 font-mono text-sm uppercase tracking-[0.1em] focus:outline-none focus:bg-volt/20"
          />
        </label>
        <label className="grid gap-2">
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-steel">
            Email
          </span>
          <input
            required
            type="email"
            placeholder="YOU@WHEREVER.COM"
            className="border-2 border-ink bg-paper px-4 py-3 font-mono text-sm uppercase tracking-[0.1em] focus:outline-none focus:bg-volt/20"
          />
        </label>
      </div>

      <label className="grid gap-2">
        <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-steel">
          Message
        </span>
        <textarea
          required
          rows={6}
          placeholder="WHAT'S THE PLAN?"
          className="border-2 border-ink bg-paper px-4 py-3 font-mono text-sm uppercase tracking-[0.1em] focus:outline-none focus:bg-volt/20"
        />
      </label>

      <div className="flex flex-wrap items-center justify-between gap-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-steel">
          We read every one. We answer most.
        </p>
        <MagneticButton variant="ink" size="lg">
          {sent ? "Sent ✓" : "Send It"}
        </MagneticButton>
      </div>

      {sent && (
        <p className="border-2 border-volt-deep bg-volt/40 px-4 py-3 font-mono text-[11px] uppercase tracking-[0.25em] text-ink">
          ★ Locked in. We&apos;ll reply within two business days.
        </p>
      )}
    </form>
  );
}
