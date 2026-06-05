import Image from 'next/image';
import { Plus_Jakarta_Sans } from 'next/font/google';

const headingFont = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

export default function CoreServices() {
  const services = [
    {
      image: '/images/services/ewaste-collection.png',
      title: 'E-Waste Collection',
      description: 'Seamless door-to-door pickup service tailored to your schedule. We professionally handle the heavy lifting and transportation for bulk corporate e-waste with secure, fully tracked logistics.',
      accent: 'from-emerald-500 to-emerald-600',
    },
    {
      image: '/images/services/data-sanitization.png',
      title: 'Data Sanitization',
      description: 'Protect your sensitive data against unauthorized access. We use certified data wiping and degaussing methods to ensure all corporate information is permanently irretrievable.',
      accent: 'from-green-600 to-emerald-600',
    },
    {
      image: '/images/services/refurbishment.png',
      title: 'Refurbishment',
      description: 'Extending product lifecycles. Viable devices like laptops and tablets are tested, repaired, and restored for a second life, supporting the circular economy and digital inclusion.',
      accent: 'from-emerald-600 to-green-700',
    },
    {
      image: '/images/services/recycling.png',
      title: 'Recycling',
      description: 'Zero-landfill policy. We responsibly dismantle end-of-life devices to extract valuable metals like gold, silver, and copper, sending hazardous materials to specialized treatment.',
      accent: 'from-green-500 to-green-600',
    }
  ];

  return (
    <section id="core-services" className="relative py-24 bg-gradient-to-b from-white via-emerald-50/40 to-green-50/60 min-h-screen overflow-hidden">

      {/* --- BACKGROUND DECORATION START --- */}
      {/* Technical Dot Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(#15803d 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }}>
      </div>

      {/* Soft Green Glow (Top Right) */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-green-200/30 to-transparent rounded-full blur-[120px] -translate-y-1/3 translate-x-1/4 pointer-events-none" />

      {/* Soft Teal Glow (Bottom Left) */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-teal-200/25 to-transparent rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />

      {/* Geometric accent line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-green-300/50 to-transparent" />
      {/* --- BACKGROUND DECORATION END --- */}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-bold uppercase tracking-[0.2em] text-emerald-600 mb-4 bg-emerald-50 px-4 py-1.5 rounded-full border border-emerald-100">
            Our Expertise
          </span>
          <h2 className={`${headingFont.className} text-5xl font-bold text-gray-900 mb-6`}>
            Our Core Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            We offer end-to-end solutions tailored for corporate entities, educational
            institutions, and individuals looking to responsibly dispose of electronic assets.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative bg-white/80 backdrop-blur-sm border-2 border-gray-200 p-5 pb-8 rounded-2xl shadow-xl transition-all duration-500 group -translate-y-2 hover-shake-y"
            >
              {/* Top gradient accent line */}
              <div className={`absolute top-0 left-6 right-6 h-1 bg-gradient-to-r ${service.accent} rounded-b-full`} />

              {/* Image header */}
              <div className="w-full aspect-[4/3] mb-5 rounded-xl overflow-hidden bg-gradient-to-br from-emerald-50/60 via-green-50/40 to-white border border-emerald-100/50">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <h3 className={`${headingFont.className} text-xl font-bold text-emerald-800 mb-3 transition-colors duration-300`}>
                {service.title}
              </h3>

              <p className="text-gray-500 text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Bottom decorative dot */}
              <div className="mt-6 flex gap-1">
                <div className={`w-12 h-1 rounded-full bg-gradient-to-r ${service.accent} transition-all duration-500`} />
                <div className="w-1 h-1 rounded-full bg-emerald-400 transition-colors duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}