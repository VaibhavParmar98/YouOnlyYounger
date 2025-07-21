import React from "react";

const Profile = () => {
  return (
    <div className="bg-[#400186] 2xl:h-[800px] flex items-center justify-center px-4 py-10 font-inter">
      <div className=" 2xl:max-w-[1300px] xl:max-w-[1000px] lg:max-w-[800px] md:max-w-[500px] 2xl:h-auto xl:h-auto lg:h-auto md:h-auto h-[250px]  w-full relative rounded-3xl overflow-hidden shadow-2xl">
        {/* Profile Image */}
        <img
          src="./22.png"
          alt="Profile"
          className="w-full h-full object-cover max-h-[600px]"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 z-10 flex items-center">
          <div className="text-white flex flex-col 2xl:gap-4 xl:gap-4 lg:gap-4 md:gap-4 gap-2 px-4 sm:px-6 md:px-10 max-w-xl">
            <p className="
            text-sm 
            sm:text-base 
            md:text-sm 
            2xl:text-xl 
            xl:text-xl
            lg:text-xl 
            bg-[#F4E4FF] text-black w-fit 
            2xl:px-4 2xl:py-1
            xl:px-4 xl:py-1
            lg:px-4 lg:py-1
            md:px-4 md:py-1
            sm:px-4 sm:py-1
            px-4 py-1
             rounded-md">
              Hi, I’m Dr. Kami Owen
            </p>

            <h1 className="
            2xl:text-4xl 
            xl:text-4xl 
            lg:text-2xl 
            text-lg 
            md:text-xl 
            font-semibold leading-tight font-marcellous">
              Transform Every Layer of Your Health
            </h1>

            <span className="
            2xl:text-lg 
            xl:text-lg 
            lg:text-sm 
            text-sm  
            md:text-sm 
            leading-relaxed">
              Discover healing through our Five Bodies Integrative Medicine
              system—aligning Physical, Vital, Mental, Supermental, and Bliss bodies.
            </span>

            <div className="flex  sm:flex-row 2xl:text-lg xl:text-lg lg:text-lg md:text-sm text-sm items-start sm:items-center gap-4 mt-2">
              <button className="rounded-full 
              px-4 py-2
              sm:px-4 sm:py-1
              2xl:px-6 2xl:py-3
              xl:px-6 xl:py-3
              lg:px-6 lg:py-3
              md:px-4 md:py-2
              
               bg-[#400186] text-white hover:bg-[#300063] transition cursor-pointer">
                Book Appointment
              </button>
              <button className="text-white  cursor-pointer  transition">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
