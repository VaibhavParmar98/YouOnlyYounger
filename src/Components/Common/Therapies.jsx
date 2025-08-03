import { div } from "framer-motion/client";
import React from "react";
import Text from "./Text";

const Therapies = () => {
  return (
    <div className="py-10 lg:py-20">
      <div className="max-w-7xl mx-auto bg-[#400186] rounded-2xl p-6">
        <div className="flex flex-col items-center gap-6">
            <Text variant="text5" className=" mt-10 text-white font-marcellous ">Therapies to Rebalance the Vital Body</Text>
          <div className="lg:flex-row text-center lg:text-left flex flex-col  items-center gap-6">
            <div className="flex flex-col gap-3 bg-white rounded-2xl p-3">
           <Text variant="text5" className="font-bold">01</Text>{" "}
            <Text variant="text3" className="font-semibold ">
              Energy Healing & Acupuncture
            </Text>{" "}
            <Text variant="text1">
              Energy Healing & Acupuncture clear energy blockages, restoring
              natural flow. This promotes vitality, balance, and faster healing,
              helping your body feel lighter, energized, and harmonized from
              within.
            </Text>
          </div>
          <div className="flex flex-col gap-3 bg-white rounded-2xl p-3">
<Text variant="text5" className="font-bold">02</Text>            <Text variant="text3" className="font-semibold ">IV Nutrient Therapy</Text>{" "}
            <Text variant="text1">
              IV Nutrient Therapy delivers essential vitamins and minerals
              directly to your cells, boosting energy, enhancing immunity,
              improving hydration, and restoring overall vitality for optimal
              health and wellness.
            </Text>
          </div>
          <div className="flex flex-col gap-3 bg-white rounded-2xl p-3">
<Text variant="text5" className="font-bold">03</Text>            <Text variant="text3" className="font-semibold ">
              Lymphatic Drainage Massage
            </Text>{" "}
            <Text variant="text1">
              Lymphatic Drainage Massage improves circulation and supports
              detoxification, helping flush out toxins, reduce swelling, boost
              immunity, and promote overall relaxation, leaving the body feeling
              lighter.
            </Text>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Therapies;
