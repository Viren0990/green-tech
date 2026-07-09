import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Recycle Old Electronics & E-Waste in Pune | Free Pickup — DMD Green Tech',
  description: 'Recycle your old electronics responsibly! DMD Green Tech offers free e-waste pickup in Pune. Secure data destruction, device recycling & refurbishment. MPCB certified. Schedule pickup today.',
  keywords: [
    'e-waste recycling Pune',
    'electronic waste India',
    'DMD Green Tech',
    'certified e-waste recycler',
    'laptop refurbishment',
    'data destruction Pune',
    'corporate e-waste pickup',
    'sustainable tech India',
    'recycle old electronics',
    'recycle device',
    'e waste disposal',
    'where to recycle electronics',
    'e waste collection near me',
    'environmental company near me',
    'recycle old laptop',
    'e waste recycling near me',
    'electronic waste disposal Pune',
    'landfill alternative India'
  ],
  openGraph: {
    title: 'Recycle Old Electronics & E-Waste — Free Pickup in Pune | DMD Green Tech',
    description: 'Free e-waste pickup in Pune. Recycle old electronics, laptops & devices responsibly. MPCB certified recycler. Schedule today!',
    url: 'https://dmdgreentechrevive.com',
  },
  alternates: {
    canonical: 'https://dmdgreentechrevive.com',
  },
};




import Navbar from '@/src/components/Navbar';
import Hero from '@/src/components/Hero';
import Services from '@/src/components/Services';
import Story from '@/src/components/Story';
import Gallery from '@/src/components/Gallery';
import Cta from '@/src/components/CTA';
import FAQ from '@/src/components/FAQ';
import Footer from '@/src/components/Footer';



export default function Home() {
  return (
    <main className="flex flex-col w-full">
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
