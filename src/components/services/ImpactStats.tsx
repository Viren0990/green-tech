import { Recycle, Building2, ShieldCheck } from 'lucide-react';

export default function ImpactStats() {
  const stats = [
    {
      icon: Recycle,
      number: '5,000+',
      label: 'Tons of E-Waste Recycled',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Building2,
      number: '250+',
      label: 'Corporate Partners',
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      icon: ShieldCheck,
      number: '100%',
      label: 'Data Security Guarantee',
      color: 'from-teal-500 to-teal-600'
    }
  ];

  return (
    <section id="our-impact" className="py-20 bg-gradient-to-br from-green-900 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-2xl mb-6">
                  <Icon className="text-green-400" size={32} />
                </div>
                <h3 className="text-5xl font-bold text-white mb-2">
                  {stat.number}
                </h3>
                <p className="text-green-200 font-medium">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
