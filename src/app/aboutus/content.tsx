'use client';

import CardStack from './cards';

export default function Content() {
  return (
    <div id='aboutus' className="h-screen w-full overflow-hidden mt-30 md:mt-0">

      {/* Scrollable content */}
      <div className=" flex flex-col px-4 pl-20  w-full  pt-24  mx-auto pr-[15%]">
          <div className="flex flex-row items-start pb-15">
            {/* White vertical rectangle */}
            <div className="bg-white w-2 h-16 mr-4"></div>

            {/* Title and Subtitle */}
            <div className="text-start">
              <h1 className="text-5xl text-white font-bold font">
                About Us
              </h1>
            </div>
          </div>        <p className="text-white/70 text-lg sm:text-l md:text-xl mb-10 ">
          The <strong className='text-white'>Vision & Innovation Club</strong> is a scientific club supervised by the scientific association <strong className='text-white'>EL MAARIFA</strong>,
          which fosters an environment of future engineers within their esteemed school <strong className='text-white'>ECOLE NATIONALE POLYTECHNIQUE D&apos;ALGER</strong>.
          Our club aims to elevate students&apos; university experience through the exchange of various perspectives where everyone ignites their own idea.
          This assembly of ideas and efforts allows us to organize plenty of events which vary between enthusiastic competitions and charitable activities,
          such as: Polymaze, Ignite, Engineer&apos;s Gala, Charity, and so on.
        </p>  

        {/* <ImageSwiper /> */}
        <CardStack />
      </div>

      {/* Custom scrollbar hiding */}
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

    </div>
  );
}
