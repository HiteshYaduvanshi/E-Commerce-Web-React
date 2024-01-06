import React from "react";
import ProductCard from "./ProductCard";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import productOne from "../assets/product-1.jpg";
import productTwo from "../assets/product-2.jpg";
import productThree from "../assets/product-3.jpg";
import productFour from "../assets/product-4.jpg";

function Featured() {
  return (
    <>
      <div className="py-9 sm:py-12">
        <h1 className="text-center capitalize font-bold text-3xl text-[#555] relative ">
          Featured Products
          <span className="absolute bottom-[-15px] left-1/2 transform -translate-x-1/2 block bg-[#ff523b] h-1.5 w-28 rounded-full"></span>
        </h1>
        <div className="sm:flex items-center justify-center max-w-[1080px] 2xl:max-w-full 2xl:mx-12 mx-auto">
          <ProductCard
            imgScr={productOne}
            productName="red  t-shirt"
            ratingOne={<FaStar />}
            ratingTwo={<FaStar />}
            ratingThree={<FaStar />}
            ratingFour={<FaRegStar />}
            ratingFive={<FaRegStar />}
            price="$50.00"
          />
          <ProductCard
            imgScr={productTwo}
            productName="Black shoes"
            ratingOne={<FaStar />}
            ratingTwo={<FaStar />}
            ratingThree={<FaStar />}
            ratingFour={<FaStar />}
            ratingFive={<FaStarHalfAlt />}
            price="$70.00"
          />
          <ProductCard
            imgScr={productThree}
            productName="gray trouser"
            ratingOne={<FaStar />}
            ratingTwo={<FaStar />}
            ratingThree={<FaStar />}
            ratingFour={<FaStar />}
            ratingFive={<FaRegStar />}
            price="$65.00"
          />
          <ProductCard
            imgScr={productFour}
            productName="Blue t-shirt"
            ratingOne={<FaStar />}
            ratingTwo={<FaStar />}
            ratingThree={<FaStarHalfAlt />}
            ratingFour={<FaRegStar />}
            ratingFive={<FaRegStar />}
            price="$30.00"
          />
        </div>
      </div>
    </>
  );
}

export default Featured;
