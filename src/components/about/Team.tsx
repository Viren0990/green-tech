import Image from 'next/image';
import teamImage from '@/src/images/1.webp';
import teamImage2 from '@/src/images/2.webp';
import teamImage3 from '@/src/images/3.webp';

export default function Team() {
  const team = [
    {
      name: 'Dhanaji Mahadev Dabade',
      role: 'Founder & CEO',
      description: '15+ years of experience and study in e-waste management.',
      image: teamImage2
    },
    {
      name: 'Thrinag Aggala',
      role: 'Chief Operations Officer',
      description: 'Operations expert ensuring our facilities are implemented across facilities.',
      image: teamImage3
    },
    {
      name: 'Vikas Jadhav',
      role: 'Head of Refurbishment',
      description: 'Tech enthusiast who leads our team and ensures dead tech comes back to life.',
      image: teamImage
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Meet the Team
          </h2>
          <p className="text-gray-600">
            The team dedicated to a greener tomorrow.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <div key={index} className="text-center">
              <div className="w-56 h-56 mx-auto mb-4 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full relative overflow-hidden shadow-lg border-4 border-white">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
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
