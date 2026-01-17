import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import hero2 from '@/src/images/w33.webp';
import Image from 'next/image';

export default function Story() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
            <Image
              src={hero2}
              alt="From nature to technology - The DMD Story"
              className="w-full h-[500px] object-cover"
            />
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-gray-900">Our Story</h2>
              <div className="w-20 h-1.5 bg-green-600 rounded-full"></div>
            </div>

            <p className="text-gray-600 leading-relaxed text-lg">
              It started with a simple act of hope—planting 50 coconut saplings during a severe drought. That moment sparked a lifelong realization: nature gives back only when we protect it.
            </p>

            <p className="text-gray-600 leading-relaxed text-lg">
              From the mineral-rich landscapes of India to witnessing the global impact of waste, our founder's journey bridged the gap between precious resources and neglected e-waste. DMD Greentech Revive was born from the conviction that waste is not an end, but the beginning of a circular economy. We apply precision and care to revive value, protecting our planet for future generations.
            </p>

            <div className="pt-4">
              <Link
                href="/about-us"
                className="inline-flex items-center space-x-2 text-green-600 font-bold hover:text-green-700 transition-colors group"
              >
                <span className="text-lg">Read Our Full Journey</span>
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}