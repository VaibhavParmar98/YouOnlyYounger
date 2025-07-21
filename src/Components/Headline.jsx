import React from 'react';

const Headline = () => {
  const text = "Mind | Body | Energy | Balance | Wellness | Vitality | ";

  return (
    <div className='py-10'>
      <div className="w-full overflow-hidden font-marcellous  border-t border-b border-black p-2 xs:p-3 sm:p-4 md:p-5 lg:p-6 xl:p-7">
      <div className="max-w-[1536px] mx-auto">
        <div className="ticker">
          <div className="ticker__content flex items-center whitespace-nowrap animate-ticker">
            {[...Array(10)].map((_, i) => (
              <span
                key={i}
                className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl 4xl:text-9xl mr-4 sm:mr-6 md:mr-8 lg:mr-10"
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