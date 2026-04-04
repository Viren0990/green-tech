import hero from "@/src/images/ryan-brayoga-71RkuW0FGtI-unsplash.jpg"

import Image from "next/image";

export default function StoryHero() {

  return (
    <section className="relative pt-32 pb-16 min-h-screen flex flex-col justify-center overflow-hidden">
      
      {/* --- BACKGROUND IMAGE & OVERLAY (Full Section) --- */}
      <div className="absolute inset-0 z-0">
        <Image
          src={hero}
          alt="Technology meeting nature"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80" />
      </div>

      <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* --- CONTENT --- */}
        <div className="max-w-4xl px-4 py-20 mx-auto text-center flex flex-col items-center justify-center">
          <p className="text-green-400 font-bold mb-4 text-sm md:text-base tracking-[0.2em] uppercase">
            About Us
          </p>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight drop-shadow-lg">
            Reviving Tech,<br />
            Restoring the Future
          </h1>

          <p className="text-gray-200 text-lg md:text-2xl leading-relaxed max-w-3xl mx-auto font-light drop-shadow-md">
            Our Story, Our journey, Our Promise
          </p>
        </div>
      </div>
    </section>
  );
}