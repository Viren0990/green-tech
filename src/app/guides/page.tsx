import Link from 'next/link';
import { ArrowRight, Clock } from 'lucide-react';
import Navbar from '@/src/components/Navbar';
import Footer from '@/src/components/Footer';
import JsonLd from '@/src/components/JsonLd';
import { SITE_URL } from '@/src/lib/business';
import { breadcrumbJsonLd, pageMetadata } from '@/src/lib/seo';
import { formatDate, guides, readingMinutes } from '@/src/lib/guides';

export const metadata = pageMetadata({
  title: 'E-Waste Disposal Guides, Pune',
  description: 'Plain-language guides on disposing of old laptops, servers and phones in Pune: the e-waste rules, data wiping and what paperwork to keep.',
  path: '/guides',
});

export default function GuidesIndex() {
  const sorted = [...guides].sort((a, b) => b.updated.localeCompare(a.updated));

  const listJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: sorted.map((g, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `${SITE_URL}/guides/${g.slug}`,
      name: g.title,
    })),
  };

  return (
    <>
      <Navbar />
      <JsonLd data={breadcrumbJsonLd('Guides', '/guides')} />
      <JsonLd data={listJsonLd} />
      <main className="bg-gray-50 min-h-screen pt-24 md:pt-32 pb-12 md:pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="max-w-2xl mb-8 md:mb-12">
            <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700 mb-2">Guides</p>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-3">E-waste guides for Pune offices and homes</h1>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Straight answers on getting rid of old electronics safely: what the rules ask of you, how to protect
              your data, and what to do step by step. Each guide lists the official sources it is based on.
            </p>
          </header>

          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            {sorted.map((g) => (
              <Link
                key={g.slug}
                href={`/guides/${g.slug}`}
                className="group flex flex-col rounded-2xl bg-white border border-gray-200 p-5 md:p-6 hover:border-emerald-500 hover:shadow-lg transition"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-emerald-700 mb-2">For {g.audience.toLowerCase()}</p>
                <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-700">{g.title}</h2>
                <p className="text-gray-600 text-[15px] leading-relaxed mb-4">{g.description}</p>
                <div className="mt-auto flex items-center justify-between text-sm text-gray-500">
                  <span className="inline-flex items-center gap-1.5">
                    <Clock size={14} /> {readingMinutes(g)} min · {formatDate(g.updated)}
                  </span>
                  <ArrowRight size={18} className="text-emerald-700 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
