'use client';

import { MapPin, Building, Shield } from 'lucide-react';

const communities = [
  {
    name: 'Rohan Abhilasha',
    location: 'Pune, Maharashtra',
    description:
      'Rohan Abhilasha is a well-known residential society that has partnered with DMD GreenTech Revive for organised e-waste collection and disposal, setting an example for sustainable living within their community.',
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
      'Ivy Estate has embraced sustainable e-waste management by partnering with DMD GreenTech Revive, ensuring that electronic waste from their households is processed responsibly and ethically.',
    initial: 'IE',
  },
  {
    name: 'Sai Galaxy',
    location: 'Pune, Maharashtra',
    description:
      'Sai Galaxy society has joined our community partner programme, actively contributing to a cleaner environment through organised e-waste collection events for their residents.',
    initial: 'SG',
  },
  {
    name: 'Sai Tirupati Greens Society',
    location: 'Pune, Maharashtra',
    description:
      'Sai Tirupati Greens Society has partnered with us to drive positive environmental change through responsible e-waste collection and management for all its residents.',
    initial: 'STG',
  },
  {
    name: 'Silver Springs Cooperative Housing Society Ltd',
    location: 'Pune, Maharashtra',
    description:
      'Silver Springs Cooperative Housing Society has partnered with DMD GreenTech Revive to give its residents a safe and responsible way to dispose of their e-waste.',
    initial: 'SS',
  },
  {
    name: 'Rotary Club of Akurdi Pune',
    location: 'Akurdi, Pune, Maharashtra',
    description:
      'The Rotary Club of Akurdi Pune, part of Rotary District 3131, has partnered with DMD GreenTech Revive to promote responsible e-waste collection and recycling in the community.',
    initial: 'RC',
    logo: '/rotary-white-logo.svg',
    logoBg: 'bg-[#17458F]',
    website: 'https://rcakurdipune.rotary3131.org/',
  },
];

export default function CommunityShowcase() {
  return (
    <section className="py-10 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Intro */}
        <div className="max-w-3xl mx-auto text-center mb-6 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
            Communities Working With Us
          </h2>
          <p className="text-gray-500 text-base md:text-lg leading-relaxed">
            These residential societies and community organisations have partnered with us to make e-waste disposal convenient, safe, and environmentally responsible for every household.
          </p>
        </div>

        {/* Community Cards */}
        <p className="md:hidden -mt-2 mb-4 text-center text-sm text-gray-500">Swipe to see all partners →</p>
        <div className="flex md:grid md:grid-cols-2 gap-4 md:gap-8 lg:gap-12 overflow-x-auto md:overflow-visible snap-x snap-mandatory -mx-4 px-4 md:mx-0 md:px-0 pb-4 md:pb-0 hide-scrollbar">
          {communities.map((community) => (
            <div
              key={community.name}
              className="group relative w-[85%] sm:w-[70%] md:w-auto shrink-0 snap-center bg-white border border-gray-200 rounded-2xl p-5 md:p-10 hover:shadow-xl transition-shadow duration-500"
            >
              {/* Top accent bar */}
              <div className="absolute top-0 left-8 right-8 h-1 rounded-b-full bg-gradient-to-r from-emerald-500 to-green-600 opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Icon + Name */}
              <div className="flex items-start gap-4 md:gap-5 mb-4 md:mb-6">
                {community.logo ? (
                  <div className={`flex-shrink-0 w-28 h-16 rounded-xl ${community.logoBg} flex items-center justify-center p-2`}>
                    <img
                      src={community.logo}
                      alt={`${community.name} logo`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                ) : (
                  <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-emerald-50 flex items-center justify-center border border-emerald-200">
                    <Building size={24} className="text-emerald-600" />
                  </div>
                )}
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
              <p className="text-gray-600 text-[15px] md:text-base leading-relaxed mb-4 md:mb-6">
                {community.description}
              </p>

              {/* Footer */}
              <div className="flex items-center gap-2 pt-4 border-t border-gray-100">
                <Shield size={16} className="text-green-500" />
                <span className="text-sm text-gray-500">
                  Community Partner
                </span>
                {community.website && (
                  <a
                    href={community.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto text-sm text-green-600 hover:text-green-700 transition"
                  >
                    Visit website
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
