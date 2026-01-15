import { Trash2, Shield, Package, Truck, ArrowRight } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Trash2,
      title: 'E-Waste Collection',
      description: 'We provide MPCB & CPCB-compliant e-waste collection with safe handling, secure transportation and environmentally responsible disposal.'
    },
    {
      icon: Shield,
      title: 'Data Sanitization',
      description: 'Secure, certified data sanitization to permanently remove sensitive information and keep your devices compliant and breach-free.'
    },

    {
      icon: Package,
      title: 'Refurbished Sales',
      description: 'High-quality refurbished laptops available at affordable prices, extending the lifecycle of tech devices.'
    },
    {
      icon: Truck,
      title: 'Corporate Pickup',
      description: 'Comprehensive pickup solutions for enterprises with compliance reporting and certificate issuance.'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Sustainable Solutions for Your <span className="text-green-600">E-Waste</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            We provide end-to-end electronic waste management services tailored for
            businesses and individuals, ensuring a greener future.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
              >
                {/* Decorative circle */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-500 ease-out"></div>

                <div className="w-14 h-14  bg-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-50 transition-colors duration-300 relative z-10">
                  <Icon className=" text-white group-hover:text-green-600 transition-colors duration-300" size={28} />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 relative z-10">
                  {service.title}
                </h3>

                <p className="text-gray-500 text-sm leading-relaxed mb-6 relative z-10">
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
