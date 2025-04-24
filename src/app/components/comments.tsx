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
      className="bg-black border border-white rounded-lg p-4 h-1/2 w-full max-w-[350px] overflow-hidden shadow-lg"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="relative w-16 h-16">
          <Image
            src={image}
            alt={`${name}'s profile`}
            fill
            className="rounded-full object-cover"
            priority
          />
        </div>
        <h2 className="text-white text-xl font-semibold">{name}</h2>
      </div>

      <p className="text-white text-base whitespace-pre-wrap break-words text-xl">
        {comment}
      </p>
    </motion.div>
  );
}
