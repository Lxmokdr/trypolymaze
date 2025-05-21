"use client";

import Image from "next/image";
import Link from "next/link";
import ModelViewer from "./3d";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="relative flex flex-col md:flex-row h-screen w-full overflow-visible mt-30 md:mt-0">
      {/* Left Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-[60%] bg-black/80 text-white flex flex-col justify-center px-10 md:px-20 py-10 relative z-0"
      >
        <Image
          src="/logo1.png"
          alt="Polymaze Logo"
          width={500}
          height={100}
          className="mb-10"
        />

        {/* Mobile Model Viewer (below logo) */}
        <div className="block md:hidden w-full mb-8">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-full flex justify-center items-center"
          >
            <div className="w-[70%] max-w-[300px]">
              <ModelViewer />
            </div>
          </motion.div>
        </div>

        <div className="flex flex-row items-start ml-10">
          {/* White vertical rectangle */}
          <div className="bg-white/50 w-2 h-full mr-4"></div>

          {/* Title and Subtitle */}
          <div className="text-start">
            <p className="uppercase text-white text-3xl font">
              <b>Polymaze</b> is here!
            </p>
            <p className="text-white/80 text-2xl">
              To throw down the gauntlet for robotics enthusiasts.
            </p>
          </div>
        </div>


        <div className="mb-4 ml-10">

        </div>

        <p className=" text-white/70 max-w-md mb-8 ml-10 text-xl" >
          Test your skills in mechanics, electronics, robotics and automatics to
          design and build a robot that can take on a challenging maze competed
          with intricate pathways and unexpected turns.
        </p>

        <Link href="/participate">
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 15px rgba(255, 255, 255, 0.5)",
            }}
            whileTap={{ scale: 0.98 }}
            className="font bg-black text-white py-4 px-10 border border-white text-lg md:text-xl font-medium transition-all duration-300 hover:bg-white hover:text-black ml-10"
          >
            Register Now
          </motion.button>
        </Link>


      </motion.div>

      {/* Right White Section */}
      <div className="hidden md:block w-[40%] bg-white relative z-0 mr-[32%]" />

      {/* Desktop Model Viewer (absolute positioning) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1.8 }}
        transition={{ delay: 0.2, duration: 1 }}
        className="hidden md:flex absolute top-10 bottom-0 left-[60%] -translate-x-1/2 w-full md:w-[80%] max-w-[1000px] z-20 pointer-events-none items-center justify-center"
      >
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="w-full h-full max-h-[600px] flex items-center justify-center"
        >
          <ModelViewer />
        </motion.div>
      </motion.div>


    </section>
  );
}
