import React from 'react';

const PhysicalBanner = () => {
  return (
    <div>
      {/* Hero Section */}
        <section className="relative bg-[#400186] text-white py-10 px-6 font-inter">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 relative">
            {/* Left Content */}
            <div className='text-center flex flex-col items-center'>
              <h1 className="text-3xl md:text-4xl font-bold mb-4 font-marcellous">Physical Body</h1>
              {/* Breadcrumb */}
              <nav className="flex items-center space-x-2 text-sm flex-wrap">
                <span className="hover:underline cursor-pointer">Home</span>
                <span>›</span>
                <span className="text-gray-300">Physical Body</span>
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

      {/* Content Section */}
      <div className="max-w-5xl mx-auto py-16 px-4 mt-10 flex flex-col lg:flex-row items-center gap-10">
        {/* Image */}
        <div className="w-full lg:w-1/2">
          <img src="./41.png" alt="Physical Body" className="w-full rounded-lg" />
        </div>

        {/* Text */}
        <div className="w-full lg:w-1/2 flex flex-col gap-5 text-justify">
          <h2 className="text-2xl md:text-4xl font-semibold font-marcellous mt-6">What Is the Physical Body?</h2>
          <p>
            The Physical Body—called the Annamaya Kosha in yogic science—is the outermost layer of your being. It includes your bones, muscles, organs, tissues, and physical structure. It’s nourished by food (anna), strengthened through movement, and impacted by everything from stress to environment. This is the body where symptoms first appear, but not always where they begin.
          </p>
          <p>
            Caring for the Physical Body means more than treating isolated symptoms—it’s about creating alignment in how you eat, move, sleep, and recover. When this body is balanced, it becomes a strong, intelligent foundation that supports the deeper healing of your energetic, emotional, and spiritual layers.
          </p>
          <p>
            Ignoring the signals of the Physical Body often leads to chronic fatigue, inflammation, or illness that conventional treatments may only mask.
          </p>

          <button className="w-36 bg-[#400186] text-white px-6 py-3 rounded-full shadow hover:bg-purple-800 transition self-start">
            Contact us
          </button>
        </div>
      </div>
    </div>
  );
};

export default PhysicalBanner;
