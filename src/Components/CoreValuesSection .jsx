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
    <div className="bg-[#F6F6F6] py-10 px-4 sm:px-6 md:px-8 font-inter">
      <section className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-start gap-8">
          {/* Left Image */}
          <div className="w-full lg:w-1/2">
            <img
              src="./33.png"
              alt="Core Values"
              className="rounded-2xl w-full h-auto"
            />
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 font-marcellous">
              Our Core Values:
            </h2>
            <p className="text-sm sm:text-base leading-relaxed">
              We are rooted in purpose and integrity, guided by compassion,
              trust, and mindfulness to deliver holistic care with lasting
              impact and intention.
            </p>

            {/* Values List */}
            <ul className="space-y-4 mt-4">
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

            {/* Button */}
            <button className="mt-6 bg-[#400186] text-white px-6 py-3 rounded-full shadow hover:bg-purple-800 transition text-sm sm:text-base">
              Contact us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoreValuesSection;
