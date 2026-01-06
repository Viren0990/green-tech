export default function Stats() {
  const stats = [
    { number: '500+', label: 'Devices Recycled' },
    { number: '12k+', label: 'KG E-Waste Collected' },
    { number: '150+', label: 'Happy Clients' },
    { number: '100%', label: 'Data Erasure' }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                {stat.number}
              </h3>
              <p className="text-gray-600 uppercase text-sm tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
