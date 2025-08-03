import React from "react";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Text from "./Text";

const ClientReview = () => {
  const reviews = [
    {
      img: "./14.png",
      title: "Healing That Lasts",
      desc: "I came in for gut issues and left with a whole new understanding of my body. The Five Bodies approach is next-level healing.",
      name: "Ellie",
      rating: 5,
    },
    {
      img: "./15.png",
      title: "Back to Myself",
      desc: "After years of stress and burnout, I had accepted feeling tired as normal. You Only Younger helped me reconnect with who I really am.",
      name: "Jason K.",
      rating: 5,
    },
    {
      img: "./16.png",
      title: "A Fresh Start",
      desc: "The level of care here is unlike any clinic I’ve experienced. Each visit brought more clarity, energy, and peace into my life.",
      name: "Rachel S.",
      rating: 5,
    },
    {
      img: "./17.png",
      title: "Real Fast Results",
      desc: "Within just three weeks, my anxiety dropped, my digestion improved, and I started sleeping deeply for the first time in years.",
      name: "Marcus D.",
      rating: 5,
    },
    {
      img: "./18.png",
      title: "Finally Understood Everything",
      desc: "The Bliss Body work completely shifted my emotional state. I feel more balanced and connected than ever before.",
      name: "Nina V.",
      rating: 5,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const ReviewCard = ({ item }) => (
    <div className=" w-72 mx-auto bg-white rounded-t-lg rounded-b-lg overflow-hidden flex-shrink-0 flex flex-col">
      <img
        src={item.img}
        alt={item.name}
        className="w-full h-44 object-cover"
      />

      <div className="flex flex-col flex-grow justify-between h-full">
        <div>
          <Text variant="text4" className=" p-2  mt-2 font-marcellous">{item.title}</Text>

          {/* ✅ FIX: Use normal text wrapping */}
          <Text variant="text1" className="px-2 text-gray-700 mt-1 whitespace-normal break-words leading-normal">
            {item.desc}
          </Text>
        </div>

        <div className="mt-2 px-2 pb-2">
          <Text variant="text3" className=" mt-1 font-semibold"> {item.name}</Text>
          <div className="flex items-center space-x-1 text-yellow-400 mt-1">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={i < item.rating ? "" : "text-gray-300"}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="pt-10 pb-16 py-10 lg:py-20  bg-[#F6F6F6] overflow-hidden">
    <div className="flex mb-6 flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-4 md:px-10">
  <Text variant="text5" className=" font-marcellous mb-4 md:mb-0">
    Client Testimonials
  </Text>
  
  <Text variant="text1" className="lg:p-3 md:p-2  rounded-full border cursor-pointer  md:block hidden">
    See all
  </Text>
</div>
{" "}
      {/* ✅ Ticker: show only on lg and above */}
      <div className="hidden lg:block review-ticker-wrapper">
        <div className="review-ticker">
          {[...Array(10)].map((_, i) => (
            <React.Fragment key={i}>
              {reviews.map((item, index) => (
                <ReviewCard key={`${i}-${index}`} item={item} />
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
      {/* ✅ Carousel: show only on md and below */}
      <div className="block lg:hidden px-4 w-full">
        <Slider {...settings}>
          {reviews.map((item, index) => (
            <ReviewCard key={index} item={item} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ClientReview;
