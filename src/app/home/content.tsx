import Image from 'next/image';
export default function Homepage() {
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
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-6 px-4 text-center">
          {/* Glowing overlay box with custom animation */}
          <div className="bg-black bg-opacity-70 text-white p-6 py-10 px-24 rounded-3xl animate-subtle-glow transition-shadow duration-1000">
            <h1 className="text-5xl font-bold">POLYMAZE</h1>
            <h1 className="text-5xl">is here!</h1>
          </div>
  
          {/* Description text */}
          <div className="mt-6 max-w-3xl">
            <p className="text-white text-2xl mb-4">
              Design and build a robot using your skills in mechanics, electronics, robotics, and automation to conquer a complex maze filled with tricky paths and surprise turns.
            </p>
            <p className="text-white text-2xl font-semibold">
              The Maze is a Beast!
            </p>
          </div>
  
          {/* Buttons */}
          <div className="flex justify-center gap-4 mt-4 flex-wrap">
            <button className="bg-white text-black py-4 px-10 rounded-xl text-xl">
              Register Now
            </button>
            <button className="bg-black text-white py-4 px-10 rounded-xl border border-white text-xl">
              Learn More
            </button>
          </div>
        </div>
      </div>
    );
  }
  