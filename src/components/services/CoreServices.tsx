import { Truck, Shield, Recycle, Smartphone } from 'lucide-react';
import { Bodoni_Moda } from 'next/font/google';

const bodoni = Bodoni_Moda({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

export default function CoreServices() {
  const services = [
    {
      icon: Truck,
      title: 'Logistics & Collection',
      description: 'Seamless door-to-door pickup service across multiple cities. We handle the heavy lifting for bulk corporate e-waste with secure, tracked logistics.'
    },
    {
      icon: Shield,
      title: 'Secure Data Destruction',
      description: 'Protect your sensitive data against unauthorized access. We use certified degaussing and physical destruction methods to ensure sensitive corporate data is irretrievable.'
    },
    {
      icon: Recycle,
      title: 'Eco-Friendly Recycling',
      description: 'Zero-landfill policy. We dismantle devices to extract valuable metals like gold, silver, and copper, sending hazardous materials to specialized treatment facilities.'
    },
    {
      icon: Smartphone,
      title: 'Device Restoration',
      description: 'Extending product lifecycles. Viable devices like laptops and tablets are tested, refurbished, and restored for a second life, supporting the circular economy and digital inclusion.'
    }
  ];

  return (
    <section id="core-services" className="py-20 bg-white mt-10 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`${bodoni.className} text-5xl font-bold text-gray-900 mb-4`}>
            Our Core Services
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We offer end-to-end solutions tailored for corporate entities, educational 
            institutions, and individuals looking to responsibly dispose of electronic assets.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="bg-white border-2 border-green-400 p-8 rounded-2xl hover:shadow-xl hover:border-green-500 transition-all group"
              >
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-green-500">
                  <Icon className="text-white transition-colors" size={28} />
                </div>
                <h3 className={`${bodoni.className} text-xl font-bold text-gray-900 mb-3`}>
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
