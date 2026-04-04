import React from 'react';
import Image from 'next/image';
import { ClipboardCheck, Truck, Wrench, ShieldCheck, Recycle, Award } from 'lucide-react';
import processImage from '@/src/images/qq.webp';

const steps = [
  {
    id: 1,
    title: "1. Quality Check",
    description: "Ensuring every piece of e-waste is meticulously inspected for salvageable components, a quality check is the first step towards a sustainable circular economy.",
    icon: ClipboardCheck,
    color: "bg-emerald-600 text-white shadow-emerald-300/50",
  },
  {
    id: 2,
    title: "2. Logistic Support",
    description: "Optimizing the movement and tracking of e-waste from collection points to processing facilities is crucial for an efficient and sustainable recycling operation.",
    icon: Truck,
    color: "bg-white border-2 border-emerald-500 text-emerald-600",
  },
  {
    id: 3,
    title: "3. Data Sanitization",
    description: "Securely erasing all sensitive information from a device before its disposal is the crucial final step in the data sanitization process.",
    icon: ShieldCheck,
    color: "bg-white border-2 border-teal-500 text-teal-600",
  },
  {
    id: 4,
    title: "4. Segregation, Dismantling & Refurbishment",
    description: "Effective e-waste management involves meticulous segregation and dismantling to recover valuable materials, enabling refurbishment for a renewed life.",
    icon: Wrench,
    color: "bg-white border-2 border-emerald-500 text-emerald-600",
  },
  {
    id: 5,
    title: "5. Recycling",
    description: "By transforming electronic waste into new resources, the recycling process turns a global problem into an opportunity for a sustainable future.",
    icon: Recycle,
    color: "bg-white border-2 border-green-500 text-green-600",
  },
  {
    id: 6,
    title: "6. Certification",
    description: "Ensuring proper disposal, the e-waste certification process guarantees that electronic waste is recycled and managed in an environmentally sound manner.",
    icon: Award,
    color: "bg-gradient-to-br from-lime-400 to-green-500 text-white shadow-lg shadow-lime-300/40",
  }
];

export default function ProcessSection() {
  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      
      {/* Top Wave Divider separating from CoreServices */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[50px] md:h-[80px]">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="fill-green-600/10"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="fill-green-600/15"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="fill-green-50/60"></path>
        </svg>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-green-200/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-[300px] h-[300px] bg-teal-200/15 rounded-full blur-[80px] pointer-events-none" />
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="layout-container flex flex-col max-w-7xl mx-auto px-4 md:px-10 relative z-10">

        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">

          {/* Left Column: Sticky Header & Image */}
          <div className="flex-1 md:sticky md:top-24">
            <span className="inline-block text-sm font-bold uppercase tracking-[0.2em] text-emerald-600 mb-4 bg-emerald-100/60 px-4 py-1.5 rounded-full border border-emerald-200/60 backdrop-blur-sm">
              Our Process
            </span>
            <h3 className="text-slate-900 text-3xl md:text-4xl font-black leading-tight mb-6">
              From Waste to Resource: <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">How It Works</span>
            </h3>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Our streamlined process ensures transparency and efficiency at every step.
              Whether you have one laptop or a thousand servers, we handle it with the same level of care.
            </p>

            <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-green-900/10 h-48 md:h-80 w-full ring-1 ring-green-200/50">
              <Image
                src={processImage}
                alt="Process Image"
                fill
                className="object-cover"
              />
              {/* Subtle gradient overlay on image */}
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 to-transparent" />
            </div>
          </div>

          {/* Right Column: Timeline Steps */}
          <div className="flex-1 w-full">
            <div className="flex flex-col">
              {steps.map((step, index) => {
                const isLast = index === steps.length - 1;

                return (
                  <div key={step.id} className={`flex gap-5 ${isLast ? '' : 'pb-12'} relative group`}>

                    {/* Icon Column */}
                    <div className="flex flex-col items-center relative">
                      <div
                        className={`size-11 rounded-full flex items-center justify-center shrink-0 z-10 transition-all duration-300 scale-110 shadow-md ${step.color}`}
                      >
                        <step.icon size={20} />
                      </div>

                      {/* Vertical Line Connector — gradient for visual interest */}
                      {!isLast && (
                        <div className="w-0.5 bg-gradient-to-b from-emerald-300 to-emerald-100 absolute top-11 -bottom-12 left-[21px]"></div>
                      )}
                    </div>

                    {/* Text Content */}
                    <div className="pt-1 flex-1 bg-white/80 backdrop-blur-sm rounded-xl px-5 py-4 border border-emerald-200 shadow-md transition-all duration-300">
                      <h4 className="text-lg font-bold text-emerald-800 mb-1.5 transition-colors">{step.title}</h4>
                      <p className="text-slate-500 leading-relaxed text-sm">{step.description}</p>
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