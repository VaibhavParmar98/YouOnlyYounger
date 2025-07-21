import { IoMdPlayCircle } from "react-icons/io";

const InterSection = () => {
  return (
    <div className="relative w-full h-[80vh] sm:h-[85vh] md:h-[80vh] lg:h-[80vh] font-marcellous">
      <img
        src="./7.png" // Adjust path based on your project structure
        alt="intro section"
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/50 z-10"></div>

      <div className="absolute inset-0 z-20 flex items-center justify-center flex-col gap-2 xs:gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-8 max-w-[1536px] mx-auto px-4">
        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl  2xl:text-6xl font-bold text-center leading-tight sm:leading-snug md:leading-normal">
          Aligned Through Mind, <br />Body, and Energy.
        </h1>
        <button
          className="flex items-center font-inter gap-1 xs:gap-2 sm:gap-3 rounded-full p-2 xs:p-2.5 sm:p-3 md:p-4 lg:p-5 bg-[#400186] text-white hover:bg-[#5e1abf] transition-colors text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl"
          aria-label="Watch Showreel"
        >
          <IoMdPlayCircle className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl" />
          Watch Showreel
        </button>
      </div>
    </div>
  );
};

export default InterSection;