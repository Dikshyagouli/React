import React from "react";
import service1 from "../assets/service1.jpg";
import service2 from "../assets/service2.jpg";
import service3 from "../assets/service3.jpg";

const services = [
  {
    title: "Real-Time News",
    description: "Stay updated with the latest headlines, breaking news, and developments from around the world.",
    image: service1,
  },
  {
    title: "In-Depth Analysis",
    description: "We dive deep into topics that matter, providing context and expert commentary.",
    image: service2,
  },
  {
    title: "Multimedia Stories",
    description: "Enjoy engaging stories enhanced with images, videos, and interactive visuals.",
    image: service3,
  },
];

const OurServices = ({ mode }) => {
  const isDark = mode === "dark";

  return (
    <section className={`py-5 ${isDark ? "bg-dark text-light" : "bg-white text-dark"}`} id="services">
      <div className="container">
        <h2 className="fw-bold text-center mb-4">
          Our <span className="text-warning">Services</span>
        </h2>
        <p className={`text-center mb-5 ${isDark ? "text-light" : "text-muted"}`}>
          We provide a wide range of services to ensure our audience gets accurate, timely, and engaging content.
        </p>

        <div className="row g-4">
          {services.map((service, idx) => (
            <div className="col-md-4" key={idx}>
              <div className={`card h-100 border-0 shadow-sm ${isDark ? "bg-secondary text-light" : "bg-white text-dark"}`}>
                <img
                  src={service.image}
                  alt={service.title}
                  className="card-img-top"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{service.title}</h5>
                  <p className="card-text">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
