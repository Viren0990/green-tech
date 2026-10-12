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
  {
    name: 'AutoAlly Services LLP',
    location: 'Pune, India',
    description:
      'AutoAlly Services LLP is a dynamic services partner specialising in automotive and allied service solutions. Their operational expertise and commitment to quality service delivery complement our mission to build a robust, sustainable ecosystem for technology lifecycle management.',
    expertise: [
      'Automotive Services',
      'Allied Solutions',
      'Service Management',
    ],
    icon: Wrench,
    accentColor: 'from-teal-500 to-emerald-600',
    accentLight: 'bg-teal-50',
    accentText: 'text-teal-700',
    accentBorder: 'border-teal-200',
    initial: 'A',
    logo: '/AutoAlly.png',
  },
  {
    name: 'Kundan Pharmacon',
    location: 'Pune, Maharashtra',
    description:
      'Kundan Pharmacon is a Pune-based partnership firm that works as a wholesaler, distributor and trader of pharmaceutical products and medical supplies. We are proud to count them among the businesses partnering with DMD Green Tech Revive.',
    expertise: [
      'Pharmaceutical Distribution',
      'Medical Supplies',
      'Wholesale Trade',
    ],
    icon: Building2,
    accentColor: 'from-emerald-500 to-teal-600',
    accentLight: 'bg-emerald-50',
    accentText: 'text-emerald-700',
    accentBorder: 'border-emerald-200',
    initial: 'KP',
    logo: undefined as string | undefined, // TODO: add logo to /public and set path
  },
];

export default function PartnerShowcase() {
  return (
    <section className="py-10 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Intro */}
        <div className="max-w-3xl mx-auto text-center mb-6 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
            Who We Work With
          </h2>
          <p className="text-gray-500 text-base md:text-lg leading-relaxed">
            Our partnerships with industry leaders allow us to scale our impact and bring world-class recycling and refurbishment solutions to more businesses and communities.
          </p>
        </div>

        {/* Partner Cards */}
        <p className="md:hidden -mt-2 mb-4 text-center text-sm text-gray-500">Swipe to see all partners →</p>
        <div className="flex md:grid md:grid-cols-2 gap-4 md:gap-8 lg:gap-12 overflow-x-auto md:overflow-visible snap-x snap-mandatory -mx-4 px-4 md:mx-0 md:px-0 pb-4 md:pb-0 hide-scrollbar">
          {partners.map((partner) => {
            const Icon = partner.icon;
            return (
              <div
                key={partner.name}
                className="group relative w-[85%] sm:w-[70%] md:w-auto shrink-0 snap-center bg-white border border-gray-200 rounded-2xl p-5 md:p-10 hover:shadow-xl transition-shadow duration-500"
              >
                {/* Top accent bar */}
                <div
                  className={`absolute top-0 left-8 right-8 h-1 rounded-b-full bg-gradient-to-r ${partner.accentColor} opacity-60 group-hover:opacity-100 transition-opacity duration-500`}
                />

                {/* Logo placeholder + Name */}
                <div className="flex items-start gap-4 md:gap-5 mb-4 md:mb-6">
                  <div
                    className={`flex-shrink-0 w-16 h-16 rounded-xl bg-white flex items-center justify-center border border-gray-200 overflow-hidden p-1.5`}
                  >
                    {partner.logo ? (
                      <img
                        src={partner.logo}
                        alt={`${partner.name} logo`}
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <span className={`text-lg font-bold ${partner.accentText}`}>
                        {partner.initial}
                      </span>
                    )}
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
                <p className="text-gray-600 text-[15px] md:text-base leading-relaxed mb-4 md:mb-6">
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
