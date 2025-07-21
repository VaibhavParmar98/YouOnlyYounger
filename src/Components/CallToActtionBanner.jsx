import React from 'react';

const CallToActtionBanner = () => {
  return (
    <div className="relative w-full h-[80vh] sm:h-[85vh] md:h-[80vh] lg:h-[80vh] font-marcellous">
      <img
        src="./21.png"
        alt="intro section"
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/70 z-10" />

      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-4 px-4 text-center">
        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl  2xl:text-6xl font-semibold leading-tight">
          Book a Personalized Consultation
        </h1>

        <p className="text-white max-w-4xl text-sm sm:text-base md:text-lg lg:text-xl  xl:text-xl  2xl:text-3xl leading-relaxed">
          Our approach blends regenerative medicine with holistic care,
          <br className="hidden sm:block" />
          addressing your entire system to promote deep healing, lifelong
          vitality,
          <br className="hidden sm:block" />
          and true alignment from within.
        </p>

        <button className="mt-4 font-inter text-sm sm:text-base md:text-lg flex items-center gap-2 rounded-full px-6 py-3 bg-white text-black hover:bg-gray-200 transition">
          Book Appointment
        </button>
      </div>
    </div>
  );
};

export default CallToActtionBanner;
