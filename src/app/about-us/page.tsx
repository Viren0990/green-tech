import { pageMetadata, breadcrumbJsonLd } from '@/src/lib/seo';
import JsonLd from '@/src/components/JsonLd';
import Navbar from '@/src/components//Navbar';
import Footer from '@/src/components/Footer';
import StoryHero from '@/src/components/about/StoryHero';
import FullStory from '@/src/components/about/FullStory';
import Timeline from '@/src/components/about/Timeline';
import Team from '@/src/components/about/Team';
import MissionVision from '@/src/components/about/MissionVision';



export const metadata = pageMetadata({
  title: 'About Us: E-Waste Recycler in Pune',
  description: 'Meet the team behind DMD Green Tech Revive in Wagholi, Pune, and why we collect, wipe, refurbish and recycle old electronics instead of landfilling them.',
  path: '/about-us',
});
export default function StoryPage() {
  return (
    <>
      <Navbar />
      <JsonLd data={breadcrumbJsonLd('About Us', '/about-us')} />
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
