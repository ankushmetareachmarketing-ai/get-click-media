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

  // Cache headers are managed in middleware.ts which runs after ISR headers
  // are set and can reliably override them.  No header config needed here.

  async redirects() {
    return [
      // Legacy .php URLs with typos or duplicate intent — consolidate to canonical pages
      {
        source: '/tips-to-unblock-your-bloked-whatsapp-account.php',
        destination: '/whatsapp-business-api-provider-india',
        permanent: true,
      },
      {
        source: '/how-to-get-bluetick-on-whataspp.php',
        destination: '/whatsapp-green-tick-verification',
        permanent: true,
      },
      {
        source: '/bulk-sms-marketing-services-in-noida.php',
        destination: '/bulk-sms-service-provider-india',
        permanent: true,
      },
      {
        source: '/bulk-sms-noida.php',
        destination: '/bulk-sms-service-provider-india',
        permanent: true,
      },
      {
        source: '/whatsapp-marketing-services-in-noida.php',
        destination: '/whatsapp-marketing-services',
        permanent: true,
      },
      {
        source: '/whatsapp-marketing-solutions.php',
        destination: '/whatsapp-marketing-services',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
