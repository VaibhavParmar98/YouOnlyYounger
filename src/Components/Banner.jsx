import React from "react";

const Banner = () => {
  return (
    <div className="relative bg-[linear-gradient(to_right,_#edeaf1,_#ece7f2,_#e5dcf1)] w-full h-full font-inter overflow-hidden">
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
        <div className="md:w-1/2 w-full flex flex-col md:items-start items-center gap-6 2xl:ml-20 xl:ml-20 md:ml-6 py-10 2xl:gap-8">
          <p className="p-2 text-[#400185] font-semibold bg-white lg:w-44 xl:w-52 md:w-40 w-44 2xl:w-96 text-center 2xl:text-3xl xl:text-lg text-sm">
            Hi, I’m Dr. Kami Owen
          </p>
          <h1 className="xl:text-6xl 2xl:text-9xl font-marcellous md:text-start text-center lg:text-5xl md:text-3xl text-4xl">
            Transform Every Layer of{" "}
            <span className="text-[#400185]">Your Health</span>
          </h1>
          <p className="text-[#727272] 2xl:text-3xl xl:text-lg lg:text-sm md:text-sm text-sm md:text-start text-center">
            Discover healing through our Five Bodies Integrative Medicine system
            aligning Physical, Vital, Mental, Supermental, and Bliss bodies.
          </p>
          <div className="flex items-center md:justify-start justify-center gap-6">
            <button className="p-3 2xl:p-5 bg-black text-white rounded-full 2xl:text-3xl xl:text-lg lg:text-sm md:text-sm text-sm">
              Book Appointment
            </button>
            <button className="2xl:text-3xl xl:text-lg lg:text-sm md:text-sm text-sm">
              Contact Us
            </button>
          </div>
          <div className="flex items-center gap-4 ml-6">
            <img src="./70.png" alt="" className="hover:cursor-pointer"/><img src="./71.png" alt="" className="hover:cursor-pointer"/><img src="./71.png" alt="" className="hover:cursor-pointer"/>
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
