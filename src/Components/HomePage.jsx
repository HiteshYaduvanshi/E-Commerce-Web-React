import React from "react";
import Header from "./Header";
import Banner from "./Banner";
import Featured from "./Featured";
import Latest from "./Latest";
import Exclusive from "./Exclusive";
import Testimonial from "./Testimonial";
import Brands from "./Brands";

function HomePage() {
  return (
    <>
      <Header />
      <Banner />
      <Featured />
      <Latest />
      <Exclusive />
      <Testimonial />
      <Brands />
    </>
  );
}

export default HomePage;
