import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Text from './Text';
import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';

const isMobile = () => window.innerWidth <= 768;

const Gallery = () => {
  const [mobileView, setMobileView] = React.useState(false);
  const [popupOpen, setPopupOpen] = React.useState(false);
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const images = [
    './8.png',
    './9.png',
    './10.png',
    './13.png',
    './12.png',
    './11.png',
  ];

  React.useEffect(() => {
    const handleResize = () => setMobileView(isMobile());
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const openPopup = (index) => {
    setCurrentIndex(index);
    setPopupOpen(true);
  };

  const closePopup = () => setPopupOpen(false);

  const nextImage = () =>
    setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevImage = () =>
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div className="bg-[#F6F6F6] overflow-x-hidden py-10 lg:py-20 px-4 sm:px-6 md:px-8">
      {/* Header */}
      <div className="flex flex-col gap-3 text-center mb-8">
        <Text variant="text5" className="marcellus-text leading-tight">
          Before & After Gallery
        </Text>
        <Text
          variant="text1"
          className="max-w-4xl mx-auto leading-relaxed font-inter"
        >
          See real transformations from our clients. These before and after
          photos showcase the visible results of our expert care and treatments.
        </Text>
      </div>

      {/* Responsive Gallery */}
      {mobileView ? (
        <Slider {...sliderSettings}>
          {images.map((src, index) => (
            <div key={index} onClick={() => openPopup(index)}>
              <img
                src={src}
                alt={`img-${index}`}
                className="w-full h-64 object-cover rounded-lg cursor-pointer"
              />
            </div>
          ))}
        </Slider>
      ) : (
        <div className="max-w-7xl mx-auto grid grid-cols-4 gap-4">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`img-${index}`}
              onClick={() => openPopup(index)}
              className={`w-full object-cover rounded-lg cursor-pointer ${
                index === 0 || index === 3
                  ? 'h-[369px] col-span-1 row-span-2'
                  : 'h-44'
              }`}
            />
          ))}
        </div>
      )}

      {/* POPUP Modal */}
      {popupOpen && (
        <div className="fixed inset-0 bg-black/70 bg-opacity-80 flex items-center justify-center z-50 px-4">
          <button
            onClick={closePopup}
            className="absolute top-4 right-4 text-white text-2xl"
          >
            <FaTimes />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-4 text-white text-3xl"
          >
            <FaChevronLeft />
          </button>

          <img
            src={images[currentIndex]}
            alt={`popup-img-${currentIndex}`}
            className="max-h-[80vh] max-w-full rounded-lg shadow-lg"
          />

          <button
            onClick={nextImage}
            className="absolute right-4 text-white text-3xl"
          >
            <FaChevronRight />
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;
