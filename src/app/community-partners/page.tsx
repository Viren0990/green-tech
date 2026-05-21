import Navbar from '@/src/components/Navbar';
import Footer from '@/src/components/Footer';
import CommunityShowcase from './CommunityShowcase';
import CommunityHero from './CommunityHero';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Community Partners - Residential Societies We Work With',
  description:
    'DMD Green Tech Revive works with residential communities including Rohan Abhilasha, Wildwoods, Ivy Estate, and Sai Galaxy for responsible e-waste collection and disposal in Pune.',
  keywords: [
    'DMD Green Tech community partners',
    'e-waste collection societies Pune',
    'residential e-waste disposal',
    'Rohan Abhilasha e-waste',
    'community e-waste drives India',
  ],
  openGraph: {
    title: 'Community Partners - DMD Green Tech Revive',
    description:
      'Residential societies partnering with us for responsible e-waste disposal.',
    url: 'https://dmdgreentechrevive.com/community-partners',
  },
  alternates: {
    canonical: 'https://dmdgreentechrevive.com/community-partners',
  },
};

export default function CommunityPartnersPage() {
  return (
    <>
      <Navbar />
      <main>
        <CommunityHero />

        <CommunityShowcase />

        {/* CTA Section */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
              Want Your Society to Join?
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              If your residential community is interested in organising e-waste collection drives, 
              reach out to us and we will set everything up.
            </p>
            <a
              href="/contact"
              className="inline-block bg-emerald-600 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-emerald-700 transition-colors"
            >
              Get In Touch
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
