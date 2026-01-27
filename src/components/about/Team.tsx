import Image from 'next/image';
import teamImage2 from '@/src/images/pp.jpg';

export default function Team() {
  const founder = {
    name: 'Dhanaji Machhindra Dabade',
    role: 'Founder & CEO',
    description: 'Over 10 years of experience and study in e-waste management and environmental sustainability.',
    image: teamImage2
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Meet the Founder
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            The visionary leader dedicated to a greener tomorrow through sustainable e-waste management.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-500">
            <div className="md:flex">
              <div className="md:w-1/2 relative min-h-[400px] md:min-h-full">
                <Image
                  src={founder.image}
                  alt={founder.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 md:w-1/2 flex flex-col justify-center">
                <div className="uppercase tracking-wide text-sm text-green-600 font-bold mb-1">
                  {founder.role}
                </div>
                <h3 className="block mt-1 text-2xl leading-tight font-bold text-gray-900 mb-4">
                  {founder.name}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {founder.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
