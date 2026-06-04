import Navbar from '@/src/components/Navbar';
import Footer from '@/src/components/Footer';
import type { Metadata } from 'next';
import CoreServices from '@/src/components/services/CoreServices';
import ProcessSection from '@/src/components/services/ProcessSection';
import ServicesHero from '@/src/components/services/ServicesHero';

export const metadata: Metadata = {
  title: 'Recycle Your Device — E-Waste Collection, Disposal & Recycling Services Pune',
  description: 'Recycle old laptops, phones & electronics with free pickup in Pune. DMD Green Tech offers e-waste collection, secure data destruction, device refurbishment & certified recycling. Zero-landfill guarantee.',
  keywords: [
    'DMD green tech revive',
    'e-waste collection India',
    'e-waste collection Pune',
    'data destruction services',
    'corporate e-waste pickup',
    'device refurbishment',
    'laptop recycling',
    'IT asset disposal',
    'secure data wiping',
    'green certificate India',
    'recycle device',
    'recycle old laptop',
    'e waste disposal Pune',
    'e waste collection near me',
    'where to recycle old electronics',
    'electronic waste disposal',
    'disposal of old electronics',
    'recycling services near me'
  ],
  openGraph: {
    title: 'Recycle Your Device — E-Waste Collection & Disposal Services | DMD Green Tech',
    description: 'Free e-waste pickup in Pune. Recycle old laptops, phones & devices. Certified data destruction, zero-landfill recycling.',
  },
  alternates: {
    canonical: 'https://dmdgreentechrevive.com/what-we-do',
  },
};

export default function WhatWeDoPage() {
  return (
    <>
      <Navbar />
      <main>
        
        <CoreServices />
        <ProcessSection />

      </main>
      <Footer />
    </>
  );
}
