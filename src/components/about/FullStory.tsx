import React from 'react';
import { Sprout, Globe, AlertTriangle, BookOpen, TreePine, Quote } from 'lucide-react';

const storyChapters = [
  {
    icon: Sprout,
    label: 'The Spark',
    text: 'After completing my 12th in science, life pushed me to leave my home and hometown—not by choice, but by necessity. Severe drought and the lack of water made daily life uncertain. During that difficult time, I planted 50 coconut saplings with hope. That small act quietly taught me a lifelong lesson: nature gives back only when we protect it.',
  },
  {
    icon: Globe,
    label: 'The Journey',
    text: 'My professional journey began in Haldwani, Uttarakhand, followed by business and work in Bageshwar and Almora. Alongside this, I worked continuously in the gold and precious metals industry, deepening my respect for natural resources. Work later took me beyond India—to the United States and 4–5 other countries. The more I saw the world, the more I understood how deeply human actions affect the environment.',
  },
  {
    icon: AlertTriangle,
    label: 'The Wake-Up Call',
    text: 'In 2016, I came across a report that deeply disturbed me. According to the Environmental Performance Index, India was ranked 141 out of 180 countries. By 2018, India\'s rank fell to 177, largely due to worsening air quality and poor waste management. One major cause stood out—unmanaged e-waste.',
    highlight: 'That realization changed everything.',
  },
  {
    icon: BookOpen,
    label: 'The Research',
    text: 'I began studying e-waste, recycling systems, and global best practices. I wrote a small book highlighting the urgent need for certified CFC (Collection, Facilitation & Recycling) centers in India. With my background in precious metals, I realized that waste is not the end of a product\'s life—it is the beginning of a circular economy.',
  },
  {
    icon: TreePine,
    label: 'The Promise',
    text: 'This belief led to action. I planted 2,500 trees, not as a symbolic gesture, but as a promise—to give back more than I take. Soon after, the vision of DMD Greentech Revive was born: a mission to revive value from e-waste, protect the environment, and build a responsible, transparent, and sustainable recycling ecosystem in India.',
  },
];

export default function FullStory() {
  return (
    <section className="py-16 sm:py-20 bg-white" id="full-story">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center mb-14">
          <span className="inline-block text-sm font-bold uppercase tracking-[0.2em] text-emerald-600 mb-4 bg-emerald-50 px-4 py-1.5 rounded-full border border-emerald-100">
            Our Journey
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            A Journey of Resilience & Responsibility
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            From drought-stricken farmland to building India&apos;s responsible e-waste ecosystem — this is how it all began.
          </p>
        </div>

        {/* Story chapters with vertical thread */}
        <div className="relative">
          {/* Vertical connecting line */}
          <div className="absolute left-6 sm:left-7 top-4 bottom-4 w-px bg-gradient-to-b from-emerald-200 via-emerald-300 to-emerald-200 hidden sm:block" />

          <div className="space-y-8 sm:space-y-10">
            {storyChapters.map((chapter, index) => {
              const Icon = chapter.icon;
              return (
                <div key={index} className="relative flex gap-5 sm:gap-7">
                  {/* Icon node */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center shadow-sm">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-1">
                    <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 mb-1 block">
                      {chapter.label}
                    </span>
                    <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                      {chapter.text}
                    </p>
                    {chapter.highlight && (
                      <p className="mt-3 text-lg sm:text-xl font-bold text-gray-900">
                        {chapter.highlight}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Standout quote */}
        <div className="mt-14 relative bg-gradient-to-br from-emerald-50 to-green-50 p-8 sm:p-10 rounded-2xl border border-emerald-100">
          <Quote className="absolute top-5 left-5 w-8 h-8 text-emerald-200" />
          <p className="relative z-10 text-emerald-800 font-medium italic text-center text-lg sm:text-xl leading-relaxed pl-4">
            &ldquo;DMD Greentech Revive stands for responsibility, revival, and respect — for nature, for resources, and for future generations.&rdquo;
          </p>
        </div>

        {/* Closing */}
        <p className="mt-10 text-gray-500 text-center text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
          This is not just a business journey. It is a journey shaped by drought, travel, learning, concern, and commitment. And this is where our green revival truly begins.
        </p>
      </div>

      <div className="mt-16 h-px bg-gray-200 w-full" />
    </section>
  );
}
