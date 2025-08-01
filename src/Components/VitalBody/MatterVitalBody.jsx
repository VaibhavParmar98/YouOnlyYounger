import React from "react";
import { TbCircleCheckFilled } from "react-icons/tb";

const MatterVitalBody = () => {
  return (
    <div className="py-10 bg-[#F6F6F6]">
      <div className="max-w-7xl mx-auto lg:flex-row flex flex-col p-6 md:p-0 items-center justify-center gap-10">
        <img src="./73.png" alt="" className="xl:w-auto xl:h-auto w-80 h-64"/>
        <div className="flex flex-col gap-3">
          <h1 className="text-4xl font-marcellous">
            Why the Vital Body Matters
          </h1>
          <p className="flex items-center gap-3 text-xl">
            <span>
              <TbCircleCheckFilled className="text-[#400186] " />
            </span>
            Fuels natural healing and recovery
          </p>
          <p className="flex items-center gap-3 text-xl">
            <span>
              <TbCircleCheckFilled className="text-[#400186] " />
            </span>
            Strengthens immunity and disease resistance
          </p>
          <p className="flex items-center gap-3 text-xl">
            <span>
              <TbCircleCheckFilled className="text-[#400186] " />
            </span>
            Supports mental clarity and emotional balance
          </p>
          <p className="flex items-center gap-3 text-xl">
            <span>
              <TbCircleCheckFilled className="text-[#400186] " />
            </span>
            Boosts overall vitality and longevity
          </p>
          <button className="w-fit px-6 mt-3 xl:text-xl py-2 text-white bg-[#400186] rounded-full hover:bg-[#310066] transition">
            Book an appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default MatterVitalBody;
