'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const services = [
  {
    image: '/images/services/ewaste-collection.png',
    title: 'E-Waste Collection',
    description:
      'We provide MPCB & CPCB-compliant e-waste collection with safe handling, secure transportation and environmentally responsible disposal.',
    accent: 'from-emerald-500 to-emerald-600',
  },
  {
    image: '/images/services/data-sanitization.png',
    title: 'Data Sanitization',
    description:
      'Certified data sanitization services ensuring complete and permanent removal of sensitive information from end-of-life IT assets.',
    accent: 'from-green-600 to-emerald-600',
  },
  {
    image: '/images/services/refurbishment.png',
    title: 'Refurbishment',
    description:
      'Structured IT asset refurbishment to restore usability and value, carried out in strict compliance with MPCB and CPCB regulations.',
    accent: 'from-emerald-600 to-green-700',
  },
  {
    image: '/images/services/recycling.png',
    title: 'Recycling',
    description:
      'End-to-end recycling through authorized facilities with complete post-recycling compliance documentation for audit and legal obligations.',
    accent: 'from-green-500 to-green-600',
  },
];

export default function Services() {
  return (
    <section className="relative py-12 md:py-20 bg-gradient-to-b from-white via-emerald-50/40 to-green-50/60 overflow-hidden">
      
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
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-14"
        >
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Sustainable Solutions for Your{' '}
            <span className="text-green-600">E-Waste</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            We provide end-to-end electronic waste management services tailored for
            businesses and individuals, ensuring a greener future.
          </p>
        </motion.div>

        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory -mx-4 px-4 md:mx-0 md:px-0 pb-4 md:pb-0 hide-scrollbar">
          {services.map((service, index) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={index}
              className="group w-[80%] sm:w-[60%] md:w-auto shrink-0 snap-center bg-white/80 backdrop-blur-sm p-4 pb-6 md:p-5 md:pb-8 rounded-3xl border border-emerald-100/80 shadow-sm hover:shadow-xl hover:shadow-emerald-900/10 hover:-translate-y-2 hover:border-emerald-200 hover:bg-emerald-50/30 transition-all duration-300 relative overflow-hidden"
            >
              {/* Illustration header */}
              <div className="w-full aspect-[16/10] md:aspect-[4/3] mb-4 md:mb-5 rounded-2xl overflow-hidden bg-gradient-to-br from-emerald-100/90 via-green-100/60 to-emerald-50/50 border border-emerald-200/50">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Accent bar */}
              <div
                className={`w-10 h-1 rounded-full bg-gradient-to-r ${service.accent} mb-4 group-hover:w-16 transition-all duration-300`}
              />

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>

              <p className="text-gray-500 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
        <p className="md:hidden mt-2 text-center text-sm text-gray-500">Swipe to see all 4 services →</p>
      </div>
    </section>
  );
}
