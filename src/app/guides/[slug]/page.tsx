import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { ArrowLeft, ArrowRight, Calendar, Clock, Phone, Truck } from 'lucide-react';
import Navbar from '@/src/components/Navbar';
import Footer from '@/src/components/Footer';
import JsonLd from '@/src/components/JsonLd';
import GuideBody from '@/src/components/guides/GuideBody';
import { BUSINESS, SITE_URL } from '@/src/lib/business';
import { breadcrumbJsonLd, pageMetadata } from '@/src/lib/seo';
import { GUIDE_AUTHOR, formatDate, getGuide, guides, plainText, readingMinutes } from '@/src/lib/guides';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: Readonly<PageProps>): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};
  return pageMetadata({
    title: guide.metaTitle,
    description: guide.description,
    path: `/guides/${guide.slug}`,
    article: { publishedTime: guide.published, modifiedTime: guide.updated, authors: [GUIDE_AUTHOR] },
  });
}

export default async function GuidePage({ params }: Readonly<PageProps>) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  const path = `/guides/${guide.slug}`;
  const others = guides.filter((g) => g.slug !== guide.slug).slice(0, 2);

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: guide.title,
    description: guide.description,
    datePublished: guide.published,
    dateModified: guide.updated,
    inLanguage: 'en-IN',
    mainEntityOfPage: `${SITE_URL}${path}`,
    image: `${SITE_URL}/og-image.png`,
    author: { '@type': 'Organization', name: BUSINESS.name, url: SITE_URL },
    publisher: { '@id': `${SITE_URL}/#organization` },
    citation: guide.sources.map((s) => s.url),
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: guide.faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: plainText(f.answer) },
    })),
  };

  return (
    <>
      <Navbar />
      <JsonLd data={breadcrumbJsonLd(guide.title, path, { name: 'Guides', path: '/guides' })} />
      <JsonLd data={articleJsonLd} />
      {guide.faqs.length > 0 && <JsonLd data={faqJsonLd} />}

      <main className="bg-white pt-24 md:pt-32 pb-12 md:pb-20">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-700 text-[17px] leading-relaxed [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-gray-900 [&_h2]:mt-10 [&_h2]:mb-3 [&_h2]:scroll-mt-24 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-gray-900 [&_h3]:mt-6 [&_h3]:mb-2 [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-4 [&_li]:mb-1.5 [&_a]:text-emerald-700 [&_a]:underline [&_a]:underline-offset-2">
          <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-4">
            <Link href="/guides" className="inline-flex items-center gap-1 !no-underline !text-gray-500 hover:!text-emerald-700">
              <ArrowLeft size={14} /> All guides
            </Link>
          </nav>

          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700 mb-2">Guide for {guide.audience.toLowerCase()}</p>
          <h1 className="text-3xl md:text-[2.6rem] md:leading-tight font-bold text-gray-900 mb-4">{guide.title}</h1>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-500 mb-8">
            <span>By {GUIDE_AUTHOR}</span>
            <span className="inline-flex items-center gap-1">
              <Calendar size={14} />
              {guide.updated !== guide.published ? 'Updated ' : ''}
              <time dateTime={guide.updated}>{formatDate(guide.updated)}</time>
            </span>
            <span className="inline-flex items-center gap-1"><Clock size={14} />{readingMinutes(guide)} min read</span>
          </div>

          <section aria-label="In short" className="rounded-2xl bg-gray-50 border border-gray-200 p-5 md:p-6 mb-8">
            <p className="font-semibold text-gray-900 mb-2">In short</p>
            <GuideBody blocks={[{ type: 'ul', items: guide.keyPoints }]} />
          </section>

          <GuideBody blocks={guide.body} />

          {guide.faqs.length > 0 && (
            <>
              <h2 id="questions">Common questions</h2>
              <div className="space-y-3 mb-8">
                {guide.faqs.map((f) => (
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
            </>
          )}

          {/* Call to action */}
          <aside className="my-10 rounded-2xl bg-emerald-900 text-white p-6 md:p-8">
            <p className="text-xl font-bold mb-2">Have e-waste to clear in Pune?</p>
            <p className="text-emerald-100/90 mb-5 text-base">
              Tell us what you have and where it is, and we will arrange a pickup.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact" className="!no-underline inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 !text-white font-semibold px-5 py-3 hover:bg-emerald-400">
                <Truck size={18} /> Schedule a pickup
              </Link>
              <a href={BUSINESS.phoneHref} className="!no-underline inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 !text-white font-medium px-5 py-3 hover:bg-white/10">
                <Phone size={18} /> {BUSINESS.phoneDisplay}
              </a>
            </div>
          </aside>

          {guide.related.length > 0 && (
            <>
              <h2 id="related">Related on this site</h2>
              <ul>
                {guide.related.map((r) => (
                  <li key={r.href}><Link href={r.href}>{r.label}</Link></li>
                ))}
              </ul>
            </>
          )}

          <h2 id="sources">Sources</h2>
          <p className="text-[15px]">
            We checked the facts in this guide against these official documents. Rules change, so check the current
            version before relying on it for compliance.
          </p>
          <ol className="text-[15px] break-words">
            {guide.sources.map((s) => (
              <li key={s.url}>
                <a href={s.url} target="_blank" rel="noopener noreferrer">{s.label}</a>
              </li>
            ))}
          </ol>
        </article>

        {others.length > 0 && (
          <section aria-label="More guides" className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
            <h2 className="text-xl font-bold text-gray-900 mb-4">More guides</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {others.map((g) => (
                <Link key={g.slug} href={`/guides/${g.slug}`} className="group rounded-xl border border-gray-200 p-4 hover:border-emerald-500 transition">
                  <p className="text-xs font-semibold uppercase tracking-wider text-emerald-700 mb-1">{g.audience}</p>
                  <p className="font-semibold text-gray-900 group-hover:text-emerald-700">{g.title}</p>
                  <span className="mt-2 inline-flex items-center gap-1 text-sm text-emerald-700">Read <ArrowRight size={14} /></span>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
