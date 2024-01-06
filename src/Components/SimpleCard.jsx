import React from "react";

function SimpleCard({ imageScr }) {
  return (
    <>
      <div className="basis-1/4 mx-5">
        <img src={imageScr} alt="" />
      </div>
    </>
  );
}

export default SimpleCard;
