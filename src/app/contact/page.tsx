import { pageMetadata, breadcrumbJsonLd } from '@/src/lib/seo';
import JsonLd from '@/src/components/JsonLd';
import Navbar from '@/src/components/Navbar';
import Footer from '@/src/components/Footer';
import ContactForm from '@/src/components/contact/ContactForm';
import ContactInfo from '@/src/components/contact/ContactInfo';

export const metadata = pageMetadata({
  title: 'Schedule Free E-Waste Pickup, Pune',
  description: 'Book a free e-waste pickup in Pune. Tell us what you have and where, and our team will confirm a collection slot. Call or WhatsApp +91 97631 23699.',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <JsonLd data={breadcrumbJsonLd('Contact', '/contact')} />
      <main>
        <ContactForm />
        <ContactInfo />
      </main>
      <Footer />
    </>
  );
}
