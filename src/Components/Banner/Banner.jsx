import Button from "../Common/Button";

const Banner = () => {
  return (
    <div className="relative bg-[linear-gradient(to_right,_#edeaf1,_#ece7f2,_#e5dcf1)] w-full h-auto font-inter overflow-hidden">
      <img
        src="./53.png"
        alt=""
        className="absolute xl:top-44 lg:top-20 md:top-20 top-20 left-0 xl:w-auto xl:h-auto w-20 h-20 lg:w-20 lg:h-20 md:w-20 md:h-20  z-10"
      />

      <img
        src="./52.png"
        alt=""
        className="absolute bottom-0 left-0 w-56 h-56 rounded-full z-10"
      />

      <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="md:w-1/2 w-full flex flex-col md:items-start text-center md:text-left items-center gap-3 2xl:ml-20 xl:ml-20 md:ml-6 py-10 2xl:gap-8">
          <p className="lg:text-[16px] md:text-[14px] text-[12px] font-bold bg-white text-[#400186] px-2">
            Hi, I’m Dr. Kami Owen
          </p>
          <h1 className="lg:text-[50px] md:text-[30px]  text-[28px] font-marcellous">
            Transform Every Layer of <br className="2xl:block md:hidden" />
            <span className="text-[#400185]">Your Health</span>
          </h1>
          <p className="text-[#727272] lg:text-[18px] md:text-[14px] text-[14px]">
            Discover healing through our Five Bodies Integrative Medicine system
            aligning Physical, Vital, Mental, Supermental, and Bliss bodies.
          </p>
          <div className="flex items-center md:justify-start justify-center mt-5 gap-6">
            <Button variant="black" className="w-48">Book Appointment</Button>
            <button className="lg:text-[16px] md:text-[14px] text-[12px]">
              Contact Us
            </button>
          </div>
          
        </div>

        <div className="md:w-1/2 w-full md:ml-10 ml-0 relative">
          <img
            src="./52.png"
            alt=""
            className="absolute top- bottom-0 left-[-80px] transform -translate-y-1/2 w-32 h-32 rounded-full z-10"
          />

          <img
            src="./50.png"
            alt="Banner"
            className="h-full w-full object-contain rounded relative z-20"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
