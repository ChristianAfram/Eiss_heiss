import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["opsz", "SOFT"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "EIS & HEISS Café — Mehr als ein Café. Ein Erlebnis für die ganze Familie.",
  description:
    "Italienisches und arabisches Eis, Boutique-Frühstück, Desserts und Cocktails — in Ostfildern, Stuttgart und Pforzheim. Ein Ort voller Genuss und familiärer Wärme.",
  keywords: [
    "Eis",
    "Café",
    "Ostfildern",
    "Stuttgart",
    "Pforzheim",
    "Frühstück",
    "Italienisches Eis",
    "Arabisches Eis",
    "Waffeln",
    "Cocktails",
  ],
  openGraph: {
    title: "EIS & HEISS Café",
    description:
      "Italienisches und arabisches Eis, Boutique-Frühstück, Desserts und Cocktails.",
    locale: "de_DE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="grain min-h-screen bg-cream text-espresso">
        <Navbar />
        <main className="pt-[var(--nav-h)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
