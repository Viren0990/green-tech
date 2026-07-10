import Link from 'next/link';
import { Leaf, ShieldCheck, Check, CheckCircle, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero-font-reset relative min-h-screen overflow-hidden flex items-end pb-16 md:pb-20 lg:items-center lg:pb-0">

      {/* --- FULL BLEED BACKGROUND IMAGE --- */}
      <img
        src="/hero-bg.png"
        alt="DMD Green Tech team at an e-waste recycling facility surrounded by greenery"
        className="absolute inset-0 w-full h-full object-cover object-center blur-[2px]"
      />

      {/* --- DARK OVERLAY (strong enough so text doesn't blend) --- */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1f0a]/40 via-[#0d2b0d]/60 to-[#0a1f0a]/40 z-[1]" />
      {/* Subtle vignette for depth */}
      <div className="absolute inset-0 z-[1]" style={{ background: 'radial-gradient(ellipse at center, transparent 40%, rgba(5,15,5,0.4) 100%)' }} />

      {/* --- CONTENT --- */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-32 lg:pt-24">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-end lg:items-center">

          {/* --- LEFT CONTENT (3 cols) --- */}
          <div className="lg:col-span-3 space-y-7">
            <div className="font-sans inline-flex items-center gap-2 bg-white/15 backdrop-blur-md px-4 py-2 rounded-full border border-white/30 text-white text-sm font-medium shadow-sm">
              <ShieldCheck size={16} />
              <span>AUTHORIZED E-WASTE REFURBISHER AND RECYCLER</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight text-white" style={{ textShadow: '0 2px 20px rgba(0,0,0,0.5)' }}>
              Reviving Tech, <br />
              <span className="text-emerald-400">
                Restoring Nature
              </span>
            </h1>

            <p className="text-white text-base md:text-lg xl:text-xl max-w-xl leading-relaxed">
              India&apos;s premier certified e-waste recycling and restoration service in Pune.
              We turn your obsolete electronics into resources, bridging the gap
              between technology and sustainability.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="group bg-white text-green-900 px-6 py-3 xl:px-8 xl:py-4 rounded-full transition-all shadow-lg shadow-black/20 hover:shadow-xl hover:bg-green-50 flex items-center justify-center gap-2.5 font-semibold"
              >
                <Leaf size={20} />
                Schedule Pickup
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/what-we-do"
                className="group border border-white/30 text-white backdrop-blur-sm px-6 py-3 xl:px-8 xl:py-4 rounded-full hover:border-white/60 hover:bg-white/10 transition-all text-center font-medium"
              >
                Learn More
              </Link>
            </div>

            <div className="hidden md:block pt-6 mt-2 border-t border-white/20">
              <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-white">
                <span className="flex items-center gap-2">
                  <div className="bg-emerald-500/25 rounded-full p-1"><Check size={12} className="text-emerald-400" /></div>
                  Less waste
                </span>
                <span className="flex items-center gap-2">
                  <div className="bg-emerald-500/25 rounded-full p-1"><Check size={12} className="text-emerald-400" /></div>
                  Good for environment
                </span>
                <span className="flex items-center gap-2">
                  <div className="bg-emerald-500/25 rounded-full p-1"><Check size={12} className="text-emerald-400" /></div>
                  Safe disposal
                </span>
              </div>
            </div>
          </div>

          {/* --- RIGHT STAT CARDS --- */}
          <div className="lg:col-span-2 flex flex-col gap-3 lg:pl-10">
            {/* MPCB Badge Card */}
            <div className="group relative overflow-hidden bg-black/30 backdrop-blur-lg rounded-2xl p-4 border border-white/10 hover:border-white/30 transition-all shadow-2xl shadow-black/40">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative flex items-center gap-4">
                <div className="w-10 h-10 bg-emerald-500/20 rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="text-emerald-400" size={20} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-white/60 uppercase tracking-widest mb-0.5">Certification</p>
                  <p className="text-base font-medium text-white">MPCB Verified Recycler</p>
                </div>
              </div>
            </div>

            {/* Green Impact Card */}
            <div className="group relative overflow-hidden bg-black/30 backdrop-blur-lg rounded-2xl p-4 border border-white/10 hover:border-white/30 transition-all shadow-2xl shadow-black/40">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative flex items-center gap-4">
                <div className="w-10 h-10 bg-emerald-500/20 rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Leaf className="text-emerald-400" size={20} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-white/60 uppercase tracking-widest mb-0.5">Green Impact</p>
                  <p className="text-base font-medium text-white">2,500+ <span className="text-sm text-white/70">Trees Planted</span></p>
                </div>
              </div>
            </div>

            {/* Devices Recycled Card */}
            <div className="group relative overflow-hidden bg-black/30 backdrop-blur-lg rounded-2xl p-4 border border-white/10 hover:border-white/30 transition-all shadow-2xl shadow-black/40">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative flex items-center gap-4">
                <div className="w-10 h-10 bg-emerald-500/20 rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <ShieldCheck className="text-emerald-400" size={20} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-white/60 uppercase tracking-widest mb-0.5">Devices Processed</p>
                  <p className="text-base font-medium text-white">10,000+ <span className="text-sm text-white/70">&amp; Counting</span></p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}