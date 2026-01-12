import Navbar from '@/src/components//Navbar';
import Footer from '@/src/components/Footer';
import StoryHero from '@/src/components/about/StoryHero';
import Timeline from '@/src/components/about/Timeline';
import Team from '@/src/components/about/Team';
import MissionVision from '@/src/components/about/MissionVision';

import type { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'About Us - Leading E-Waste Recycling Since 2018',
  description: 'Founded in 2018 in Bangalore, DMD Green Tech Revive has recycled 120+ tons of e-waste and refurbished 50,000+ devices. Learn about our journey in sustainable technology management and circular economy goals.',
  keywords: [
    'DMD Green Tech history',
    'e-waste recycling Bangalore',
    'sustainable tech India',
    'circular economy',
    'green technology India',
    'e-waste management company'
  ],
  openGraph: {
    title: 'About Us - DMD Green Tech Revive',

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
        <MissionVision />


        <Timeline />
        <Team />

      </main>
      <Footer />
    </>
  );
}
