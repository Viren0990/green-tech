import { Target, Eye, Heart, Globe } from 'lucide-react';

const philosophies = [
  {
    title: "Our Mission",
    icon: Target,
    description: "To create a circular economy where no electronic device ends up in a landfill. We aim to extract maximum value from e-waste while minimizing environmental impact.",
  },
  {
    title: "Our Vision",
    icon: Eye,
    description: "To become India's most trusted partner in sustainable technology management, setting global standards for refurbishing quality and recycling efficiency.",
  },
  {
    title: "Our Values",
    icon: Heart,
    description: "Integrity in our recycling processes, transparency in our data handling, and an unwavering commitment to the safety of our planet and people.",
  },
  {
    title: "Global Impact",
    icon: Globe,
    description: "Thinking beyond borders. Every device recycled locally contributes to a global reduction in carbon emissions and hazardous mining activities.",
  }
];

export default function Philosophy() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-green-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-green-600 font-bold uppercase tracking-wider text-sm">
            Why We Exist
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
            Our Core Philosophy
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            The guiding principles that drive our innovation, commitment, and daily operations.
          </p>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {philosophies.map((item, index) => {
            const Icon = item.icon;
            
            return (
              <div 
                key={index} 
                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 relative overflow-hidden"
              >
                {/* Decorative Gradient Background on Hover */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-teal-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                
                {/* Icon Container */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-50 to-teal-50 flex items-center justify-center mb-6 group-hover:bg-green-100 transition-colors">
                  <Icon className="text-green-600 group-hover:scale-110 transition-transform duration-300" size={28} />
                </div>
                
                {/* Text Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}