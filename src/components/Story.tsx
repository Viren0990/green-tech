'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import hero2 from '@/src/images/w33.webp';
import Image from 'next/image';

const highlights = [
  { emoji: '🌳', value: '2,500+', label: 'Trees Planted', color: 'bg-emerald-600' },
  { emoji: '🌍', value: '5+', label: 'Countries Visited', color: 'bg-sky-500' },
  { emoji: '♻️', value: 'Zero', label: 'Landfill Policy', color: 'bg-amber-500' },
];

export default function Story() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-white via-emerald-50/30 to-white overflow-hidden">
      {/* Background dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: 'radial-gradient(#15803d 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Soft glow accents */}
      <div className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-emerald-200/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-[350px] h-[350px] bg-green-200/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image side */}
          <div className="relative">
            {/* Main image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={hero2}
                alt="From nature to technology - The DMD Story"
                className="w-full h-[420px] sm:h-[500px] object-cover"
                placeholder="blur"
              />
              {/* Subtle dark overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>

           
            {/* Decorative frame accent */}
            <div className="absolute -top-3 -left-3 w-24 h-24 border-l-[3px] border-t-[3px] border-emerald-300 rounded-tl-3xl pointer-events-none" />
          </div>

          {/* Content side */}
          <div className="space-y-6">
            {/* Tag */}
            <span className="inline-block text-sm font-bold uppercase tracking-[0.2em] text-emerald-600 bg-emerald-50 px-4 py-1.5 rounded-full border border-emerald-100">
              Our Story
            </span>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-gray-900 leading-tight">
              From a Drought-Hit Village to{' '}
              <span className="text-emerald-600">India&apos;s Green Revival</span>
            </h2>

            {/* Lead paragraph */}
            <p className="text-gray-600 leading-relaxed text-lg">
              It started with a simple act of hope — planting 50 coconut saplings during a
              severe drought. That moment sparked a lifelong realization:{' '}
              <span className="font-semibold text-gray-800">
                nature gives back only when we protect it.
              </span>
            </p>

            {/* Second paragraph */}
            <p className="text-gray-500 leading-relaxed">
              From the mineral-rich landscapes of India to witnessing the global impact of
              waste, our founder&apos;s journey bridged the gap between precious resources and
              neglected e-waste. DMD Greentech Revive was born from the conviction that waste
              is not an end, but the beginning of a circular economy.
            </p>

            {/* Highlight stats — clean, typography-driven design */}
            <div className="flex flex-wrap gap-x-8 gap-y-4 pt-2">
              {highlights.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-2xl leading-none">{item.emoji}</span>
                    <div className={`w-1 h-1 rounded-full ${item.color}`} />
                  </div>
                  <div>
                    <p className="text-xl font-extrabold text-gray-900 leading-none tracking-tight">
                      {item.value}
                    </p>
                    <p className="text-xs text-gray-500 font-medium mt-1">{item.label}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-2">
              <Link
                href="/about-us"
                className="inline-flex items-center gap-2 bg-emerald-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-emerald-700 transition-colors duration-200 shadow-md shadow-emerald-200 group"
              >
                Read Our Full Journey
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}