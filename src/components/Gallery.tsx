'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Leaf, Recycle, Gift, ArrowRight, Users, BarChart2 } from 'lucide-react';
import { motion } from 'framer-motion';
import galleryImage from '@/src/images/w2.jpg';
import galleryImage2 from '@/src/images/w.jpg';
import galleryImage3 from '@/src/images/ppp.webp';

export default function Gallery() {
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

        {/* Bento Grid */}
        <div className="grid lg:grid-cols-12 gap-6 mb-6">
          
          {/* Left Large Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 flex flex-col group hover:shadow-md transition-shadow"
          >
            <div className="relative h-64 sm:h-80 lg:h-auto lg:flex-1 w-full overflow-hidden min-h-[300px]">
              <Image src={galleryImage2} alt="Community Collection Initiative" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="p-5 flex items-center gap-4 shrink-0">
              <div className="bg-green-50 text-green-600 w-12 h-12 rounded-full flex items-center justify-center shrink-0 self-start mt-1">
                <Recycle className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <span className="text-green-600 text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-1 block">E-Waste Collection Drive</span>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">Community Collection Initiative</h3>
                <p className="text-gray-500 text-sm line-clamp-2 pr-4">Engaging communities to responsibly collect and recycle e-waste for a sustainable future.</p>
              </div>
              <Link href="/posts" className="inline-flex items-center text-green-600 bg-green-50 px-4 py-2 rounded-full text-sm font-semibold hover:bg-green-100 group/link transition-colors shrink-0 self-end mb-1 hidden sm:flex">
                Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Right Stacked Cards */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            
            {/* Top Right Card */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 flex flex-col group flex-1 hover:shadow-md transition-shadow">
              <div className="relative h-48 lg:h-auto lg:flex-1 w-full overflow-hidden min-h-[160px]">
                <Image src={galleryImage} alt="Festive Green Initiative" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-5 flex items-center gap-4 shrink-0">
                <div className="bg-green-50 text-green-600 w-12 h-12 rounded-full flex items-center justify-center shrink-0 self-start mt-1">
                  <Gift className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <span className="text-green-600 text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-1 block">Awareness Campaign</span>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1">Festive Green Initiative</h3>
                  <p className="text-gray-500 text-sm line-clamp-2">Promoting eco-friendly celebrations with e-waste collection & awareness.</p>
                </div>
                <Link href="posts" className="bg-green-50 w-8 h-8 rounded-full flex items-center justify-center text-green-600 hover:bg-green-100 transition-colors shrink-0 self-end mb-1">
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Bottom Right Card */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 flex flex-col group flex-1 hover:shadow-md transition-shadow">
              <div className="relative h-48 lg:h-auto lg:flex-1 w-full overflow-hidden min-h-[160px]">
                <Image src={galleryImage3} alt="E-waste to Eco-resources" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-5 flex items-center gap-4 shrink-0">
                <div className="bg-green-50 text-green-600 w-12 h-12 rounded-full flex items-center justify-center shrink-0 self-start mt-1">
                  <Leaf className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <span className="text-green-600 text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-1 block">Responsible Recycling</span>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1">E-waste to Eco-resources</h3>
                  <p className="text-gray-500 text-sm line-clamp-2">We convert your e-waste into resources and reduce environmental impact.</p>
                </div>
                <Link href="posts" className="bg-green-50 w-8 h-8 rounded-full flex items-center justify-center text-green-600 hover:bg-green-100 transition-colors shrink-0 self-end mb-1">
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        
      </div>
    </section>
  );
}
