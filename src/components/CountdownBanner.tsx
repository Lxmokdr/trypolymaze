"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownBanner() {
  // Set your target date here (Year, Month (0-11), Day, Hour, Minute, Second)
  const targetDate = new Date(2025, 6, 8, 0, 0, 0); // Example: December 31, 2024

  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        // If we've reached the target date
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    // Calculate immediately
    calculateTimeLeft();

    // Then set up interval
    const timer = setInterval(calculateTimeLeft, 1000);

    // Clear interval on component unmount
    return () => clearInterval(timer);
  }, [targetDate]);

  const timeBlocks = [
    { label: "D", value: timeLeft.days },
    { label: "H", value: timeLeft.hours },
    { label: "M", value: timeLeft.minutes },
    { label: "S", value: timeLeft.seconds },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-black via-[#1a1a1a] to-black border-b border-white/10 backdrop-blur-sm py-1 px-4"
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="hidden md:block w-1/3">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-white/80 text-sm font-['Orbitron'] tracking-wider"
          >
            POLYMAZE COMPETITION
          </motion.p>
        </div>

        <div className="flex items-center justify-center w-full md:w-1/3 space-x-4">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-white text-xs md:text-sm font-['Orbitron'] tracking-wider uppercase"
          >
            Starts In:
          </motion.p>

          <div className="flex space-x-2 md:space-x-3">
            {timeBlocks.map((block, index) => (
              <div key={block.label} className="flex items-center">
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.2, duration: 0.3 }}
                  className="flex flex-col items-center"
                >
                  <div className="bg-black/80 border border-white/20 text-white px-2 py-1 rounded flex items-center justify-center">
                    <span className="text-sm md:text-base font-bold font-['Orbitron']">
                      {String(block.value).padStart(2, "0")}
                    </span>
                  </div>
                  <span className="text-white/70 text-[10px] md:text-xs font-['Orbitron']">
                    {block.label}
                  </span>
                </motion.div>

                {index < timeBlocks.length - 1 && (
                  <span className="text-white/50 mx-0.5 md:mx-1 text-xs md:text-sm">
                    :
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="hidden md:flex w-1/3 justify-end">
          <motion.a
            href="/register"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="text-xs bg-black text-white py-1 px-3 border border-white/30 font-['Orbitron'] tracking-wider hover:bg-white/10 transition-all duration-200"
          >
            REGISTER NOW
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}
