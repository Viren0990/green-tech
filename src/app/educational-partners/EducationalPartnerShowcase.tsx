'use client';

import { MapPin, BookOpen, Shield } from 'lucide-react';

const partners = [
  {
    name: 'Priyadarshani School',
    location: 'Bhosari, India',
    description:
      'Priyadarshani School in Bhosari is committed to fostering environmental awareness among students. By partnering with us, they actively participate in e-waste collection drives and educational programs to build a sustainable future for the next generation.',
    expertise: [
      'Sustainability Education',
      'E-Waste Collection Drives',
      'Community Awareness',
    ],
    icon: BookOpen,
    accentColor: 'from-emerald-500 to-green-600',
    accentLight: 'bg-emerald-50',
    accentText: 'text-emerald-700',
    accentBorder: 'border-emerald-200',
    initial: 'P',
    logo: '/Educational.png',
  }
];

export default function EducationalPartnerShowcase() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Intro */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
            Our Educational Collaborators
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Our partnerships with educational institutions allow us to scale our impact by teaching students the importance of responsible e-waste recycling and environmental stewardship.
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
                    Verified Educational Partner
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
