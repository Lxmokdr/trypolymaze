import ImageSwiper from "./swiper";
import Image from "next/image";

export default function Content() {
  return (
    <div className="relative w-full h-screen mt-30 md:mt-0">


      {/* Content */}
      <div className="relative z-10 flex flex-col items-start justify-start gap-6 px-4 text-center mr-[15%] pl-20  ">
        <div className="items-start justify-start ">
          <div className="flex flex-row items-start">
            {/* White vertical rectangle */}
            <div className="bg-white w-2 h-16 mr-4 mt-2"></div>

            {/* Title */}
            <h1 className="text-white mb-4 text-start font">
              <span className="block text-sm md:text-base font-light text-white opacity-80">
                What is it
              </span>
              <span className="block text-4xl md:text-5xl font-bold text-white">
                Polymaze
              </span>
            </h1>
          </div>


          <p className="text-white/70 text-lg md:text-2xl max-w-3xl text-start">
            POLYMAZE is a maze-solving competition hosted by the Vision &
            Innovation Club. Designed robots rely on their programming and
            sensors to independently navigate the maze, showcasing impressive
            robotic abilities.
          </p>
        </div>
        <ImageSwiper />
      </div>


    </div>
  );
}
