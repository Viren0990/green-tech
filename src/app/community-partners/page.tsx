import { pageMetadata, breadcrumbJsonLd } from '@/src/lib/seo';
import JsonLd from '@/src/components/JsonLd';
import Navbar from '@/src/components/Navbar';
import Footer from '@/src/components/Footer';
import CommunityShowcase from './CommunityShowcase';
import CommunityHero from './CommunityHero';


export const metadata = pageMetadata({
  title: 'Housing Society E-Waste Partners',
  description: 'Pune housing societies, including Rohan Abhilasha, Wildwoods and Ivy Estate, that run e-waste collection drives with DMD Green Tech Revive.',
  path: '/community-partners',
});

export default function CommunityPartnersPage() {
  return (
    <>
      <Navbar />
      <JsonLd data={breadcrumbJsonLd('Community Partners', '/community-partners')} />
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
