import type { Metadata } from 'next';
import './globals.css';
import Script from 'next/script';
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
  metadataBase: new URL('https://dmdgreentechrevive.com'), // Replace with your actual domain
  title: {
    default: 'DMD Green Tech Revive - E-Waste Recycling & Refurbishment',
    template: 'DMD Green Tech Revive'
  },
  description: 'E-waste recycling and refurbishment service, serving Pune. We provide secure data destruction, responsible recycling, and device restoration across India. Join DMD Green Tech in building a sustainable circular economy.',
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
    'circular economy India',
    'sustainable tech India',
    'refurbished laptops India'
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
    title: 'DMD Green Tech Revive - E-Waste Recycling India',
    description: 'Certified e-waste recycling and refurbishment services across India. Secure data destruction, responsible recycling, device restoration.',
    siteName: 'DMD Green Tech Revive',
    images: [
      {
        url: '/og-image.jpg', // You'll need to add this image
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
    images: ['/og-image.jpg'],
  },
  verification: {
    google: 'your-google-verification-code', // Add when you get it from Google Search Console
  },
  alternates: {
    canonical: 'https://dmdgreentechrevive.com',
  },
};

const bodoni = Bodoni_Moda({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-bodoni',
});
import { Bodoni_Moda } from 'next/font/google';
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
      streetAddress: 'Survey 157, Varthur Hobli, Electronic City',
      addressLocality: 'Pune',
      addressRegion: 'Maharashtra',
      postalCode: '411057',
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

  return (
    <html lang="en" className={bodoni.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
