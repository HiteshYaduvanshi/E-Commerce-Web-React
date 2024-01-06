import React from "react";
import AboutBanner from "./AboutBanner";
import AboutCard from "./AboutCard";
import { FaTruckFast } from "react-icons/fa6";
import { FaMoneyBillWave } from "react-icons/fa";
import { FaHeadphonesAlt } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";

function About() {
  return (
    <>
      <div className="max-w-[1080px] mx-auto py-28">
        <AboutBanner />
        <div className="md:flex justify-center items-center py-3 mt-16 border mx-7">
          <AboutCard
            icon={
              <FaTruckFast className="text-[#ff523b] text-2xl mx-auto leading-[50px]" />
            }
            heading="Free Shipping"
            customStyle="border-r"
          />
          <AboutCard
            icon={
              <FaMoneyBillWave className="text-[#ff523b] text-2xl mx-auto leading-[50px]" />
            }
            heading="14 Days Return"
            customStyle="border-r"
          />
          <AboutCard
            icon={
              <FaHeadphonesAlt className="text-[#ff523b] text-2xl mx-auto leading-[50px]" />
            }
            heading="24/7 Support"
            customStyle="border-r"
          />
          <AboutCard
            icon={
              <MdOutlineSecurity className="text-[#ff523b] text-2xl mx-auto leading-[50px]" />
            }
            heading="Secure Checkout"
          />
        </div>
      </div>
    </>
  );
}

export default About;
