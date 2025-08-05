import React from 'react'
import Text from '../Common/Text'
import { NavLink } from 'react-router-dom'

const BannerBlog = () => {
  return (
     <section className="relative bg-[#400186] lg:h-72 md:h-44 h-36 text-white py-10 px-6 ">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2  gap-8 relative">
          {/* Left Content */}
          <div className=' flex flex-col xl:mt-10 lg:mt-14 md:mt-3'>
            <Text variant='text2' className="  mb-4 marcellus-text leading-tight">Blog</Text>
            {/* Breadcrumb */}
            <Text variant='text3' className="flex items-center space-x-2  flex-wrap">
              <NavLink to='/' className="hover:underline cursor-pointer">Home</NavLink>
              <span>›</span>
              <span className="text-gray-300">Blog</span>
            </Text>
          </div>

          {/* Right Image (Positioned Absolutely on md+ screens, static on small) */}
          <div className="absolute -right-3 top-10  flex justify-center mt-2 md:mt-0">
            <img
              src="./103.jpeg"
              alt="About You Only Younger"
              className=" xl:w-[500px] xl:h-[350px] lg:w-96 lg:h-72 md:h-44 h-32  rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>
  )
}

export default BannerBlog
