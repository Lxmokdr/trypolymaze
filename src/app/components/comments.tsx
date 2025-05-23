'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface CommentProps {
  name: string;
  image: string;
  comment: string;
}

export default function Comment({ name, image, comment }: CommentProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-black border border-white rounded-lg p-4 sm:p-8 h-[400px] sm:h-[600px] w-full max-w-[500px] flex flex-col shadow-lg mx-auto space-y-4 sm:space-y-8"
    >
      <div className="flex items-center gap-3 sm:gap-6">
        <div className="relative w-12 h-12 sm:w-16 sm:h-16 flex-shrink-0">
          <Image
            src={image}
            alt={`${name}'s profile`}
            fill
            className="rounded-full object-cover"
            priority
          />
        </div>
        <h2 className="text-white text-lg sm:text-xl font-semibold">{name}</h2>
      </div>

      <div className="flex-grow overflow-y-auto px-1 sm:px-2">
        <p className="text-white text-base sm:text-lg whitespace-pre-wrap break-words">
          {comment}
        </p>
      </div>
    </motion.div>
  );
}
