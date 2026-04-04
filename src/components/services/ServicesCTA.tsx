import Link from 'next/link';

export default function ServicesCTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 right-20 w-72 h-72 bg-green-200/30 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-10 left-20 w-60 h-60 bg-teal-200/20 rounded-full blur-[60px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white/70 backdrop-blur-md rounded-3xl shadow-xl shadow-green-900/5 px-8 py-12 md:px-16 md:py-16 text-center border border-green-100/60 relative overflow-hidden">
          {/* Gradient accent at top of card */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500" />

          <span className="inline-block text-sm font-bold uppercase tracking-[0.2em] text-emerald-600 mb-5 bg-emerald-50 px-4 py-1.5 rounded-full border border-emerald-100">
            Get Started
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Recycle <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Responsibly?</span>
          </h2>
          <p className="text-gray-600 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
            Join hundreds of Indian businesses in making a sustainable choice. 
            Schedule your pickup today and get your green certificate.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-3.5 rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 font-semibold shadow-lg shadow-green-500/25 hover:shadow-green-500/40 hover:-translate-y-0.5"
            >
              Schedule Pickup
            </Link>
            <Link 
              href="/contact"
              className="bg-white border-2 border-gray-200 px-8 py-3.5 rounded-xl hover:border-emerald-400 hover:text-emerald-600 transition-all duration-300 font-semibold hover:shadow-md hover:-translate-y-0.5"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
