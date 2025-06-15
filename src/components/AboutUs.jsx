import React from "react";
import aboutImage from "../assets/participant1.jpg";

const AboutUs = ({ mode }) => {
  const isDark = mode === "dark";

  return (
    <section className={`py-5 ${isDark ? "bg-dark text-light" : "bg-light text-dark"}`}>
      <div className="container">
        <div className="row align-items-center">
          {/* Image Column */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <img
              src={aboutImage}
              alt="Our Team"
              className="img-fluid rounded shadow"
            />
          </div>

          {/* Content Column */}
          <div className="col-lg-6">
            <h2 className="fw-bold mb-3">
              About <span className="text-warning">Us</span>
            </h2>
            <p className={isDark ? "text-light" : "text-muted"}>
              Freshness you can taste, quality you can trust.
            </p>

            <div className="row mt-4">
              {/* Mission */}
              <div className="col-md-6 mb-4">
                <div className={`card border-0 shadow-sm h-100 ${isDark ? "bg-secondary text-light" : ""}`}>
                  <div className="card-body">
                    <h5 className="card-title">
                      <i className="bi bi-bullseye text-warning me-2"></i>
                      Our Mission
                    </h5>
                    <p className={`card-text ${isDark ? "text-light" : "text-muted"}`}>
                      Deliver farm-fresh fruits and veggies to every home.
Promote healthy eating and natural living.
Support local farmers and eco-friendly practices.
Make freshness accessible, affordable, and easy.


                    </p>
                  </div>
                </div>
              </div>

              {/* Vision */}
              <div className="col-md-6 mb-4">
                <div className={`card border-0 shadow-sm h-100 ${isDark ? "bg-secondary text-light" : ""}`}>
                  <div className="card-body">
                    <h5 className="card-title">
                      <i className="bi bi-eye text-warning me-2"></i>
                      Our Vision
                    </h5>
                    <p className={`card-text ${isDark ? "text-light" : "text-muted"}`}>
                     To be the most trusted name in fresh produce online.
Connect people with nature’s best, every day.
Empower communities through healthy choices.
Build a sustainable, greener tomorrow.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
