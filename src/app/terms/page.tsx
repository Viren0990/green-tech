import Link from 'next/link';
import LegalPage from '@/src/components/LegalPage';
import { BUSINESS } from '@/src/lib/business';
import { pageMetadata } from '@/src/lib/seo';

export const metadata = pageMetadata({
  title: 'Terms of Service',
  description: 'The terms that apply when you use the DMD Green Tech Revive website or book an e-waste pickup in Pune.',
  path: '/terms',
});

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service" path="/terms" updated="7 October 2026">
      <p>
        These terms apply when you use this website or book an e-waste pickup with {BUSINESS.name}. By using the
        site or our services, you agree to them.
      </p>

      <h2>Pickups</h2>
      <ul>
        <li>We collect e-waste from homes, housing societies and businesses in our service area in Pune.</li>
        <li>Pickup slots are confirmed by our team after you contact us.</li>
        <li>Pickup is free of charge.</li>
      </ul>

      <h2>What we accept</h2>
      <p>
        We accept the electrical and electronic items listed on our <Link href="/e-waste-categories">items we accept</Link>{' '}
        page. We do not accept waste batteries (covered under the Battery Waste Management Rules, 2022) or
        radioactive waste.
      </p>

      <h2>Your data on devices</h2>
      <p>
        Please back up anything you need before handing over a device. Devices go through data sanitisation, after
        which data cannot be recovered.
      </p>

      <h2>Ownership of items</h2>
      <p>
        Ownership of collected items is agreed with each customer at the time of pickup. If you might want an item
        back, tell us before it is collected. Once a device has been wiped, dismantled or recycled, it cannot be
        returned.
      </p>

      <h2>Certificates and paperwork</h2>
      <ul>
        <li>
          <strong>Households and housing societies:</strong> an e-waste appreciation certificate from{' '}
          {BUSINESS.name}.
        </li>
        <li>
          <strong>Companies:</strong> recycling and refurbishment certificates for the equipment handed over.
        </li>
      </ul>

      <h2>Website content</h2>
      <p>
        We try to keep the information on this site accurate, but it may change without notice. The site content,
        logo and images belong to {BUSINESS.name} and may not be copied without permission.
      </p>

      <h2>Governing law</h2>
      <p>These terms are governed by the laws of India. Any disputes are subject to the courts of Maharashtra.</p>

      <h2>Contact</h2>
      <p>
        Questions about these terms: <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a> or{' '}
        <a href={BUSINESS.phoneHref}>{BUSINESS.phoneDisplay}</a>.
      </p>
    </LegalPage>
  );
}
