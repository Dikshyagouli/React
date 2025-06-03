import React from "react";
import Banner from "./Banner";
import AboutUs from "./AboutUs";
import OurServices from "./OurServices";
import GalleryWithModal from "./GalleryWithModal";
import TestimonialSection from "./TestimonialSection";
import Footer from "./Footer";

const Home = ({ mode }) => {
  return (
    <div className={mode === "dark" ? "bg-dark text-light" : "bg-white text-dark"}>
      <Banner />
      <AboutUs mode={mode} />
      <OurServices mode={mode} />
      <GalleryWithModal mode={mode} />
      <TestimonialSection mode={mode} />
    </div>
  );
};

export default Home;
