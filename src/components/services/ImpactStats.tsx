import { Recycle, Building2, ShieldCheck } from 'lucide-react';

export default function ImpactStats() {
  const stats = [
    {
      icon: Recycle,
      number: '5,000+',
      label: 'Tons of E-Waste Recycled',
      gradient: 'from-green-400 to-emerald-500',
    },
    {
      icon: Building2,
      number: '250+',
      label: 'Corporate Partners',
      gradient: 'from-emerald-400 to-teal-500',
    },
    {
      icon: ShieldCheck,
      number: '100%',
      label: 'Data Security Guarantee',
      gradient: 'from-teal-400 to-cyan-500',
    }
  ];

  return (
    <section id="our-impact" className="py-24 bg-gradient-to-br from-emerald-800 via-green-900 to-teal-900 relative overflow-hidden">
      {/* Decorative glow behind stats */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-green-400/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-bold uppercase tracking-[0.2em] text-green-300 mb-4 bg-white/5 px-4 py-1.5 rounded-full border border-white/10">
            Our Impact
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Making a <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-300">Difference</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index}
                className="text-center group"
              >
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-10 transition-all duration-500 -translate-y-1">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${stat.gradient} rounded-2xl mb-6 shadow-lg scale-110 rotate-3 transition-all duration-500`}>
                    <Icon className="text-white" size={30} />
                  </div>
                  <h3 className="text-5xl md:text-6xl font-bold text-white mb-3 tracking-tight">
                    {stat.number}
                  </h3>
                  <p className="text-green-200/80 font-medium text-lg">
                    {stat.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
