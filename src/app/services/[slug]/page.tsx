import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { ArrowRight, Check, Phone, Truck } from 'lucide-react';
import Navbar from '@/src/components/Navbar';
import Footer from '@/src/components/Footer';
import JsonLd from '@/src/components/JsonLd';
import GuideBody from '@/src/components/guides/GuideBody';
import { BUSINESS, SITE_URL } from '@/src/lib/business';
import { breadcrumbJsonLd, pageMetadata } from '@/src/lib/seo';
import { getServicePage, servicePages } from '@/src/lib/services';
import { plainText } from '@/src/lib/guides';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return servicePages.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Readonly<PageProps>): Promise<Metadata> {
  const { slug } = await params;
  const page = getServicePage(slug);
  if (!page) return {};
  const meta = pageMetadata({ title: page.metaTitle, description: page.description, path: `/services/${page.slug}` });
  // Drafts still carry [TODO] markers, so keep them out of search results.
  return page.published ? meta : { ...meta, robots: { index: false, follow: true } };
}

const WHATSAPP_ICON =
  'M16 3C9.383 3 4 8.383 4 15c0 2.332.672 4.503 1.828 6.34L4 29l7.86-1.79A11.9 11.9 0 0 0 16 27c6.617 0 12-5.383 12-12S22.617 3 16 3zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10a9.9 9.9 0 0 1-4.93-1.332l-.35-.203-4.65 1.059 1.047-4.51-.227-.37A9.9 9.9 0 0 1 6 15c0-5.514 4.486-10 10-10z';

export default async function ServicePageView({ params }: Readonly<PageProps>) {
  const { slug } = await params;
  const page = getServicePage(slug);
  if (!page) notFound();

  const path = `/services/${page.slug}`;

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE_URL}${path}#service`,
    name: page.name,
    serviceType: page.name,
    description: page.description,
    url: `${SITE_URL}${path}`,
    provider: { '@id': `${SITE_URL}/#business` },
    areaServed: { '@type': 'City', name: 'Pune' },
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    // TODO notes are for the owner, not for search engines
    mainEntity: page.faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: plainText(f.answer).replace(/\s*\[TODO:[^\]]*\]/g, '') },
    })),
  };

  return (
    <>
      <Navbar />
      <JsonLd data={breadcrumbJsonLd(page.title, path, { name: 'Services', path: '/what-we-do' })} />
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={faqJsonLd} />

      <main className="bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-b from-emerald-950 to-emerald-900 text-white pt-28 md:pt-36 pb-10 md:pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="text-sm text-emerald-200/80 mb-4">
              <Link href="/what-we-do" className="hover:text-white">Services</Link> <span aria-hidden>/</span> {page.name}
            </nav>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">{page.title}</h1>
            <p className="text-emerald-50/90 text-base md:text-lg leading-relaxed max-w-3xl mb-6">{page.intro}</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 font-semibold px-6 py-3 hover:bg-emerald-400">
                <Truck size={18} /> Schedule a pickup
              </Link>
              <a href={BUSINESS.whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 font-medium px-6 py-3 hover:bg-white/10">
                <svg viewBox="0 0 32 32" className="w-5 h-5" aria-hidden="true"><path fill="currentColor" d={WHATSAPP_ICON} /></svg>
                WhatsApp us
              </a>
              <a href={BUSINESS.phoneHref} className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 font-medium px-6 py-3 hover:bg-white/10">
                <Phone size={18} /> {BUSINESS.phoneDisplay}
              </a>
            </div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 text-gray-700 text-[17px] leading-relaxed [&_h2]:text-2xl [&_h2]:md:text-3xl [&_h2]:font-bold [&_h2]:text-gray-900 [&_h2]:mb-4 [&_p]:mb-4 [&_a]:text-emerald-700 [&_a]:underline [&_a]:underline-offset-2">
          <section className="mb-12">
            <h2>Who it is for</h2>
            <ul className="space-y-2">
              {page.forWho.map((item) => (
                <li key={item} className="flex gap-3">
                  <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-1" strokeWidth={3} />
                  <div className="[&_p]:mb-0"><GuideBody blocks={[{ type: 'p', text: item }]} /></div>
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-12">
            <h2>How it works</h2>
            <ol className="space-y-4">
              {page.steps.map((step, i) => (
                <li key={step.title} className="flex gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center">{i + 1}</span>
                  <div className="[&_p]:mb-0">
                    <p className="font-semibold text-gray-900 !mb-0.5">{step.title}</p>
                    <GuideBody blocks={[{ type: 'p', text: step.text }]} />
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section className="mb-12">
            <h2>Paperwork you receive</h2>
            <GuideBody blocks={page.paperwork} />
          </section>

          <section className="mb-12 grid md:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-gray-200 p-5 [&_p]:mb-0">
              <h2 className="!text-xl !mb-2">What we accept</h2>
              <GuideBody blocks={[{ type: 'p', text: page.accepted }]} />
            </div>
            <div className="rounded-2xl border border-gray-200 p-5 [&_p]:mb-0">
              <h2 className="!text-xl !mb-2">Cost</h2>
              <GuideBody blocks={[{ type: 'p', text: page.pricing }]} />
            </div>
          </section>

          <section className="mb-12">
            <h2>Common questions</h2>
            <div className="space-y-3">
              {page.faqs.map((f) => (
                <details key={f.question} className="group rounded-xl border border-gray-200 px-4 py-3 open:bg-gray-50">
                  <summary className="cursor-pointer list-none font-semibold text-gray-900 flex justify-between gap-3 [&::-webkit-details-marker]:hidden">
                    {f.question}
                    <span className="text-emerald-700 transition-transform group-open:rotate-45 shrink-0" aria-hidden>+</span>
                  </summary>
                  <div className="mt-2 [&_p]:mb-0">
                    <GuideBody blocks={[{ type: 'p', text: f.answer }]} />
                  </div>
                </details>
              ))}
            </div>
          </section>

          <section className="rounded-2xl bg-emerald-900 text-white p-6 md:p-8 mb-12">
            <p className="text-xl font-bold !mb-2">Ready to clear your office e-waste?</p>
            <p className="text-emerald-100/90 text-base">Tell us what you have and where, and we will arrange a pickup.</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact" className="!no-underline inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 !text-white font-semibold px-5 py-3 hover:bg-emerald-400">
                <Truck size={18} /> Schedule a pickup
              </Link>
              <a href={BUSINESS.phoneHref} className="!no-underline inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 !text-white font-medium px-5 py-3 hover:bg-white/10">
                <Phone size={18} /> {BUSINESS.phoneDisplay}
              </a>
            </div>
          </section>

          <section>
            <h2>Related</h2>
            <div className="grid sm:grid-cols-3 gap-3">
              {page.related.map((r) => (
                <Link key={r.href} href={r.href} className="group !no-underline rounded-xl border border-gray-200 p-4 hover:border-emerald-500">
                  <span className="font-semibold !text-gray-900 group-hover:!text-emerald-700 text-base">{r.label}</span>
                  <ArrowRight size={16} className="mt-2 text-emerald-700" />
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
