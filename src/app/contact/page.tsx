import Navbar from '@/src/components/Navbar';
import Footer from '@/src/components/Footer';
import ContactForm from '@/src/components/contact/ContactForm';
import ContactInfo from '@/src/components/contact/ContactInfo';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - Schedule E-Waste Pickup Bangalore',
  description: 'Contact DMD Green Tech Revive for e-waste pickup in Pune and across India.',
  keywords: [
    'e-waste pickup Pune',
    'schedule e-waste collection',
    'contact DMD Green Tech',
    'e-waste recycling contact',
    'corporate pickup India',
    'free e-waste pickup'
  ],
  openGraph: {
    title: 'Contact Us - DMD Green Tech Revive',
    description: 'Schedule your e-waste pickup today. Free collection for bulk quantities across India.',
  },
  alternates: {
    canonical: 'https://dmdgreentechrevive.com/story',
  },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <ContactForm />
        <ContactInfo />
      </main>
      <Footer />
    </>
  );
}
