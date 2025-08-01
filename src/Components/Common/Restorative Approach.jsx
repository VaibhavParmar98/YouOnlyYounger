import React from "react";
import { BsShieldFillPlus, BsJournalPlus } from "react-icons/bs";
import { MdAutoGraph } from "react-icons/md";
import { LuGitGraph } from "react-icons/lu";
import { SlSettings } from "react-icons/sl";

const RestorativeApproach = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10 ">
      {/* Heading Section */}
      <div className="flex flex-col gap-4 items-center text-center mb-10">
        <img src="./32.png" alt="" className="w-20 h-20 object-contain" />
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold font-marcellous">
          Our Restorative Approach
        </h1>
        <p className="text-sm sm:text-base max-w-3xl text-gray-700">
          Our goal is to support your body’s natural healing ability by identifying and addressing the root causes of
          imbalance. Here’s how we approach physical healing at You Only Younger:
        </p>
      </div>

      {/* Grid Section */}
      <div className="flex flex-wrap justify-center gap-6">
        {/* Card 1 */}
        <div className="bg-[#EFECFD] p-5 rounded-lg flex flex-col gap-3 w-[400px] h-[230px]">
          <BsShieldFillPlus size={32} className="text-white bg-[#7355EC] p-1.5 rounded" />
          <h1 className="font-bold text-lg">Comprehensive Health Assessment</h1>
          <p className="text-sm text-gray-700">
            We begin with a detailed intake, reviewing your symptoms, history, lifestyle, and goals to understand the
            full picture of your physical health.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-[#FFF2E0] p-5 rounded-lg flex flex-col gap-3 w-[400px] h-[230px]">
          <MdAutoGraph size={32} className="text-white bg-[#FFCC78] p-1.5 rounded" />
          <h1 className="font-bold text-lg">Functional Diagnostics & Lab Testing</h1>
          <p className="text-sm text-gray-700">
            We use advanced lab work—gut, hormone, blood, and nutrient panels—to uncover the underlying imbalances
            that conventional tests may miss.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-[#F0F8FF] p-5 rounded-lg flex flex-col gap-3 w-[400px] h-[230px]">
          <LuGitGraph size={32} className="text-white bg-[#66C7FF] p-1.5 rounded" />
          <h1 className="font-bold text-lg">Personalized Treatment Planning</h1>
          <p className="text-sm text-gray-700">
            Based on your results, we craft a custom wellness plan using nutrition, natural supplementation, movement,
            and detox strategies that fit your lifestyle.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-[#EAF7F2] p-5 rounded-lg flex flex-col gap-3 w-[400px] h-[230px]">
          <BsJournalPlus size={32} className="text-white bg-[#28B078] p-1.5 rounded" />
          <h1 className="font-bold text-lg">Targeted Therapeutic Interventions</h1>
          <p className="text-sm text-gray-700">
            We apply proven therapies such as IV nutrient infusions, hormone support, anti-inflammatory protocols, and
            bodywork to restore balance and function.
          </p>
        </div>

        {/* Card 5 */}
        <div className="bg-[#FEE4D9] p-5 rounded-lg flex flex-col gap-3 w-[400px] h-[230px]">
          <SlSettings size={32} className="text-white bg-[#F4877A] p-1.5 rounded" />
          <h1 className="font-bold text-lg">Ongoing Monitoring & Optimization</h1>
          <p className="text-sm text-gray-700">
            Your body evolves—so does your plan. We regularly track your progress and fine-tune your care to ensure
            sustained improvements and long-term results.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RestorativeApproach;
