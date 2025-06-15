import React from "react";
import Smallbanner from "../assets/banner.jpg";

const SmallBanner = ({ title }) => {
  return (
    <div className="small-banner-container">
      <div
        className="small-banner-overlay"
        style={{ backgroundImage: `url(${Smallbanner})` }}
      ></div>
      <h4 className="small-banner-title">{title}</h4>
    </div>
  );
};

export default SmallBanner;
