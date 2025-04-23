'use client'
import { useState } from 'react';
import { ChevronDown } from 'lucide-react'; 
export default function Content() {
    const questions = [
        { question: "Am I allowed to participate alone?", answer: "Absolutely, the choice is yours! If you want to have a complete freedom in designing and building your robot based on your own vision, POLYMAZE offers participation options for both soloists and teams." },
        { question: "What is the maximum number of participants allowed in a team?", answer: "A team can have a maximum of 4 people.This size helps the team communicate and collaborate better in order to build and design a proper robot." },
        { question: "Do all team members need to fill the form ?", answer: "No, you just need to assign one member of your team to fill it out." },
        { question: "Are there any pre-competition workshops scheduled?", answer: "We are pleased to confirm that we offer workshops for POLYMAZE participants, and it is going to be led by skilled trainers." },
        { question: "How can I find out if I've been accepted to compete in POLYMAZE?", answer: "All POLYMAZE applicants are going to receive an email about their acceptance status after the registration form closes." },
      ];
    
      const [openIndex, setOpenIndex] = useState<number | null>(null);
    
      const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
      };
    
    return (
    <div className="absolute inset-0 w-full h-full">
        {/* Background image */}
        <img
          src={"/bgmaze.png"}
          alt="Background Maze"
          className="object-cover w-full h-full opacity-5"
        />
  
        {/* Centered content */}
        <div className="absolute inset-0 z-10 flex flex-col items-start justify-start gap-6 px-4 text-center top-45 pl-20 lg:w-9/10 left-1/20">
            <h1 className="text-5xl font-bold">Frequently asked questions</h1>
            <div className=" w-full space-y-4">
        {questions.map((item, index) => (
          <div 
            key={index}
            className=" border border-white p-4"
          >
            <div 
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggle(index)}
            >
              <p className="text-white text-base sm:text-lg md:text-3xl font-semibold">
                {item.question}
              </p>
              <ChevronDown 
                className={`text-white transition-all duration-300 transform ${openIndex === index ? 'rotate-180' : 'rotate-0'} text-2xl sm:text-3xl`}
              />
            </div>
            {openIndex === index && (
              <p className="mt-4 text-white text-sm sm:text-base md:text-lg lg:text-2xl text-start">
                {item.answer}
              </p>
            )}
          </div>
        ))}
      </div>
        </div>
    </div>
    );
  }
  