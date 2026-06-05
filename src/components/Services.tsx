import Image from 'next/image';

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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Sustainable Solutions for Your{' '}
            <span className="text-green-600">E-Waste</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            We provide end-to-end electronic waste management services tailored for
            businesses and individuals, ensuring a greener future.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white p-5 pb-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
            >
              {/* Illustration header */}
              <div className="w-full aspect-[4/3] mb-5 rounded-2xl overflow-hidden bg-gradient-to-br from-emerald-50/60 via-green-50/40 to-white border border-emerald-100/50">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
