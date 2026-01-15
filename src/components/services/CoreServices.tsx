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
      title: 'E-Waste Collection',
      description: 'Seamless door-to-door pickup service tailored to your schedule. We professionally handle the heavy lifting and transportation for bulk corporate e-waste with secure, fully tracked logistics.'
    },
    {
      icon: Shield,
      title: 'Data Sanitization',
      description: 'Protect your sensitive data against unauthorized access. We use certified data wiping and degaussing methods to ensure all corporate information is permanently irretrievable.'
    },
    {
      icon: Smartphone,
      title: 'Refurbishment',
      description: 'Extending product lifecycles. Viable devices like laptops and tablets are tested, repaired, and restored for a second life, supporting the circular economy and digital inclusion.'
    },
    {
      icon: Recycle,
      title: 'Recycling',
      description: 'Zero-landfill policy. We responsibly dismantle end-of-life devices to extract valuable metals like gold, silver, and copper, sending hazardous materials to specialized treatment.'
    }
  ];

  return (
    // Changed bg-white to bg-stone-50 for a subtle off-white contrast
    <section id="core-services" className="relative py-24 bg-stone-50 min-h-screen overflow-hidden">

      {/* --- BACKGROUND DECORATION START --- */}
      {/* 1. Technical Dot Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(#15803d 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }}>
      </div>

      {/* 2. Soft Green Glow (Top Right) */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-200/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      {/* 3. Soft Green Glow (Bottom Left) */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-green-300/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />
      {/* --- BACKGROUND DECORATION END --- */}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`${bodoni.className} text-5xl font-bold text-gray-900 mb-6`}>
            Our Core Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            We offer end-to-end solutions tailored for corporate entities, educational
            institutions, and individuals looking to responsibly dispose of electronic assets.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                // Added shadow-sm and group-hover:scale-[1.02] for better interactivity
                className="bg-white border border-green-100 p-8 rounded-2xl hover:shadow-xl hover:border-green-500 transition-all duration-300 group hover:-translate-y-1"
              >
                {/* Icon Container: Added a subtle ring/border for definition */}
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-green-500 shadow-lg shadow-green-200 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="text-white" size={28} />
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