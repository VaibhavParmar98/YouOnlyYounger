import React from "react";
import { TbCircleCheck } from "react-icons/tb";
import Text from "../Common/Text";
import Button from "../Common/Button";

const LayerMentalBody = () => {
  return (
    <div>
      <div className="py-10 lg:py-20 xl:mt-40 lg:mt-20 mt-20">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-6 px-4 font-inter">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 flex items-center justify-center">
            <img
              src="./74.png"
              alt="Doctor"
              className="lg:w-full lg:h-auto w-96 self-center object-cover rounded-lg"
            />
          </div>

          {/* Text Section */}
          <div className="w-full text-center lg:text-left lg:w-1/2 flex flex-col xl:gap-10 lg:gap-6 gap-6">
            <Text variant="text5" className="  marcellus-text leading-tight">
              What is the Mental Body?{" "}
            </Text>
            <Text variant="text1" className=" text-gray-700">
              The Mental Body is the layer of your being that stores thoughts, beliefs, and mental patterns. It shapes how you perceive life, handle stress, and make decisions.
            </Text>
             <Text variant="text1" className=" text-gray-700">
              A balanced Mental Body supports clarity, focus, and positive thinking, while an overactive or negative mental state can lead to anxiety, confusion, and emotional imbalance
            </Text>

<Button className="relative w-44 self-center lg:self-start  cursor-pointer overflow-hidden group text-black border border-black">
  <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
   Contact Us
  </span>
  <span className="absolute left-0 top-0 h-full w-0 bg-black transition-all duration-300 ease-in-out group-hover:w-full"></span>
</Button>          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-30  flex flex-col lg:flex-row items-center gap-6 px-4 font-inter">
          {/* Text Section */}
          <div className="w-full lg:w-1/2 text-center lg:text-left flex flex-col gap-4">
            <Text variant="text5" className=" marcellus-text leading-tight">
              Why the Mental Body Matters
            </Text>
            <Text variant="text1" className=" flex items-center self-center lg:self-start gap-3 text-gray-700">
             <span><TbCircleCheck className="text-[#400186]"/>
</span>Influences stress response and emotional stability
            </Text>
             <Text variant="text1" className=" flex items-center self-center lg:self-start gap-3   sm:text-base text-gray-700">
             <span><TbCircleCheck className="text-[#400186]"/>
</span>Shapes habits, decision-making, and problem-solving
            </Text>
             <Text variant="text1" className=" flex items-center self-center lg:self-start gap-3   sm:text-base text-gray-700">
             <span><TbCircleCheck className="text-[#400186]"/>
</span>Impacts sleep, focus, and creativity
            </Text>
             <Text variant="text1" className=" flex items-center self-center lg:self-start gap-3   sm:text-base text-gray-700">
             <span><TbCircleCheck className="text-[#400186]"/>
</span>Directly affects the health of other bodies (stress can weaken immunity and physical health)
            </Text>

          
          </div>
          {/* Image Section */}
          <div className="w-full lg:w-1/2 flex items-center justify-center">
            <img
              src="./75.png"
              alt="Doctor"
              className="lg:w-full lg:h-auto w-96 self-center object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayerMentalBody;
