import React from "react";
import { FaCheck } from "react-icons/fa6";
import Text from "../Common/Text";

const OurMission = () => {
  return (
    <div className="border-[#0000001F] border-t-2 border-b-2 p-10 mb-20">
        <div className="flex items-center justify-center mb-10">
           <Text variant="text4" className="font-bold">Your Success Is Our Mission</Text> 
        </div>
      <div className="max-w-7xl mx-auto md:flex-row flex flex-col items-center justify-between gap-10">
        <Text variant="text1" className="flex  gap-3">
          <FaCheck className="mt-2"/>Expertise in Holistic Health Solutions
        </Text>
        <Text variant="text1" className="flex  gap-3">
          <FaCheck className="mt-2"/>Personalized Wellness for Every Body
        </Text>
        <Text variant="text1" className="flex  gap-3">
          <FaCheck className="mt-2"/>Healing Through Compassionate Collaboration
        </Text>
        <Text variant="text1" className="flex  gap-3">
          <FaCheck className="mt-2"/>Focused on Measurable, Lasting Results
        </Text>
      </div>
    </div>
  );
};

export default OurMission;
