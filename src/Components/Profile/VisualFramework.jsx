import React, { useEffect, useState } from "react";
import {
  GiAtom,
  GiEnergyArrow,
  GiBrain,
  GiMeditation,
  GiPeaceDove,
} from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import Text from "../Common/Text";
import { FaCheckCircle } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

const VisualFramework = () => {
  const navigate = useNavigate();

  const handleCardClick = (path) => {
    navigate(path);
  };

  const rotatingTexts = [
    "Physical, Mental & Emotional Healing",
    "Personalized Treatments Based on Your Body Profile",
    "Faster Results with Integrative Medical Experts",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % rotatingTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 lg:pt-20 lg:pb-6">
      {/* Heading Section */}
      <div className="flex flex-col gap-4 items-center text-center mb-10">
        <img src="./101.svg" alt="" className="w-20 h-20 object-contain" />
        <Text variant="text5" className="marcellus-text leading-tight">
          The Five Bodies Visual Framework
        </Text>
        <Text variant="text1" className="text-gray-700">
          True wellness goes deeper than the physical. Our Five Bodies approach
          helps you understand and heal every layer of your being — from muscle
          and energy to thoughts, awareness, and inner bliss.
        </Text>
      </div>

      {/* Grid Section */}
      <div className="flex flex-wrap justify-center gap-6">
       {[
  {
    icon: <img src="./96.svg" className="w-14 h-14" alt="Physical" />,
    title: "Physical Body",
    desc: "The foundation of all health. This includes your muscles, bones, organs, and systems.",
    path: "/healing",
  },
  {
    icon: <img src="./97.svg" className="w-14 h-14" alt="Vital" />,
    title: "Vital Body",
    desc: "The body of energy and circulation. It drives digestion, immunity, and vitality.",
    path: "/vital-body",
  },
  {
    icon: <img src="./98.svg" className="w-14 h-14" alt="Mental" />,
    title: "Mental Body",
    desc: "This body stores thoughts, beliefs, and mental patterns. It influences stress and decision-making.",
    path: "/mental-body",
  },
  {
    icon: <img src="./99.svg" className="w-14 h-14" alt="Supermental" />,
    title: "Supermental Body",
    desc: "The higher intelligence layer guiding clarity and direction. This is your internal compass.",
    path: "/super-mental-body",
  },
  {
    icon: <img src="./100.svg" className="w-14 h-14" alt="Bliss" />,
    title: "Bliss Body",
    desc: "The deepest level — the essence of peace and joy. It’s awakened when all other bodies are in balance.",
    path: "/bliss-body",
  },
].map((card, i) => (
  <div
    key={i}
    className="bg-[#F6F6F6] group p-5 rounded-lg hover:bg-gray-300 flex flex-col gap-3 w-[400px] h-[230px] transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer"
    onClick={() => handleCardClick(card.path)}
  >
    {card.icon}
    <Text variant="text4" className="font-bold">
      {card.title}
    </Text>
    <Text variant="text1">{card.desc}</Text>
    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <FaArrowRight className="text-[#400186]" />
    </span>
  </div>
))}

      </div>

      {/* Text section - Rotating on mobile */}
      <div className="mt-6">
        {/* Mobile View - Only One at a Time */}
        <div className="flex xl:hidden flex-col items-center justify-center gap-6">
          <Text
            variant="text1"
            className="flex items-center gap-2 transition-opacity duration-500 ease-in-out"
            style={{ opacity: 1, animation: `fadeInOut 3s infinite` }}
            key={currentIndex} // Key ensures re-render for animation
          >
            <FaCheckCircle className="text-[#400186]" />
            {rotatingTexts[currentIndex]}
          </Text>
        </div>

        {/* Desktop View - Show All */}
        <div className="hidden xl:flex flex-row items-center justify-center gap-6">
          {rotatingTexts.map((text, i) => (
            <Text key={i} variant="text1" className="flex items-center gap-2">
              <FaCheckCircle className="text-[#400186]" />
              {text}
            </Text>
          ))}
        </div>
      </div>

      {/* CSS for Smooth Transition */}
      <style>
        {`
          @keyframes fadeInOut {
            0% { opacity: 0; transform: translateY(10px); }
            20% { opacity: 1; transform: translateY(0); }
            80% { opacity: 1; transform: translateY(0); }
            100% { opacity: 0; transform: translateY(-10px); }
          }
        `}
      </style>
    </div>
  );
};

export default VisualFramework;