import { Trash2, Shield, Package, Truck } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Trash2,
      title: 'E-Waste Collection',
      description: 'We collect all types of electronic waste from your old electronics, ensuring they don\'t end up in landfills.'
    },
    {
      icon: Shield,
      title: 'Data Destruction',
      description: 'Certified data wiping and secure destruction services to protect your privacy and maintain security.'
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
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Sustainable Solutions for Your E-Waste
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We provide end-to-end electronic waste management services tailored for 
            businesses and individuals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="text-green-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
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
