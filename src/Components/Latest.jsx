import React from "react";
import ProductCard from "./ProductCard";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import productFive from "../assets/product-5.jpg";
import productSix from "../assets/product-6.jpg";
import productSeven from "../assets/product-7.jpg";
import productEight from "../assets/product-8.jpg";
import productNine from "../assets/product-9.jpg";
import productTen from "../assets/product-10.jpg";
import productEleven from "../assets/product-11.jpg";
import productTwelve from "../assets/product-12.jpg";

function Latest() {
  return (
    <>
      <div className="py-9 sm:py-12">
        <h1 className="text-center capitalize font-bold text-3xl text-[#555] relative ">
          Latest Products
          <span className="absolute bottom-[-15px] left-1/2 transform -translate-x-1/2 block bg-[#ff523b] h-1.5 w-28 rounded-full"></span>
        </h1>
        <div className="sm:flex flex-wrap items-center justify-center max-w-[1080px] 2xl:max-w-full 2xl:mx-12 mx-auto">
          <ProductCard
            imgScr={productFive}
            productName="gray shoes"
            ratingOne={<FaStar />}
            ratingTwo={<FaStar />}
            ratingThree={<FaStar />}
            ratingFour={<FaRegStar />}
            ratingFive={<FaRegStar />}
            price="$50.00"
          />
          <ProductCard
            imgScr={productSix}
            productName="Black t-shirt"
            ratingOne={<FaStar />}
            ratingTwo={<FaStar />}
            ratingThree={<FaStar />}
            ratingFour={<FaStar />}
            ratingFive={<FaStarHalfAlt />}
            price="$70.00"
          />
          <ProductCard
            imgScr={productSeven}
            productName="socks"
            ratingOne={<FaStar />}
            ratingTwo={<FaStar />}
            ratingThree={<FaStar />}
            ratingFour={<FaStar />}
            ratingFive={<FaRegStar />}
            price="$65.00"
          />
          <ProductCard
            imgScr={productEight}
            productName="fossils watch"
            ratingOne={<FaStar />}
            ratingTwo={<FaStar />}
            ratingThree={<FaStarHalfAlt />}
            ratingFour={<FaRegStar />}
            ratingFive={<FaRegStar />}
            price="$30.00"
          />
          <ProductCard
            imgScr={productNine}
            productName="roadster watch"
            ratingOne={<FaStar />}
            ratingTwo={<FaStar />}
            ratingThree={<FaStar />}
            ratingFour={<FaStar />}
            ratingFive={<FaRegStar />}
            price="$40.00"
          />
          <ProductCard
            imgScr={productTen}
            productName="red black shoes"
            ratingOne={<FaStar />}
            ratingTwo={<FaStar />}
            ratingThree={<FaStar />}
            ratingFour={<FaStar />}
            ratingFive={<FaStarHalfAlt />}
            price="$50.00"
          />
          <ProductCard
            imgScr={productEleven}
            productName="gray shoes"
            ratingOne={<FaStar />}
            ratingTwo={<FaStar />}
            ratingThree={<FaStar />}
            ratingFour={<FaStar />}
            ratingFive={<FaRegStar />}
            price="$44.00"
          />
          <ProductCard
            imgScr={productTwelve}
            productName="black trouser"
            ratingOne={<FaStar />}
            ratingTwo={<FaStar />}
            ratingThree={<FaStar />}
            ratingFour={<FaRegStar />}
            ratingFive={<FaRegStar />}
            price="$32.00"
          />
        </div>
      </div>
    </>
  );
}

export default Latest;
