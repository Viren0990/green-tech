import React from 'react';
import Image from 'next/image';
import { Calendar, Package, Lock, Wrench, Award } from 'lucide-react';


const steps = [
  {
    id: 1,
    title: "1. Schedule & Pickup",
    description: "Contact us via our portal to schedule a pickup. Our logistics team arrives at your location with specialized vehicles for safe transport.",
    icon: Calendar,
    variant: "start" // solid filled
  },
  {
    id: 2,
    title: "2. Audit & Inventory",
    description: "Upon arrival at our facility, every item is barcoded, weighed, and audited. You receive a detailed inventory report for your records.",
    icon: Package,
    variant: "middle" // outlined
  },
  {
    id: 3,
    title: "3. Data Wipe",
    description: "We perform DoD-standard data wiping. Hard drives that cannot be wiped are physically shredded to ensure total data privacy.",
    icon: Lock,
    variant: "middle" // outlined
  },
  {
    id: 4,
    title: "4. Segregation & Processing",
    description: "Items are segregated into 'To be Refurbished' or 'To be Recycled'. Recyclables are broken down into glass, plastic, and metals.",
    icon: Wrench,
    variant: "middle" // outlined
  },
  {
    id: 5,
    title: "5. Certification & Impact",
    description: "We issue a Green Certificate confirming the responsible disposal of your e-waste, along with data destruction certificates.",
    icon: Award,
    variant: "end" // highlight color
  }
];


export default function ProcessSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-100">
      <div className="layout-container flex flex-col max-w-[1280px] mx-auto px-4 md:px-10">
        
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
          
          {/* Left Column: Sticky Header & Image */}
          <div className="flex-1 md:sticky md:top-24">
            <h2 className="text-emerald-700 font-bold uppercase tracking-wider text-sm mb-3">
              Our Process
            </h2>
            <h3 className="text-slate-900 text-3xl md:text-4xl font-black leading-tight mb-6">
              From Waste to Resource: How It Works
            </h3>
            <p className="text-slate-600 text-lg mb-8">
              Our streamlined process ensures transparency and efficiency at every step. 
              Whether you have one laptop or a thousand servers, we handle it with the same level of care.
            </p>
            
            <div className="relative rounded-xl overflow-hidden shadow-lg h-48 md:h-80 w-full bg-slate-100">
              {/* Replace src with your actual image path */}
              <div className="bg-green-800 h-full w-full">
                
              </div>
            </div>
          </div>


          {/* Right Column: Timeline Steps */}
          <div className="flex-1 w-full">
            <div className="flex flex-col">
              {steps.map((step, index) => {
                const isLast = index === steps.length - 1;
                
                return (
                  <div key={step.id} className={`flex gap-4 ${isLast ? '' : 'pb-12'} relative`}>
                    
                    {/* Icon Column */}
                    <div className="flex flex-col items-center relative">
                      <div 
                        className={`size-10 rounded-full flex items-center justify-center shrink-0 z-10 
                          ${step.variant === 'start' ? 'bg-emerald-700 text-white' : ''}
                          ${step.variant === 'middle' ? 'bg-white border-2 border-emerald-700 text-emerald-700' : ''}
                          ${step.variant === 'end' ? 'bg-lime-400 text-black shadow-lg shadow-lime-400/40' : ''}
                        `}
                      >
                        <step.icon size={20} />
                      </div>
                      
                      {/* Vertical Line Connector */}
                      {!isLast && (
                        <div className="w-0.5 bg-slate-300 absolute top-10 bottom-[-3rem] left-[1.25rem]"></div>
                      )}
                    </div>


                    {/* Text Content */}
                    <div className="pt-1 flex-1">
                      <h4 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h4>
                      <p className="text-slate-600 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
