import type { NextConfig } from "next";

// Default build = standard Next.js output for Vercel / Netlify / Node hosts.
// For Hostinger or any FTP-only static host, run: NEXT_OUTPUT=export npm run build
const isStaticExport = process.env.NEXT_OUTPUT === "export";

const nextConfig: NextConfig = {
  trailingSlash: true,
  ...(isStaticExport && {
    output: "export",
    images: { unoptimized: true },
  }),
};

export default nextConfig;
