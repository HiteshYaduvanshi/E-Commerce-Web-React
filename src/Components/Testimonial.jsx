import React from "react";
import TestiCard from "./TestiCard";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import userOne from "../assets/user-1.png";
import userTwo from "../assets/user-2.png";
import userThree from "../assets/user-3.png";

function Testimonial() {
  return (
    <>
      <div className="sm:flex justify-between items-center max-w-[1080px] 2xl:max-w-full 2xl:mx-12 mx-auto py-12">
        <TestiCard
          imgScr={userOne}
          ratingOne={<FaStar />}
          ratingTwo={<FaStar />}
          ratingThree={<FaStar />}
          ratingFour={<FaStar />}
          ratingFive={<FaRegStar />}
          userName="Sean Parker"
        />
        <TestiCard
          imgScr={userTwo}
          ratingOne={<FaStar />}
          ratingTwo={<FaStar />}
          ratingThree={<FaStar />}
          ratingFour={<FaRegStar />}
          ratingFive={<FaRegStar />}
          userName="Mike Smith"
        />
        <TestiCard
          imgScr={userThree}
          ratingOne={<FaStar />}
          ratingTwo={<FaStar />}
          ratingThree={<FaStar />}
          ratingFour={<FaStarHalfAlt />}
          ratingFive={<FaRegStar />}
          userName="Mabel Joe"
        />
      </div>
    </>
  );
}

export default Testimonial;
