import Navbar from '@/src/components/Navbar';
import Footer from '@/src/components/Footer';
import JsonLd from '@/src/components/JsonLd';
import { breadcrumbJsonLd } from '@/src/lib/seo';

interface LegalPageProps {
  title: string;
  path: string;
  updated: string;
  children: React.ReactNode;
}

// Shared shell for the privacy policy and terms pages.
export default function LegalPage({ title, path, updated, children }: LegalPageProps) {
  return (
    <>
      <Navbar />
      <JsonLd data={breadcrumbJsonLd(title, path)} />
      <main className="bg-white pt-32 pb-20">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-700 leading-relaxed [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-gray-900 [&_h2]:mt-10 [&_h2]:mb-3 [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_li]:mb-1 [&_a]:text-emerald-700 [&_a]:underline">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{title}</h1>
          <p className="text-sm text-gray-500 mb-8">Last updated: {updated}</p>
          {children}
        </article>
      </main>
      <Footer />
    </>
  );
}
