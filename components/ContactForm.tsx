"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const subject = String(data.get("subject") || "Anfrage von der Webseite");
    const message = String(data.get("message") || "");

    const body = `Name: ${name}\nE-Mail: ${email}\n\n${message}`;
    const href = `mailto:info@eis-und-heiss.de?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
    setSubmitted(true);
  };

  const inputCls =
    "w-full rounded-2xl border border-espresso/15 bg-cream-soft px-4 py-3.5 text-sm text-espresso placeholder:text-espresso/40 transition-colors focus:border-espresso focus:outline-none focus:ring-2 focus:ring-amber/40";

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-espresso/60">
            Name
          </span>
          <input
            required
            name="name"
            type="text"
            placeholder="Ihr Name"
            className={inputCls}
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-espresso/60">
            E-Mail
          </span>
          <input
            required
            name="email"
            type="email"
            placeholder="ihre@email.de"
            className={inputCls}
          />
        </label>
      </div>
      <label className="block">
        <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-espresso/60">
          Betreff
        </span>
        <input
          name="subject"
          type="text"
          placeholder="Reservierung, Event-Anfrage…"
          className={inputCls}
        />
      </label>
      <label className="block">
        <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-espresso/60">
          Nachricht
        </span>
        <textarea
          required
          name="message"
          rows={5}
          placeholder="Erzählen Sie uns, wie wir helfen können…"
          className={`${inputCls} resize-none`}
        />
      </label>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        className="inline-flex items-center gap-2 rounded-full bg-espresso px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-cream transition-colors hover:bg-amber hover:text-ink"
      >
        {submitted ? (
          <>
            <CheckCircle2 size={16} /> Mail geöffnet
          </>
        ) : (
          <>
            Nachricht senden
            <Send size={14} />
          </>
        )}
      </motion.button>
      <p className="text-xs text-espresso/50">
        Mit dem Absenden öffnet sich Ihr E-Mail-Programm — Sie behalten die volle Kontrolle.
      </p>
    </form>
  );
}
