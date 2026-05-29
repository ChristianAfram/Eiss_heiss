"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [sent, setSent] = useState(false);
  return (
    <form
      className="mt-8 flex max-w-md gap-0 border-2 border-bone"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <input
        type="email"
        required
        placeholder="EMAIL FOR DROP ALERTS"
        className="w-full bg-transparent px-4 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-bone placeholder:text-fog focus:outline-none"
      />
      <button
        type="submit"
        className="bg-ice px-5 font-display tracking-[0.18em] text-ink hover:bg-bone"
      >
        {sent ? "✓" : "Sign"}
      </button>
    </form>
  );
}
