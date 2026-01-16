import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import hero2 from '@/src/images/w.jpg';
import Image from 'next/image';

export default function Story() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src={hero2}
              alt="From nature to technology - The DMD Story"
              className="w-full h-[500px] object-cover"
            />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900">Our Story</h2>

            <p className="text-gray-600 leading-relaxed">
              <strong>Forged in resilience, driven by nature.</strong>
            </p>

            <p className="text-gray-600 leading-relaxed">
              Our roots are deeply embedded in the drought-stricken soils of rural Maharashtra.
              Witnessing the fragility of agrarian life taught us a harsh but vital lesson:
              resources are finite, and the Earth demands respect. This ethos traveled with us
              to the mineral-rich valleys of Uttarakhand, where we immersed ourselves in the
              precision of gemology and the study of Earth's natural treasures.
            </p>

            <p className="text-gray-600 leading-relaxed">
              There, amidst the reverence for precious minerals, we recognized a devastating paradox.
              While humanity mined the earth for gold, it was simultaneously burying value back into
              the ground in the form of toxic e-waste. We realized that true environmental stewardship
              meant mining the "urban mine"—recovering value from what society discards.
            </p>

            <p className="text-gray-600 leading-relaxed">
              DMD Green Tech Revive was born from this intersection of nature and necessity.
              We are not just a recycling facility; we are a response to an environmental crisis,
              applying the precision of gemology to the chaos of waste management to heal the planet.
            </p>


          </div>
        </div>
      </div>
    </section>
  );
}