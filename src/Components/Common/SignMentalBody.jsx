import React from "react";
import { TbCircleCheckFilled } from "react-icons/tb";
import Text from "../Common/Text";
import Button from "../Common/Button";

const SignMentalBody = () => {
  return (
    <div className="py-10 lg:py-20 bg-[#F6F6F6]">
      <div className="max-w-7xl mx-auto lg:flex-row flex flex-col p-6 md:p-0 items-center justify-center gap-10">
        <img src="./76.png" alt="" className="xl:w-auto xl:h-auto w-80 h-64"/>
        <div className="flex flex-col gap-3">
          <Text variant="text5" className=" marcellus-text leading-tight">
            Signs Your Mental Body Needs Support
          </Text>
          <Text variant="text1" className="flex items-center gap-3 ">
            <span>
              <TbCircleCheckFilled className="text-[#400186] " />
            </span>
            Constant overthinking or mental chatter
          </Text>
          <Text variant="text1" className="flex items-center gap-3 ">
            <span>
              <TbCircleCheckFilled className="text-[#400186] " />
            </span>
            Poor focus or memory lapses
          </Text>
          <Text variant="text1" className="flex items-center gap-3 ">
            <span>
              <TbCircleCheckFilled className="text-[#400186] " />
            </span>
            Anxiety, worry, or irritability
          </Text>
          <Text variant="text1" className="flex items-center gap-3 ">
            <span>
              <TbCircleCheckFilled className="text-[#400186] " />
            </span>
            Trouble sleeping due to racing thoughts
          </Text>
          <Text variant="text1" className="flex items-center gap-3 ">
            <span>
              <TbCircleCheckFilled className="text-[#400186] " />
            </span>
            Feeling mentally “stuck” or indecisive
          </Text>
<Button className="relative w-44 self-center lg:self-start  cursor-pointer overflow-hidden group text-black border border-black">
  <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
    Book Appointment
  </span>
  <span className="absolute left-0 top-0 h-full w-0 bg-black transition-all duration-300 ease-in-out group-hover:w-full"></span>
</Button>
        </div>
      </div>
    </div>
  );
};

export default SignMentalBody;
