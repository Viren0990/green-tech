import Link from 'next/link';

export default function ServicesHero() {
  return (
    <section className="pt-32 pb-16 bg-gradient-to-br from-green-50 to-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
              WHAT WE DO
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Reviving Tech,{' '}
              <span className="text-green-600">Reducing Waste</span>
            </h1>
            
            <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
              We provide comprehensive e-waste management solutions across India. 
              From secure data destruction to responsible recycling, we ensure your 
              old electronics contribute to a greener future.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="#core-services"
                className="bg-green-500 text-white px-8 py-3 rounded-lg hover:bg-green-600 transition text-center font-semibold"
              >
                Explore Services
              </Link>
              <Link 
                href="#our-impact"
                className="border border-gray-300 px-8 py-3 rounded-lg hover:border-green-500 hover:text-green-500 transition text-center font-semibold"
              >
                Learn About Our Impact
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-green-800 to-green-950 p-8 h-[500px] flex items-center justify-center">
              {/* Plant on circuit board image placeholder */}
              <div className="text-center text-white">
                <div className="text-8xl mb-4">🌱</div>
                <p className="text-sm opacity-75">Plant growing from circuit board</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
