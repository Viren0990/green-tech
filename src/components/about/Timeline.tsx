import { BookOpen, Building2, Sprout, Truck, Megaphone, Handshake } from 'lucide-react';
import Image from 'next/image';
import timelineImage from '@/src/images/w5.jpg';

const milestones = [
  {
    year: '2018',
    subtitle: 'Research & Framework',
    description: "The journey began with intensive study and the conceptualization of a Common Facility Center. We focused on the intellectual groundwork, securing copyrights for our research books and signing critical MOUs and MOAs to establish a legal framework for the circular economy.",
    icon: BookOpen,
  },
  {
    year: '2022',
    subtitle: 'Official Incorporation',
    description: "After years of planning and laying the foundation, the company was formally incorporated. This marked our transition from a concept into a recognized legal entity, ready to execute our vision of sustainable waste management with professional governance.",
    icon: Building2,
  },
  {
    year: '2023',
    subtitle: 'Team Building & CSR',
    description: "We navigated initial funding challenges by liaising with government offices and hiring our first employees for specialized six-month training. Simultaneously, we launched eco-friendly initiatives, including green festival kits and planting 2,500 trees to offset carbon emissions.",
    icon: Sprout,
  },
  {
    year: '2024',
    subtitle: 'Operational Launch',
    description: "Moved from planning to on-ground action by initiating e-waste collection drives. We targeted residential societies and conducted detailed waste generation studies, establishing the logistics network required to channel electronic waste away from landfills.",
    icon: Truck,
  },
  {
    year: '2025',
    subtitle: 'Awareness Expansion',
    description: "Scaled our impact through dedicated awareness programs designed to educate the public on hazardous waste. We intensified our outreach efforts to bridge the gap between technology consumption and responsible disposal behavior among consumers.",
    icon: Megaphone,
  },
  {
    year: '2026',
    subtitle: 'Corporate Alliances & Scale',
    description: "We are expanding our horizon by forging strategic partnerships with corporate entities. Our goal is to integrate with business supply chains to maximize refurbishment and recycling volumes, ensuring retired electronics contribute to a circular economy rather than environmental degradation.",
    icon: Handshake,
  },
];

export default function Timeline() {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">

          {/* --- LEFT COLUMN: Sticky Image Card (Hidden on mobile) --- */}
          <div className="hidden lg:block lg:col-span-2 lg:sticky lg:top-32 h-[550px] rounded-[2.5rem] overflow-hidden relative shadow-2xl">
            <Image
              src={timelineImage}
              alt="DMD Green Tech Journey"
              style={{ objectFit: "contain" }}
              className="w-full h-full object-cover scale-105"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-green-950 via-green-900/40 to-black/10"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-green-950/40 via-green-100/10 to-green-100/10"></div>

            {/* Content Overlay */}
            <div className="absolute bottom-0 left-0 p-10">
              <span className="text-green-400 font-bold uppercase tracking-wider text-sm mb-2 block">Our Journey</span>
              <h3 className="text-white text-3xl font-bold mb-4 leading-tight">From Garage to Global Impact</h3>
              <p className="text-green-100/80 text-lg">
                Visualizing our path toward a sustainable future, turning challenges into milestones one year at a time.
              </p>
            </div>
          </div>


          {/* --- RIGHT COLUMN: Timeline --- */}
          <div className="lg:col-span-3">
            {/* Header */}
            <div className="text-center lg:text-left mb-16">
              <span className="text-green-600 font-bold uppercase tracking-wider text-sm">
                History
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                Milestones of Change
              </h2>
            </div>

            <div className="relative">
              {/* Vertical Line */}
              {/* Mobile: Left aligned. Desktop: Center aligned */}
              <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gray-200 md:-translate-x-1/2"></div>

              {/* Timeline Items */}
              <div className="flex flex-col gap-12">
                {milestones.map((item, index) => {
                  const isEven = index % 2 === 0;
                  const Icon = item.icon;

                  return (
                    <div
                      key={index}
                      className={`relative flex items-start md:items-center md:justify-between group ${isEven ? '' : 'md:flex-row-reverse'
                        }`}
                    >

                      {/* Dot */}
                      <div className="absolute left-[19px] md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-[3px] border-green-500 z-10"></div>

                      {/* Desktop Content Side (50% width) */}
                      <div className={`hidden md:block w-[45%] ${isEven ? 'text-right pr-12' : 'text-left pl-12'}`}>
                        <h3 className="text-3xl font-bold text-gray-900">{item.year}</h3>
                        <h4 className="text-lg font-semibold text-green-600 mb-2">{item.subtitle}</h4>
                        <p className="text-gray-500 leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      {/* Mobile Content (Full width, pushed right of the line) */}
                      <div className="md:hidden pl-14 w-full">
                        <h3 className="text-2xl font-bold text-gray-900">
                          {item.year}: <span className="text-green-600 text-lg">{item.subtitle}</span>
                        </h3>
                        <p className="text-gray-500 mt-2 leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      {/* Desktop Icon Side (50% width - purely decorative) */}
                      {/* Changed text-gray-200 to text-green-200 */}
                      <div className={`hidden md:flex w-[45%] items-center text-green-200/70 ${isEven ? 'pl-12 justify-start' : 'pr-12 justify-end'
                        }`}>
                        <Icon size={72} strokeWidth={1} />
                      </div>

                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}