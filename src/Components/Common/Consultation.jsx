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
       <h1 className="text-white 
        text-2xl 
         md:text-3xl 
         lg:text-4xl 
         xl:text-5xl  
         2xl:text-8xl  
         leading-tight font-marcellous">
         Book a Personalized Consultation
        </h1>
<p className="text-white max-w-4xl 2xl:max-w-7xl
        text-sm 
         md:text-lg 
         lg:text-xl  
         xl:text-2xl  
         2xl:text-5xl 
         font-marcellous">          Our approach blends regenerative medicine with holistic care,
          <br className="hidden sm:block" />
          addressing your entire system to promote deep healing, lifelong
          vitality,
          and true alignment from within.
        </p>
         <button className="mt-4 font-inter text-sm 
         md:text-lg 
         lg:text-xl  
         xl:text-2xl  
         2xl:text-5xl  flex items-center gap-2 rounded-full px-6 py-3 2xl:px-8 2xl:py-9 xl:px-6 xl:py-4 lg:px-6 lg:py-5 md:px-4 md:py-2 bg-white text-black hover:bg-gray-200 font-semibold transition">
          Book Appointment
        </button>
      </div>
    </div>
  );
};

export default Consultation;
