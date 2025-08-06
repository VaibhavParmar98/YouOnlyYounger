import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import Button from "../Common/Button";
import Text from "../Common/Text";

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
    <div className="bg-[#F6F6F6] overflow-x-hidden py-10 lg:py-20 px-4 sm:px-6 md:px-8 font-inter relative p-3 md:p-0">
       <img
        src="./31.svg"
        alt="Side Decoration"
        className=" absolute 2xl:left-10 2xl:top-44 xl:right-2 xl:bottom-0 lg:right-2 lg:bottom-0 right-2 bottom-0 md:-right-10 md:bottom-0 lg:w-64 lg:h-64 md:w-20 md:h-44"
      />

      <section className="max-w-7xl overflow-x-hidden mx-auto w-full relative z-10">
        <div className="flex flex-col xl:flex-row items-stretch gap-8">
          {/* Left Image */}
          <div className="w-full xl:w-1/2 flex items-center justify-center">
            <img
              src="./33.png"
              alt="Core Values"
              className="rounded-2xl xl:w-full lg:h-full object-cover lg:w-[500px] md:w-[400px] md:mt-10 lg:mt-0 mt-0 self-center"
            />
          </div>

          {/* Right Content */}
          <div className="w-full xl:w-1/2 text-center lg:text-left flex flex-col justify-between">
            <div>
              <Text variant="text5" className=" marcellus-text leading-tight text-center xl:text-start">
                Our Core Values:
              </Text>
              <Text variant="text1" className="text-center xl:text-start">
                We are rooted in purpose and integrity, guided by compassion,
                trust, and mindfulness to deliver holistic care with lasting
                impact and intention.
              </Text>

              {/* Values List */}
              <ul className="space-y-2 mt-4 text-left">
                {values.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <IoIosCheckmarkCircleOutline className="text-[#400186] text-xl flex-shrink-0 mt-1" />
                    <Text variant="text1">
                       <span className="font-semibold">{item.title}:</span>{" "}
                      {item.desc}
                    </Text>
                     
                    
                  </li>
                ))}
              </ul>
            </div>

            {/* Button */}
            <div className="mt-6">
<Button className="relative w-44 self-center lg:self-start cursor-pointer overflow-hidden group text-black border border-black">
  <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
    Contact Us
  </span>
  <span className="absolute left-0 top-0 h-full w-0 bg-black transition-all duration-300 ease-in-out group-hover:w-full"></span>
</Button>             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoreValuesSection;
