'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const cardData = [
  {
    id: 1,
    title: 'Algerian Engineering Competition',
    text: 'A national event that brings together engineering students, recent graduates, and industry experts to solve real-world problems through innovation and teamwork.',
    logo: 'aec.png',
    image: 'aecimage.jpg',
  },
  {
    id: 2,
    title: 'Ignite',
    text: 'Ignite is a cultural public speaking event, based on an international concept and organized for the first time in Algeria by VIC. Speakers have 5 minutes to present a topic, with slides that automatically advance every 5 seconds.',
    logo: 'ignite.png',
    image: 'galaimage.jpg',
  },
  {
    id: 3,
    title: 'Gala',
    text: 'The Engineers Gala is an event that brings together young Algerian engineers in a friendly yet professional setting. It features booths, conferences, and roundtable discussions with representatives from major national and multinational companies, providing valuable opportunities for participants.',
    logo: 'gala.png',
    image: 'galaa.jpg',
  },
  {
    id: 4,
    title: 'Gamecraft',
    text: 'Game Craft is a local game jam hosted by VIC ENP each year inspired by Game Jam, an international event, in which the participating teams are given the mission of creating a game from scratch implementing a specific theme and conditions.',
    logo: 'gamecraft.png',
    image: 'young.jpg',
  },
  {
    id: 5,
    title: 'Masterclass',
    text: 'The MasterClass is a series of training sessions and workshops that goes online during the summer (2024s edition) . This unique event aims to provide participants with the opportunity to learn directly from professionals and experts in various fields.',
    logo: 'masterclass.png',
    image: 'young.jpg',
  },
  {
    id: 6,
    title: 'Spelling Bee',
    text: 'Spelling Bee is an international competition in which participants must spell a wide selection of words, typically with varying levels of difficulty.',
    logo: 'spellingbee.png',
    image: 'spelling.jpg',
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
