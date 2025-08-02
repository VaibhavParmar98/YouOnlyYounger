import React from 'react';
import Text from '../Common/Text';

const Categories = () => {
  return (
    <div className="py-10 lg:py-20px-4 font-marcellous">
      <Text variant='text5' className=" text-center mb-8">
        Categories
      </Text>

      <div className="flex flex-col sm:flex-row sm:justify-center gap-6 max-w-7xl mx-auto">
        <div className="flex flex-col gap-2 text-center items-center">
          <img src="./47.png" alt="Integrative Medicine" className="w-full sm:w-full lg:w-64" />
          <Text variant='text4' className="text-sm sm:text-base md:text-lg">Integrative Medicine</Text>
        </div>

        <div className="flex flex-col gap-2 text-center items-center">
          <img src="./48.png" alt="Wellness Services" className="w-full sm:w-full lg:w-64" />
          <Text variant='text4' className="text-sm sm:text-base md:text-lg">Wellness Services</Text>
        </div>

        <div className="flex flex-col gap-2 text-center items-center">
          <img src="./49.png" alt="Med Spa & Beauty" className="w-full sm:w-full lg:w-64" />
          <Text variant='text4' className="text-sm sm:text-base md:text-lg">Med Spa & Beauty</Text>
        </div>
      </div>
    </div>
  );
};

export default Categories;
