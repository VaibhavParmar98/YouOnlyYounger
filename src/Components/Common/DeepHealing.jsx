import React from 'react';
import Button from './Button';
import Text from './Text';

const DeepHealing = () => {
  return (
    <div className="relative w-full h-[55vh]  md:h-[55vh] lg:h-[55vh]">
      <img
        src="./20.png"
        alt="intro section"
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/70 z-10"></div>

      <div className="absolute inset-0 z-20 flex items-center justify-center flex-col gap-4 px-4 text-center">
        <Text variant='text2' className="text-white 
         
         leading-tight font-marcellous">
          The Gateway to Deeper Healing
        </Text>

        <Text variant='text4' className="text-white max-w-4xl 2xl:max-w-7xl
        
         font-marcellous">
          When the Physical Body is out of sync, your energy (Vital Body), mood (Mental Body),
          intuition (Supermental Body), and sense of peace (Bliss Body) are affected too. That’s why
          we begin with rebuilding this foundation so all other layers can follow in harmony.
        </Text>

        <Button variant='colourWhite' className='w-52'>Book Appointment</Button>
      </div>
    </div>
  );
};

export default DeepHealing;
