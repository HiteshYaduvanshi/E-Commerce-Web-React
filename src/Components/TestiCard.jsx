import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

function TestiCard({
  imgScr,
  userName,
  ratingOne,
  ratingTwo,
  ratingThree,
  ratingFour,
  ratingFive,
}) {
  return (
    <>
      <div className="basis-[30%] text-center px-5 py-10 shadow-md custom-box-shadow hover:translate-y-[-10px]">
        <FaQuoteLeft className="text-[#ff513b] mx-auto text-4xl" />
        <p className="text-[#777] my-3 text-sm">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem ipsum has been the industry's standard dummy text
          ever.
        </p>
        <ul className="flex justify-center">
          <li className="text-[#ff523b] mx-1">{ratingOne}</li>
          <li className="text-[#ff523b] mx-1">{ratingTwo}</li>
          <li className="text-[#ff523b] mx-1">{ratingThree}</li>
          <li className="text-[#ff523b] mx-1">{ratingFour}</li>
          <li className="text-[#ff523b] mx-1">{ratingFive}</li>
        </ul>
        <img className="w-14 mx-auto my-3 rounded-full" src={imgScr} alt="" />
        <h3 className="font-semibold">{userName}</h3>
      </div>
    </>
  );
}

export default TestiCard;
