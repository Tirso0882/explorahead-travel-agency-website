import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./lib/i18n/request.ts');

const nextConfig: NextConfig = {
  // Enable static export for GitHub Pages
  output: "export",

  // Image optimization settings
  // Note: Static export requires unoptimized images
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },

  // Environment variables available at build time
  env: {
    NEXT_PUBLIC_APP_NAME: "ExplorAhead",
  },

  // Strict mode for better development
  reactStrictMode: true,

  // Turbopack configuration (Next.js 16 uses Turbopack by default)
  turbopack: {},
};

export default withNextIntl(nextConfig);
