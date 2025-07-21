import React from "react";

const BookingBanner = () => {
  return (
    <>
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
              src="./46.png"
              alt="About You Only Younger"
              className="w-80 sm:w-72 md:w-80 rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>
   
    </>
  );
};

export default BookingBanner;
