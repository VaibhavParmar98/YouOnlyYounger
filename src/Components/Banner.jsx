import React from 'react'

const Banner = () => {
  return (
    <div className="bg-[linear-gradient(to_right,_#edeaf1,_#ece7f2,_#e5dcf1)] w-full py-10 font-inter">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center px-4 sm:px-6 lg:px-8 gap-8">
        
        {/* Text Section */}
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <p className="text-sm sm:text-base bg-white w-fit px-4 py-2 rounded text-center shadow">
            Hi, I’m Dr. Kami Owen
          </p>
          <h1 className="text-3xl font-marcellous sm:text-4xl lg:text-4xl md:text-2xl font-semibold leading-tight">
            Transform Every Layer of <br className="hidden sm:block" /> Your Health
          </h1>
          <p className="text-gray-600 text-sm sm:text-base">
            Discover healing through our Five Bodies Integrative Medicine system aligning Physical, Vital, Mental, Supermental, and Bliss bodies.
          </p>
          <div className="flex flex-wrap gap-4 mt-4">
            <button className="
            px-6 py-3
             bg-black text-white rounded-full hover:bg-gray-800 transition">
              Book Appointment
            </button>
            <button className="px-6 py-3 border border-black rounded-full hover:bg-gray-100 transition">
              Contact Us
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="./50.png"
            alt="Banner"
            className="w-full max-w-md sm:max-w-lg md:max-w-full h-auto object-contain rounded"
          />
        </div>
      </div>
    </div>
  )
}

export default Banner
