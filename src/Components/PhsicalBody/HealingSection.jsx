import React from 'react';
import { CheckCircle } from 'lucide-react';
import Text from '../Common/Text';
import Button from '../Common/Button';

const HealingSection = () => {
  const points = [
    {
      title: "Vital Body (Energy & Breath)",
      desc: "When your body is weak or inflamed, energy flow is blocked. Rebuilding physical health clears the path for vital energy to move freely.",
    },
    {
      title: "Mental Body (Mind & Emotions)",
      desc: "Chronic pain, fatigue, or poor sleep affects your mood, clarity, and stress response. A healthier body nurtures a calmer, more focused mind.",
    },
    {
      title: "Supermental Body (Intuition & Insight)",
      desc: "Physical discomfort can cloud your intuitive clarity. When the body feels safe, higher awareness becomes easier to access and trust.",
    },
    {
      title: "Bliss Body (Purpose & Peace)",
      desc: "Lasting peace requires a strong foundation. A balanced physical state creates the inner stability needed to connect with joy, meaning, and spiritual harmony.",
    },
  ];

  return (
    <section className="max-w-7xl px-4 py-10 mx-auto ">
      <div className="flex flex-col lg:flex-row w-full gap-10">
        {/* Image + Heading Section (Left) */}
        <div className="w-full lg:w-1/2 flex flex-col items-center">
          <img
            src="./43.png"
            alt="Healing"
            className="rounded-xl lg:w-full h-auto self-center object-cover"
          />
          <Text variant='text5' className="text-2xl text-center lg:text-start sm:text-3xl lg:text-4xl mt-6 font-semibold">
            Physical Healing Unlocks the Rest
          </Text>
          <Text variant='text3' className="mt-2 text-center lg:text-start text-gray-600 text-sm sm:text-base">
            That’s why true healing doesn’t stop at physical treatment. Restoring the Physical Body lays the groundwork
            for deeper transformation across all Five Bodies.
          </Text>
        </div>

        {/* Content Section (Right) */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4 text-center lg:text-start">
          <Text variant='text3' className="
         font-medium"><span className='bg-[#400186] py-0.5 px-1.5 mr-2'></span>Connection to Other Bodies</Text>
          <Text variant='text5' className="text-2xl sm:text-3xl font-bold marcellus-text leading-tight">
            The Foundation for Whole-Body Healing
          </Text>
          <Text variant='text3' className="text-sm sm:text-base text-gray-700">
            The Physical Body may be the most visible, but it doesn’t operate in isolation. Every imbalance in the body
            affects—and is affected by—your energy, emotions, intuition, and inner peace. When we restore physical
            health, we open the door to healing across all layers of your being.
          </Text>

          <div className="space-y-4">
            {points.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle className="text-[#400186] mt-1" size={20} />
                <div className='text-start'>
                  <Text variant='text1' className="font-semibold">{item.title}</Text>
                  <Text variant='text1' className="text-sm text-gray-700">{item.desc}</Text>
                </div>
              </div>
            ))}
          </div>

<Button className="relative w-44 self-center lg:self-start cursor-pointer overflow-hidden group text-black border border-black">
  <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
    About Us
  </span>
  <span className="absolute left-0 top-0 h-full w-0 bg-black transition-all duration-300 ease-in-out group-hover:w-full"></span>
</Button>
        </div>
      </div>
    </section>
  );
};

export default HealingSection;
