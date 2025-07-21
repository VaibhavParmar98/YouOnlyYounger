import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

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
    <div className="max-w-4xl mx-auto px-4 py-12 font-inter">
      <h2 className="text-3xl font-semibold text-center mb-10 font-marcellous">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {questions.map((item, index) => (
          <div
            key={index}
            className={`border rounded-xl p-4 transition-all duration-300 ${
              activeIndex === index
                ? "border-[#400186]  shadow-md"
                : "bg-white"
            }`}
          >
            <div
              onClick={() => toggle(index)}
              className="flex justify-between items-center cursor-pointer"
            >
              <span className="font-medium text-lg text-gray-800 font-marcellous">
                {index + 1}. {item.ques}
              </span>
              <div className="bg-gray-200  p-2">
                {activeIndex === index ? <FaMinus size={12} className=" text-[#400186]"/> : <FaPlus size={12} className="text-black "/>}
              </div>
            </div>
            {activeIndex === index && (
              <div className="mt-4 text-gray-700 text-sm leading-relaxed">
                {item.ans}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FandQ;
