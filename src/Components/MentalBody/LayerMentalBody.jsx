import React from "react";
import { TbCircleCheck } from "react-icons/tb";

const LayerMentalBody = () => {
  return (
    <div>
      <div className="py-10 xl:mt-40 lg:mt-20 mt-20">
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
          <div className="w-full lg:w-1/2 flex flex-col xl:gap-10 lg:gap-6 gap-6">
            <h1 className="text-2xl sm:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl  font-marcellous">
              What is the Mental Body?{" "}
            </h1>
            <p className="text-sm 2xl:text-lg xl:text-xl lg:text-sm sm:text-base text-gray-700">
              The Mental Body is the layer of your being that stores thoughts, beliefs, and mental patterns. It shapes how you perceive life, handle stress, and make decisions.
            </p>
             <p className="text-sm 2xl:text-lg xl:text-xl lg:text-sm sm:text-base text-gray-700">
              A balanced Mental Body supports clarity, focus, and positive thinking, while an overactive or negative mental state can lead to anxiety, confusion, and emotional imbalance
            </p>

            <button className="w-fit px-6 xl:text-xl py-3 text-white bg-[#400186] rounded-full hover:bg-[#310066] transition">
              Contact Us
            </button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-30  flex flex-col lg:flex-row items-center gap-6 px-4 font-inter">
          {/* Text Section */}
          <div className="w-full lg:w-1/2 flex flex-col gap-4">
            <h1 className="text-2xl sm:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl  font-marcellous">
              Why the Mental Body Matters
            </h1>
            <p className="text-sm flex items-center gap-3 2xl:text-lg xl:text-xl lg:text-sm sm:text-base text-gray-700">
             <span><TbCircleCheck className="text-[#400186]"/>
</span>Influences stress response and emotional stability
            </p>
             <p className="text-sm flex items-center gap-3  2xl:text-lg xl:text-xl lg:text-sm sm:text-base text-gray-700">
             <span><TbCircleCheck className="text-[#400186]"/>
</span>Shapes habits, decision-making, and problem-solving
            </p>
             <p className="text-sm flex items-center gap-3  2xl:text-lg xl:text-xl lg:text-sm sm:text-base text-gray-700">
             <span><TbCircleCheck className="text-[#400186]"/>
</span>Impacts sleep, focus, and creativity
            </p>
             <p className="text-sm flex items-center gap-3  2xl:text-lg xl:text-xl lg:text-sm sm:text-base text-gray-700">
             <span><TbCircleCheck className="text-[#400186]"/>
</span>Directly affects the health of other bodies (stress can weaken immunity and physical health)
            </p>

          
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
