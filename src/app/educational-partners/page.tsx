import Navbar from '@/src/components/Navbar';
import Footer from '@/src/components/Footer';
import EducationalPartnerShowcase from './EducationalPartnerShowcase';
import EducationalPartnersHero from './EducationalPartnersHero';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Educational Partners - Trusted Collaborations',
  description:
    'DMD Green Tech Revive partners with educational institutions like Priyadarshani School to drive sustainable e-waste management awareness across India.',
  keywords: [
    'DMD Green Tech educational partners',
    'Priyadarshani School',
    'e-waste recycling education',
    'green tech collaborations',
  ],
  openGraph: {
    title: 'Educational Partners - DMD Green Tech Revive',
    description:
      'Collaborating with educational institutions to build a sustainable future. Meet our trusted partners.',
    url: 'https://dmdgreentechrevive.com/educational-partners',
  },
  alternates: {
    canonical: 'https://dmdgreentechrevive.com/educational-partners',
  },
};

export default function EducationalPartnersPage() {
  return (
    <>
      <Navbar />
      <main>
        <EducationalPartnersHero />

        <EducationalPartnerShowcase />

        {/* CTA Section */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
              Interested in Partnering With Us?
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              We are always looking to collaborate with forward-thinking educational institutions
              that share our commitment to sustainability and responsible e-waste management.
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
