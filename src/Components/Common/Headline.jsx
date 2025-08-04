import React from 'react';

const Headline = () => {
  const text = "Mind | Body | Energy | Balance | Wellness | Vitality | ";

  return (
    <div className='py-10'>
      <div className="w-full overflow-hidden marcellus-text leading-tight  border-t border-b border-black p-2 xs:p-3 sm:p-4 md:p-5 lg:p-6 xl:p-7">
      <div className="max-w-[1536px] mx-auto">
        <div className="ticker">
          <div className="ticker__content flex items-center whitespace-nowrap animate-ticker">
            {[...Array(10)].map((_, i) => (
              <span
                key={i}
                className="text-[60px] md:text-[64px] lg:text-[72px] mr-4 sm:mr-6 md:mr-8 lg:mr-10"
              >
                {text}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Headline;