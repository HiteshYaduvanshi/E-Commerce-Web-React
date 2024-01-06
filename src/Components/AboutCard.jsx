import React from "react";

function AboutCard({ icon, heading, customStyle }) {
  return (
    <>
      <div className={`p-5 basis-1/4 text-center ${customStyle}`}>
        <div className="w-14 h-14 bg-[#efb1a8] mx-auto rounded-full flex justify-center items-center">
          {icon}
        </div>
        <h2 className="my-3 font-semibold">{heading}</h2>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, nam?
        </p>
      </div>
    </>
  );
}

export default AboutCard;
