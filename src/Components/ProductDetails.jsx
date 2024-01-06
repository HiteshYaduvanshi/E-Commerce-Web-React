import React, { useState } from "react";
import { useParams } from "react-router-dom";
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
import productOneSmOne from "../assets/gallery-1.jpg";
import productOneSmTwo from "../assets/gallery-2.jpg";
import productOneSmThree from "../assets/gallery-3.jpg";
import productOneSmFour from "../assets/gallery-4.jpg";
import { FaIndent } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { useCart } from "../Context/CartContext";

function ProductDetails() {
  const { productId } = useParams();

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

  const showProduct = products[productId];

  const [size, setSize] = useState("Select Size");

  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };

  

  const [originalSrc, setOriginalSrc] = useState(showProduct.imgSrc);

  const handleSrcChange = (srcPath) => {
    setOriginalSrc(srcPath);
  };

  const { addToCart,quantity,handleQuantity } = useCart();

  const handleAddToCart = () => {
    const item = {
      id: showProduct.id,
      name: showProduct.productName,
      price: showProduct.price,
      size: size,
      imgSrc: originalSrc,
      quantity: quantity,
    };
    if (item.size === "Select Size") {
      alert("Please select size");
    } else {
      addToCart(item);
      alert("Added to cart");
    }
  };

  return (
    <>
      <div className="md:flex justify-center items-center max-w-[1080px] mx-auto pt-28 py-16">
        <div className="basis-1/2 mx-5 mt-10">
          <img src={originalSrc} alt="product img" className="w-[100%]" />
          <div className="flex pt-2">
            <img
              className="basis-1/4 w-[90px] pr-2"
              src={productOneSmOne}
              alt=""
              onClick={() => handleSrcChange(productOneSmOne)}
            />
            <img
              className="basis-1/4 w-[90px] pr-2"
              src={productOneSmTwo}
              alt=""
              onClick={() => handleSrcChange(productOneSmTwo)}
            />
            <img
              className="basis-1/4 w-[90px] pr-2"
              src={productOneSmThree}
              alt=""
              onClick={() => handleSrcChange(productOneSmThree)}
            />
            <img
              className="basis-1/4 w-[90px]"
              src={productOneSmFour}
              alt=""
              onClick={() => handleSrcChange(productOneSmFour)}
            />
          </div>
        </div>
        <div className="basis-1/2 mx-5 mt-10">
          <p className="capitalize text-2xl font-normal">
            home / {showProduct.category}
          </p>
          <h1 className="capitalize text-6xl font-bold my-5">
            {showProduct.productName}
          </h1>
          <select
            className="border border-[#ff523b] mt-3"
            name="sort"
            id="sort"
            value={size}
            onChange={handleSizeChange}
          >
            <option value="Default" hidden readOnly>
              Select Size
            </option>
            <option value="XXL">XXL</option>
            <option value="XL">XL</option>
            <option value="Large">Large</option>
            <option value="Medium">Medium</option>
            <option value="Small">Small</option>
          </select>
          <div className="flex justify-start items-center">
            <input
              className="border border-[#ff523b] my-5 p-2"
              type="number"
              value={quantity}
              onChange={handleQuantity}
              min={1}
              max={5}
            />
            <button
              className="capitalize ml-5 bg-[#ff523b] py-2 px-5 rounded-3xl text-white"
              onClick={handleAddToCart}
            >
              Add to cart
            </button>
          </div>
          <p className="my-4 text-xl font-semibold">
            Price: {showProduct.price}
          </p>
          <h5 className="capitalize text-2xl font-semibold">
            Product details{" "}
            <FaIndent className="inline-block text-[#ff523b] ml-1" />
          </h5>
          <p className="mt-3">
            Give your summer wardrobe a style upgrade with the HRX Men's Active
            T-shirt. team it with a pair of shorts for your morning workout or a
            denims for an evening out with the guys.
          </p>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
