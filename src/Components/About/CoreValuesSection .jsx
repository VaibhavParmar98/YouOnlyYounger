import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const CoreValuesSection = () => {
  const values = [
    {
      title: "Compassion",
      desc: "We embrace your unique journey with love and support, providing a safe and nurturing space for exploration, growth, and healing.",
    },
    {
      title: "Gratitude",
      desc: "This fundamental principle enriches every interaction, fostering deep, meaningful relationships with our team and clients.",
    },
    {
      title: "Trust",
      desc: "Honoring the faith you place in us, we uphold integrity and respect in all aspects of our business.",
    },
    {
      title: "Mindfulness",
      desc: "Our practice is grounded in the sacredness of every individual’s path, ensuring presence, alignment, and meaningful engagement in every step.",
    },
    {
      title: "Innovation",
      desc: "Fearlessly embracing new pathways, we continuously evolve our services to enhance your healing journey.",
    },
    {
      title: "Balanced Life",
      desc: "Advocating for essential self-care, we nurture your path towards a harmonious, healthy life, amplifying our collective impact on well-being.",
    },
  ];

  return (
    <div className="bg-[#F6F6F6] py-10 px-4 sm:px-6 md:px-8 font-inter relative">
       <img
        src="./31.png"
        alt="Side Decoration"
        className=" absolute 2xl:left-40 2xl:top-44 xl:right-2 xl:bottom-0 lg:right-2 lg:bottom-0 right-2 bottom-0 md:-right-10 md:bottom-0 lg:w-64 lg:h-64 md:w-20 md:h-44"
      />

      <section className="max-w-7xl mx-auto w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-stretch gap-8">
          {/* Left Image */}
          <div className="w-full lg:w-1/2">
            <img
              src="./33.png"
              alt="Core Values"
              className="rounded-2xl w-full h-full object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 font-marcellous">
                Our Core Values:
              </h2>
              <p className="text-sm sm:text-base leading-relaxed">
                We are rooted in purpose and integrity, guided by compassion,
                trust, and mindfulness to deliver holistic care with lasting
                impact and intention.
              </p>

              {/* Values List */}
              <ul className="space-y-2 mt-4">
                {values.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <IoIosCheckmarkCircleOutline className="text-[#400186] text-xl flex-shrink-0 mt-1" />
                    <p className="text-sm sm:text-base leading-relaxed">
                      <span className="font-semibold">{item.title}:</span>{" "}
                      {item.desc}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Button */}
            <div className="mt-6">
              <button className="bg-[#400186] text-white px-6 py-3 rounded-full shadow hover:bg-purple-800 transition text-sm sm:text-base">
                Contact us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoreValuesSection;
