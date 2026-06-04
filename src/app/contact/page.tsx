import Navbar from '@/src/components/Navbar';
import Footer from '@/src/components/Footer';
import ContactForm from '@/src/components/contact/ContactForm';
import ContactInfo from '@/src/components/contact/ContactInfo';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us — Free E-Waste Pickup in Pune | Schedule Collection Today',
  description: 'Schedule free e-waste pickup in Pune today! DMD Green Tech collects old electronics, laptops, phones & IT equipment from your doorstep. Call +91-91-2067-6799 or fill our form for same-day response.',
  keywords: [
    'e-waste pickup Pune',
    'schedule e-waste collection',
    'contact DMD Green Tech',
    'e-waste recycling contact',
    'corporate pickup India',
    'free e-waste pickup',
    'e waste collection near me',
    'environmental company near me',
    'recycle old electronics Pune',
    'e waste pickup near me'
  ],
  openGraph: {
    title: 'Contact Us — Schedule Free E-Waste Pickup | DMD Green Tech',
    description: 'Free doorstep e-waste collection in Pune. Schedule pickup for old electronics, laptops & IT equipment. Same-day response.',
  },
  alternates: {
    canonical: 'https://dmdgreentechrevive.com/contact',
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
