import React from 'react';
import Text from '../Common/Text';
import Button from '../Common/Button';

const PhysicalBanner = () => {
  return (
    <div>
      {/* Hero Section */}
        <section className="relative bg-[#400186] lg:h-72 md:h-44 h-36 text-white py-10 px-6 ">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2  gap-8 relative">
          {/* Left Content */}
          <div className=' flex flex-col xl:mt-10 lg:mt-14 md:mt-3'>
            <Text variant='text2' className="  mb-4 font-marcellous">Physical Body</Text>
            {/* Breadcrumb */}
            <Text variant='text3' className="flex items-center space-x-2  flex-wrap">
              <Text className="hover:underline cursor-pointer">Home</Text>
              <span>›</span>
              <Text className="text-gray-300">Physical Body</Text>
            </Text>
          </div>

          {/* Right Image (Positioned Absolutely on md+ screens, static on small) */}
          <div className="absolute -right-3 top-10  flex justify-center mt-2 md:mt-0">
            <img
              src="./40.png"
              alt="About You Only Younger"
              className=" xl:w-[500px] xl:h-[350px] lg:w-96 lg:h-72 md:h-44 h-32  rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto py-16 px-4 mt-10 flex flex-col lg:flex-row items-center gap-10">
        {/* Image */}
        <div className="w-full lg:w-1/2">
          <img src="./41.png" alt="Physical Body" className="w-full rounded-lg" />
        </div>

        {/* Text */}
        <div className="w-full text-center lg:text-justify lg:w-1/2 flex flex-col gap-5  2xl:mr-0 xl:mr-0 lg:mr-3 mr-0">
          <Text variant='text5' className="text-2xl md:text-4xl font-semibold font-marcellous mt-6">What Is the Physical Body?</Text>
          <Text variant='text1'>
            The Physical Body—called the Annamaya Kosha in yogic science—is the outermost layer of your being. It includes your bones, muscles, organs, tissues, and physical structure. It’s nourished by food (anna), strengthened through movement, and impacted by everything from stress to environment. This is the body where symptoms first appear, but not always where they begin.
          </Text>
          <Text variant='text1'>
            Caring for the Physical Body means more than treating isolated symptoms—it’s about creating alignment in how you eat, move, sleep, and recover. When this body is balanced, it becomes a strong, intelligent foundation that supports the deeper healing of your energetic, emotional, and spiritual layers.
          </Text>
          <Text variant='text1'>
            Ignoring the signals of the Physical Body often leads to chronic fatigue, inflammation, or illness that conventional treatments may only mask.
          </Text>

         <Button className='w-44 self-center lg:self-start  '>Contact Us</Button>
        </div>
      </div>
    </div>
  );
};

export default PhysicalBanner;
