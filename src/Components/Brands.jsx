import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import brandOne from "../assets/logo-godrej.png";
import brandTwo from "../assets/logo-oppo.png";
import brandThree from "../assets/logo-coca-cola.png";
import brandFour from "../assets/logo-paypal.png";
import brandFive from "../assets/logo-philips.png";

function Brands() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    autoplay: true,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
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
    <>
      <div className="max-w-[1080px] 2xl:max-w-full 2xl:mx-12 overflow-hidden mx-auto py-12">
        <Slider {...settings}>
          <div className="text-center custom-filter">
            <img className="mx-auto" src={brandOne} alt="" />
          </div>
          <div className="text-center custom-filter">
            <img className="mx-auto" src={brandTwo} alt="" />
          </div>
          <div className="text-center custom-filter">
            <img className="mx-auto" src={brandThree} alt="" />
          </div>
          <div className="text-center custom-filter">
            <img className="mx-auto" src={brandFour} alt="" />
          </div>
          <div className="text-center custom-filter">
            <img className="mx-auto" src={brandFive} alt="" />
          </div>
          <div className="text-center custom-filter">
            <img className="mx-auto" src={brandOne} alt="" />
          </div>
          <div className="text-center custom-filter">
            <img className="mx-auto" src={brandTwo} alt="" />
          </div>
          <div className="text-center custom-filter">
            <img className="mx-auto" src={brandThree} alt="" />
          </div>
          <div className="text-center custom-filter">
            <img className="mx-auto" src={brandFour} alt="" />
          </div>
          <div className="text-center custom-filter">
            <img className="mx-auto" src={brandFive} alt="" />
          </div>
        </Slider>
      </div>
    </>
  );
}

export default Brands;
