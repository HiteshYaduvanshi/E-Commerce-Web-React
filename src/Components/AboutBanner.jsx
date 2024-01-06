import React from "react";

function AboutBanner() {
  return (
    <>
      <div className="md:flex justify-center items-start">
        <div className="basis-1/2 px-4 pt-7">
          <img
            src="https://woodly.ecom.themepreview.xyz/home01/wp-content/uploads/sites/2/2023/08/pexels-karolina-grabowska-4968391.jpg"
            alt=""
          />
        </div>
        <div className="basis-1/2 px-4 pt-7">
          <h2 className="text-3xl font-bold text-[#ff523b] capitalize">
            About our fantastic shop
          </h2>
          <p className="my-5 text-[#777] font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
            facere officia vitae asperiores expedita culpa dolores quod,
            doloribus vero assumenda. Iste debitis perspiciatis dolor repellat.
            Optio mollitia veniam architecto minus.
          </p>
          <p className="my-5 text-[#777] font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
            facere officia vitae asperiores expedita culpa dolores quod,
            doloribus vero assumenda. Iste debitis perspiciatis dolor repellat.
            Optio mollitia veniam architecto minus.
          </p>
        </div>
      </div>
    </>
  );
}

export default AboutBanner;
