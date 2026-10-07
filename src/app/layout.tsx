import type { Metadata } from 'next';
import './globals.css';
import Script from 'next/script';
import { Analytics } from "@vercel/analytics/next"
import { BUSINESS, SITE_URL } from '@/src/lib/business';
import JsonLd from '@/src/components/JsonLd';

const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;
const bingVerification = process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION;

const defaultTitle = 'Free E-Waste Pickup in Pune | DMD Green Tech Revive';
const defaultDescription =
  'Free e-waste pickup across Pune for offices and homes. Secure data wiping, responsible recycling and a certificate of recycling. Call +91 97631 23699.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: defaultTitle,
    template: `%s | ${BUSINESS.name}`,
  },
  description: defaultDescription,
  authors: [{ name: BUSINESS.name }],
  creator: BUSINESS.name,
  publisher: BUSINESS.name,
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
    url: SITE_URL,
    title: defaultTitle,
    description: defaultDescription,
    siteName: BUSINESS.name,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'DMD Green Tech Revive — e-waste recycling in Pune',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultTitle,
    description: defaultDescription,
    images: ['/og-image.png'],
  },
  // Verification tags render only when the env vars are set (no placeholders).
  verification: {
    google: googleVerification || undefined,
    other: bingVerification ? { 'msvalidate.01': bingVerification } : undefined,
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
  // Site-wide business details. Opening hours and geo coordinates are left out
  // until the owner confirms them (CLAUDE.md section 1).
  const siteJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: BUSINESS.name,
        url: SITE_URL,
        logo: `${SITE_URL}/images/invoice/logo.png`,
        email: BUSINESS.email,
        telephone: BUSINESS.phoneE164,
        sameAs: Object.values(BUSINESS.social),
      },
      {
        '@type': 'RecyclingCenter',
        '@id': `${SITE_URL}/#business`,
        name: BUSINESS.name,
        url: SITE_URL,
        image: `${SITE_URL}/og-image.png`,
        logo: `${SITE_URL}/images/invoice/logo.png`,
        telephone: BUSINESS.phoneE164,
        email: BUSINESS.email,
        address: { '@type': 'PostalAddress', ...BUSINESS.address },
        areaServed: BUSINESS.areaServed.map((name) => ({ '@type': 'City', name })),
        parentOrganization: { '@id': `${SITE_URL}/#organization` },
        sameAs: Object.values(BUSINESS.social),
      },
    ],
  };

  return (
    <html lang="en" className={headingFont.variable}>
      <head>
        <JsonLd data={siteJsonLd} />
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1548231083417081');
            fbq('track', 'PageView');
          `}
        </Script>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-NM4SBQ6T');
          `}
        </Script>
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NM4SBQ6T"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1548231083417081&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {children}
        <FloatingWhatsAppButton />
        <Analytics />
      </body>
    </html>
  );
}
