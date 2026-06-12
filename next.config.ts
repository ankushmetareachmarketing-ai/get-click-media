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
};

export default nextConfig;
