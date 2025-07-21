import React from "react";
import {
  GiAtom,
  GiEnergyArrow,
  GiBrain,
  GiMeditation,
  GiPeaceDove,
} from "react-icons/gi";
import { FaCheckCircle } from "react-icons/fa";

const VisualFramework = () => {
  const lists = [
    {
      icon: <GiAtom className="text-[#400186] text-4xl mb-4" />,
      title: "Physical Body",
      desc: "The foundation of all health. This includes your muscles, bones, organs, and systems.",
    },
    {
      icon: <GiEnergyArrow className="text-[#400186] text-4xl mb-4" />,
      title: "Vital Body",
      desc: "The body of energy and circulation. It drives digestion, immunity, and vitality.",
    },
    {
      icon: <GiBrain className="text-[#400186] text-4xl mb-4" />,
      title: "Mental Body",
      desc: "This body stores thoughts, beliefs, and mental patterns. It influences stress and decision-making.",
    },
    {
      icon: <GiMeditation className="text-[#400186] text-4xl mb-4" />,
      title: "Supermental Body",
      desc: "The higher intelligence layer guiding clarity and direction. This is your internal compass.",
    },
    {
      icon: <GiPeaceDove className="text-[#400186] text-4xl mb-4" />,
      title: "Bliss Body",
      desc: "The deepest level — the essence of peace and joy. It’s awakened when all other bodies are in balance.",
    },
  ];

  return (
    <div className="px-4 py-10 max-w-7xl mx-auto flex flex-col gap-6 justify-center items-center font-inter">
      {/* Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl">
        {lists.map((item, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-lg transition duration-300 text-center"
          >
            {item.icon}
            <h3 className="text-lg sm:text-xl font-semibold mb-2 font-marcellous text-start">{item.title}</h3>
            <p className="text-gray-600 text-sm text-start">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Highlights */}
      <div className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-4 mt-6 px-4 text-center">
        <p className="flex items-center gap-2 text-sm">
          <FaCheckCircle className="text-[#400186]" />
          <span>Physical, Mental & Emotional Healing</span>
        </p>
        <p className="flex items-center gap-2 text-sm">
          <FaCheckCircle className="text-[#400186]" />
          <span>Personalized Treatments Based on Your Body Profile</span>
        </p>
        <p className="flex items-center gap-2 text-sm">
          <FaCheckCircle className="text-[#400186]" />
          <span>Faster Results with Integrative Medical Experts</span>
        </p>
      </div>
    </div>
  );
};

export default VisualFramework;
