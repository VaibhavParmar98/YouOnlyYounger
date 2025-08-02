import Button from "./Button";
import Text from "./Text";

const Consultation = () => {
  return (
    <div className="relative w-full h-[55vh]  md:h-[55vh] lg:h-[55vh]">
      <img
        src="./19.png"
        alt="intro section"
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/50 z-10"></div>

      <div className="absolute inset-0 z-20 flex items-center justify-center flex-col gap-4 px-4 text-center">
       <Text variant="text2" className="text-white 
       
         leading-tight font-marcellous">
         Book a Personalized Consultation
        </Text>
<Text variant="text4" className="text-white
        
         font-marcellous">          Our approach blends regenerative medicine with holistic care,
          <br className="hidden sm:block" />
            addressing your entire system to promote deep healing, lifelong
          vitality,
          and true alignment from within.
        </Text>
          <Button variant="colourWhite" ></Button>
      </div>
    </div>
  );
};

export default Consultation;
