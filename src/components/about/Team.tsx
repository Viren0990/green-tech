export default function Team() {
  const team = [
    {
      name: 'Rajesh Kumar',
      role: 'Founder & CEO',
      description: 'A mechanical engineer with 15+ years of experience in waste management systems.',
      image: '👨‍💼'
    },
    {
      name: 'Anita Desai',
      role: 'Chief Operations Officer',
      description: 'Operations expert ensuring our facilities are implemented across facilities.',
      image: '👩‍💼'
    },
    {
      name: 'Vikram Singh',
      role: 'Head of Refurbishment',
      description: 'Tech enthusiast who leads our team and ensures dead tech comes back to life.',
      image: '👨‍🔧'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Meet the Visionaries
          </h2>
          <p className="text-gray-600">
            The team dedicated to a greener tomorrow.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <div key={index} className="text-center">
              <div className="w-40 h-40 mx-auto mb-6 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center text-6xl">
                {member.image}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                {member.name}
              </h3>
              <p className="text-green-600 font-semibold mb-3 text-sm">
                {member.role}
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
