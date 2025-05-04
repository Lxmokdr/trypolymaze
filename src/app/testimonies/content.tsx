"use client";

import ImageSwiper from "./swiper";
import Image from "next/image";

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
      <div className="content-container absolute inset-0 z-10 flex flex-col px-8 lg:w-11/12 pl-20">
        <h1 className="text-5xl text-white font-bold mb-8">Testimonies</h1>

        {/* Horizontal slider */}
        <ImageSwiper />
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
