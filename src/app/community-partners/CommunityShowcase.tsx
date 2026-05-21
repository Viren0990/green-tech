'use client';

import { MapPin, Building, Shield } from 'lucide-react';

const communities = [
  {
    name: 'Rohan Abhilasha',
    location: 'Pune, Maharashtra',
    description:
      'Rohan Abhilasha is a well-known residential society that has partnered with DMD Green Tech Revive for organised e-waste collection and disposal, setting an example for sustainable living within their community.',
    initial: 'RA',
  },
  {
    name: 'Wildwoods',
    location: 'Pune, Maharashtra',
    description:
      'Wildwoods residents have taken a proactive step towards environmental responsibility by collaborating with us for regular e-waste drives and awareness initiatives within the complex.',
    initial: 'W',
  },
  {
    name: 'Ivy Estate',
    location: 'Pune, Maharashtra',
    description:
      'Ivy Estate has embraced sustainable e-waste management by partnering with DMD Green Tech Revive, ensuring that electronic waste from their households is processed responsibly and ethically.',
    initial: 'IE',
  },
  {
    name: 'Sai Galaxy',
    location: 'Pune, Maharashtra',
    description:
      'Sai Galaxy society has joined our community partner programme, actively contributing to a cleaner environment through organised e-waste collection events for their residents.',
    initial: 'SG',
  },
];

export default function CommunityShowcase() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Intro */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
            Societies Working With Us
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            These residential communities have partnered with us to make e-waste disposal convenient, safe, and environmentally responsible for every household.
          </p>
        </div>

        {/* Community Cards */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {communities.map((community) => (
            <div
              key={community.name}
              className="group relative bg-white border border-gray-200 rounded-2xl p-8 md:p-10 hover:shadow-xl transition-shadow duration-500"
            >
              {/* Top accent bar */}
              <div className="absolute top-0 left-8 right-8 h-1 rounded-b-full bg-gradient-to-r from-emerald-500 to-green-600 opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Icon + Name */}
              <div className="flex items-start gap-5 mb-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-emerald-50 flex items-center justify-center border border-emerald-200">
                  <Building size={24} className="text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                    {community.name}
                  </h3>
                  <p className="flex items-center gap-1.5 text-sm text-gray-500 mt-1">
                    <MapPin size={14} className="text-green-500" />
                    {community.location}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed mb-6">
                {community.description}
              </p>

              {/* Footer */}
              <div className="flex items-center gap-2 pt-4 border-t border-gray-100">
                <Shield size={16} className="text-green-500" />
                <span className="text-sm text-gray-500">
                  Community Partner
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
