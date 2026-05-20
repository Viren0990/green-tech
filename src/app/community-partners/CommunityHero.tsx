'use client';

import { Users, ArrowDown } from 'lucide-react';
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['700', '800'],
  style: ['normal', 'italic'],
});

export default function CommunityHero() {
  return (
    <section className="relative pt-20 pb-10 min-h-[65vh] flex flex-col justify-center overflow-hidden bg-gray-800">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Gradient blobs */}
      <div className="absolute -top-20 left-[15%] w-[500px] h-[500px] bg-emerald-600/15 rounded-full blur-[120px]" />
      <div className="absolute -bottom-32 right-[10%] w-[400px] h-[400px] bg-green-500/10 rounded-full blur-[100px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-teal-500/8 rounded-full blur-[80px]" />

      {/* Decorative corner accents */}
      <div className="absolute top-24 left-8 w-20 h-20 border-l-2 border-t-2 border-emerald-500/20 rounded-tl-2xl" />
      <div className="absolute bottom-8 right-8 w-20 h-20 border-r-2 border-b-2 border-emerald-500/20 rounded-br-2xl" />

      {/* Floating dots */}
      <div className="absolute top-32 right-[20%] w-2 h-2 bg-emerald-400/40 rounded-full" />
      <div className="absolute top-48 left-[12%] w-1.5 h-1.5 bg-green-400/30 rounded-full" />
      <div className="absolute bottom-24 left-[30%] w-2.5 h-2.5 bg-emerald-300/25 rounded-full" />
      <div className="absolute bottom-40 right-[15%] w-1.5 h-1.5 bg-teal-400/35 rounded-full" />

      <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center justify-center py-10">
          {/* Icon badge */}
          <div className="mb-6 w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center backdrop-blur-sm">
            <Users size={28} className="text-emerald-400" />
          </div>

          <p className="text-emerald-400 font-semibold mb-4 text-sm tracking-[0.2em] uppercase" style={{ fontFamily: 'system-ui, sans-serif' }}>
            Communities We Serve
          </p>

          <h1 className={`${playfair.className} text-5xl md:text-7xl font-extrabold text-white mb-6 leading-[1.1] tracking-tight`}>
            Community{' '}
            <span className="bg-gradient-to-r from-emerald-400 to-green-300 bg-clip-text text-transparent">
              Partners
            </span>
          </h1>

          <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto" style={{ fontFamily: 'system-ui, sans-serif' }}>
            Residential societies and communities that have joined hands with us for responsible e-waste disposal.
          </p>

          {/* Scroll hint */}
          <div className="mt-12 flex flex-col items-center gap-2 text-gray-500">
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <ArrowDown size={16} className="animate-bounce" />
          </div>
        </div>
      </div>

    </section>
  );
}
