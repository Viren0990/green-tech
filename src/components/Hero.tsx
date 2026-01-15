import Link from 'next/link';
import { Leaf, Award, ShieldCheck, Check, CheckCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero-font-reset relative min-h-screen overflow-hidden bg-green-50 pt-26  pb-12 flex items-center">

      {/* --- BACKGROUND ELEMENTS --- */}
      {/* ... (Background elements remain the same) ... */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-linear-to-br from-green-50 via-green-50 to-emerald-50" />
        <div className="absolute top-0 right-0 w-200 h-200 bg-green-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 translate-x-1/3 -translate-y-1/4 animate-blob" />
        <div className="absolute bottom-0 left-0 w-150 h-150 bg-green-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 -translate-x-1/2 translate-y-1/4 animate-blob animation-delay-2000" />
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <pattern id="circuit-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M10 10h10v10h-10z M30 30h40v10h-40z M50 50h10v40h-10z" fill="currentColor" />
            <circle cx="20" cy="20" r="2" fill="currentColor" />
            <circle cx="80" cy="80" r="2" fill="currentColor" />
            <path d="M20 20 L80 80" stroke="currentColor" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
        </svg>
      </div>


      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* --- LEFT CONTENT --- */}
          {/* ... (Left content remains the same) ... */}
          <div className="space-y-8">
            <div className="font-sans inline-flex items-center gap-2 bg-green-100/80 backdrop-blur-sm px-4 py-2 rounded-full border border-green-200 text-green-700 text-sm font-medium shadow-sm">
              <ShieldCheck size={16} />
              <span>AUTHORIZED E-WASTE REFURBISHER AND RECYCLER</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-gray-900">
              Reviving Tech, <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-green-600 to-teal-500">
                Restoring Nature
              </span>
            </h1>
            <p className="text-gray-600 text-lg md:text-xl max-w-xl leading-relaxed">
              India's premier certified e-waste recycling and restoration service.
              We turn your obsolete electronics into resources, bridging the gap
              between technology and sustainability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full transition-all shadow-lg shadow-green-200 hover:shadow-green-300 flex items-center justify-center gap-2 font-medium"
              >
                <Leaf size={20} />
                Schedule Pickup
              </Link>
              <Link
                href="/story"
                className="group border border-gray-300 bg-white/50 backdrop-blur-sm px-8 py-4 rounded-full hover:border-green-500 hover:text-green-600 transition-all text-center font-medium"
              >
                Learn More
              </Link>
            </div>
            <div className="hidden md:block pt-8 mt-4 border-t border-gray-200/60">
              <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-gray-600">
                <span className="flex items-center gap-2">
                  <div className="bg-green-100 rounded-full p-1"><Check size={12} className="text-green-700" /></div>
                  Less waste
                </span>
                <span className="flex items-center gap-2">
                  <div className="bg-green-100 rounded-full p-1"><Check size={12} className="text-green-700" /></div>
                  Good for enviroment
                </span>
                <span className="flex items-center gap-2">
                  <div className="bg-green-100 rounded-full p-1"><Check size={12} className="text-green-700" /></div>
                  Safe disposal
                </span>
              </div>
            </div>
          </div>

          {/* --- RIGHT IMAGE CARD --- */}
          <div className="relative">

            {/* Main Card Container */}
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/50 transform transition-transform hover:scale-[1.01] duration-500">
              <img
                src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=800"
                alt="Plant growing from e-waste"
                className="w-full h-112.5 object-cover"
              />

              {/* Top Right: MPCB Verified Badge (Redesigned) */}
              <div className="absolute top-4 right-4 z-20">
                <div className="inline-flex items-center gap-1.5 bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/40 shadow-sm">
                  <CheckCircle className="text-green-600" size={18} />
                  <span className="text-sm font-bold text-green-800 leading-none">
                    MPCB Verified
                  </span>
                </div>
              </div>

              {/* Bottom Card: Green Impact */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-3xl p-6 shadow-xl border border-green-50">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                    <Leaf className="text-green-600" size={28} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Green Impact</p>
                    <p className="text-3xl font-bold text-gray-900">2,500+ <span className="text-lg font-normal text-gray-600">Trees Planted</span></p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Decorative Leaf (Bottom Right) */}
            <div className="absolute -bottom-6 -right-6 text-green-500 opacity-20 transform rotate-45 pointer-events-none">
              <Leaf size={120} />
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}