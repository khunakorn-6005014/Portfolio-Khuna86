import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",        // → Generates pure HTML/CSS/JS into `out/`
  trailingSlash: true,     // → Adds a slash to every route (e.g. `/about/`)
  images: {
    unoptimized: true      // → Bypasses Next.js image optimization
  }
};

export default nextConfig;