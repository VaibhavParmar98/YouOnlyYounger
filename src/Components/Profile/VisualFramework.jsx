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
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-10 ">
        {/* Heading Section */}
        <div className="flex flex-col gap-4 items-center text-center mb-10">
          <img src="./32.png" alt="" className="w-20 h-20 object-contain" />
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold font-marcellous">
            The Five Bodies Visual Framework{" "}
          </h1>
          <p className="text-sm sm:text-base max-w-3xl text-gray-700">
            True wellness goes deeper than the physical. Our Five Bodies
            approach helps you understand and heal every layer of your being —
            from muscle and energy to thoughts, awareness, and inner bliss.
          </p>
        </div>

        {/* Grid Section */}
        <div className="flex flex-wrap justify-center gap-6">
          {/* Card 1 */}
          <div className="bg-[#F6F6F6] p-5 rounded-lg flex flex-col gap-3 w-[400px] h-[230px]">
            <GiAtom size={60} className="text-[#400186]" />
            <h1 className="font-bold text-lg">
Physical Body            </h1>
            <p className="text-sm text-gray-700">
             The foundation of all health. This includes your muscles, bones, organs, and systems.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#F6F6F6] p-5 rounded-lg flex flex-col gap-3 w-[400px] h-[230px]">
            <GiEnergyArrow size={60} className="text-[#400186]" />
            <h1 className="font-bold text-lg">
              Vital Body
            </h1>
            <p className="text-sm text-gray-700">
             The body of energy and circulation. It drives digestion, immunity, and vitality.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#F6F6F6] p-5 rounded-lg flex flex-col gap-3 w-[400px] h-[230px]">
            <GiBrain size={60} className="text-[#400186]" />
            <h1 className="font-bold text-lg">
              Mental Body
            </h1>
            <p className="text-sm text-gray-700">
              This body stores thoughts, beliefs, and mental patterns. It influences stress and decision-making.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-[#F6F6F6] p-5 rounded-lg flex flex-col gap-3 w-[400px] h-[230px]">
            <GiMeditation size={60} className="text-[#400186]" />
            <h1 className="font-bold text-lg">
          Supermental Body
            </h1>
            <p className="text-sm text-gray-700">
              The higher intelligence layer guiding clarity and direction. This is your internal compass.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-[#F6F6F6] p-5 rounded-lg flex flex-col gap-3 w-[400px] h-[230px]">
            <GiPeaceDove size={60} className="text-[#400186]" />
            <h1 className="font-bold text-lg">
              Bliss Body
            </h1>
            <p className="text-sm text-gray-700">
              The deepest level — the essence of peace and joy. It’s awakened when all other bodies are in balance.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default VisualFramework;
