import React, { useState, useEffect } from 'react';
import Profile from './Profile';
import Banner from './Banner';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, 
  };

  return (
    <div className="w-full">
      <Slider {...settings}>
        <div>
          <Banner />
        </div>
        <div>
          {/* <Profile /> */}
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;