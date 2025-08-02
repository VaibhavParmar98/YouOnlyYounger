import React from 'react'
import Text from '../Common/Text'

const BannerMentalBody = () => {
  return (
   <div>
        {/* Hero Section */}
        <section className="relative bg-[#400186] lg:h-72 md:h-44 h-36 text-white py-10 px-6 ">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2  gap-8 relative">
          {/* Left Content */}
          <div className=' flex flex-col xl:mt-10 lg:mt-14 md:mt-3'>
            <Text variant='text2' className="  mb-4 font-marcellous">Mental Body</Text>
            {/* Breadcrumb */}
            <Text variant='text3' className="flex items-center space-x-2  flex-wrap">
              <span className="hover:underline cursor-pointer">Home</span>
              <span>›</span>
              <span className="text-gray-300">Mental Body</span>
            </Text>
          </div>

          {/* Right Image (Positioned Absolutely on md+ screens, static on small) */}
          <div className="absolute -right-3 top-10  flex justify-center mt-2 md:mt-0">
            <img
              src="./81.png"
              alt="About You Only Younger"
              className=" xl:w-[500px] xl:h-[350px] lg:w-96 lg:h-72 md:h-44 h-32  rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default BannerMentalBody
