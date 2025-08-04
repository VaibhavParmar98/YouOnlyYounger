import React from "react";
import { FaCircleChevronRight } from "react-icons/fa6";
import Text from "../Common/Text";

const LicensesAndCertifications = () => {
  return (
    <div className="bg-[#F6F6F6] py-10 lg:py-20 font-inter">
      <div className="max-w-7xl mx-auto md:p-3">
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6 p-3 relative">
          {/* Image */}
          <div className="flex justify-center col-span-1 md:col-span-2 lg:col-span-1 relative">
            <img
              src="./23.png"
              alt="Doctor"
              className="rounded-lg shadow-lg object-cover w-full max-w-sm"
            />
            {/* Decorative box image */}
            <img
              src="./31.png"
              alt=""
              className="absolute w-28 h-28 xl:w-56 xl:h-56 -left-5 2xl:-left-60 2xl:-top-40 xl:-left-50 xl:-top-20 lg:-left-0 lg:top-72 md:-left-0 md:-top-44 mt-44 md:mt-64 z-0"
            />
          </div>

          {/* Licenses Section */}
          <div className="relative border p-5 border-dashed border-[#400186] rounded-lg bg-white text-gray-700 z-10">
  <Text
    variant="text4"
    className="font-semibold mb-4 text-[#400186] marcellus-text leading-tight"
  >
    Licenses and Certifications
  </Text>

  <ul className="space-y-3 text-[12px] md:text-[14px] lg:text-[16px] max-h-56 overflow-y-auto pr-2">
    {[
      "Board Certified — Integrative Medicine Doctor — IMD",
      "Board Certified — Doctor of Integrative Medicine — BCDIM",
      "Doctor of Philosophy — Integrative Medicine and Quantum Physics — PhD",
      "Board Certified — Doctor of Humanitarian Services — DHS",
      "Board Certified — Alternative Medical Practitioner — AMP",
      "Board Certified — Doctor of Nursing Practice — DNP",
      "Board Certified — Family Nurse Practitioner — APRN, FNP-BC",
      "Emergency Nurse Practitioner — ENP",
      "Board Certified — Quantum Health Coach — QHC",
      "Board Certified — Exponential Health Coach — EHC",
    ].map((item, index) => (
      <li key={index} className="flex gap-2 items-center">
        <FaCircleChevronRight className="text-[#400186] text-lg flex-shrink-0" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
</div>


          {/* Professional Organizations Section */}
       <div className="border p-5 border-dashed border-[#400186] rounded-lg bg-white text-gray-700 z-10">
  <Text
    variant="text4"
    className="font-semibold mb-4 text-[#400186] marcellus-text leading-tight"
  >
    Professional Organizations
  </Text>

  <ul className="space-y-3 text-[12px] md:text-[14px] lg:text-[16px] max-h-56 overflow-y-auto pr-2">
    {[
      "BOIM — Board of Integrative Medicine",
      "ANMA — American Naturopathic Medical Association",
      "ACAHAP — Society of Complementary Alternative and Holistic Practitioners",
      "AADP — American Association of Drugless Practitioners",
      "AAMA — American Alternative Medical Association",
      "WONM — World Organization of Natural Medicine",
      "AANP — American Association of Nurse Practitioners",
      "ANCC — American Nurses Credentialing Center",
      "AHNA — American Holistic Nurses Association",
      "TNA — Texas Nurses Association",
    ].map((item, index) => (
      <li key={index} className="flex gap-2 items-center">
        <FaCircleChevronRight className="text-[#400186] text-lg flex-shrink-0" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
</div>

        </div>
      </div>
    </div>
  );
};

export default LicensesAndCertifications;
