import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import Text from "./Text";

const ImbalanceSignsSection = () => {
  const signs = [
    "Shapes Thoughts & Beliefs",
    "Influences Stress Response",
    "Affects Decision-Making",
    "Supports Emotional Balance",
    
  ];

  return (
    <section className="bg-gray-100 px-4 py-10 lg:py-20 rounded-xl relative">
      <img
        src="./31.png"
        alt="Side Decoration"
        className=" absolute 2xl:-left-0 2xl:top-10 lg:-left-0 lg:top-10 md:-left-0 md:top-64 lg:w-64 lg:h-64 md:w-44 md:h-44"
      />

      <div className="max-w-7xl relative z-10 mx-auto flex flex-col lg:flex-row items-center justify-between ">
        {/* Left Section */}
        <div className="w-full lg:w-1/2">
          <Text variant="text5" className=" mb-4 text-center lg:text-left font-marcellous">
            When This Body Is Out of Balance
          </Text>
          <Text variant="text4" className=" text-[#400186] text-center lg:text-left mb-6 font-marcellous">
            What Are the Signs of Imbalance?
          </Text>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
            {signs.map((sign, index) => (
              <li key={index} className="flex gap-2 items-start text-[12px] md:text-[14px] lg:text-[16px]">
                <FaCheckCircle className="text-[#400186] mt-1" />
                {sign}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 flex flex-col lg:flex-row items-center justify-center gap-6">
          {/* Stats Box */}
          <div className="bg-[#400186] text-white py-4 px-6 lg:mt-0 mt-6 rounded-lg text-center w-full sm:w-auto">
            <Text variant="text2" className=" font-semibold">500+</Text> 
            <Text variant="text3" className="whitespace-nowrap">
              
              Happy Customers
            </Text>
            
          </div>

          {/* Image */}
          <div className="w-full flex items-center justify-center  overflow-hidden rounded-xl ">
            <img
              src="./42.jpg"
              alt="Happy customer"
              className="object-cove w-full h-full md:w-96 rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImbalanceSignsSection;
