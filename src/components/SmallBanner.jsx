import React from "react";
import Smallbanner from "../assets/banner.jpg";

const SmallBanner = ({ title }) => {
  return (
    <div
      className="small-banner-container"
      style={{
        backgroundImage: `url(${Smallbanner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "200px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h4 className="small-banner-title">{title}</h4>
    </div>
  );
};

export default SmallBanner;