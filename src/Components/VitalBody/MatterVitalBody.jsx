import React from "react";
import { TbCircleCheckFilled } from "react-icons/tb";
import Text from "../Common/Text";
import Button from "../Common/Button";

const MatterVitalBody = () => {
  return (
    <div className="py-10 lg:py-20 bg-[#F6F6F6]">
      <div className="max-w-7xl mx-auto lg:flex-row flex flex-col p-6 md:p-0 items-center justify-center gap-10">
        <img src="./73.png" alt="" className="xl:w-auto xl:h-auto w-80 h-64"/>
        <div className="flex flex-col gap-3">
          <Text variant="text5" className=" font-marcellous">
            Why the Vital Body Matters
          </Text>
          <Text variant="text1" className="flex items-center gap-3 ">
            <span>
              <TbCircleCheckFilled className="text-[#400186] " />
            </span>
            Fuels natural healing and recovery
          </Text>
          <Text variant="text1" className="flex items-center gap-3 ">
            <span>
              <TbCircleCheckFilled className="text-[#400186] " />
            </span>
            Strengthens immunity and disease resistance
          </Text>
          <Text variant="text1" className="flex items-center gap-3 ">
            <span>
              <TbCircleCheckFilled className="text-[#400186] " />
            </span>
            Supports mental clarity and emotional balance
          </Text>
          <Text variant="text1" className="flex items-center gap-3 ">
            <span>
              <TbCircleCheckFilled className="text-[#400186] " />
            </span>
            Boosts overall vitality and longevity
          </Text>
          <Button className="w-52 self-center lg:self-start">Book Appointment</Button>
        </div>
      </div>
    </div>
  );
};

export default MatterVitalBody;
