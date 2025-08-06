import Button from "./Button";
import Text from "./Text";

const Consultation = () => {
  return (
    <div className="relative overflow-x-hidden w-full h-[55vh]  md:h-[55vh] lg:h-[60vh]">
      <img
        src="./19.png"
        alt="intro section"
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/50 z-10"></div>

      <div className="absolute inset-0 z-20 flex items-center justify-center flex-col gap-4 px-4 text-center">
       <Text variant="text2" className="text-white 
       
         leading-tight marcellus-text ">
         Book a Personalized Consultation
        </Text>
<Text variant="text4" className="text-white
        
         marcellus-text leading-tight">          Our approach blends regenerative medicine with holistic care,
          <br className="hidden sm:block" />
            addressing your entire system to promote deep healing, lifelong
          vitality,
          and true alignment from within.
        </Text>
<Button variant="colourWhite" className="relative w-44 self-center cursor-pointer overflow-hidden group text-black border border-black">
  <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
    Book Appointment
  </span>
  <span className="absolute left-0 top-0 h-full w-0 bg-[#400186] transition-all duration-300 ease-in-out group-hover:w-full"></span>
</Button>
      </div>
    </div>
  );
};

export default Consultation;
