import React from 'react';

const DeepHealing = () => {
  return (
    <div className="relative w-full h-[80vh] sm:h-[85vh] md:h-[80vh] lg:h-[80vh] font-marcellous">
      <img
        src="./20.png"
        alt="intro section"
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/70 z-10"></div>

      <div className="absolute inset-0 z-20 flex items-center justify-center flex-col gap-4 px-4 text-center">
        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl  2xl:text-6xl font-semibold leading-tight">
          The Gateway to Deeper Healing
        </h1>

        <p className="text-white max-w-5xl text-sm sm:text-base md:text-lg lg:text-xl  xl:text-xl  2xl:text-3xl leading-relaxed">
          When the Physical Body is out of sync, your energy (Vital Body), mood (Mental Body),
          {/* <br className="hidden sm:block" /> */}
          intuition (Supermental Body), and sense of peace (Bliss Body) are affected too. That’s why
          {/* <br className="hidden sm:block" /> */}
          we begin with rebuilding this foundation so all other layers can follow in harmony.
        </p>

        <button className="mt-4 text-sm sm:text-base md:text-lg font-inter flex items-center gap-2 rounded-full px-6 py-3 bg-white text-black hover:bg-gray-200 transition">
          Book Appointment
        </button>
      </div>
    </div>
  );
};

export default DeepHealing;
