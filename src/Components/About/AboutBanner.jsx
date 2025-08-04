import React from "react";
import { NavLink } from "react-router-dom";

const AboutBanner = () => {
  return (
    <>
  <section className="relative bg-[#400186] lg:h-72 md:h-44 h-36 text-white py-10 px-6 font-inter">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2  gap-8 relative">
          {/* Left Content */}
          <div className=' flex flex-col xl:mt-10 lg:mt-14 md:mt-3'>
            <h1 className="xl:text-[50px] lg:text-[47px] md:text-[30px]  text-[28px] marcellus-text leading-tight">About You only Younger</h1>
            {/* Breadcrumb */}
            <nav className="flex items-center space-x-2 text-sm flex-wrap lg:text-[18px] md:text-[14px] text-[14px]">
              <NavLink to='/' className="hover:underline cursor-pointer">Home</NavLink>
              <span>›</span>
              <span className="text-gray-300">About</span>
            </nav>
          </div>

          {/* Right Image (Positioned Absolutely on md+ screens, static on small) */}
          <div className="absolute -right-3 top-10  flex justify-center mt-2 md:mt-0">
            <img
              src="./40.png"
              alt="About You Only Younger"
              className=" xl:w-[500px] xl:h-[350px] xl:ml-0 ml-6 lg:w-96 lg:h-72 md:h-44 h-32  rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>
 <div className="max-w-7xl mx-auto  py-20 px-4 md:mt-10 mt-12">
  <div className="flex flex-col gap-6 items-center justify-center">
    <img src="./101.svg" alt="" className="lg:w-40 w-24  mt-0  object-contain" />

    {/* Responsive Two Column Section */}
   <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-10 w-full">
      
      {/* Left Card */}
      <div className="text-center flex flex-col gap-3 xl:h-64 bg-gray-200 p-5 rounded-xl w-full lg:w-1/2 h-full">
        <p className="lg:text-[25px] md:text-[20px] text-[16px] font-bold">Welcome to You Only Younger</p>
        <span className="lg:text-[16px] md:text-[14px] text-[12px] text-gray-700">
          Embark on a journey towards your most radiant self at You Only Younger, nestled in the heart of Sugar Land, Texas. Headed by the eminent Dr. Kami Owen, a double board-certified Integrative Medicine Doctor with over two decades in emergency medicine, our clinic shines as a beacon of holistic health and transformative healing. Our rich tapestry of services weaves together the potent threads of both quantum and integrative medicine, creating a seamless path to well-being that transcends the physical realm.
        </span>
      </div>

      {/* Right Card */}
      <div className="text-center flex flex-col gap-3 xl:h-64 bg-gray-200 p-5 rounded-xl w-full lg:w-1/2 h-full">
        <p className="lg:text-[25px] md:text-[20px] text-[16px] font-bold">Mission: Empowering Your Unique Journey</p>
        <span className="lg:text-[16px] md:text-[14px] text-[12px]  text-gray-700">
          At You Only Younger, we are steadfast in our mission to empower your unique beauty, health, and healing journey. We extend dedicated tools and guidance, inspiring transformative beauty and well-being in every facet of your life. With an unwavering commitment to your beauty, health, and healing, our approach addresses your physical and emotional aspects, with consciousness being the foundation, unlocking the gates to optimal wellness.
        </span>
      </div>
    </div>
  </div>
</div>

    </>
  );
};

export default AboutBanner;
