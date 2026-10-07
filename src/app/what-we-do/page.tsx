import { pageMetadata, breadcrumbJsonLd } from '@/src/lib/seo';
import JsonLd from '@/src/components/JsonLd';
import { SITE_URL } from '@/src/lib/business';
import Navbar from '@/src/components/Navbar';
import Footer from '@/src/components/Footer';
import CoreServices from '@/src/components/services/CoreServices';
import ProcessSection from '@/src/components/services/ProcessSection';
import ServicesHero from '@/src/components/services/ServicesHero';

export const metadata = pageMetadata({
  title: 'E-Waste Recycling Services in Pune',
  description: 'E-waste collection, data sanitisation, refurbishment and recycling for Pune offices and homes. Free doorstep pickup and a certificate of recycling.',
  path: '/what-we-do',
});

// One Service entry per card shown in CoreServices (anchors match the card ids).
const services = [
  { id: 'e-waste-collection', name: 'E-Waste Collection' },
  { id: 'data-sanitization', name: 'Data Sanitization' },
  { id: 'refurbishment', name: 'Refurbishment' },
  { id: 'recycling', name: 'Recycling' },
];

const servicesJsonLd = {
  '@context': 'https://schema.org',
  '@graph': services.map((service) => ({
    '@type': 'Service',
    '@id': `${SITE_URL}/what-we-do#${service.id}`,
    name: service.name,
    serviceType: service.name,
    url: `${SITE_URL}/what-we-do#${service.id}`,
    provider: { '@id': `${SITE_URL}/#business` },
    areaServed: { '@type': 'City', name: 'Pune' },
  })),
};

export default function WhatWeDoPage() {
  return (
    <>
      <Navbar />
      <JsonLd data={breadcrumbJsonLd('Services', '/what-we-do')} />
      <JsonLd data={servicesJsonLd} />
      <main>
        
        <CoreServices />
        <ProcessSection />

      </main>
      <Footer />
    </>
  );
}
