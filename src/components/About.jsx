import React from "react";
import SmallBanner from "./SmallBanner";
import aboutImage from "../assets/participant1.jpg"

const About = () => {
  let title = "About Us";
  
  return (
    <div>
      <SmallBanner title={title} />
       <section className="py-5 bg-light" id="about">
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
            <p className="text-muted">
              We are a dynamic and driven team committed to sharing stories that shape our world. With a focus on truth, relevance, and impact, our platform delivers high-quality journalism and thoughtful perspectives.
            </p>

            <div className="row mt-4">
              {/* Mission */}
              <div className="col-md-6 mb-4">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body">
                    <h5 className="card-title">
                      <i className="bi bi-bullseye text-warning me-2"></i>
                      Our Mission
                    </h5>
                    <p className="card-text text-muted">
                      To inform and empower audiences through accurate reporting and responsible storytelling.
                    </p>
                  </div>
                </div>
              </div>

              {/* Vision */}
              <div className="col-md-6 mb-4">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body">
                    <h5 className="card-title">
                      <i className="bi bi-eye text-warning me-2"></i>
                      Our Vision
                    </h5>
                    <p className="card-text text-muted">
                      To be a trusted voice in media, recognized for integrity, innovation, and global impact.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-muted mt-3">
              Our values are rooted in transparency, excellence, and a passion for positive change. We believe that informed people can shape a better future.
            </p>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default About;