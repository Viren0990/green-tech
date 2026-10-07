import { pageMetadata } from '@/src/lib/seo';
import JsonLd from '@/src/components/JsonLd';
import { faqJsonLd } from '@/src/lib/faq';
import Navbar from '@/src/components/Navbar';
import Hero from '@/src/components/Hero';
import Services from '@/src/components/Services';
import Story from '@/src/components/Story';
import Gallery from '@/src/components/Gallery';
import Cta from '@/src/components/CTA';
import FAQ from '@/src/components/FAQ';
import Footer from '@/src/components/Footer';

export const metadata = pageMetadata({
  title: 'Free E-Waste Pickup in Pune | DMD Green Tech Revive',
  description: 'Free e-waste pickup across Pune for offices and homes. Secure data wiping, responsible recycling and a certificate of recycling. Call +91 97631 23699.',
  path: '',
  absoluteTitle: true,
});

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <JsonLd data={faqJsonLd} />
      <Navbar />
      <Hero />
      <Services />
      <Story />
      <Gallery />
      <FAQ />
      <Footer />
    </main>
  );
}
