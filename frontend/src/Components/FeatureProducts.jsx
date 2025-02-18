import React from "react";
import Container from "../Layout/Container";
import Product from "./Product";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FeatureProducts = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
        {
          breakpoint: 1120,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 728,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };
  return (
    <section className="mt-[50px]">
      <Container>
        <h2 className="text-xl mt-8 text-center lg:text-2xl font-bold text-primary font-Nunito mb-6">
          Feature Products
        </h2>
        <div className=" slider-container gap-5 gap-x-3 ">
          <Slider {...settings}>
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
          </Slider>
        </div>
      </Container>
    </section>
  );
};

export default FeatureProducts;
