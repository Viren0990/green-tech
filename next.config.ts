import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 1. YOUR EXISTING IMAGE CONFIGURATION (Unchanged)
  images: {
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
        destination: '/what-we-do',
        permanent: true,
      },
      {
        source: '/refurbishment',
        destination: '/what-we-do',
        permanent: true,
      },

      // NOTE: We do NOT need to redirect '/what-we-do' because 
      // you have that exact page on the new site! 
    ];
  },
};

export default nextConfig;