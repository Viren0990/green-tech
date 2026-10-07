import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 1. YOUR EXISTING IMAGE CONFIGURATION (Unchanged)
  images: {
    formats: ['image/avif', 'image/webp'],
    // Cap generated widths at 1920px (default goes up to 3840px, far more than any layout here needs).
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },

  // 2. THE SEO BRIDGE (New Redirects)
  async redirects() {
    return [
      // Fix the "Weird -2" URL
      // Old WordPress: /about-us-2
      // New Next.js:   /about-us
      {
        source: '/about-us-2',
        destination: '/about-us',
        permanent: true, // 301 Redirect (Saves SEO juice)
      },

      // Fix Contact URL difference
      // Old WordPress: /contact-us
      // New Next.js:   /contact
      {
        source: '/contact-us',
        destination: '/contact',
        permanent: true,
      },

      // Handle old specific service pages that don't exist anymore
      // Redirecting them to your main /services page so they don't 404
      {
        source: '/data-sanitization',
        destination: '/what-we-do#data-sanitization',
        permanent: true,
      },
      {
        source: '/refurbishment',
        destination: '/what-we-do#refurbishment',
        permanent: true,
      },

      // Old brochure filename (spaces, typo) → clean filename
      {
        source: '/DMD%20Greentech%20Broucher%20..pdf',
        destination: '/dmd-green-tech-revive-brochure.pdf',
        permanent: true,
      },

      // NOTE: We do NOT need to redirect '/what-we-do' because 
      // you have that exact page on the new site! 
    ];
  },
};

export default nextConfig;