'use client';

import Link from 'next/link';
import { ArrowRight, Leaf, Globe, Recycle } from 'lucide-react';
import { motion } from 'framer-motion';
import hero2 from '@/src/images/w33.webp';
import Image from 'next/image';

const highlights = [
  { icon: Leaf, value: '2,500+', label: 'Trees Planted', color: 'text-emerald-600', bg: 'bg-emerald-100' },
  { icon: Globe, value: '5+', label: 'Countries Visited', color: 'text-sky-600', bg: 'bg-sky-100' },
  { icon: Recycle, value: 'Zero', label: 'Landfill Policy', color: 'text-amber-600', bg: 'bg-amber-100' },
];

export default function Story() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Top Wave Divider separating from Services */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[50px] md:h-[80px]">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="fill-emerald-600/10"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="fill-emerald-600/15"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="fill-emerald-50/60"></path>
        </svg>
      </div>
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
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
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

           
            {/* Decorative frame accent removed as requested */}
          </motion.div>

          {/* Content side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start"
          >
            {/* Tag */}
            <span className="inline-block text-sm font-bold uppercase tracking-[0.2em] text-emerald-600 bg-emerald-50 px-4 py-1.5 rounded-full border border-emerald-100">
              Our Story
            </span>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[2.25rem] xl:text-[2.75rem] font-bold text-gray-900 leading-tight">
              From a Drought-Hit Village to{' '}
              <span className="text-emerald-600">India&apos;s Green Revival</span>
            </h2>

            {/* Lead paragraph */}
            <p className="text-gray-600 leading-relaxed text-lg mx-auto lg:mx-0 max-w-2xl">
              It started with a simple act of hope — planting 50 coconut saplings during a
              severe drought. That moment sparked a lifelong realization:{' '}
              <span className="font-semibold text-gray-800">
                nature gives back only when we protect it.
              </span>
            </p>

            {/* Second paragraph */}
            <p className="text-gray-500 leading-relaxed mx-auto lg:mx-0 max-w-2xl">
              From the mineral-rich landscapes of India to witnessing the global impact of
              waste, our founder&apos;s journey bridged the gap between precious resources and
              neglected e-waste. DMD Greentech Revive was born from the conviction that waste
              is not an end, but the beginning of a circular economy.
            </p>

            {/* Highlight stats — clean, typography-driven design */}
            <div className="flex flex-row justify-center lg:justify-start gap-2 sm:gap-6 pt-4 w-full flex-wrap sm:flex-nowrap">
              {highlights.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex flex-col sm:flex-row items-center gap-1.5 sm:gap-4 text-center sm:text-left">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center shrink-0 ${item.bg}`}>
                      <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${item.color}`} />
                    </div>
                    <div>
                      <p className="text-sm sm:text-2xl font-extrabold text-gray-900 leading-none tracking-tight">
                        {item.value}
                      </p>
                      <p className="text-[10px] sm:text-sm text-gray-500 font-medium mt-1 leading-tight">{item.label}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="pt-6">
              <Link
                href="/about-us"
                className="inline-flex items-center gap-2 text-emerald-600 font-bold text-lg hover:text-emerald-700 transition-colors group justify-center lg:justify-start w-full lg:w-auto"
              >
                Read Our Full Journey
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}