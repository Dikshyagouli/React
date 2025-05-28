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
              We are a dynamic and driven team committed to sharing stories that shape our world...
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
                      To inform and empower audiences through accurate reporting...
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
                      To be a trusted voice in media, recognized for integrity...
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <p className={`mt-3 ${isDark ? "text-light" : "text-muted"}`}>
              Our values are rooted in transparency, excellence...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
