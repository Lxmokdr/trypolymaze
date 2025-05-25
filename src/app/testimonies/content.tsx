"use client";

import ImageSwiper from "./swiper";

export default function Content() {
  return (
    <div id="testimonies" className="w-full min-h-screen relative bg-[#000000]">
      <div className="content-container flex flex-col px-4 lg:w-11/12 sm:pl-20 pt-24 pb-32">
        <div className="flex flex-row items-start pb-15"></div>
        <div className="flex flex-row items-start mb-10">
          <div className="bg-white w-2 h-16 mr-4"></div>
          <div className="text-start">
            <h1 className="text-3xl md:text-5xl text-white font-bold font">
              Testimonies
            </h1>
          </div>
        </div>
        <div className="relative z-10">
          <ImageSwiper />
        </div>
      </div>
    </div>
  );
}
