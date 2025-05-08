'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const cardData = [
  {
    id: 1,
    title: 'Algerian Engineering Competition',
    text: 'A national event that brings together engineering students, recent graduates, and industry experts to solve real-world problems through innovation and teamwork.',
    logo: 'aec.png',
    image: 'young.jpg',
  },
  {
    id: 2,
    title: 'Ignite',
    text: 'A fast-paced competition where teams tackle challenges in design, coding, and communication.',
    logo: 'ignite.png',
    image: 'young.jpg',
  },
  {
    id: 3,
    title: 'Gala',
    text: 'A formal event celebrating student achievements and club milestones.',
    logo: 'gala.png',
    image: 'young.jpg',
  },
  {
    id: 4,
    title: 'Gamecraft',
    text: 'A creative game development event that blends storytelling, art, and coding.',
    logo: 'gamecraft.png',
    image: 'young.jpg',
  },
  {
    id: 5,
    title: 'Masterclass',
    text: 'Educational sessions led by industry professionals to enhance student skills.',
    logo: 'masterclass.png',
    image: 'young.jpg',
  },
  {
    id: 6,
    title: 'Spelling Bee',
    text: 'An engaging contest to test and enhance English vocabulary skills.',
    logo: 'spellingbee.png',
    image: 'young.jpg',
  },
];

export default function CardStack() {
  const [cards, setCards] = useState(cardData);

  const handleTap = () => {
    const [first, ...rest] = cards;
    setCards([...rest, first]);
  };

  return (
    <div
      className="relative w-80 h-[500px] mx-auto mt-5 cursor-pointer overflow-visible"
      onClick={handleTap}
    >
      {cards.map((card, index) => (
        <motion.div
          key={card.id}
          layout
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="absolute w-full h-full bg-black rounded-2xl shadow-xl border border-[#797979] overflow-hidden"
          style={{
            zIndex: cards.length - index,
            left: `${index * -16}px`,
            top: `${index * 16}px`,
            transform: `scale(${1 - index * 0.03})`,
          }}
        >
          <div className="p-4 flex flex-col h-full text-white">
            {/* Logo */}
            <div className="flex items-center mb-4">
              <img
                src={card.logo}
                alt="Logo"
                className="w-10 h-10 object-contain"
              />
            </div>

            {/* Title and text */}
            <h2 className="text-lg font-semibold mb-2">{card.title}</h2>
            <p className="text-sm text-gray-300 mb-4 flex-1">{card.text}</p>

            {/* Bottom image */}
            <div className="mt-auto">
              <img
                src={card.image}
                alt="Card Visual"
                className="w-full h-40 object-cover rounded-xl"
              />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
