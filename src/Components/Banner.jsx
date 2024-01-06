import React from "react";
import SimpleCard from "./SimpleCard";
import category1 from "../assets/category-1.jpg";
import category2 from "../assets/category-2.jpg";
import category3 from "../assets/category-3.jpg";

function Banner() {
  return (
    <>
      <div className="py-9 sm:py-12 flex justify-center">
        <SimpleCard imageScr={category1} />
        <SimpleCard imageScr={category2} />
        <SimpleCard imageScr={category3} />
      </div>
    </>
  );
}

export default Banner;
