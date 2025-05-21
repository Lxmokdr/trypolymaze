'use client';

import CardStack from './cards';
import Image from 'next/image';

export default function Content() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Fixed full-screen background */}
      <Image
        src="/bgmaze.png"
        alt="Background Maze"
        fill
        className="object-cover opacity-5 z-0"
        priority
      />

      {/* Scrollable content */}
      <div className="relative z-10 flex flex-col px-8 w-full max-w-7xl pt-24 pl-20 mx-auto">
          <div className="flex flex-row items-start pb-15">
            {/* White vertical rectangle */}
            <div className="bg-white w-2 h-16 mr-4"></div>

            {/* Title and Subtitle */}
            <div className="text-start">
              <h1 className="text-5xl text-white font-bold font">
                About Us
              </h1>
            </div>
          </div>        <p className="text-white text-lg sm:text-l md:text-xl mb-10 leading-relaxed">
          The <strong>Vision & Innovation Club</strong> is a scientific club supervised by the scientific association <strong>EL MAARIFA</strong>,
          which fosters an environment of future engineers within their esteemed school <strong>ECOLE NATIONALE POLYTECHNIQUE D&apos;ALGER</strong>.
          Our club aims to elevate students&apos; university experience through the exchange of various perspectives where everyone ignites their own idea.
          This assembly of ideas and efforts allows us to organize plenty of events which vary between enthusiastic competitions and charitable activities,
          such as: Polymaze, Ignite, Engineer&apos;s Gala, Charity, and so on.
        </p>  

        {/* <ImageSwiper /> */}
        <CardStack />
      </div>

      {/* Custom scrollbar hiding */}
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
<div className="fixed bottom-5 left-5 text-white text-xl font z-50">
  <span className="font-bold text-4xl">01</span> / 06
</div>

    </div>
  );
}
