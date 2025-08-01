import React from 'react';
import { CheckCircle } from 'lucide-react';

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
          <h1 className="text-2xl sm:text-3xl lg:text-4xl mt-6 font-semibold">
            Physical Healing Unlocks the Rest
          </h1>
          <p className="mt-2 text-gray-600 text-sm sm:text-base">
            That’s why true healing doesn’t stop at physical treatment. Restoring the Physical Body lays the groundwork
            for deeper transformation across all Five Bodies.
          </p>
        </div>

        {/* Content Section (Right) */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <p className="text-sm 
         font-medium"><span className='bg-[#400186] py-0.5 px-1.5 mr-2'></span>Connection to Other Bodies</p>
          <h2 className="text-2xl sm:text-3xl font-bold font-marcellous">
            The Foundation for Whole-Body Healing
          </h2>
          <p className="text-sm sm:text-base text-gray-700">
            The Physical Body may be the most visible, but it doesn’t operate in isolation. Every imbalance in the body
            affects—and is affected by—your energy, emotions, intuition, and inner peace. When we restore physical
            health, we open the door to healing across all layers of your being.
          </p>

          <div className="space-y-4">
            {points.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle className="text-[#400186] mt-1" size={20} />
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-700">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <button className="mt-6 bg-[#400186] w-44 text-white px-5 py-2 rounded-full cursor-pointer transition hover:bg-[#32006a]">
            About us
          </button>
        </div>
      </div>
    </section>
  );
};

export default HealingSection;
