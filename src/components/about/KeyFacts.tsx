import Link from 'next/link';
import { BUSINESS } from '@/src/lib/business';

// Plain, quotable facts for people and for AI answer engines. Only facts already
// shown elsewhere on the site belong here (CLAUDE.md T12).
export default function KeyFacts() {
  const facts: { label: string; value: React.ReactNode }[] = [
    { label: 'Name', value: BUSINESS.name },
    { label: 'Part of', value: BUSINESS.parentLine.replace(/^Unit of /, '') },
    { label: 'Founder', value: `${BUSINESS.founder.name} (${BUSINESS.founder.role})` },
    { label: 'Incorporated', value: BUSINESS.incorporated },
    { label: 'Based in', value: BUSINESS.addressDisplay },
    { label: 'Services', value: BUSINESS.services.join(', ') },
    { label: 'Serves', value: 'Offices and homes across Pune' },
    { label: 'Items accepted', value: <Link href="/e-waste-categories" className="text-emerald-700 underline">All seven Schedule I categories of the E-Waste (Management) Rules, 2022</Link> },
    { label: 'Hours', value: BUSINESS.hours.display },
    { label: 'Phone / WhatsApp', value: <a href={BUSINESS.phoneHref} className="text-emerald-700 underline">{BUSINESS.phoneDisplay}</a> },
    { label: 'Email', value: <a href={`mailto:${BUSINESS.email}`} className="text-emerald-700 underline break-all">{BUSINESS.email}</a> },
  ];

  return (
    <section id="key-facts" className="py-10 md:py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Key facts</h2>
        <p className="text-gray-600 mb-6">{BUSINESS.name} at a glance.</p>
        <dl className="divide-y divide-gray-200 border-y border-gray-200">
          {facts.map((f) => (
            <div key={f.label} className="grid sm:grid-cols-[180px_1fr] gap-1 sm:gap-6 py-3">
              <dt className="text-sm font-semibold text-gray-500">{f.label}</dt>
              <dd className="text-gray-900">{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
