"use client";

import ImageSwiper from "./swiper";
import Image from 'next/image';

export default function Content() {
    return (
      <div className="absolute inset-0 w-full h-full">
        {/* Background image */}
        <Image
                                src="/bgmaze.png"
                                alt="Background Maze"
                                fill
                                className="object-cover opacity-5 z-0"
                                priority
                              />
  
        {/* Centered content */}
        <div className="absolute inset-0 z-10 flex flex-col px-8 pt-16 lg:w-11/12 pt-50 pl-20">
          <h1 className="text-5xl text-white font-bold mb-8">About Us</h1>
          <p className="text-white text-lg md:text-2xl max-w-4xl mb-10 leading-relaxed">
          The <strong>Vision & Innovation Club</strong> is a scientific club supervised by the scientific association <strong>EL MAARIFA</strong>,
          which fosters an environment of future engineers within their esteemed school <strong>ECOLE NATIONALE POLYTECHNIQUE D&apos;ALGER</strong>.
          Our club aims to elevate students&apos; university experience through the exchange of various perspectives where everyone ignites their own idea.
          This assembly of ideas and efforts allows us to organize plenty of events which vary between enthusiastic competitions and charitable activities,
          such as: Polymaze, Ignite, Engineer&apos;s Gala, Charity, and so on.
          </p>  
          {/* Horizontal slider */}
          <ImageSwiper/>
        </div>
  
        {/* Custom scrollbar hiding */}
        <style jsx>{`
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .no-scrollbar {
            -ms-overflow-style: none; /* IE and Edge */
            scrollbar-width: none; /* Firefox */
          }
        `}</style>
      </div>
    );
  }
  