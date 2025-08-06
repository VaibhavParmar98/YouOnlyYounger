
import Text from "./Text";

const RestorativeApproach = () => {
  return (
    <div className="max-w-7xl overflow-x-hidden mx-auto px-4 py-10 lg:pt-10 lg:pb-20 ">
      {/* Heading Section */}
      <div className="flex flex-col gap-4 items-center text-center mb-10">
        <img src="./32.png" alt="" className="w-20 h-20 object-contain" />
        <Text variant="text5" className="  marcellus-text leading-tight">
          Our Restorative Approach
        </Text  >
        <Text variant="text1" >
          Our goal is to support your body’s natural healing ability by identifying and addressing the root causes of
          imbalance. Here’s how we approach physical healing at You Only Younger:
        </Text>
      </div>

      {/* Grid Section */}
      <div className="flex flex-wrap justify-center gap-6">
        {/* Card 1 */}
        <div className="bg-[#EFECFD] p-5 rounded-lg  flex flex-col gap-2 w-[400px] h-[230px]">
          <img src="./92.svg" size={40} className="text-white bg-[#7355EC] h-16 w-16 p-4  rounded" />
          <Text variant="text3" className="font-bold ">Comprehensive Health Assessment</Text >
          <Text variant="text3" className="line-clamp-3">
            We begin with a detailed intake, reviewing your symptoms, history, lifestyle, and goals to understand the
            full picture of your physical health.
          </Text>
        </div>

        {/* Card 2 */}
        <div className="bg-[#FFF2E0] p-5 rounded-lg flex flex-col gap-2 w-[400px] h-[230px]">
          <img src="./91.svg" size={40} className="text-white bg-[#FFCC78] h-16 w-16 p-4  rounded" />
          <Text variant="text3" className="font-bold ">Functional Diagnostics & Lab Testing</Text  >
          <Text variant="text3" className="line-clamp-3">
            We use advanced lab work—gut, hormone, blood, and nutrient panels—to uncover the underlying imbalances
            that conventional tests may miss.
          </Text>
        </div>

        {/* Card 3 */}
        <div className="bg-[#F0F8FF] p-5 rounded-lg flex flex-col gap-2 w-[400px] h-[230px]">
          <img src="./94.svg" size={40} className="text-white bg-[#66C7FF] h-16 w-16 p-4  rounded" />
          <Text variant="text3" className="font-bold ">Personalized Treatment Planning</Text >
          <Text variant="text3" className="line-clamp-3">
            Based on your results, we craft a custom wellness plan using nutrition, natural supplementation, movement,
            and detox strategies that fit your lifestyle.
          </Text>
        </div>

        {/* Card 4 */}
        <div className="bg-[#EAF7F2] p-5 rounded-lg flex flex-col gap-2 w-[400px] h-[230px]">
          <img src="./93.svg" size={40} className="text-white bg-[#28B078] h-16 w-16 p-4  rounded" />
          <Text variant="text3" className="font-bold ">Targeted Therapeutic Interventions</Text  >
          <Text variant="text3" className="line-clamp-3">
            We apply proven therapies such as IV nutrient infusions, hormone support, anti-inflammatory protocols, and
            bodywork to restore balance and function.
          </Text>
        </div>

        {/* Card 5 */}
        <div className="bg-[#FEE4D9] p-5 rounded-lg flex flex-col gap-2 w-[400px] h-[230px]">
          <img src="./95.svg" size={40} className="text-white bg-[#F4877A] h-16 w-16 p-4  rounded" />
          <Text variant="text3" className="font-bold ">Ongoing Monitoring & Optimization</Text >
          <Text variant="text3" className="line-clamp-3">
            Your body evolves—so does your plan. We regularly track your progress and fine-tune your care to ensure
            sustained improvements and long-term results.
          </Text>
        </div>
      </div>
    </div>
  );
};

export default RestorativeApproach;
