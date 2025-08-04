import React from "react";
import Text from "../Common/Text";
import Button from "../Common/Button";

const Profile = () => {
  return (
    <div className="bg-[#400186] 2xl:h-[800px] flex items-center justify-center px-4 py-10 ">
      <div className=" max-w-7xl 2xl:h-auto xl:h-auto lg:h-auto md:h-auto h-[250px]  w-full relative rounded-3xl overflow-hidden ">
        {/* Profile Image */}
        <img
          src="./22.png"
          alt="Profile"
          className="w-full 2xl:max-w-7xl 2xl:max-h-[630px] max-w-4xl mx-auto h-full object-cover rounded-2xl max-h-[400px]"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 rounded-2xl max-w-4xl mx-auto z-10 flex items-center">
          <div className="text-white  flex flex-col 2xl:gap-4 xl:gap-4 lg:gap-4 md:gap-2 gap-2 px-4 sm:px-6 md:px-10">
            <Text variant="text1" className="bg-[#F4E4FF] md:p-2 p-1 text-[#400186]  font-bold md:w-52 w-44 text-center
            ">
              Hi, I’m Dr. Kami Owen
            </Text>

            <Text variant="text2" className=" w-full
           
             leading-tight marcellus-text ">
              Transform Every Layer of Your Health
            </Text>

            <Text variant="text3" className="
             
            leading-relaxed">
              Discover healing through our Five Bodies Integrative Medicine
              system—aligning Physical, Vital, Mental, Supermental, and Bliss bodies.
            </Text>

            <div className="flex  sm:flex-row 2xl:text-2xl xl:text-lg lg:text-lg md:text-sm text-sm items-start sm:items-center gap-4 mt-2">
              <Button>Book Appointment</Button>
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
