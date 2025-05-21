import ImageSwiper from "./swiper";
import Image from "next/image";

export default function Content() {
  return (
    <div className="relative w-full h-screen mt-30 md:mt-0">
      {/* Background image */}
      {/* <Image
        src="/bgmaze.png"
        alt="Background Maze"
        fill
        className="object-cover opacity-5 z-0 absolute"
        priority
      /> */}
      <Image
                  src="/logo1.png"
                  alt="Polymaze Logo"
                  width={300}
                  height={100}
                  className="mb-10"
                />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-start justify-start gap-6 px-4 text-center mr-[15%] pl-10  sm:pl-30">
        <div className="ml-5 items-start justify-start ">
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


          <p className="text-white text-lg md:text-2xl max-w-3xl text-start">
            POLYMAZE is a maze-solving competition hosted by the Vision &
            Innovation Club. Designed robots rely on their programming and
            sensors to independently navigate the maze, showcasing impressive
            robotic abilities.
          </p>
        </div>
        <ImageSwiper />
      </div>
              <div className="absolute bottom-5 left-5 text-white text-xl font">
          <span className="font-bold text-4xl">02</span> / 06
        </div>
    </div>
  );
}
