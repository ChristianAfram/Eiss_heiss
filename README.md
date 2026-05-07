# MONSTER WHITE

> Zero sugar. Ultra energy. Unleash the beast.

A concept brand site for **MONSTER WHITE** — the white-out flavor of beast
mode. Brutalist meets cyberpunk, pure white canvas with volt-green accents,
animated claw scratches, magnetic buttons, and a custom CSS+SVG energy can.

This is a **fictional concept brand** for design / portfolio purposes. Not
affiliated with any real beverage company.

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

- **Palette** — Bone `#f4f4f1`, Ink `#050505`, Volt `#b8ff00`, Blaze `#00f0ff`
- **Typography** — Bebas Neue (display), Inter (sans), JetBrains Mono (label)
- **Motifs** — Claw scratches, brutalist offset shadows, scanline grids,
  marquee tickers, custom CSS energy can
- **Motion** — Magnetic buttons, scroll reveals, count-ups, animated stroke
  scratches, floating cans

## Note on the repo name

The git repo is still named after the previous project (`Eiss_heiss`).
Rename via GitHub → Settings → repository name. The `package.json` and
project identity already point at `monster-white`.
