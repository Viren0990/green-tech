import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'E-Waste Recycling & Refurbishment Services India | Pune',
  description: 'DMD Green Tech Revive is India\'s premier certified e-waste recycling service in Pune. We offer secure data destruction, responsible recycling, corporate pickup, and refurbished electronics. Join 500+ companies in sustainable e-waste management.',
  keywords: [
    'e-waste recycling Pune',
    'electronic waste India',
    'DMD Green Tech',
    'certified e-waste recycler',
    'laptop refurbishment',
    'data destruction Pune',
    'corporate e-waste pickup',
    'sustainable tech India'
  ],
  openGraph: {
    title: 'DMD Green Tech Revive - E-Waste Recycling India',
    description: 'Certified e-waste recycling and refurbishment services. 500+ devices recycled, 120+ tons e-waste collected.',
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
import Footer from '@/src/components/Footer';



export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <Navbar />
      <Hero />
      <div className="bg-gray-200 w-full h-0.5"></div>

      <Services />
      <div className="bg-gray-200 w-full h-0.5"></div>
      <Story />
      <div className="bg-gray-200 w-full h-0.5"></div>
      <Gallery />
      <div className="bg-gray-200 w-full h-0.5"></div>
      <Cta />
      <Footer />
    </main>
  );
}
