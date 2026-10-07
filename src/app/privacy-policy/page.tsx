import LegalPage from '@/src/components/LegalPage';
import { BUSINESS } from '@/src/lib/business';
import { pageMetadata } from '@/src/lib/seo';

export const metadata = pageMetadata({
  title: 'Privacy Policy',
  description: 'How DMD Green Tech Revive collects, uses and protects the details you share when you book an e-waste pickup or contact us.',
  path: '/privacy-policy',
});

export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privacy Policy" path="/privacy-policy" updated="7 October 2026">
      <p>
        This policy explains what information {BUSINESS.name} (&quot;we&quot;, &quot;us&quot;) collects through
        this website, why we collect it, and what you can ask us to do with it.
      </p>

      <h2>What we collect</h2>
      <ul>
        <li>
          <strong>Contact and pickup form:</strong> your name, phone number, address or location, and your message.
        </li>
        <li>
          <strong>WhatsApp, phone and email:</strong> whatever you choose to send us when you contact us directly.
          WhatsApp messages are also handled under WhatsApp&apos;s own privacy policy.
        </li>
        <li>
          <strong>Website usage:</strong> we use Google Tag Manager, the Meta (Facebook) pixel and Vercel Analytics
          to understand how visitors use the site and how well our ads work. These tools may set cookies and collect
          details such as pages visited, device and browser type, and approximate location.
        </li>
      </ul>

      <h2>How we use it</h2>
      <ul>
        <li>To arrange and carry out e-waste pickups and reply to your enquiries.</li>
        <li>To issue certificates for the e-waste you hand over.</li>
        <li>To improve the website and measure our advertising.</li>
      </ul>
      <p>We do not sell your personal information.</p>

      <h2>Where it is stored</h2>
      <p>
        Form submissions are saved in our database, hosted by Neon, and sent to our team by email so we can
        respond.
      </p>

      <h2>Data on devices you give us</h2>
      <p>
        Devices handed to us for recycling or refurbishment go through data sanitisation before they are processed.
        Please back up anything you need before pickup, because we cannot recover data once it has been wiped.
      </p>

      <h2>How long we keep it</h2>
      <p>
        We keep contact form details for up to 2 years, then delete them. You can ask us to delete them sooner.
      </p>

      <h2>Your choices</h2>
      <p>
        You can ask us to show, correct or delete the personal information we hold about you. You can also block or
        delete cookies in your browser settings.
      </p>

      <h2>Contact</h2>
      <p>
        {BUSINESS.name}, {BUSINESS.addressDisplay}
        <br />
        Email: <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a> · Phone:{' '}
        <a href={BUSINESS.phoneHref}>{BUSINESS.phoneDisplay}</a>
      </p>
    </LegalPage>
  );
}
