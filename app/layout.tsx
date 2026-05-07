import type { Metadata } from "next";
import { Inter, Bebas_Neue, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GrainOverlay from "@/components/GrainOverlay";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bebas",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MONSTER WHITE — Zero Sugar. Ultra Energy. Unleash The Beast.",
  description:
    "MONSTER WHITE is the white-out flavor of beast mode. Zero sugar, full chaos. Ultra energy concept brand.",
  keywords: [
    "Monster White",
    "Ultra",
    "Energy Drink",
    "Zero Sugar",
    "Beast Mode",
    "Concept Brand",
  ],
  openGraph: {
    title: "MONSTER WHITE",
    description: "Zero Sugar. Ultra Energy. Unleash The Beast.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${bebas.variable} ${mono.variable}`}
    >
      <body className="min-h-screen bg-bone text-ink antialiased selection:bg-volt selection:text-ink">
        <GrainOverlay />
        <Navbar />
        <main className="pt-[var(--nav-h)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
