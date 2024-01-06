import React from "react";
import Navbar from "./Navbar";
import image1 from "../assets/image1.png";

function Header() {
  return (
    <>
      <div className="custom-radial-gradient w-full h-screen sm:h-screen pt-10">
        <div className="flex justify-center items-center h-[100%] sm:h-[100%] flex-wrap md:flex-nowrap">
          <div className="md:basis-1/2 mx-4 md:mx-16 mt-5">
            <h1 className="font-bold text-xl md:text-4xl 2xl:text-7xl capitalize ">
              give your workout <br /> a new style!
            </h1>
            <p className="mt-5 2xl:text-xl text-sm">
              Success isn't always about gratness. Its about consistency.
              Consistent <br /> hard work gain success. Greatness will come.
            </p>
            <a
              href="#"
              className="mt-4 inline-block bg-[#ff523b] text-white px-5 py-2 rounded-3xl hover:bg-[#563434]"
            >
              Explore Now &#8594;
            </a>
          </div>
          <div className="md:basis-1/2 mx-4 md:mx-16">
            <img src={image1} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
