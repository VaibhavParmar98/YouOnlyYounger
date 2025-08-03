import React from "react";
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

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 lg:py-20">
      {/* Heading Section */}
      <div className="flex flex-col gap-4 items-center text-center mb-10">
        <img src="./32.png" alt="" className="w-20 h-20 object-contain" />
        <Text variant="text5" className="font-marcellous">
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
        {/* Card 1 */}
        <div
          className="bg-[#F6F6F6] p-5 rounded-lg flex flex-col hover:bg-gray-300 gap-3 w-[400px] h-[230px] transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer"
          onClick={() => handleCardClick("/healing")}
        >
          <GiAtom size={60} className="text-[#400186]" />
          <Text variant="text4">Physical Body</Text>
          <Text variant="text1">
            The foundation of all health. This includes your muscles, bones,
            organs, and systems.
          </Text>
          <span>
            <FaArrowRight className="text-[#400186]"/>
          </span>
        </div>

        {/* Card 2 */}
        <div
          className="bg-[#F6F6F6] p-5 rounded-lg hover:bg-gray-300 flex flex-col gap-3 w-[400px] h-[230px] transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer"
          onClick={() => handleCardClick("/vital-body")}
        >
          <GiEnergyArrow size={60} className="text-[#400186]" />
          <Text variant="text4">Vital Body</Text>
          <Text variant="text1">
            The body of energy and circulation. It drives digestion, immunity,
            and vitality.
          </Text>
          <span>
            <FaArrowRight className="text-[#400186]"/>
          </span>
        </div>

        {/* Card 3 */}
        <div
          className="bg-[#F6F6F6] p-5 rounded-lg hover:bg-gray-300 flex flex-col gap-3 w-[400px] h-[230px] transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer"
          onClick={() => handleCardClick("/mental-body")}
        >
          <GiBrain size={60} className="text-[#400186]" />
          <Text variant="text4">Mental Body</Text>
          <Text variant="text1">
            This body stores thoughts, beliefs, and mental patterns. It
            influences stress and decision-making.
          </Text>
          <span>
            <FaArrowRight className="text-[#400186]"/>
          </span>
        </div>

        {/* Card 4 */}
        <div
          className="bg-[#F6F6F6] p-5 rounded-lg hover:bg-gray-300 flex flex-col gap-3 w-[400px] h-[230px] transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer"
          onClick={() => handleCardClick("/super-mental-body")}
        >
          <GiMeditation size={60} className="text-[#400186]" />
          <Text variant="text4">Supermental Body</Text>
          <Text variant="text1">
            The higher intelligence layer guiding clarity and direction. This is
            your internal compass.
          </Text>
          <span>
            <FaArrowRight className="text-[#400186]"/>
          </span>
        </div>

        {/* Card 5 */}
        <div
          className="bg-[#F6F6F6] p-5 rounded-lg hover:bg-gray-300 flex flex-col gap-3 w-[400px] h-[230px] transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer"
          onClick={() => handleCardClick("/bliss-body")}
        >
          <GiPeaceDove size={60} className="text-[#400186]" />
          <Text variant="text4">Bliss Body</Text>
          <Text variant="text1">
            The deepest level — the essence of peace and joy. It’s awakened when
            all other bodies are in balance.
          </Text>
          <span>
            <FaArrowRight className="text-[#400186]"/>
          </span>
        </div>
      </div>
      <div>
        <div className=" xl:flex-row flex flex-col items-center justify-center gap-6 mt-6">
          <Text variant="text1" className="flex  items-center gap-2">
            <FaCheckCircle className="text-[#400186]" />
            Physical, Mental & Emotional Healing
          </Text>
          <Text variant="text1" className="flex  items-center gap-2">
            <FaCheckCircle className="text-[#400186]" />
            Personalized Treatments Based on Your Body Profile
          </Text>
          <Text variant="text1" className="flex  items-center gap-2">
            <FaCheckCircle className="text-[#400186]" />
            Faster Results with Integrative Medical Experts
          </Text>
        </div>
      </div>
    </div>
  );
};

export default VisualFramework;
