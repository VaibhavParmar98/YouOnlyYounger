import React from "react";
import Text from "../Common/Text";

const VisualFramewrok2 = () => {
  const cards = [
    {
      title: "Our Comprehensive Services",
      desc: "Journey through transformative therapies like acupuncture, frequency medicine, and functional nutrition—each phase rooted in quantum healing and tailored to restore balance, eliminate disease, and support your unique path to wellness.",
    },
    {
      title: "Commitment to Your Healing",
      desc: "At You Only Younger, our unwavering commitment resonates beyond our clinic walls. Dr. Kami Owen and our dedicated staff continuously expand knowledge and expertise, ensuring you receive the utmost integrative care and quantum health coaching.",
    },
    {
      title: "You Only Younger:",
      desc: "Where every facet of your well-being is nurtured, honored, and transformed. Embark and thrive with us on your path to radiant health and healing.",
    },
  ];

  return (
    <section className="py-10 lg:py-20 px-4 sm:px-6 md:px-8 bg-white font-inter">
      <div className="max-w-7xl mx-auto">
        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Text content */}
          <div className="text-center lg:text-left">
            <Text variant="text5" className=" text-black font-marcellous">
              The Five Bodies Visual Framework
            </Text>
            <Text variant="text4" className="text-[#400186] mt-2  mb-4 font-marcellous">
              Quantum Integrative Medicine
            </Text>
            <Text variant="tex1" className="text-gray-800  mb-6 leading-relaxed">
              At You Only Younger, we are steadfast in our mission to empower
              your unique beauty, health, and healing journey. We extend
              dedicated tools and guidance, inspiring transformative beauty and
              well-being in every facet of your life. With an unwavering
              commitment to your beauty, health, and healing, our approach
              addresses your physical and emotional aspects, with consciousness
              being the foundation—unlocking the gates to optimal wellness.
            </Text>
            <button className="bg-[#400186] text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-purple-800 transition text-sm sm:text-base">
              Book an appointment!
            </button>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <img
              src="./34.png"
              alt="Visual Framework"
              className="rounded-2xl shadow-lg w-full max-w-md md:max-w-96 lg:h-auto md:h-80"
            />
          </div>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1   lg:grid-cols-3 xl:grid-cols-3   gap-6 mt-10">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white border text-center lg:text-left text-gray-800 p-6 rounded-xl shadow-md"
            >
              <Text variant="text4" className=" font-semibold mb-2">
                {card.title}
              </Text>
              <Text variant="text1" className="text-gray-600 leading-relaxed">
                {card.desc}
              </Text>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisualFramewrok2;
