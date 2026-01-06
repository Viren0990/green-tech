import Navbar from '@/src/components/Navbar';
import Footer from '@/src/components/Footer';
import type { Metadata } from 'next';
import CoreServices from '@/src/components/services/CoreServices';
import ProcessSection from '@/src/components/services/ProcessSection';

export const metadata: Metadata = {
  title: 'Our Services - E-Waste Management & Recycling Solutions',
  description: 'Comprehensive e-waste management services: logistics & collection, secure data destruction, eco-friendly recycling, device restoration. Corporate pickup available across India. DoD-standard data wiping, certified recycling processes.',
  keywords: [
    'DMD green tech revive',
    'e-waste collection India',
    'data destruction services',
    'corporate e-waste pickup',
    'device refurbishment',
    'laptop recycling',
    'IT asset disposal',
    'secure data wiping',
    'green certificate India'
  ],
  openGraph: {
    title: 'E-Waste Management Services - DMD Green Tech Revive',
    description: 'End-to-end e-waste solutions for businesses and individuals. Certified recycling, secure data destruction, device restoration.',
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
