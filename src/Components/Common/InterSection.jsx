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
        <Text variant="text2"  className="text-white  marcellus-text leading-tight  text-center l sm:leading-snug md:leading-normal">
          Aligned Through Mind, <br />Body, and Energy.
        </Text>
              <Button className="relative w-44 self-center  cursor-pointer overflow-hidden group text-black border border-black">
  <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
  Book Appointment
  </span>
  <span className="absolute left-0 top-0 h-full w-0 bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
</Button> 
       
      </div>
    </div>
  );
};

export default InterSection;