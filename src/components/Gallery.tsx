'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Leaf, Recycle, Gift, ArrowRight, Users } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import galleryImage from '@/src/images/your-second-image.avif';
import galleryImage2 from '@/src/images/your-first-image.avif';
import galleryImage3 from '@/src/images/your-third-image.avif';
import galleryImage4 from '@/src/images/your-frouth-image.avif';

const campaigns = [
  {
    id: 1,
    image: galleryImage2,
    icon: Recycle,
    category: "E-Waste Collection Drive",
    title: "Community Collection Initiative",
    description: "Engaging communities to responsibly collect and recycle e-waste for a sustainable future."
  },
  {
    id: 2,
    image: galleryImage,
    icon: Gift,
    category: "Awareness Campaign",
    title: "Festive Green Initiative",
    description: "Promoting eco-friendly celebrations with e-waste collection & awareness."
  },
  {
    id: 3,
    image: galleryImage3,
    icon: Leaf,
    category: "Responsible Recycling",
    title: "E-waste to Eco-resources",
    description: "We convert your e-waste into resources and reduce environmental impact."
  },
  {
    id: 4,
    image: galleryImage4,
    icon: Users,
    category: "Community Outreach",
    title: "Green Education Initiative",
    description: "Our members distributing plants to school staff to promote environmental awareness."
  }
];

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % campaigns.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="gallery" className="bg-gray-50/50 py-2 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6"
        >
          <div>
            <div className="flex items-center gap-2 text-green-600 font-bold text-sm tracking-widest uppercase mb-3">
              <Leaf className="w-5 h-5 fill-current" />
              <span>Our Initiatives</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-3">Collections & Campaigns</h2>
            <p className="text-gray-500 text-lg">Highlights from our e-waste collection drives and awareness initiatives</p>
          </div>
          <Link href="/posts" className="inline-flex items-center gap-2 border-2 border-green-600 text-green-600 font-semibold px-6 py-2.5 rounded-full hover:bg-green-50 transition-colors">
            View All Campaigns <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Carousel */}
        <div className="relative w-full mx-auto mb-8 px-4 sm:px-0 group/carousel">
          <div className="overflow-hidden rounded-3xl relative h-[500px] shadow-sm border border-gray-100 bg-white">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute inset-0 flex flex-col md:flex-row group"
              >
                <div className="relative w-full h-64 md:h-full md:w-[70%] overflow-hidden shrink-0">
                  <Image src={campaigns[currentIndex].image} alt={campaigns[currentIndex].title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-center md:w-[30%] shrink-0">
                  <div className="flex items-center gap-3 mb-4 md:mb-6">
                    <div className="bg-green-50 text-green-600 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center shrink-0">
                      {(() => {
                        const Icon = campaigns[currentIndex].icon;
                        return <Icon className="w-5 h-5 md:w-6 md:h-6" />;
                      })()}
                    </div>
                    <span className="text-green-600 text-xs md:text-sm font-bold uppercase tracking-wider">{campaigns[currentIndex].category}</span>
                  </div>
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 md:mb-4">{campaigns[currentIndex].title}</h3>
                  <p className="text-gray-500 text-sm md:text-base lg:text-lg mb-6 md:mb-8 line-clamp-3 md:line-clamp-none">{campaigns[currentIndex].description}</p>
                  <Link href="/posts" className="inline-flex items-center text-green-600 font-semibold text-base md:text-lg group/link">
                    Learn More <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-6 gap-2">
            {campaigns.map((_, idx) => (
              <button 
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-8 bg-green-600' : 'w-2 bg-gray-300 hover:bg-gray-400'}`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

      </div>  
    </section>
  );
}
