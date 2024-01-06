import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import productOne from "../assets/product-1.jpg";
import productTwo from "../assets/product-2.jpg";
import productThree from "../assets/product-3.jpg";
import productFour from "../assets/product-4.jpg";
import productFive from "../assets/product-5.jpg";
import productSix from "../assets/product-6.jpg";
import productSeven from "../assets/product-7.jpg";
import productEight from "../assets/product-8.jpg";
import productNine from "../assets/product-9.jpg";
import productTen from "../assets/product-10.jpg";
import productEleven from "../assets/product-11.jpg";
import productTwelve from "../assets/product-12.jpg";
import { Link } from "react-router-dom";

function ProductPage() {
  const [selectedOption, setSelectedOption] = useState("Default");
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const [searchValue, setSearchValue] = useState("");

  const products = [
    {
      id: 0,
      imgSrc: productOne,
      category: "Tshirt",
      productName: "red  t-shirt",
      ratings: [FaStar, FaStar, FaStar, FaRegStar, FaRegStar],
      price: 50.0,
    },
    {
      id: 1,
      imgSrc: productTwo,
      category: "shoes",
      productName: "Black Shoes",
      ratings: [FaStar, FaStar, FaStar, FaStar, FaStarHalfAlt],
      price: 70.0,
    },
    {
      id: 2,
      imgSrc: productThree,
      category: "trouser",
      productName: "gray trouser",
      ratings: [FaStar, FaStar, FaStar, FaStar, FaRegStar],
      price: 65.0,
    },
    {
      id: 3,
      imgSrc: productFour,
      category: "Tshirt",
      productName: "Blue t-shirt",
      ratings: [FaStar, FaStar, FaStar, FaStar, FaStarHalfAlt],
      price: 72.0,
    },
    {
      id: 4,
      imgSrc: productFive,
      productName: "gray shoes",
      category: "shoes",
      ratings: [FaStar, FaStar, FaStar, FaStar, FaStarHalfAlt],
      price: 50.0,
    },
    {
      id: 5,
      imgSrc: productSix,
      productName: "Black t-shirt",
      category: "Tshirt",
      ratings: [FaStar, FaStar, FaStar, FaStar, FaStarHalfAlt],
      price: 70.0,
    },
    {
      id: 6,
      imgSrc: productSeven,
      productName: "socks",
      category: "socks",
      ratings: [FaStar, FaStar, FaStar, FaStar, FaRegStar],
      price: 45.0,
    },
    {
      id: 7,
      imgSrc: productEight,
      productName: "fossils watch",
      category: "watch",
      ratings: [FaStar, FaStar, FaStar, FaStarHalfAlt, FaRegStar],
      price: 30.0,
    },
    {
      id: 8,
      imgSrc: productNine,
      productName: "roadster watch",
      category: "watch",
      ratings: [FaStar, FaStar, FaStar, FaStar, FaStarHalfAlt],
      price: 45.0,
    },
    {
      id: 9,
      imgSrc: productTen,
      productName: "red black shoes",
      category: "shoes",
      ratings: [FaStar, FaStar, FaStar, FaStarHalfAlt, FaRegStar],
      price: 50.0,
    },
    {
      id: 10,
      imgSrc: productEleven,
      productName: "gray shoes",
      category: "shoes",
      ratings: [FaStar, FaStar, FaStar, FaStar, FaRegStar],
      price: 44.0,
    },
    {
      id: 11,
      imgSrc: productTwelve,
      productName: "black trouser",
      category: "trouser",
      ratings: [FaStar, FaStar, FaStar, FaRegStar, FaRegStar],
      price: 32.0,
    },
  ];

  const sortedProducts = [...products];

  switch (selectedOption) {
    case "ascending":
      sortedProducts.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
      break;
    case "descending":
      sortedProducts.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
      break;
    case "ascendinga2z":
      sortedProducts.sort((a, b) => a.productName.localeCompare(b.productName));
      break;
    default:
      break;
  }

  const filteredAndSortedProducts = sortedProducts.filter((product) =>
    product.category.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <>
      <div className="py-28 px-5 max-w-[1080px] mx-auto 2xl:max-w-full 2xl:mx-16">
        <div className="py-5">
          <input
            className="border w-full border-[#777] px-2 placeholder-black 2xl:p-5"
            type="text"
            placeholder="Search Product"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
        <div className="flex flex-wrap justify-between items-center py-8">
          <h2 className="font-bold text-2xl mr-5 my-3">All Products</h2>
          <select
            className="border border-[#ff523b] my-3"
            name="sort"
            id="sort"
            value={selectedOption}
            onChange={handleSelectChange}
          >
            <option value="Default">Default</option>
            <option value="ascending">Price(Lowest)</option>
            <option value="descending">Price(Higest)</option>
            <option value="ascendinga2z">A to Z</option>
          </select>
        </div>
        <div className="md:flex flex-wrap justify-center items-center max-w-[1080px] 2xl:max-w-full  mx-auto">
          {filteredAndSortedProducts.map((product) => (
            <div
              key={product.id}
              className="basis-[25%] px-2 mt-16 hover:translate-y-[-10px]"
            >
              <Link to={`/E-Commerce-Web-React/products/${product.id}`} >
                <img src={product.imgSrc} alt="product img" />
                <h2 className="capitalize mt-3 text-[20px] font-semibold my-1 2xl:text-4xl">
                  {product.productName}
                </h2>
                <ul className="flex 2xl:my-4">
                  {product.ratings.map((RatingIcon, index) => (
                    <li key={index} className="text-[#ff523b] mx-1">
                      <RatingIcon />
                    </li>
                  ))}
                </ul>
                <p className="mt-1 font-semibold text-[#555] 2xl:text-3xl">
                  ${product.price}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProductPage;
