import ImageSwiper from "./swiper";

export default function Content() {
  return (
    <div id="polymaze" className="relative w-full h-screen mt-90 md:mt-30">


      {/* Content */}
      <div className="relative z-10 flex flex-col items-start justify-start gap-6 px-4 text-center sm:mr-[15%] sm:pl-20">
        <div className="items-start justify-start">
          <div className="flex flex-row items-start">
            {/* White vertical rectangle */}
            <div className="bg-white w-2 h-16 mr-4"></div>

            {/* Title */}
            <h1 className="text-white text-start font">
              <div className="flex flex-col items-start">
                <span className="text-sm md:text-base font-light text-white opacity-80">
                  What is it
                </span>
                <span className="text-4xl md:text-5xl font-bold text-white">
                  Polymaze
                </span>
              </div>
            </h1>
          </div>

          <p className="text-white/70 text-lg md:text-2xl max-w-3xl text-start mt-4">
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
