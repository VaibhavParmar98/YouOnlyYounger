import React from 'react';
import Text from '../Common/Text';

const Categories = () => {
  return (
    <div className="pt-10 overflow-x-hidden lg:pt-20 px-4 marcellus-text leading-tight">
      <Text variant='text5' className=" text-center mb-8">
        Categories
      </Text>

      <div className="flex flex-col sm:flex-row sm:justify-center gap-6 max-w-7xl mx-auto">
        <div className="flex flex-col gap-2 text-center items-center">
          <img src="./87.png" alt="Integrative Medicine" className="w-full rounded-3xl hover:border-4 border-[#FFBD11] border-2 sm:w-full lg:w-96" />
          <Text variant='text4' className="text-sm  sm:text-base md:text-lg">Integrative Medicine</Text>
        </div>

        <div className="flex flex-col gap-2 text-center items-center">
          <img src="./88.png" alt="Wellness Services" className="w-full rounded-3xl hover:border-4 border-[#5378F4] border-2  sm:w-full lg:w-96" />
          <Text variant='text4' className="text-sm sm:text-base md:text-lg">Wellness Services</Text>
        </div>

        <div className="flex flex-col gap-2 text-center items-center">
          <img src="./89.png" alt="Med Spa & Beauty" className="w-full rounded-3xl hover:border-4 border-[#EC658E] border-2  sm:w-full lg:w-96" />
          <Text variant='text4' className="text-sm sm:text-base md:text-lg">Med Spa & Beauty</Text>
        </div>
      </div>
    </div>
  );
};

export default Categories;
