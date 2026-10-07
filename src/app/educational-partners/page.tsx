import { pageMetadata, breadcrumbJsonLd } from '@/src/lib/seo';
import JsonLd from '@/src/components/JsonLd';
import Navbar from '@/src/components/Navbar';
import Footer from '@/src/components/Footer';
import EducationalPartnerShowcase from './EducationalPartnerShowcase';
import EducationalPartnersHero from './EducationalPartnersHero';


export const metadata = pageMetadata({
  title: 'School & College E-Waste Partners',
  description: 'Schools partnering with DMD Green Tech Revive on e-waste awareness, including Priyadarshani School. Bring a collection drive to your campus.',
  path: '/educational-partners',
});

export default function EducationalPartnersPage() {
  return (
    <>
      <Navbar />
      <JsonLd data={breadcrumbJsonLd('Educational Partners', '/educational-partners')} />
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
