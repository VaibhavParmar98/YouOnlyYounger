import { div } from "framer-motion/client";
import React from "react";

const Therapies = () => {
  return (
    <div className="py-10">
      <div className="max-w-7xl mx-auto bg-[#400186] rounded-2xl p-6">
        <div className="flex flex-col items-center gap-6">
            <h1 className="text-4xl mt-10 text-white font-marcellous ">Therapies to Rebalance the Vital Body</h1>
          <div className="lg:flex-row flex flex-col  items-center gap-6">
            <div className="flex flex-col gap-3 bg-white rounded-2xl p-3">
            <img src="./01.png" alt="" className="w-10 h-10" />{" "}
            <h1 className="font-semibold text-lg">
              Energy Healing & Acupuncture
            </h1>{" "}
            <p>
              Energy Healing & Acupuncture clear energy blockages, restoring
              natural flow. This promotes vitality, balance, and faster healing,
              helping your body feel lighter, energized, and harmonized from
              within.
            </p>
          </div>
          <div className="flex flex-col gap-3 bg-white rounded-2xl p-3">
            <img src="./02.png" alt="" className="w-10 h-10" />{" "}
            <h1 className="font-semibold text-lg">IV Nutrient Therapy</h1>{" "}
            <p>
              IV Nutrient Therapy delivers essential vitamins and minerals
              directly to your cells, boosting energy, enhancing immunity,
              improving hydration, and restoring overall vitality for optimal
              health and wellness.
            </p>
          </div>
          <div className="flex flex-col gap-3 bg-white rounded-2xl p-3">
            <img src="./03.png" alt="" className="w-10 h-10" />{" "}
            <h1 className="font-semibold text-lg">
              Lymphatic Drainage Massage
            </h1>{" "}
            <p>
              Lymphatic Drainage Massage improves circulation and supports
              detoxification, helping flush out toxins, reduce swelling, boost
              immunity, and promote overall relaxation, leaving the body feeling
              lighter.
            </p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Therapies;
