import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { guides } from '@/src/lib/guides';

// Homepage entry point to /guides (the guides are kept out of the desktop navbar).
export default function GuidesTeaser() {
  // Newest first, but always keep one slot for a household guide (our second audience).
  const sorted = [...guides].sort((a, b) => b.updated.localeCompare(a.updated));
  const home = sorted.find((g) => g.audience === 'Homes');
  const latest = home
    ? [...sorted.filter((g) => g !== home).slice(0, 2), home]
    : sorted.slice(0, 3);

  return (
    <section aria-labelledby="guides-heading" className="py-12 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-6 md:mb-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700 mb-2">Guides</p>
            <h2 id="guides-heading" className="text-3xl md:text-4xl font-bold text-gray-900">Helpful guides</h2>
            <p className="text-gray-600 mt-2 max-w-xl">Plain answers on the e-waste rules, wiping your data and what paperwork to keep.</p>
          </div>
          <Link href="/guides" className="inline-flex items-center gap-1.5 font-semibold text-emerald-700 hover:text-emerald-800 shrink-0">
            All guides <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {latest.map((g) => (
            <Link
              key={g.slug}
              href={`/guides/${g.slug}`}
              className="group flex flex-col rounded-2xl border border-gray-200 p-5 md:p-6 hover:border-emerald-500 hover:shadow-lg transition"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-emerald-700 mb-2">For {g.audience.toLowerCase()}</p>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-emerald-700">{g.title}</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed mb-4 line-clamp-3">{g.description}</p>
              <span className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-emerald-700">
                Read guide <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
