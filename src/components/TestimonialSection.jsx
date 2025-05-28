import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

const testimonials = [
  {
    name: "Alex",
    role: "Art Collector",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "The gallery's collection is incredibly diverse and high-quality. I’ve discovered some truly inspiring pieces here!"
  },
  {
    name: "Sarah",
    role: "Designer",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "This platform is my go-to for sourcing artwork for my clients. The professionalism and layout are top-notch."
  },
  {
    name: "David",
    role: "Photographer",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
    text: "I love how easily I can showcase my work in such an elegant gallery. The hover features are just beautiful!"
  },
];

const TestimonialSection = ({ mode }) => {
  const isDark = mode === "dark";

  return (
    <section className={`py-5 ${isDark ? "bg-dark text-light" : "bg-light text-dark"}`}>
      <div className="container">
        <h2 className="text-center mb-4 fw-bold">What Our Visitors Say</h2>
        <Carousel indicators={false}>
          {testimonials.map((testimonial, idx) => (
            <Carousel.Item key={idx}>
              <div className="d-flex flex-column align-items-center text-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="rounded-circle mb-3"
                  width="100"
                  height="100"
                />
                <p className={`lead fst-italic px-3 px-md-5 ${isDark ? "text-light" : "text-muted"}`}>
                  {`"${testimonial.text}"`}
                </p>
                <h5 className="mt-2 fw-semibold">{testimonial.name}</h5>
                <small className={isDark ? "text-light" : "text-muted"}>{testimonial.role}</small>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialSection;
