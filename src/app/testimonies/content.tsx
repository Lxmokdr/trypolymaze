"use client";

import ImageSwiper from "./swiper";
import Image from "next/image";

export default function Content() {
  return (
    <div className="absolute inset-0 w-full h-full">
      {/* Background image */}
      {/* <Image
        src="/bgmaze.png"
        alt="Background Maze"
        fill
        className="object-cover opacity-5 z-0"
        priority
      /> */}
       <Image
                                src="/logo1.png"
                                alt="Polymaze Logo"
                                width={300}
                                height={100}
                                className="mb-10"
                              />

      {/* Centered content */}
      <div className="content-container absolute inset-0 z-10 flex flex-col px-8 lg:w-11/12 pl-20 top-45">
              <div className="flex flex-row items-start ml-10 pb-15">
          {/* White vertical rectangle */}
          <div className="bg-white w-2 h-full mr-4 "></div>

          {/* Title and Subtitle */}
          <div className="text-start">
        <h1 className="text-5xl text-white font-bold font">Testimonies</h1>

          </div>
        </div>

        {/* Horizontal slider */}
        <ImageSwiper />
      </div>

<div className="fixed bottom-5 left-5 text-white text-xl font z-50">
  <span className="font-bold text-4xl">01</span> / 06
</div>

    </div>
  );
}
