import Navbar from '@/src/components//Navbar';
import Footer from '@/src/components/Footer';
import StoryHero from '@/src/components/story/StoryHero';
import Timeline from '@/src/components/story/Timeline';
import Team from '@/src/components/story/Team';

import type { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'Our Story - Leading E-Waste Recycling Since 2018',
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
    title: 'Our Story - DMD Green Tech Revive',
   
  },
  alternates: {
    canonical: 'https://dmdgreentechrevive.com/story',
  },
};
export default function StoryPage() {
  return (
    <>
      <Navbar />
      <main>
        <StoryHero />
        
       
        <Timeline />
        <Team />
      
      </main>
      <Footer />
    </>
  );
}
