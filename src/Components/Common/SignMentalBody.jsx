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
          <Text variant="text5" className=" font-marcellous">
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
          <Button className="w-52 self-center lg:self-start">Book Appointment</Button>
        </div>
      </div>
    </div>
  );
};

export default SignMentalBody;
