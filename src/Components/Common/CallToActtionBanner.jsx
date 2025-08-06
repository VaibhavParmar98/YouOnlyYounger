import React from 'react';
import Button from './Button';
import Text from './Text';

const CallToActtionBanner = () => {
  return (
    <div className="relative overflow-x-hidden w-full h-[55vh]  md:h-[55vh] lg:h-[55vh] ">
      <img
        src="./21.png"
        alt="intro section"
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/70 z-10" />

      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-4 px-4 text-center">
        <Text variant='text2' className="text-white 
        
          
         leading-tight marcellus-text">
          Book a Personalized Consultation
        </Text>

        <Text variant='text4' className="text-white max-w-4xl 2xl:max-w-7xl
        
          
         marcellus-text leading-tight
         ">
          Our approach blends regenerative medicine with holistic care,
          addressing your entire system to promote deep healing, lifelong
          vitality,
          and true alignment from within.
        </Text>

<Button variant='colourWhite' className="relative w-44 self-center  cursor-pointer overflow-hidden group text-black border border-black">
  <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
    Book Appointment
  </span>
  <span className="absolute left-0 top-0 h-full w-0 bg-[#400186] transition-all duration-300 ease-in-out group-hover:w-full"></span>
</Button>       </div>
    </div>
  );
};

export default CallToActtionBanner;
