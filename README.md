# EIS & HEISS Café — Website

Modern, animated website for **EIS & HEISS Café** — a family-run café in Ostfildern, Stuttgart and Pforzheim serving Italian and Arabic ice cream, Boutique breakfast, Chill menus, waffles and cocktails.

## Stack

- **Next.js 15** (App Router) + **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** for animations
- **Lucide** icons
- Static export — deploys anywhere (Hostinger, Netlify, Vercel, S3…)

## Local development

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Deploy

### Vercel (recommended)

Connect the GitHub repo to Vercel — it auto-detects Next.js and builds with `npm run build`. No extra configuration needed.

### Hostinger / any FTP-only static host

```bash
NEXT_OUTPUT=export npm run build
```

Outputs a fully static site in `out/`. Upload the contents of `out/` to the public web folder via FTP/SFTP.

## Project structure

```
app/             Routes (App Router) — /, /menu, /standorte, /kontakt, /lieferung
components/      Reusable UI (Hero, Navbar, Footer, MenuCard, …)
lib/             Typed data: menu, locations, zones
public/          Static assets (favicon)
```

## Editing content

- **Menu items & categories:** `lib/menu.ts`
- **Café locations:** `lib/locations.ts`
- **Café zones:** `lib/zones.ts`
- **Brand text on home:** `app/page.tsx`

## Notes

- Menu items use category-themed CSS gradient placeholders. Drop in real photos by replacing `GradientPlaceholder` with `next/image` in `components/MenuCard.tsx`.
- The contact form uses a `mailto:` handoff — no backend required. To collect submissions server-side, swap `components/ContactForm.tsx` to post to Formspree / Resend / etc.
- Email currently shown is `info@eis-und-heiss.de` — update once a clean domain inbox is set up.
