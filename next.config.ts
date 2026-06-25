import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimize images
  images: {
    formats: ['image/avif', 'image/webp'],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'exotel-strapi-s3-bucket.s3.ap-south-1.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
      {
        protocol: 'https',
        hostname: 'ik.imagekit.io',
      },
    ],
  },

  // Enable on-demand entry optimization
  onDemandEntries: {
    maxInactiveAge: 60 * 60 * 1000,
    pagesBufferLength: 5,
  },

  // Disable source maps in production to reduce bundle size
  productionBrowserSourceMaps: false,

  // Use Turbopack (default in Next.js 16)
  turbopack: {},

  // Optimize package imports
  experimental: {
    optimizePackageImports: ['@tabler/icons-react', 'lucide-react'],
  },

  // Force browsers and CDNs to revalidate HTML pages on every request.
  // This prevents stale HTML (referencing old CSS/JS hashes) from being served
  // after a new deployment — the root cause of "Tailwind not loading" in prod.
  // Next.js already sets immutable caching for /_next/static/* automatically,
  // so we only override the HTML page rule here.
  async headers() {
    return [
      {
        source: '/((?!_next/).*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, must-revalidate',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
