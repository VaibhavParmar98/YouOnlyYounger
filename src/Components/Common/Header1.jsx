import { MdOutlineArrowOutward } from "react-icons/md";

const Header1 = () => {
  return (
    <div className="w-full bg-[#2C005C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex items-center justify-center text-white">
          <a href="https://youonlyyounger.com/dr-kami-on-unleashing-intuition-secrets-podcast/">
            <p className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm md:text-base lg:text-lg text-center sm:text-left">
            Dr. Kami on Unleashing Intuition Secrets Podcast{" "}
            <span className="flex items-center gap-2 sm:gap-3 hover:underline cursor-pointer whitespace-nowrap">
              Watch Now <MdOutlineArrowOutward className="text-base sm:text-lg" />
            </span>
          </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header1;
