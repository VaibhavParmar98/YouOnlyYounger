import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const IntegrativeHealing = () => {
  return (
    <div className="py-10 px-4 font-inter">
      <div className="max-w-5xl mx-auto w-full bg-[#F6F6F6] flex flex-col lg:flex-row gap-6 rounded-xl p-6 sm:p-10">
        
        {/* Text Content */}
        <div className="flex flex-col gap-6 w-full lg:w-1/2">
          <h1 className="text-2xl lg:text-3xl font-semibold font-marcellous">
            Where Beauty Meets Balance, and Healing Begins Within.
          </h1>

          {/* Block 1 */}
          <div className="flex flex-col gap-3">
            <p className="flex items-center gap-3 text-lg sm:text-xl font-marcellous">
              <FaCheckCircle className="text-[#400186] " />
              Healing Your Body Faster
            </p>
            <span className="text-sm text-gray-700">
              Functional nutrition refers to personalized nutrition plans that help you maintain optimal
              health at all times. Our nutrition plans promote optimal gut health, hormone balance, and
              cardiometabolic health, thus ensuring you achieve and maintain perfect health. Our health
              doctors review your symptoms, health history, medications, and lifestyle to curate the
              ideal dietary plans and foster positive nutritional habits.
            </span>
          </div>

          {/* Block 2 */}
          <div className="flex flex-col gap-3">
            <p className="flex items-center gap-3 text-lg sm:text-xl font-marcellous">
              <FaCheckCircle className="text-[#400186] " />
              Integrative Medicine
            </p>
            <span className="text-sm text-gray-700">
              Integrative medicine is a form of medical therapy that addresses the root cause of your
              mental and physical health problems. Instead of simply treating the external symptoms,
              integrative medicine investigates, identifies, and addresses the root cause. This approach
              liberates you from your current symptoms while fostering overall wellness, preventing
              future diseases and concerns.
            </span>
          </div>

          <button className="mt-2 w-fit rounded-full px-6 py-2 bg-[#400186] text-white text-sm sm:text-base">
            About Me
          </button>
        </div>

        {/* Image Content */}
        <div className="w-full lg:w-1/2 flex flex-col sm:flex-row items-center justify-center gap-4">
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
