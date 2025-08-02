import { IoMdPlayCircle } from "react-icons/io";
import Button from "./Button";
import Text from "./Text";

const InterSection = () => {
  return (
    <div className="relative w-full h-[50vh]  md:h-[60vh] lg:h-[60vh] xl:h-[75vh] 2xl:h-[75vh] ">
      <img
        src="./7.png" 
        alt="intro section"
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/50 z-10"></div>

      <div className="absolute inset-0 z-20 flex items-center justify-center flex-col gap-2 xs:gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-8 max-w-[1536px] mx-auto px-4">
        <Text  className="text-white text-[30px] md:text-[40px] lg:text-[50px] xl:text-[72px] font-marcellous  text-center leading-tight sm:leading-snug md:leading-normal">
          Aligned Through Mind, <br />Body, and Energy.
        </Text>
        <button className="flex bg-[#400186] text-white rounded-full items-center xl:px-5 xl:py-3 lg:py-2 lg:px-4 md:py-1.5 md:px-3 py-1.5 px-3 gap-3 text-[16px] md:text-[18px] lg:text-[20px]">          <IoMdPlayCircle  className="text-[20px] md:text-[20px] lg:text-[36px]"/>
Watch Showreel</button>
      </div>
    </div>
  );
};

export default InterSection;