import { IoMdPlayCircle } from "react-icons/io";

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
        <h1 className="text-white font-marcellous text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl  2xl:text-9xl font-bold text-center leading-tight sm:leading-snug md:leading-normal">
          Aligned Through Mind, <br />Body, and Energy.
        </h1>
        <button
          className="flex items-center font-inter gap-1 xs:gap-2 sm:gap-3 rounded-full  bg-[#400186] text-white hover:bg-[#5e1abf] transition-colors 
          p-2 
          md:py-2  md:p-4 
          lg:py-2 lg:px-4
          xl:p-3
          2xl:py-6 2xl:px-9
          text-xs 
          md:text-lg 
          lg:text-xl
          xl:text-2xl
          2xl:text-5xl"
          aria-label="Watch Showreel"
        >
          <IoMdPlayCircle className="text-xl xs:text-2xl sm:text-3xl  md:text-4xl lg:text-5xl 2xl:text-8xl" />
          Watch Showreel
        </button>
      </div>
    </div>
  );
};

export default InterSection;