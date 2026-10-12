import { Truck, Shield, FileCheck } from 'lucide-react';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export default function ContactInfo() {
  return (
    <section className={`py-12 md:py-24 bg-white ${inter.className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16">
          <h2 className="text-emerald-800 font-bold tracking-widest text-sm mb-4 uppercase">
            Why Choose DMD Green Tech?
          </h2>
          <p className="text-3xl md:text-5xl font-extrabold text-zinc-900 mb-4 md:mb-6 tracking-tight">
            Committed to <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 to-teal-700">Excellence</span>
          </p>
          <p className="text-zinc-600 text-base md:text-lg leading-relaxed">
            We're committed to making e-waste recycling easy, secure, and environmentally responsible with our industry-leading standards.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-3 md:gap-8">
          <div className="flex md:block items-start gap-4 bg-zinc-50 border border-zinc-100 rounded-2xl p-4 md:p-10 text-left md:text-center hover:shadow-xl hover:border-emerald-200 transition-all duration-300 group hover:-translate-y-1">
            <div className="w-12 h-12 md:w-16 md:h-16 shrink-0 bg-emerald-100 text-emerald-700 rounded-2xl flex items-center justify-center md:mx-auto md:mb-8 shadow-sm group-hover:scale-110 group-hover:bg-emerald-800 group-hover:text-white transition-all duration-500 rotate-3 group-hover:rotate-0">
              <Truck className="w-6 h-6 md:w-8 md:h-8" />
            </div>
            <div><h3 className="text-lg md:text-xl font-bold text-zinc-900 mb-1 md:mb-3 group-hover:text-emerald-800 transition-colors">
              Free Pickup Service
            </h3>
            <p className="text-zinc-500 leading-relaxed text-sm">
              We collect e-waste from your doorstep at no extra cost for bulk quantities, handled by trained professionals.
            </p></div>
          </div>

          <div className="flex md:block items-start gap-4 bg-zinc-50 border border-zinc-100 rounded-2xl p-4 md:p-10 text-left md:text-center hover:shadow-xl hover:border-emerald-200 transition-all duration-300 group hover:-translate-y-1">
            <div className="w-12 h-12 md:w-16 md:h-16 shrink-0 bg-emerald-100 text-emerald-700 rounded-2xl flex items-center justify-center md:mx-auto md:mb-8 shadow-sm group-hover:scale-110 group-hover:bg-emerald-800 group-hover:text-white transition-all duration-500 -rotate-3 group-hover:rotate-0">
              <Shield className="w-6 h-6 md:w-8 md:h-8" />
            </div>
            <div><h3 className="text-lg md:text-xl font-bold text-zinc-900 mb-1 md:mb-3 group-hover:text-emerald-800 transition-colors">
              Data Security Guaranteed
            </h3>
            <p className="text-zinc-500 leading-relaxed text-sm">
              Certified data destruction with DoD-standard wiping and physical shredding ensuring total peace of mind.
            </p></div>
          </div>

          <div className="flex md:block items-start gap-4 bg-zinc-50 border border-zinc-100 rounded-2xl p-4 md:p-10 text-left md:text-center hover:shadow-xl hover:border-emerald-200 transition-all duration-300 group hover:-translate-y-1">
            <div className="w-12 h-12 md:w-16 md:h-16 shrink-0 bg-emerald-100 text-emerald-700 rounded-2xl flex items-center justify-center md:mx-auto md:mb-8 shadow-sm group-hover:scale-110 group-hover:bg-emerald-800 group-hover:text-white transition-all duration-500 rotate-3 group-hover:rotate-0">
              <FileCheck className="w-6 h-6 md:w-8 md:h-8" />
            </div>
            <div><h3 className="text-lg md:text-xl font-bold text-zinc-900 mb-1 md:mb-3 group-hover:text-emerald-800 transition-colors">
              Strong Compliances
            </h3>
            <p className="text-zinc-500 leading-relaxed text-sm">
              We adhere strictly to compliance standards and issue guaranteed green certificates for all recycling entirely.
            </p></div>
          </div>
        </div>
      </div>
    </section>
  );
}
