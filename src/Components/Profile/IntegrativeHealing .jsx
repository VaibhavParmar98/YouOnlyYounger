import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import Button from "../Common/Button";
import Text from "../Common/Text";

const IntegrativeHealing = () => {
  return (
    <div className="py-10 overflow-x-hidden lg:py-20 px-4 font-inter">
      <div className="max-w-7xl mx-auto w-full bg-[#F6F6F6] flex flex-col lg:flex-row gap-6 rounded-xl p-6 sm:p-10">
        
        {/* Text Content */}
        <div className="flex text-start flex-col gap-6 w-full lg:w-1/2">
          <Text variant="text5" className=" marcellus-text leading-tight">
            Where Beauty Meets Balance, and Healing Begins Within.
          </Text>

          {/* Block 1 */}
          <div className="flex flex-col gap-3">
            <Text variant="text4" className="flex items-center gap-3  marcellus-text leading-tight">
              <FaCheckCircle className="text-[#400186] " />
              Healing Your Body Faster
            </Text>
            <Text className="text1">
              Functional nutrition refers to personalized nutrition plans that help you maintain optimal
              health at all times. Our nutrition plans promote optimal gut health, hormone balance, and
              cardiometabolic health, thus ensuring you achieve and maintain perfect health. Our health
              doctors review your symptoms, health history, medications, and lifestyle to curate the
              ideal dietary plans and foster positive nutritional habits.
            </Text>
          </div>

          {/* Block 2 */}
          <div className="flex flex-col gap-3">
            <Text variant="text4" className="flex items-center gap-3  marcellus-text leading-tight">
              <FaCheckCircle className="text-[#400186] " />
              Integrative Medicine
            </Text>
            <Text variant="text1" className=" text-gray-700">
              Integrative medicine is a form of medical therapy that addresses the root cause of your
              mental and physical health problems. Instead of simply treating the external symptoms,
              integrative medicine investigates, identifies, and addresses the root cause. This approach
              liberates you from your current symptoms while fostering overall wellness, preventing
              future diseases and concerns.
            </Text>
          </div>

<Button className="relative w-44 self-center lg:self-start cursor-pointer overflow-hidden group text-black border border-black">
  <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
    About Me
  </span>
  <span className="absolute left-0 top-0 h-full w-0 bg-black transition-all duration-300 ease-in-out group-hover:w-full"></span>
</Button>         </div>

        {/* Image Content */}
        <div className="w-full lg:w-1/2 flex   items-center justify-center gap-4">
          <img src="./24.png" alt="Image 1" className="h-60 sm:h-72 lg:h-80 mt-4 sm:mt-10 object-contain" />
          <div className="flex flex-col gap-3">
            <img src="./25.png" alt="Image 2" className="h-60 sm:h-72 lg:h-80 object-contain" />
            <img src="./26.png" alt="Image 3" className="h-32 object-contain" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default IntegrativeHealing;
