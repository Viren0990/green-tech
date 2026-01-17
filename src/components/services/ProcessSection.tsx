import React from 'react';
import Image from 'next/image';
// Updated imports for the new workflow steps
import { ClipboardCheck, Truck, Wrench, ShieldCheck, Recycle, Award } from 'lucide-react';
import processImage from '@/src/images/w22.webp';

const steps = [
  {
    id: 1,
    title: "1. Quality Check",
    description: "Ensuring every piece of e-waste is meticulously inspected for salvageable components, a quality check is the first step towards a sustainable circular economy.",
    icon: ClipboardCheck,
    variant: "start"
  },
  {
    id: 2,
    title: "2. Logistic Support",
    description: "Optimizing the movement and tracking of e-waste from collection points to processing facilities is crucial for an efficient and sustainable recycling operation.",
    icon: Truck,
    variant: "middle"
  },
  {
    id: 3,
    title: "3. Data Sanitization",
    description: "Securely erasing all sensitive information from a device before its disposal is the crucial final step in the data sanitization process.",
    icon: ShieldCheck,
    variant: "middle"
  },
  {
    id: 4,
    title: "4. Segregation, Dismantling & Refurbishment",
    description: "Effective e-waste management involves meticulous segregation and dismantling to recover valuable materials, enabling refurbishment for a renewed life.",
    icon: Wrench,
    variant: "middle",
  },
  {
    id: 5,
    title: "5. Recycling",
    description: "By transforming electronic waste into new resources, the recycling process turns a global problem into an opportunity for a sustainable future.",
    icon: Recycle,
    variant: "middle"
  },
  {
    id: 6,
    title: "6. Certification",
    description: "Ensuring proper disposal, the e-waste certification process guarantees that electronic waste is recycled and managed in an environmentally sound manner.",
    icon: Award,
    variant: "end"
  }
];

export default function ProcessSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-100">
      <div className="layout-container flex flex-col max-w-7xl mx-auto px-4 md:px-10">

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
              {/* If you want to use the image you uploaded, import it and place it here */}
              <Image
                src={processImage}
                alt="Process Image"
                fill
                className="object-cover"
              />
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
                        <div className="w-0.5 bg-slate-300 absolute top-10 -bottom-12 left-5"></div>
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