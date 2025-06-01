import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CountdownProps {
  targetDate: Date;
  className?: string;
  title?: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Countdown({
  targetDate,
  className,
  title = "Event Starts In",
}: CountdownProps) {
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
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={cn("flex flex-col items-center justify-center", className)}
    >
      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-white text-xl md:text-2xl font-medium mb-4 font-['Orbitron'] tracking-wider uppercase"
      >
        {title}
      </motion.h3>

      <div className="relative">
        {/* Decorative elements */}
        <motion.div
          className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-[80%] h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-50"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        />

        <div className="flex flex-row gap-4 md:gap-6 relative z-10">
          {timeBlocks.map((block, index) => (
            <motion.div
              key={block.label}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
              className="flex flex-col items-center"
            >
              <motion.div
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 15px rgba(255, 255, 255, 0.5)",
                  borderColor: "rgba(255, 255, 255, 0.8)",
                }}
                className="relative bg-black/80 border-2 border-white/30 text-white w-16 h-16 md:w-24 md:h-24 flex items-center justify-center rounded-md overflow-hidden"
              >
                {/* Animated background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent"
                  animate={{
                    opacity: [0.1, 0.2, 0.1],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                    ease: "easeInOut",
                  }}
                />

                {/* Pulsing dot in corner */}
                <motion.div
                  className="absolute top-2 right-2 w-2 h-2 rounded-full bg-white/80"
                  animate={{
                    opacity: [1, 0.3, 1],
                    scale: [1, 0.8, 1],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: index % 2 === 0 ? 1.5 : 2,
                    ease: "easeInOut",
                  }}
                />

                <span className="text-2xl md:text-4xl font-bold font-['Orbitron'] relative z-10">
                  {String(block.value).padStart(2, "0")}
                </span>
              </motion.div>

              <motion.span
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.5, duration: 0.3 }}
                className="text-white/80 text-sm md:text-base mt-2 font-['Orbitron'] tracking-wide uppercase"
              >
                {block.label}
              </motion.span>
            </motion.div>
          ))}
        </div>

        {/* Bottom decorative element */}
        <motion.div
          className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-[60%] h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
        />
      </div>
    </motion.div>
  );
}
