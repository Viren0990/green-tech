import Navbar from '@/src/components//Navbar';
import Footer from '@/src/components/Footer';
import StoryHero from '@/src/components/about/StoryHero';
import FullStory from '@/src/components/about/FullStory';
import Timeline from '@/src/components/about/Timeline';
import Team from '@/src/components/about/Team';
import MissionVision from '@/src/components/about/MissionVision';

import type { Metadata } from 'next';


export const metadata: Metadata = {
  title: "About DMD Green Tech Revive — Pune's Leading E-Waste Recycling Company",
  description: 'Founded in 2018 in Pune, DMD Green Tech Revive has recycled 120+ tons of e-waste and refurbished 50,000+ devices. MPCB certified environmental company committed to zero-landfill e-waste management and circular economy.',
  keywords: [
    'DMD Green Tech history',
    'e-waste recycling Pune',
    'sustainable tech India',
    'circular economy',
    'green technology India',
    'e-waste management company',
    'environmental company Pune',
    'environmental company near me',
    'e waste recycling company India',
    'certified e-waste recycler Pune'
  ],
  openGraph: {
    title: "About DMD Green Tech Revive — Pune's E-Waste Recycling Leader",
    description: "MPCB certified. 120+ tons recycled. 50,000+ devices refurbished. Learn about Pune's leading environmental company.",
  },
  alternates: {
    canonical: 'https://dmdgreentechrevive.com/about-us',
  },
};
export default function StoryPage() {
  return (
    <>
      <Navbar />
      <main>
        <StoryHero />
        <Team />
        <FullStory />
        <MissionVision />


        <Timeline />

      </main>
      <Footer />
    </>
  );
}
