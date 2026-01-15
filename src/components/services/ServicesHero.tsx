import Link from 'next/link';
import Image from 'next/image';
import heroImage from '@/src/images/service1.webp';

export default function ServicesHero() {
  return (
    <section className="pt-32 pb-16 min-h-screen bg-gray-100 flex flex-col justify-center">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Card Container */}
        <div className="relative rounded-[2.5rem] overflow-hidden min-h-[550px] flex flex-col justify-center items-center text-center shadow-2xl">

          {/* --- BACKGROUND IMAGE & OVERLAY --- */}
          <div className="absolute inset-0 z-0">
            <Image
              src={heroImage}
              alt="E-waste recycling services"
              fill
              className="object-cover"
              priority
            />
            {/* Dark Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
          </div>

          {/* --- CONTENT --- */}
          <div className="relative z-10 max-w-4xl px-4">
            <p className="text-green-400 font-bold mb-4 text-sm md:text-base tracking-[0.2em] uppercase">
              What We Do
            </p>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
              Reviving Tech,<br />
              <span className="text-green-400">Reducing Waste</span>
            </h1>

            <p className="text-gray-200 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto font-light mb-8">
              We provide comprehensive e-waste management solutions across India.
              From secure data destruction to responsible recycling, we ensure your
              old electronics contribute to a greener future.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#core-services"
                className="bg-green-500 text-white px-8 py-3 rounded-lg hover:bg-green-600 transition text-center font-semibold shadow-lg"
              >
                Explore Services
              </Link>
              <Link
                href="#our-impact"
                className="border-2 border-white/70 text-white px-8 py-3 rounded-lg hover:bg-white/10 transition text-center font-semibold"
              >
                Learn About Our Impact
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
