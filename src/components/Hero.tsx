import Link from 'next/link';
import Image from 'next/image';
import { Leaf, ShieldCheck, ArrowRight, Recycle, Award, TreePine, FileCheck, CheckCircle, Download } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero-font-reset relative min-h-screen overflow-hidden flex flex-col">

      {/* --- FULL BLEED BACKGROUND IMAGE --- */}
      <Image
        src="/new_hero.png"
        alt="DMD Green Tech – e-waste recycling and refurbishment facility"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[70%_center] lg:object-center brightness-125"
      />

      {/* --- DARK OVERLAY – strong on left for text, fading to right to show image --- */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f0a]/85 via-[#0a0f0a]/55 to-[#0a0f0a]/15 z-[1]" />
      {/* Extra mobile overlay */}
      <div className="absolute inset-0 bg-[#0a0f0a]/25 lg:bg-transparent z-[1]" />

      {/* --- MAIN CONTENT AREA --- */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="w-full px-6 sm:px-10 lg:pl-16 xl:pl-24 2xl:pl-32 lg:pr-8 pt-32 pb-12 lg:pt-24 lg:pb-0">
          <div className="max-w-2xl space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start">

            {/* Badge */}
            <div className="font-sans hidden md:inline-flex items-center gap-2 bg-emerald-500/15 backdrop-blur-sm px-4 py-2 rounded-full border border-emerald-500/30 text-emerald-400 text-sm font-medium">
              <ShieldCheck size={16} />
              <span>AUTHORIZED E-WASTE REFURBISHER</span>
            </div>

            {/* Heading */}
            <h1 className="pt-8 md:pt-0 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight text-white">
              Reviving Tech, <br />
              <span className="text-emerald-400">
                Restoring Nature.
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-gray-300 text-base sm:text-lg xl:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed">
              India&apos;s premier certified e-waste recycling and restoration service in Pune.
              We turn your obsolete electronics into resources, bridging the gap
              between technology and sustainability.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center lg:justify-start pt-2">
              <Link
                href="/contact"
                className="group bg-emerald-500 text-white px-7 py-3.5 xl:px-8 xl:py-4 rounded-lg transition-all shadow-lg shadow-emerald-500/25 hover:shadow-xl hover:bg-emerald-600 flex items-center justify-center gap-2.5 font-semibold text-base"
              >
                <Leaf size={20} />
                Schedule Pickup
              </Link>
              <a
                href="/DMD Greentech Broucher ..pdf"
                download="DMD Greentech Brochure.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group border border-white/30 text-white px-7 py-3.5 xl:px-8 xl:py-4 rounded-lg hover:border-white/60 hover:bg-white/10 transition-all text-center font-medium flex items-center justify-center gap-2"
              >
                Download Brochure
                <Download size={16} className="transition-transform group-hover:translate-y-1" />
              </a>
            </div>

            {/* Feature Icons Row */}
            <div className="pt-8 mt-4 border-t border-white/10 w-full">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
                <div className="flex flex-col items-center lg:items-start gap-2">
                  <div className="w-10 h-10 bg-emerald-500/15 rounded-full flex items-center justify-center">
                    <ShieldCheck className="text-emerald-400" size={20} />
                  </div>
                  <span className="text-white/80 text-xs sm:text-sm font-medium text-center lg:text-left">Secure Data Destruction</span>
                </div>
                <div className="flex flex-col items-center lg:items-start gap-2">
                  <div className="w-10 h-10 bg-emerald-500/15 rounded-full flex items-center justify-center">
                    <Recycle className="text-emerald-400" size={20} />
                  </div>
                  <span className="text-white/80 text-xs sm:text-sm font-medium text-center lg:text-left">Authorized Refurbisher</span>
                </div>
                <div className="flex flex-col items-center lg:items-start gap-2">
                  <div className="w-10 h-10 bg-emerald-500/15 rounded-full flex items-center justify-center">
                    <TreePine className="text-emerald-400" size={20} />
                  </div>
                  <span className="text-white/80 text-xs sm:text-sm font-medium text-center lg:text-left">Environment <br></br>Friendly</span>
                </div>
                <div className="flex flex-col items-center lg:items-start gap-2">
                  <div className="w-10 h-10 bg-emerald-500/15 rounded-full flex items-center justify-center">
                    <FileCheck className="text-emerald-400" size={20} />
                  </div>
                  <span className="text-white/80 text-xs sm:text-sm font-medium text-center lg:text-left">Certificates <br /> Provided</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* --- BOTTOM STATS BAR --- */}
      <div className="relative z-10 w-full bg-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-3 divide-x divide-emerald-500/40">
            <div className="py-5 lg:py-6 px-4 lg:px-6 text-center lg:text-left">
              <p className="text-2xl lg:text-3xl font-bold text-white flex items-center justify-center lg:justify-start gap-2"><CheckCircle size={24} className="text-white" />MPCB</p>
              <p className="text-emerald-100/80 text-xs sm:text-sm font-medium mt-0.5">Verified</p>
            </div>
            <div className="py-5 lg:py-6 px-4 lg:px-6 text-center lg:text-left">
              <p className="text-2xl lg:text-3xl font-bold text-white">2,500+</p>
              <p className="text-emerald-100/80 text-xs sm:text-sm font-medium mt-0.5">Trees Planted</p>
            </div>
            <div className="py-5 lg:py-6 px-4 lg:px-6 text-center lg:text-left">
              <p className="text-2xl lg:text-3xl font-bold text-white">10,000+</p>
              <p className="text-emerald-100/80 text-xs sm:text-sm font-medium mt-0.5">Devices Processed</p>
            </div>
            
          </div>
        </div>
      </div>

    </section>
  );
}