import React from "react";
import Image from "../Layout/Image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Banner = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const bannerIiamge = [
    {
      image:
        "https://img.lazcdn.com/us/domino/ce65540d-44a8-4b4a-9187-5f323534e266_BD-1976-688.jpg_2200x2200q80.jpg",
    },
    {
      image:
        "https://img.lazcdn.com/us/domino/6de9fd98-5133-4499-ad5d-ef67747dc775_BD-1976-688.jpg_2200x2200q80.jpg",
    },
    {
      image:
        "https://img.lazcdn.com/us/domino/2e91305a-bbf4-4fc6-b27a-9ab73be64453_BD-1976-688.jpg_2200x2200q80.jpg",
    },
  ];
  return (
    <div className="mt-4">
      {bannerIiamge.length > 2 ? (
        <Slider {...settings}>
          {bannerIiamge.map((item) => (
            <>
              <Image src={item.image} alt="banner image" />
            </>
          ))}
        </Slider>
      ) : (
        <Image src={bannerIiamge[0].image} alt="banner image" />
      )}
    </div>
  );
};

export default Banner;
