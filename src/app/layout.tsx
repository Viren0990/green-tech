import type { Metadata } from 'next';
import './globals.css';
import Script from 'next/script';
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
  metadataBase: new URL('https://dmdgreentechrevive.com'), // Replace with your actual domain
  title: {
    default: 'DMD Green Tech Revive — Recycle Old Electronics & E-Waste in Pune',
    template: '%s | DMD Green Tech Revive'
  },
  description: 'Recycle old electronics & e-waste responsibly with DMD Green Tech Revive in Pune. Free pickup, secure data destruction, certified recycling & device refurbishment. MPCB authorized. Join us in building a sustainable circular economy.',
  keywords: [
    'DMD Green Tech',
    'DMD',
    'e-waste recycling India',
    'electronic waste management',
    'e-waste management in pune',
    'e-waste recycling Pune',
    'DMD Green Tech Revive Pune',
    'e-waste disposal India',
    'laptop refurbishment India',
    'data destruction services',
    'certified e-waste recycler',
    'Pune e-waste',
    'corporate e-waste pickup',
    'IT asset disposal',
    'green certificate India',
    'circular economy India',
    'sustainable tech India',
    'refurbished laptops India',
    'recycle old electronics',
    'recycle device',
    'where to recycle old electronics',
    'e waste disposal',
    'e waste collection near me',
    'environmental company near me',
    'recycle old laptop Pune',
    'landfill alternative',
    'recycling near me'
  ],
  authors: [{ name: 'DMD Green Tech Revive' }],
  creator: 'DMD Green Tech Revive',
  publisher: 'DMD Green Tech Revive',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://dmdgreentechrevive.com',
    title: 'DMD Green Tech Revive — Recycle Old Electronics & E-Waste in Pune',
    description: 'Free e-waste pickup in Pune. Recycle old electronics, laptops & devices responsibly. MPCB certified recycler with zero-landfill policy.',
    siteName: 'DMD Green Tech Revive',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'DMD Green Tech Revive - E-Waste Recycling India',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DMD Green Tech Revive - E-Waste Recycling India',
    description: 'Certified e-waste recycling and refurbishment services across India.',
    images: ['/og-image.png'],
  },
  verification: {
    google: 'your-google-verification-code', // Add when you get it from Google Search Console
  },
  alternates: {
    canonical: 'https://dmdgreentechrevive.com',
  },
};

import { Plus_Jakarta_Sans } from 'next/font/google';
const headingFont = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-heading',
});
import FloatingWhatsAppButton from '../components/FloatingWhatsAppButton';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'DMD Green Tech Revive',
    alternateName: 'DMD Green Tech',
    url: 'https://dmdgreentechrevive.com',
    logo: 'https://dmdgreentechrevive.com/logo.png',
    description: 'India\'s premier certified e-waste recycling and refurbishment service',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Office No-03, Amaryllis Apartment, Domkhel Rd, Wagholi',
      addressLocality: 'Pune',
      addressRegion: 'Maharashtra',
      postalCode: '412207',
      addressCountry: 'IN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-91-2067-6799',
      contactType: 'Customer Service',
      areaServed: ['IN', 'Pune'],
      availableLanguage: ['English', 'Hindi'],
    },
    sameAs: [
      'https://facebook.com/dmdgreentech',
      'https://twitter.com/dmdgreentech',
      'https://linkedin.com/company/dmdgreentech',
    ],
  };

  const localBusinessJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://dmdgreentechrevive.com/#business',
    name: 'DMD Green Tech Revive',
    image: 'https://dmdgreentechrevive.com/og-image.png',
    url: 'https://dmdgreentechrevive.com',
    telephone: '+91-91-2067-6799',
    email: 'info@dmdgreentechrevive.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Office No-03, Amaryllis Apartment, Domkhel Rd, Wagholi',
      addressLocality: 'Pune',
      addressRegion: 'Maharashtra',
      postalCode: '412207',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 18.5876,
      longitude: 73.9726,
    },
    areaServed: [
      { '@type': 'City', name: 'Pune' },
      { '@type': 'State', name: 'Maharashtra' },
      { '@type': 'Country', name: 'India' },
    ],
    serviceType: [
      'E-Waste Recycling',
      'E-Waste Collection',
      'Data Destruction',
      'Laptop Refurbishment',
      'IT Asset Disposal',
    ],
    priceRange: '₹₹',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
  };

  return (
    <html lang="en" className={headingFont.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </head>
      <body>
        {children}
        <FloatingWhatsAppButton />
        <Analytics />
      </body>
    </html>
  );
}
