import React from "react";

const AboutBanner = () => {
  return (
    <>
  <section className="relative bg-[#400186] text-white py-10 px-6 font-inter">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 relative">
          {/* Left Content */}
          <div className='text-center flex flex-col items-center'>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 font-marcellous">About You only Younger</h1>
            {/* Breadcrumb */}
            <nav className="flex items-center space-x-2 text-sm flex-wrap">
              <span className="hover:underline cursor-pointer">Home</span>
              <span>›</span>
              <span className="text-gray-300">About</span>
            </nav>
          </div>

          {/* Right Image (Positioned Absolutely on md+ screens, static on small) */}
          <div className="md:absolute md:right-10 md:top-0 static flex justify-center mt-2 md:mt-0">
            <img
              src="./40.png"
              alt="About You Only Younger"
              className="w-80 sm:w-72 md:w-80 rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>
 <div className="max-w-5xl mx-auto  py-10 px-4">
  <div className="flex flex-col gap-6 items-center justify-center">
    <img src="./32.png" alt="" className="w-40 md:mt-6 mt-0  object-contain" />

    {/* Responsive Two Column Section */}
    <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-10 w-full">
      
      {/* Left Card */}
      <div className="text-center flex flex-col gap-3 bg-gray-200 p-5 rounded-xl w-full lg:w-1/2">
        <p className="text-lg font-semibold">Welcome to You Only Younger</p>
        <span className="text-sm text-gray-700">
          Embark on a journey towards your most radiant self at You Only Younger, nestled in the heart of Sugar Land, Texas. Headed by the eminent Dr. Kami Owen, a double board-certified Integrative Medicine Doctor with over two decades in emergency medicine, our clinic shines as a beacon of holistic health and transformative healing. Our rich tapestry of services weaves together the potent threads of both quantum and integrative medicine, creating a seamless path to well-being that transcends the physical realm.
        </span>
      </div>

      {/* Right Card */}
      <div className="text-center flex flex-col gap-3 bg-gray-200 p-5 rounded-xl w-full lg:w-1/2">
        <p className="text-lg font-semibold">Mission: Empowering Your Unique Journey</p>
        <span className="text-sm text-gray-700">
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
