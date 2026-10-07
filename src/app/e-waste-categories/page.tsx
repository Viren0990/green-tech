import Navbar from '@/src/components/Navbar';
import Image from 'next/image';
import { Check, Recycle, Truck, ShieldCheck, Leaf, Info } from 'lucide-react';
import JsonLd from '@/src/components/JsonLd';
import { BUSINESS } from '@/src/lib/business';
import { pageMetadata, breadcrumbJsonLd } from '@/src/lib/seo';

export const metadata = pageMetadata({
  title: 'E-Waste Items We Accept in Pune',
  description: 'Laptops, phones, servers, TVs, appliances and more: see every type of e-waste we collect in Pune, grouped by the E-Waste (Management) Rules, 2022.',
  path: '/e-waste-categories',
});

export default function EWasteCategories() {
  const categories = [
    {
      id: "01",
      title: "IT & TELECOMMUNICATION EQUIPMENT (ITEW)",
      color: "bg-[#1b5e20]", // Dark green
      borderColor: "border-[#1b5e20]",
      image: "/images/categories/1.png",
      items: [
        "Desktops / PCs (ITEW2)",
        "Laptops / Notebooks (ITEW3/4)",
        "Tablets / iPads (ITEW19)",
        "Servers & Mainframes (ITEW1)",
        "Printers & Scanners (ITEW6/21)",
        "Telephones / Mobiles (ITEW12-15)",
        "Routers / Modems (ITEW22/26)",
        "UPS / Inverters (ITEW24/25)",
        "Storage Devices (ITEW27)",
        "Other IT & Telecom Equipment (ITEW5-11,16-20,23)"
      ],
      codes: "Schedule I - Codes: ITEW1 to ITEW27"
    },
    {
      id: "02",
      title: "CONSUMER ELECTRONICS & PHOTOVOLTAIC EQUIPMENT (CEEW)",
      color: "bg-[#2e7d32]", // Medium green
      borderColor: "border-[#2e7d32]",
      image: "/images/categories/2.png",
      items: [
        "TVs (LCD / LED) (CEEW1)",
        "Monitors / Display Panels (CEEW6)",
        "Set-Top Boxes (CEEW8)",
        "Cameras / Camcorders (CEEW9/19)",
        "Audio Systems / Amplifiers (CEEW11/12)",
        "Video Recorders (CEEW10)",
        "Radio Sets (CEEW7)",
        "Other Audio / Video Equipment (CEEW13)",
        "Solar Panels / PV Modules (CEEW14)",
        "Lighting Equipment (CEEW15-18)"
      ],
      codes: "Schedule I - Codes: CEEW1 to CEEW19"
    },
    {
      id: "03",
      title: "LARGE & SMALL ELECTRICAL / ELECTRONIC EQUIPMENT (LSEEW)",
      color: "bg-[#388e3c]", // Lighter green
      borderColor: "border-[#388e3c]",
      image: "/images/categories/3.png",
      items: [
        "Refrigerators / Freezers (LSEEW1-3)",
        "Washing Machines (LSEEW3)",
        "Air Conditioners (LSEEW4)",
        "Microwaves (LSEEW9)",
        "Dishwashers (LSEEW5)",
        "Electric Cookers / Stoves (LSEEW6-7)",
        "Fans & Exhaust Equipment (LSEEW14-15)",
        "Vacuum Cleaners (LSEEW16)",
        "Hair Dryers / Shavers (LSEEW31-32)",
        "Other Household Appliances (LSEEW8,10-13,17-30,33-34)"
      ],
      codes: "Schedule I - Codes: LSEEW1 to LSEEW34"
    },
    {
      id: "04",
      title: "ELECTRICAL & ELECTRONIC TOOLS (EETW)",
      color: "bg-[#1b5e20]", // Dark green
      borderColor: "border-[#1b5e20]",
      image: "/images/categories/4.png",
      items: [
        "Drills (EETW1)",
        "Saws (EETW2)",
        "Sewing Machines (EETW3)",
        "Grinding / Cutting / Drilling Equipment (EETW4)",
        "Riveting / Screwing Tools (EETW5)",
        "Welding / Soldering Equipment (EETW6)",
        "Spraying / Dispensing Equipment (EETW7)",
        "Mowing / Gardening Tools (EETW8)"
      ],
      codes: "Schedule I - Codes: EETW1 to EETW8\n(Excludes large-scale stationary industrial tools)"
    },
    {
      id: "05",
      title: "TOYS, LEISURE & SPORTS EQUIPMENT (TLSEW)",
      color: "bg-[#2e7d32]", // Medium green
      borderColor: "border-[#2e7d32]",
      image: "/images/categories/5.png",
      items: [
        "Electric Train / Racing Sets (TLSEW1)",
        "Handheld Gaming Consoles (TLSEW2)",
        "Video Games (TLSEW3)",
        "Sports Equipment with Electrical Components (TLSEW4-5)",
        "Coin-Operated Machines (TLSEW6)"
      ],
      codes: "Schedule I - Codes: TLSEW1 to TLSEW6"
    },
    {
      id: "06",
      title: "MEDICAL DEVICES (MDW)",
      color: "bg-[#388e3c]", // Lighter green
      borderColor: "border-[#388e3c]",
      image: "/images/categories/7.png",
      items: [
        "Radiotherapy Equipment (MDW1)",
        "Cardiology Equipment (MDW2)",
        "Dialysis Equipment (MDW3)",
        "Ventilators (MDW4)",
        "Laboratory Diagnostic Equipment (MDW6)",
        "Analysers (MDW7)",
        "MRI / PET / CT / Ultrasound (MDW8)",
        "Other Medical Equipment (MDW5,9-10)"
      ],
      codes: "Schedule I - Codes: MDW1 to MDW10\n(Excludes implanted & infected products)"
    },
    {
      id: "07",
      title: "LABORATORY INSTRUMENTS (LIW)",
      color: "bg-[#4caf50]", // Lightest green
      borderColor: "border-[#4caf50]",
      image: "/images/categories/6.png",
      items: [
        "Gas Analysers (LIW1)",
        "Laboratory Instruments with Electrical / Electronic Components (LIW2)"
      ],
      codes: "Schedule I - Codes: LIW1 to LIW2"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Navbar />
      <JsonLd data={breadcrumbJsonLd('Items We Accept', '/e-waste-categories')} />
      
      {/* Hero Section */}
      <div className="relative pt-[72px] overflow-hidden flex items-center min-h-[200px] md:min-h-[260px]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/categories/hero.png" 
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-right lg:object-center"
            priority
          />
        </div>
        
        {/* Content Overlay */}
        <div className="relative z-10 max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <div className="max-w-3xl mx-auto md:ml-8 lg:ml-12 flex flex-col items-center md:items-start text-center md:text-left">
            
            {/* Title Block */}
            <div className="relative inline-block z-10 max-w-full">
              <div className="absolute inset-0 bg-[#0c2f16] shadow-lg rounded-md transform -skew-x-[8deg]"></div>
              <h1 className="relative text-2xl md:text-3xl lg:text-[2.6rem] font-extrabold uppercase leading-tight md:leading-none tracking-wide text-white text-center px-4 md:px-10 py-3 md:py-4 z-10 break-words">
                E-Waste Categories We Accept
              </h1>
            </div>
            
            {/* Subtitle Pill (Overlapping) */}
            <div className="relative z-20 inline-block -mt-2 md:-mt-3 md:ml-6 max-w-full">
              <div className="bg-gradient-to-b from-[#7cc633] to-[#3a8014] text-white px-4 md:px-6 py-2 rounded-full shadow-[0_4px_10px_rgba(0,0,0,0.3)] border border-green-500/50">
                <p className="text-xs md:text-sm lg:text-[15px] font-bold tracking-wide leading-normal">
                  Categories covered under Schedule I of the E-Waste (Management) Rules, 2022
                </p>
              </div>
            </div>
            
            {/* Description Text */}
            <div className="mt-5 text-gray-900 bg-white/70 backdrop-blur-sm md:bg-transparent md:backdrop-blur-none p-3 md:p-0 rounded-xl flex flex-col items-center md:items-start max-w-[850px] lg:pr-8">
              <p className="text-[14px] md:text-[16px] lg:text-[18px] font-bold md:font-medium leading-relaxed text-center md:text-left">
                We accept a wide range of electrical and electronic equipment covered under Schedule I
              </p>
              <div className="flex items-center justify-center md:justify-start gap-2 md:gap-3 mt-1 w-full">
                <div className="hidden md:block h-[1.5px] w-12 md:w-20 bg-green-800"></div>
                <p className="text-[14px] md:text-[16px] lg:text-[18px] font-bold md:font-medium leading-relaxed text-center md:text-left">
                  for responsible collection, refurbishment, recovery and recycling.
                </p>
                <div className="hidden md:block h-[1.5px] w-12 md:w-20 bg-green-800"></div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        {/* Top Row (3 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {categories.slice(0, 3).map((category) => (
            <div key={category.id} className="bg-white rounded-xl overflow-hidden border-2 border-emerald-600/30 flex flex-col shadow-md hover:shadow-xl transition-all h-full">
              
              {/* Card Header (Two-tone) */}
              <div className="flex items-stretch w-full shadow-sm bg-gradient-to-r from-[#1b5e20] via-[#2e7d32] to-[#1b5e20]">
                <div className="bg-black/20 text-white text-xl md:text-2xl font-extrabold px-4 py-2 md:px-5 flex items-center justify-center">
                  {category.id}
                </div>
                <div className="text-white flex items-center px-3 py-2 flex-grow">
                  <h3 className="text-[13px] md:text-[15px] font-extrabold uppercase leading-tight">
                    {category.title}
                  </h3>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row p-4 pt-4 gap-4 flex-grow items-center">
                <div className="relative w-full sm:w-[45%] h-52 lg:h-60 flex-shrink-0 bg-white">
                  <Image src={category.image} alt={category.title} fill className="object-contain" />
                </div>
                
                <div className="w-full sm:w-[55%] flex justify-center sm:justify-start">
                  <ul className="space-y-1.5 w-fit sm:w-full">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="flex items-start justify-start gap-1.5 text-[11px] md:text-[12px] text-gray-900 font-semibold leading-tight">
                        <Check className="w-3.5 h-3.5 md:w-4 md:h-4 text-emerald-600 flex-shrink-0 mt-0.5" strokeWidth={3} />
                        <span className="text-left">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-[#1b5e20] via-[#2e7d32] to-[#1b5e20] px-4 py-2.5 text-center mt-auto w-full">
                <p className="text-white text-sm md:text-[15px] font-bold whitespace-pre-line">
                  {category.codes}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Row (4 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.slice(3, 7).map((category) => (
            <div key={category.id} className="bg-white rounded-xl overflow-hidden border-2 border-emerald-600/30 flex flex-col shadow-md hover:shadow-xl transition-all h-full">
              
              {/* Card Header (Two-tone) */}
              <div className="flex items-stretch w-full shadow-sm bg-gradient-to-r from-[#1b5e20] via-[#2e7d32] to-[#1b5e20]">
                <div className="bg-black/20 text-white text-lg md:text-xl font-extrabold px-3 py-1.5 md:px-4 flex items-center justify-center">
                  {category.id}
                </div>
                <div className="text-white flex items-center px-2 py-1.5 flex-grow">
                  <h3 className="text-[11px] md:text-[13px] font-extrabold uppercase leading-tight">
                    {category.title}
                  </h3>
                </div>
              </div>
              
              <div className="flex flex-col p-3 pt-3 gap-3 flex-grow">
                <div className="relative w-full h-40 flex-shrink-0 bg-white">
                  <Image src={category.image} alt={category.title} fill className="object-contain" />
                </div>
                
                <div className="w-full flex justify-center md:justify-start">
                  <ul className="space-y-1.5 w-fit md:w-full">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="flex items-start justify-start gap-1.5 text-[10px] md:text-[11px] text-gray-900 font-semibold leading-tight">
                        <Check className="w-3 h-3 md:w-3.5 md:h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" strokeWidth={3} />
                        <span className="text-left">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-[#1b5e20] via-[#2e7d32] to-[#1b5e20] px-3 py-2 text-center mt-auto w-full">
                <p className="text-white text-[12px] font-bold whitespace-pre-line leading-tight">
                  {category.codes}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA Strip */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-6 mb-8 w-full">
        <div className="bg-gradient-to-r from-[#e8f5e9] to-[#f1f8e9] rounded-xl shadow-sm border border-[#1b5e20]/10 p-3 lg:p-4 flex overflow-x-auto xl:overflow-visible">
          
          <div className="flex flex-row items-center justify-between gap-4 lg:gap-6 min-w-max xl:min-w-0 w-full">
            
            {/* CTA 1 */}
            <div className="flex items-center gap-2 lg:gap-3">
              <Recycle className="text-[#0d3a15] w-8 h-8 lg:w-10 lg:h-10 flex-shrink-0 stroke-[2.5]" />
              <div>
                <h4 className="font-extrabold text-[#0d3a15] text-[11px] lg:text-[13px] leading-tight">COMPLIANT & RESPONSIBLE</h4>
                <p className="text-[10px] lg:text-[11px] text-[#0d3a15]/80 font-bold leading-tight mt-0.5">As per E-Waste (Management)<br/>Rules, 2022</p>
              </div>
            </div>
            
            <div className="w-px h-10 bg-[#0d3a15]/30"></div>
            
            {/* CTA 2 */}
            <div className="flex items-center gap-2 lg:gap-3">
              <Truck className="text-[#0d3a15] w-8 h-8 lg:w-10 lg:h-10 flex-shrink-0 fill-[#0d3a15]" strokeWidth={0} />
              <div>
                <h4 className="font-extrabold text-[#0d3a15] text-[11px] lg:text-[13px] leading-tight">FREE E-WASTE<br/>PICKUP</h4>
                <p className="text-[10px] lg:text-[11px] text-[#0d3a15]/80 font-bold leading-tight mt-0.5">(Pune & Nearby Areas)</p>
              </div>
            </div>
            
            <div className="w-px h-10 bg-[#0d3a15]/30"></div>
            
            {/* CTA 3 */}
            <div className="flex items-center gap-2 lg:gap-3">
              <ShieldCheck className="text-[#0d3a15] w-8 h-8 lg:w-10 lg:h-10 flex-shrink-0 stroke-[2.5]" />
              <div>
                <h4 className="font-extrabold text-[#0d3a15] text-[11px] lg:text-[13px] leading-tight">SECURE DATA<br/>SANITIZATION</h4>
                <p className="text-[10px] lg:text-[11px] text-[#0d3a15]/80 font-bold leading-tight mt-0.5">for IT Assets</p>
              </div>
            </div>
            
            <div className="w-px h-10 bg-[#0d3a15]/30"></div>
            
            {/* CTA 4 */}
            <div className="flex items-center gap-2 lg:gap-3">
              <Recycle className="text-[#0d3a15] w-8 h-8 lg:w-10 lg:h-10 flex-shrink-0 stroke-[2.5]" />
              <div>
                <h4 className="font-extrabold text-[#0d3a15] text-[11px] lg:text-[13px] leading-tight">CERTIFIED RECYCLING<br/>& PROPER DISPOSAL</h4>
              </div>
            </div>
            
            <div className="w-px h-10 bg-[#0d3a15]/30"></div>
            
            {/* CTA 5 Slogan */}
            <div className="flex items-center gap-2 lg:gap-3">
              <Leaf className="text-[#558b2f] w-8 h-8 lg:w-10 lg:h-10 fill-[#558b2f] flex-shrink-0" />
              <h4 className="font-extrabold text-[#0d3a15] text-[13px] lg:text-[15px] italic leading-tight">
                A Greener Tomorrow,<br/>A Cleaner Planet.
              </h4>
            </div>
            
          </div>
        </div>
      </div>

      {/* Footer Banner */}
      <div className="bg-[#0d1f0d] border-t border-emerald-900/50 text-white/80 py-4 mt-auto">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <div className="flex items-start md:items-center gap-2">
            <Info className="w-5 h-5 text-emerald-400 shrink-0" />
            <span>Note: We do not accept waste batteries (covered under Battery Waste Management Rules, 2022) and radioactive waste.</span>
          </div>
          <div className="flex flex-wrap items-center gap-6 shrink-0">
            <a href="https://www.dmdgreentechrevive.com" className="hover:text-emerald-400 transition-colors flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>
              www.dmdgreentechrevive.com
            </a>
            <a href={BUSINESS.phoneHref} className="hover:text-emerald-400 transition-colors flex items-center gap-2 font-medium">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              {BUSINESS.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
