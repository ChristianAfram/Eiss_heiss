import type { Metadata } from "next";
import {
  EB_Garamond,
  Cinzel,
  Grenze_Gotisch,
  UnifrakturCook,
} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GrainOverlay from "@/components/GrainOverlay";

const gothic = Grenze_Gotisch({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-gothic",
  display: "swap",
});

const blackletter = UnifrakturCook({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-black",
  display: "swap",
});

const garamond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-garamond",
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-cinzel",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MONSTER WHITE — Zero Zucker. Ultra Energy. Unleash The Beast.",
  description:
    "MONSTER WHITE — an unofficial gothic fan tribute to Monster Energy Ultra. Zero sugar, full chaos, cathedral-grade typography.",
  keywords: [
    "Monster White",
    "Ultra",
    "Energy Drink",
    "Zero Sugar",
    "Gothic",
    "Beast Mode",
  ],
  openGraph: {
    title: "MONSTER WHITE",
    description: "Zero Zucker. Ultra Energy. Unleash The Beast.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${gothic.variable} ${blackletter.variable} ${garamond.variable} ${cinzel.variable}`}
    >
      <body className="min-h-screen bg-bone text-ink antialiased selection:bg-ink selection:text-ice">
        <GrainOverlay />
        <Navbar />
        <main className="pt-[var(--nav-h)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
