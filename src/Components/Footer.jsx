import React from "react";
import googlePlay from "../assets/play-store.png";
import appStore from "../assets/app-store.png";
import footerlogo from "../assets/logo-white.png";

function Footer() {
  return (
    <>
      <div className="bg-black">
        <div className="lg:flex justify-between items-center max-w-[1280px] mx-auto py-12">
          <div className="basis-[25%] mx-7">
            <h1 className="text-white text-2xl">Download our App</h1>
            <p className="text-white my-4 text-sm">
              Download App for Android and ios mobile phone.
            </p>
            <div className="flex">
              <img className="w-32 mr-2 " src={googlePlay} alt="" />
              <img className="w-32" src={appStore} alt="" />
            </div>
          </div>
          <div className="basis-[30%] lg:text-center lg:my-0 my-5 mx-7">
            <img className="lg:mx-auto w-48 mb-5" src={footerlogo} alt="" />
            <p className="text-white">
              Our Purpose Is To Sustainably Make The Pleasure And Benefits Of
              Sports Accessible To The Many.
            </p>
          </div>
          <div className="basis-[12%] mx-7">
            <h1 className="text-white mb-4 font-semibold">Useful Links</h1>
            <ul className="text-[#999]">
              <li className="mb-2">Coupons</li>
              <li className="mb-2">Blog Post</li>
              <li className="mb-2">Return Policy</li>
              <li>Join Affilate</li>
            </ul>
          </div>
          <div className="basis-[12%] lg:mt-0 mx-7 mt-5">
            <h1 className="text-white mb-4 font-semibold">Follow Us</h1>
            <ul className="text-[#999] font-normal">
              <li className="mb-2">Facebook</li>
              <li className="mb-2">Twitter</li>
              <li className="mb-2">Instagram</li>
              <li>YouTube</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="p-2">
          <p className="text-[#777] text-center">
            Copyright 2023 - Hitesh Yaduvanshi
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
