'use client';

import { Building2, MapPin, Zap, Wrench, Shield, Server } from 'lucide-react';

const partners = [
  {
    name: 'Reliance Infrastructure Limited',
    location: 'Andhra Pradesh, India',
    description:
      'Reliance Infrastructure Limited is a major player in the Indian infrastructure sector, with deep expertise in power generation, transmission, and distribution. Their commitment to large-scale infrastructure development across India aligns with our shared vision of sustainable industrial growth.',
    expertise: [
      'Power Infrastructure',
      'Energy Distribution',
      'Industrial Projects',
    ],
    icon: Zap,
    accentColor: 'from-emerald-500 to-green-600',
    accentLight: 'bg-emerald-50',
    accentText: 'text-emerald-700',
    accentBorder: 'border-emerald-200',
    initial: 'R',
    logo: '/reliance-logo.webp',
  },
  {
    name: 'SSS Technologies',
    location: 'Andhra Pradesh, India',
    description:
      'SSS Technologies is a trusted technology solutions provider based in Andhra Pradesh, specialising in IT infrastructure, systems integration, and technology consulting. Their technical know-how strengthens our capacity to manage and process e-waste with precision.',
    expertise: [
      'IT Infrastructure',
      'Systems Integration',
      'Technology Consulting',
    ],
    icon: Server,
    accentColor: 'from-green-500 to-emerald-600',
    accentLight: 'bg-emerald-50',
    accentText: 'text-emerald-700',
    accentBorder: 'border-emerald-200',
    initial: 'S',
    logo: '/sss-logo.png',
  },
];

export default function PartnerShowcase() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Intro */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
            Who We Work With
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Our partnerships with industry leaders allow us to scale our impact and bring world-class recycling and refurbishment solutions to more businesses and communities.
          </p>
        </div>

        {/* Partner Cards */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {partners.map((partner) => {
            const Icon = partner.icon;
            return (
              <div
                key={partner.name}
                className="group relative bg-white border border-gray-200 rounded-2xl p-8 md:p-10 hover:shadow-xl transition-shadow duration-500"
              >
                {/* Top accent bar */}
                <div
                  className={`absolute top-0 left-8 right-8 h-1 rounded-b-full bg-gradient-to-r ${partner.accentColor} opacity-60 group-hover:opacity-100 transition-opacity duration-500`}
                />

                {/* Logo placeholder + Name */}
                <div className="flex items-start gap-5 mb-6">
                  <div
                    className={`flex-shrink-0 w-16 h-16 rounded-xl bg-white flex items-center justify-center border border-gray-200 overflow-hidden p-1.5`}
                  >
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                      {partner.name}
                    </h3>
                    <p className="flex items-center gap-1.5 text-sm text-gray-500 mt-1">
                      <MapPin size={14} className="text-green-500" />
                      {partner.location}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-6">
                  {partner.description}
                </p>



                {/* Footer */}
                <div className="flex items-center gap-2 pt-4 border-t border-gray-100">
                  <Shield size={16} className="text-green-500" />
                  <span className="text-sm text-gray-500">
                    Verified Partner
                  </span>
                </div>
              </div>
            );
          })}
        </div>


      </div>
    </section>
  );
}
