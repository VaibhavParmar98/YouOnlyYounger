import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import Text from "./Text";

const FandQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const questions = [
    {
      ques: "What makes You Only Younger different from other wellness clinics?",
      ans: "We prioritize uncovering and treating the root cause of your health concerns using personalized, natural, and integrative therapies—guiding you toward sustainable, whole-body healing rather than relying on medications that only mask symptoms without resolving the true issue.",
    },
    {
      ques: "What is the Five Bodies framework?",
      ans: "It’s a holistic system addressing physical, mental, emotional, energetic, and spiritual health to restore full-body balance.",
    },
    {
      ques: "Do I need a diagnosis before booking a consultation?",
      ans: "No. Our practitioners can guide you even without a formal diagnosis to begin your personalized healing journey.",
    },
    {
      ques: "Are your treatments safe and evidence-based?",
      ans: "Yes. All treatments are backed by research and administered by trained professionals using natural and safe approaches.",
    },
    {
      ques: "Will I have to stop taking my current medications?",
      ans: "Not necessarily. Our experts work alongside your current care plan and only adjust medications when it’s safe and appropriate.",
    },
  ];

  const toggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="relative 2xl:max-w-7xl xl:max-w-5xl lg:max-w-3xl max-w-xl mx-auto px-4 py-10 lg:py-20 font-inter">
      
      {/* Left-side image */}
      <img
        src="./31.png"
        alt="Side Decoration"
        className=" absolute 2xl:-left-80 2xl:top-44 lg:-left-60 lg:top-36 md:-left-30 md:top-56 lg:w-64 lg:h-64 md:w-44 md:h-44"
      />

      <Text variant="text5" className=" text-center mb-10 font-marcellous">
        Frequently Asked Questions
      </Text>

      <div className="space-y-4 relative z-20">
        {questions.map((item, index) => (
          <div
            key={index}
            className={`border rounded-xl p-4 transition-all duration-300 ${
              activeIndex === index
                ? "border-[#400186] shadow-md"
                : "bg-white"
            }`}
          >
            <div
              onClick={() => toggle(index)}
              className="flex justify-between items-center cursor-pointer"
            >
              <Text variant="text3" className="font-medium  text-gray-800 font-marcellous">
                {index + 1}. {item.ques}
              </Text>
              <div className="bg-[#400186] p-2">
                {activeIndex === index ? (
                  <FaMinus size={12} className="text-white" />
                ) : (
                  <FaPlus size={12} className="text-white" />
                )}
              </div>
            </div>
            {activeIndex === index && (
              <Text variant="text3" className="mt-4 leading-relaxed ">
                {item.ans}
              </Text>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FandQ;
