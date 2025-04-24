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
        <div className="absolute inset-0 z-10 flex flex-col items-start justify-start gap-6 px-4 text-center top-45 ">
            <div className="pl-10 sm:pl-30 items-start justify-start">
            <h1 className="text-white text-4xl md:text-5xl font-bold mb-4 text-start">
                What is POLYMAZE?
            </h1>
            <p className="text-white text-lg md:text-2xl max-w-3xl text-start">
                POLYMAZE is a maze-solving competition hosted by the Vision & Innovation Club.
                Designed robots rely on their programming and sensors to independently navigate
                the maze, showcasing impressive robotic abilities.
            </p>
            </div>
          <ImageSwiper />
        </div>
    </div>
    );
  }
  