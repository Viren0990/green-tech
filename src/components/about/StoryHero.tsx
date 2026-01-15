import hero from "@/src/images/ryan-brayoga-71RkuW0FGtI-unsplash.jpg"

import Image from "next/image";

export default function StoryHero() {

  return (

    <section className="pt-32 pb-16 min-h-screen bg-gray-100 flex flex-col justify-center">

      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">



        {/* Main Card Container */}

        <div className="relative rounded-[2.5rem] overflow-hidden min-h-[550px] flex flex-col justify-center items-center text-center shadow-2xl">



          {/* --- BACKGROUND IMAGE & OVERLAY --- */}

          <div className="absolute inset-0 z-0">

            {/* Background Image: Tech circuit + Plant */}

            <Image

              src={hero}

              alt="Technology meeting nature"

              className="w-full h-full object-cover"

            />

            {/* Dark Gradient Overlay for Text Readability */}

            <div className="absolute inset-0 bg-black/60 md:bg-black/20" />

          </div>



          {/* --- CONTENT --- */}

          <div className="relative z-10 max-w-4xl px-4">

            <p className="text-green-400 font-bold mb-4 text-sm md:text-base tracking-[0.2em] uppercase">

              About Us

            </p>



            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">

              Reviving Tech,<br />

              Restoring the Future

            </h1>



            <p className="text-gray-200 text-lg md:text-2xl leading-relaxed max-w-3xl mx-auto font-light">

              Our Story, Our journey, Our Promise

            </p>

          </div>



        </div>

      </div>

    </section>

  );
}