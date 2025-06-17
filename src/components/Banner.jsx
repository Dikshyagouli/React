import React from "react";
import B1 from "../assets/b1.jpg";
import B2 from "../assets/b2.jpg";

const slides = [
  {
    image: B2,
    title: "Nature’s Best: Fresh Fruits & Veggies",
    subtitle: "Healthy, Organic, and Farm-Fresh to Your Doorstep",
    button1: "Shop Now",
    button2: "View Products"
  },
  {
    image: B1,
    title: "Fresh. Pure. Natural.",
    subtitle: "Explore our hand-picked seasonal produce",
    search: true
  }
];

const Banner = () => {
  return (
    <div id="heroCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
      <div className="carousel-inner">

        {slides.map((slide, index) => (
          <div
            className={`carousel-item ${index === 0 ? "active" : ""}`}
            key={index}
            style={{ position: "relative" }}
          >
            <img src={slide.image} className="d-block w-100" alt="slide" />
            
            {/* Full blur overlay */}
            <div
              className="position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center text-center text-white p-4"
              style={{
                background: "rgba(0,0,0,0.5)",
                backdropFilter: "blur(6px)",
                zIndex: 2
              }}
            >
              <div>
                <h1 className="display-5 fw-bold mb-3">{slide.title}</h1>
                <p className="lead mb-4">{slide.subtitle}</p>

                {slide.search ? (
                  <div className="d-flex flex-column flex-md-row gap-2 justify-content-center">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search for a product..."
                    />
                    <button className="btn btn-warning px-4">Search</button>
                  </div>
                ) : (
                  <div className="d-flex flex-column flex-md-row gap-2 justify-content-center">
                    <button className="btn btn-success px-4">{slide.button1}</button>
                    <button className="btn btn-outline-light px-4">{slide.button2}</button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}

      </div>

      {/* Controls */}
      <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Banner;
