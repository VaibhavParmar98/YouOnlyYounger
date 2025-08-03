import React from "react";
import Text from "../Common/Text";

const HealthServices = () => {
  const services = [
    {
      id: 1,
      img: "./27.png",
      tag: "TRY OUR ENHANCED HEALTH",
      title: "IV Therapy",
      desc: "IV therapy is a unique treatment wherein a personalized concoction of micronutrients, including vitamins and minerals, is delivered straight into the bloodstream. Delivering vitamins into the bloodstream facilitates 100% absorption, making it the ideal technique to restore perfect balance. It strengthens your immune system, detoxifies the body, and promotes general wellness.",
    //   link: "#",
    },
    {
      id: 2,
      img: "./28.png",
      tag: "RASHA TREATMENTS",
      title: "Balancing Body and Mind",
      desc: "RASHA is a cutting-edge scalar plasma sound system with 12 resonant frequencies that restore optimal balance to your autonomic nervous system (ANS). This non-invasive technique facilitates optimal healing, encouraging your mind and body to enter a state of harmony. It increases your energy levels, reduces physical pain, clears grief and anxiety, improves mental clarity, and much more.",
    //   link: "#",
    },
    {
      id: 3,
      img: "./29.png",
      tag: "SCIENCE, EDUCATION & ACCOUNTABILITY",
      title: "Medical Weight Loss",
      desc: "At You Only Younger, our approach combines Science, Education and accountability to help you win. Our team of medical professionals understand the elements of what goes into a successful medical weight loss program and are on your side.",
    //   link: "#",
    },
  ];

  return (
    <div className="bg-white py-10 lg:py-20 px-4 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-3 gap-4 text-center">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden flex flex-col"
          >
            {/* Image */}
            <img
              src={service.img}
              alt={service.title}
              className="w-full h-56 object-cover "
            />
            {/* Tag */}
            <Text variant="text1" className="bg-purple-100 text-purple-900  font-semibold uppercase text-center py-2">
              {service.tag}
            </Text>
            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
              <Text variant="text4" className="  mb-3 font-marcellous">{service.title}</Text>
              <Text variant="text1" className="text-gray-600  mb-6 flex-grow">{service.desc}</Text>
              <Text variant="text1"
                // href={service.link}
                className="text-[#400186] font-semibold text-sm justify-center cursor-pointer hover:underline flex items-center gap-1"
              >
                Learn More <span className="text-lg">→</span>
              </Text>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HealthServices;
