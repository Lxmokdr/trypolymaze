"use client";

import ImageSwiper from "./swiper";

export default function Content() {
  return (
    <div className=" w-full ">

      <div className="content-container flex flex-col px-8 lg:w-11/12 pl-20 top-45">
              <div className="flex flex-row items-start mb-10">
          <div className="bg-white w-2 h-16 mr-4 "></div>

          <div className="text-start">
        <h1 className="text-5xl text-white font-bold font">Testimonies</h1>

          </div>
        </div>

        <ImageSwiper />
      </div>


    </div>
  );
}
