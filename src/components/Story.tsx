import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Story() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800" 
              alt="Team working on electronics"
              className="w-full h-[500px] object-cover"
            />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900">Our Story</h2>
            
            <p className="text-gray-600 leading-relaxed">
              Bridging the gap between technology and sustainability in India.
            </p>
            
            <p className="text-gray-600 leading-relaxed">
              Founded in 2018, DMD Green Tech Revive started with a simple mission: to 
              turn e-waste into an opportunity. We realized that millions of devices are 
              discarded annually, leading to toxic waste and lost resources.
            </p>
            
            <p className="text-gray-600 leading-relaxed">
              Today, we operate a state-of-the-art facility in Bangalore, processing 
              thousands of devices monthly. From responsible recycling to refurbishing 
              and reselling electronics, we reduce the demand for new manufacturing, 
              directly contributing to a circular economy.
            </p>
            
            <Link 
              href="/story"
              className="inline-flex items-center gap-2 text-green-600 font-semibold hover:gap-4 transition-all"
            >
              Read full story
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
