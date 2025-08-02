import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import Text from "../Common/Text";

const cardData = [
  {
    id: 1,
    name: "Katie Martin, MSN, APRN, FNP-C",
    title: "Nurse Practitioner",
    position: "Health Category Manager",
    img: "./35.png",
    bg: "bg-[#FFEED9]",
  },
  {
    id: 2,
    name: "Katie Martin, MSN, APRN, FNP-C",
    title: "Nurse Practitioner",
    position: "Health Category Manager",
    img: "./36.png",
    bg: "bg-[#E8F7F1]",
  },
  {
    id: 3,
    name: "Katie Martin, MSN, APRN, FNP-C",
    title: "Nurse Practitioner",
    position: "Health Category Manager",
    img: "./37.png",
    bg: "bg-[#FFE7EE]",
  },
  {
    id: 4,
    name: "Katie Martin, MSN, APRN, FNP-C",
    title: "Nurse Practitioner",
    position: "Health Category Manager",
    img: "./38.png",
    bg: "bg-[#EAEEFE]",
  },
];

const Card = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10 lg:py-20 font-inter">
      <ul className="flex flex-col gap-10">
        {cardData.map((card, index) => (
          <li
            key={card.id}
            className={`sticky top-0 z-[${index}]`}
          >
            <div
              className={`rounded-3xl shadow-lg  p-6 md:p-10 flex flex-col lg:flex-row gap-6 items-center ${card.bg} min-h-[100vh] md:min-h-0`}
            >
              <div className="flex-1 flex flex-col gap-3">
                <Text variant="text5" className=" font-semibold font-marcellous">
                  {card.name}
                </Text>
                <Text variant="text4" className="text-[#400186] font-medium font-marcellous">{card.title}</Text>
                <Text variant="text1" className="font-bold">{card.position}</Text>
                <Text variant="text1" className="text-sm">
                  Katie’s career in healthcare began in 2007 as an RN in the
                  Emergency Department. She gained a wealth of knowledge,
                  skills, and experience quickly and loved the fast pace. After 5
                  years in that intense setting, she desired to create more
                  personal and ongoing relationships with her patients. In 2012
                  she earned her Master of Science in Nursing degree and became
                  a Family Nurse Practitioner. For 10 years Katie cared for
                  patients and their families in the retail health and
                  traditional family medicine settings before being divinely led
                  to You Only Younger in 2022. Here she has discovered the
                  perfect blend of traditional medicine, holistic medicine,
                  complementary therapies, and lifestyle interventions. She has
                  been an integral part of the development of our Weight Loss
                  Program.
                </Text>
                <Text variant="text1" className="text-sm">
                  Her proven success as a leader has earned her a promotion to
                  our Health Category Manager where she provides guidance in the
                  development and expansion of our product selection and
                  treatments provided to support our healthy body and mind.
                </Text>
                <Text variant="text1" className="flex items-center gap-2 text-[#400186] font-medium cursor-pointer">
                  View More <FaArrowRightLong />
                </Text>
              </div>
              <div className="flex-shrink-0 w-full md:w-auto">
                <img
                  src={card.img}
                  alt={card.name}
                  className="h-[300px] md:h-[450px] object-contain mx-auto"
                />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Card;
