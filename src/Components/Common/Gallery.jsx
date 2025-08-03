import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Text from './Text';

// Optional: You can use a custom hook or media query package instead
const isMobile = () => window.innerWidth <= 768;

const Gallery = () => {
  const [mobileView, setMobileView] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => setMobileView(isMobile());
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const images = [
    './8.png',
    './9.png',
    './10.png',
    './13.png',
    './12.png',
    './11.png',
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div className="bg-[#F6F6F6] py-10 lg:py-20 px-4 sm:px-6 md:px-8">
      {/* Header */}
      <div className="flex flex-col gap-3 text-center mb-8">
        <Text variant='text5' className="  font-marcellous">
          Before & After Gallery
        </Text>
        <Text variant='text1' className=" max-w-4xl mx-auto leading-relaxed font-inter">
          See real transformations from our clients. These before and after photos showcase the
          visible results of our expert care and treatments.
        </Text>
      </div>

      {/* Responsive Gallery */}
      {mobileView ? (
        <Slider {...sliderSettings}>
          {images.map((src, index) => (
            <div key={index}>
              <img
                src={src}
                alt={`img-${index}`}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          ))}
        </Slider>
      ) : (
        <div className="max-w-7xl mx-auto grid grid-cols-4 gap-4">
          <img
            src="./8.png"
            alt="img1"
            className="w-full h-[369px] object-cover rounded-lg col-span-1 row-span-2"
          />

          <div className="flex flex-col gap-4">
            <img src="./9.png" alt="img2" className="w-full h-44 object-cover rounded-lg" />
            <img src="./10.png" alt="img3" className="w-full h-44 object-cover rounded-lg" />
          </div>

          <img
            src="./13.png"
            alt="img4"
            className="w-full h-[369px] object-cover rounded-lg col-span-1 row-span-2"
          />

          <div className="flex flex-col gap-4">
            <img src="./12.png" alt="img5" className="w-full h-44 object-cover rounded-lg" />
            <img src="./11.png" alt="img6" className="w-full h-44 object-cover rounded-lg" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
