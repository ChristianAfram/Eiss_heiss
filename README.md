# MONSTER WHITE

> Zero sugar. Ultra energy. Unleash the beast.

A fan tribute site styled after **Monster Energy Ultra (White)** — pure white
glossy canvas, silver baroque filigree, the iconic claw "M", a stylized
MONSTER ENERGY ULTRA wordmark with the power-symbol O, and the signature
"ENERGY" cyan as the only color accent. Built around a custom CSS+SVG can.

This is an **unofficial fan tribute** for design / portfolio purposes.
Not affiliated with, endorsed by, or sponsored by Monster Energy Company.

## Stack

- **Next.js 15** (App Router, RSC)
- **React 19**
- **Tailwind CSS 4**
- **Framer Motion** for scroll reveals
- **TypeScript**

## Routes

| Path        | What                                                    |
|-------------|---------------------------------------------------------|
| `/`         | Hero, manifesto, lineup, stats, lab teaser, beasts, CTA |
| `/flavors`  | Six flavors, each with a tuned tagline + datasheet      |
| `/lab`      | Four-phase focus curve + full ingredient datasheet      |
| `/beasts`   | The pack — riders, makers, night-shift lunatics         |
| `/contact`  | Channels, HQ, intent-tagged form                        |

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export, all routes prerendered
npm run lint
```

## Design language

- **Palette** — Bone `#f4f6f7`, Ink `#0a0a0a`, Chrome/Silver, ENERGY cyan
  `#6dcff6` / deep `#1f9fd1`
- **Typography** — Bebas Neue (display), Inter (sans), JetBrains Mono (label)
- **Motifs** — Iconic claw "M" logo, silver baroque filigree texture,
  halftone fills, chrome-gradient lettering, marquee tickers, custom CSS can
- **Motion** — Magnetic buttons, scroll reveals, count-ups, animated claw
  scratches, floating cans, logo pop-in

## Note on the repo name

The git repo is still named after the previous project (`Eiss_heiss`).
Rename via GitHub → Settings → repository name. The `package.json` and
project identity already point at `monster-white`.
