import React from 'react';

const Categories = () => {
  return (
    <div className="py-10 px-4 font-marcellous">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-center mb-8">
        Categories
      </h1>

      <div className="flex flex-col sm:flex-row sm:justify-center gap-6 max-w-5xl mx-auto">
        <div className="flex flex-col gap-2 text-center items-center">
          <img src="./47.png" alt="Integrative Medicine" className="w-full sm:w-full lg:w-64" />
          <p className="text-sm sm:text-base">Integrative Medicine</p>
        </div>

        <div className="flex flex-col gap-2 text-center items-center">
          <img src="./48.png" alt="Wellness Services" className="w-full sm:w-full lg:w-64" />
          <p className="text-sm sm:text-base">Wellness Services</p>
        </div>

        <div className="flex flex-col gap-2 text-center items-center">
          <img src="./49.png" alt="Med Spa & Beauty" className="w-full sm:w-full lg:w-64" />
          <p className="text-sm sm:text-base">Med Spa & Beauty</p>
        </div>
      </div>
    </div>
  );
};

export default Categories;
