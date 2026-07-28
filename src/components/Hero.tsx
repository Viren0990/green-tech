import Link from 'next/link';
import { Leaf, ShieldCheck, Check, CheckCircle, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero-font-reset relative min-h-screen overflow-hidden flex items-end pb-16 md:pb-20 lg:items-center lg:pb-0">

      {/* --- FULL BLEED BACKGROUND IMAGE --- */}
      <img
        src="/hero-bg.png"
        alt="DMD Green Tech – e-waste refurbishment workshop with greenery"
        className="absolute inset-0 w-full h-full object-cover object-[75%_center] lg:object-center"
      />

      {/* --- LIGHT OVERLAY for text readability on the left --- */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#e8f5e9]/65 via-[#e8f5e9]/55 to-transparent z-[1]" />
      {/* Extra left-side softener for mobile */}
      <div className="absolute inset-0 bg-[#e8f5e9]/40 lg:bg-transparent z-[1]" />

      {/* --- CONTENT --- */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-32 lg:pt-24">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-end lg:items-center">

          {/* --- LEFT CONTENT (3 cols) --- */}
          <div className="lg:col-span-3 space-y-7 text-center lg:text-left flex flex-col items-center lg:items-start">
            <div className="font-sans hidden md:inline-flex items-center gap-2 bg-emerald-700/10 backdrop-blur-md px-4 py-2 rounded-full border border-emerald-600/20 text-emerald-800 text-sm font-medium shadow-sm">
              <ShieldCheck size={16} />
              <span>AUTHORIZED E-WASTE REFURBISHER</span>
            </div>

            <h1 className="pt-12 md:pt-0 text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight text-gray-900 w-full">
              Reviving Tech, <br />
              <span className="text-emerald-600">
                Restoring Nature
              </span>
            </h1>

            <p className="text-gray-700 text-lg md:text-lg xl:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed">
              India&apos;s premier certified e-waste recycling and restoration service in Pune.
              We turn your obsolete electronics into resources, bridging the gap
              between technology and sustainability.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center lg:justify-start">
              <Link
                href="/contact"
                className="group bg-emerald-600 text-white px-6 py-3 xl:px-8 xl:py-4 rounded-full transition-all shadow-lg shadow-emerald-600/30 hover:shadow-xl hover:bg-emerald-700 flex items-center justify-center gap-2.5 font-semibold"
              >
                <Leaf size={20} />
                Schedule Pickup
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/what-we-do"
                className="group border border-emerald-700/30 text-emerald-800 backdrop-blur-sm px-6 py-3 xl:px-8 xl:py-4 rounded-full hover:border-emerald-700/60 hover:bg-emerald-50/60 transition-all text-center font-medium"
              >
                Learn More
              </Link>
            </div>

            <div className="hidden md:block pt-6 mt-2 border-t border-emerald-800/15">
              <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-gray-700">
                <span className="flex items-center gap-2">
                  <div className="bg-emerald-500/20 rounded-full p-1"><Check size={12} className="text-emerald-600" /></div>
                  Less waste
                </span>
                <span className="flex items-center gap-2">
                  <div className="bg-emerald-500/20 rounded-full p-1"><Check size={12} className="text-emerald-600" /></div>
                  Good for environment
                </span>
                <span className="flex items-center gap-2">
                  <div className="bg-emerald-500/20 rounded-full p-1"><Check size={12} className="text-emerald-600" /></div>
                  Safe disposal
                </span>
              </div>
            </div>
          </div>

          {/* --- RIGHT STAT CARDS --- */}
          <div className="lg:col-span-2 flex flex-col gap-3 lg:pl-10">
            {/* MPCB Badge Card */}
            <div className="group relative overflow-hidden bg-white/60 backdrop-blur-lg rounded-2xl p-4 border border-emerald-200/60 hover:border-emerald-300 transition-all shadow-lg shadow-emerald-900/10">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-50/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative flex items-center gap-4">
                <div className="w-10 h-10 bg-emerald-500/15 rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="text-emerald-600" size={20} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-0.5">Certification</p>
                  <p className="text-base font-medium text-gray-900">MPCB Verified</p>
                </div>
              </div>
            </div>

            {/* Green Impact Card */}
            <div className="group relative overflow-hidden bg-white/60 backdrop-blur-lg rounded-2xl p-4 border border-emerald-200/60 hover:border-emerald-300 transition-all shadow-lg shadow-emerald-900/10">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-50/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative flex items-center gap-4">
                <div className="w-10 h-10 bg-emerald-500/15 rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Leaf className="text-emerald-600" size={20} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-0.5">Green Impact</p>
                  <p className="text-base font-medium text-gray-900">2,500+ <span className="text-sm text-gray-500">Trees Planted</span></p>
                </div>
              </div>
            </div>

            {/* Devices Recycled Card */}
            <div className="group relative overflow-hidden bg-white/60 backdrop-blur-lg rounded-2xl p-4 border border-emerald-200/60 hover:border-emerald-300 transition-all shadow-lg shadow-emerald-900/10">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-50/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative flex items-center gap-4">
                <div className="w-10 h-10 bg-emerald-500/15 rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <ShieldCheck className="text-emerald-600" size={20} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-0.5">Devices Processed</p>
                  <p className="text-base font-medium text-gray-900">10,000+ <span className="text-sm text-gray-500">&amp; Counting</span></p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}