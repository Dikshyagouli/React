import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import paintings from "../assets/paintings.jpg";
import photography from "../assets/photography.jpg";
import drawings from "../assets/drawings.jpg";
import digitalArt from "../assets/digital-art.jpg";
import sculptures from "../assets/sculptures.jpg";
import pottery from "../assets/pottery.jpg";
import glass from "../assets/glass.jpg";
import jewelry from "../assets/jewelry.jpg";
import paintings1 from "../assets/paintings1.jpg";
import paintings2 from "../assets/paintings2.jpg";
import photo1 from "../assets/photo1.jpg";
import photo2 from "../assets/photo2.jpg";

const detailImages = {
  Paintings: [paintings1, paintings2],
  Photography: [photo1, photo2],
};

const categories = [
  { name: "Paintings", image: paintings },
  { name: "Photography", image: photography },
  { name: "Drawings", image: drawings },
  { name: "Digital Art", image: digitalArt },
  { name: "Sculptures", image: sculptures },
  { name: "Pottery", image: pottery },
  { name: "Glass", image: glass },
  { name: "Jewelry", image: jewelry },
];

const GalleryWithModal = ({ mode }) => {
  const [show, setShow] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);

  const handleShow = (category) => {
    setActiveCategory(category);
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
    setActiveCategory(null);
  };

  const isDark = mode === "dark";

  return (
    <section className={`py-5 ${isDark ? "bg-dark text-light" : "bg-white text-dark"}`} id="category-gallery">
      <div className="container">
        <h2 className="fw-bold text-center mb-4">
          Explore <span className="text-warning">Our Gallery</span>
        </h2>
        <div className="row g-3">
          {categories.map((cat, index) => (
            <div className="col-md-3 col-sm-6" key={index}>
              <div
                className="gallery-item position-relative overflow-hidden rounded shadow-sm"
                onClick={() => handleShow(cat.name)}
                style={{ cursor: "pointer" }}
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-100 h-100 gallery-img"
                />
                <div className="overlay d-flex align-items-center justify-content-center">
                  <h5 className="text-white fw-bold text-center m-0">
                    {cat.name.toUpperCase()}
                  </h5>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        <Modal
          show={show}
          onHide={handleClose}
          size="lg"
          centered
          dialogClassName={isDark ? "modal-dark" : ""}
        >
          <Modal.Header closeButton className={isDark ? "bg-dark text-light" : ""}>
            <Modal.Title>{activeCategory}</Modal.Title>
          </Modal.Header>
          <Modal.Body className={isDark ? "bg-dark text-light" : ""}>
            <div className="row g-3">
              {detailImages[activeCategory]?.length > 0 ? (
                detailImages[activeCategory].map((img, i) => (
                  <div className="col-md-6" key={i}>
                    <img
                      src={img}
                      alt={`${activeCategory}-${i}`}
                      className="img-fluid rounded"
                    />
                  </div>
                ))
              ) : (
                <p>No images found for this category.</p>
              )}
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </section>
  );
};

export default GalleryWithModal;
