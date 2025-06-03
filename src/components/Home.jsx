import React from "react";
import Banner from "../components/Banner";
import AboutUs from "../components/AboutUs";
import OurServices from "../components/OurServices";
import GalleryWithModal from "../components/GalleryWithModal";
import TestimonialSection from "../components/TestimonialSection";

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
