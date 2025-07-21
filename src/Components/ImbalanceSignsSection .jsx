import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const ImbalanceSignsSection = () => {
  const signs = [
    "Chronic pain or inflammation",
    "Hormonal imbalances",
    "Low energy or fatigue",
    "Digestive issues and bloating",
    "Frequent illness or slow recovery",
    "Poor sleep or weight fluctuations",
  ];

  return (
    <section className="bg-gray-100 px-4 py-10 rounded-xl font-inter">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left Section */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-3xl md:text-4xl  mb-4 font-marcellous">
            When This Body Is Out of Balance
          </h1>
          <h3 className="text-xl md:text-2xl text-[#400186] mb-6 font-marcellous">
            What Are the Signs of Imbalance?
          </h3>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
            {signs.map((sign, index) => (
              <li key={index} className="flex gap-2 items-start text-sm">
                <FaCheckCircle className="text-[#400186] mt-1" />
                {sign}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 flex flex-col sm:flex-row items-center justify-center gap-6">
          {/* Stats Box */}
          <div className="bg-[#400186] text-white py-4 px-6 rounded-lg text-center w-full sm:w-auto">
            <p className="text-lg">
              <span className="text-4xl font-semibold">500+</span> <br />
              Happy Customers
            </p>
          </div>

          {/* Image */}
          <div className="w-full sm:w-72 h-72 overflow-hidden rounded-xl shadow-lg">
            <img
              src="./42.jpg"
              alt="Happy customer"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImbalanceSignsSection;
