import React from "react";
import exclusive from "../assets/exclusive.png";

function Exclusive() {
  return (
    <>
      <div className="custom-radial-gradient ">
        <div className="sm:flex justify-center items-center max-w-[1080px] 2xl:max-w-full mx-auto">
          <div className="basis-1/2 px-4 py-8 md:py-16 md:px-16">
            <img src={exclusive} alt="" />
          </div>
          <div className="basis-1/2 px-4 py-8 md:py-16 md:px-16">
            <p className="text-[#555] 2xl:text-4xl">Exclusively Available On Redstore</p>
            <h1 className="text-5xl font-bold my-4 capitalize 2xl:my-9 2xl:text-8xl">Smart Band 4</h1>
            <p className="2xl:text-3xl">
              The Mi Smart Band 4 features a 39.9% larger (than Mi band 3) Amoled
              colour full-touch display with adjustable brightness, so
              everything is clear as can be.
            </p>
            <a className="mt-4 inline-block hover:bg-[#563434] bg-[#ff523b] text-white px-5 py-2 rounded-3xl 2xl:mt-16 2xl:text-3xl">
              Buy Now &#8594;
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Exclusive;
