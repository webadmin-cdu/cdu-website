import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Enable React strict mode for better development experience
  reactStrictMode: true,

  // Production optimizations
  poweredByHeader: false, // Remove X-Powered-By header

  // Image optimization
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
      {
        protocol: 'https',
        hostname: '*.supabase.co',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'chaitanya.edu.in',
      },
      {
        protocol: 'https',
        hostname: 'www.chaitanya.edu.in',
      },
      {
        protocol: 'https',
        hostname: 'bxklouufxiafncqisgxx.supabase.co',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Compression
  compress: true,

  // Security headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          // Prevent clickjacking
          { key: 'X-Frame-Options', value: 'DENY' },
          // Prevent MIME type sniffing
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          // Referrer policy
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          // XSS Protection
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          // DNS Prefetch Control
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          // Permissions Policy
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(self), interest-cohort=()',
          },
          // Content Security Policy
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "img-src 'self' data: blob: https: http:",
              "font-src 'self' https://fonts.gstatic.com",
              "connect-src 'self' https://*.supabase.co https://www.google-analytics.com",
              "frame-src 'self' https://www.youtube.com https://player.vimeo.com",
              "media-src 'self' https:",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'",
              "frame-ancestors 'none'",
            ].join('; '),
          },
          // Strict Transport Security (HSTS)
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
        ],
      },
      // Cache static assets
      {
        source: '/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // Cache images
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, stale-while-revalidate=31536000',
          },
        ],
      },
    ];
  },

  // Redirects from old URLs
  async redirects() {
    return [
      // Common redirect patterns
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/courses',
        destination: '/academics/programs',
        permanent: true,
      },
      {
        source: '/courses/:slug',
        destination: '/academics/programs/:slug',
        permanent: true,
      },
      {
        source: '/apply',
        destination: '/admissions/how-to-apply',
        permanent: true,
      },
      {
        source: '/fees',
        destination: '/admissions/fee-structure',
        permanent: true,
      },
    ];
  },

  // Rewrites (if needed for API proxying)
  async rewrites() {
    return [];
  },
};

export default nextConfig;
