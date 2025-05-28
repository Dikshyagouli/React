import React from 'react'
import SmallBanner from "./SmallBanner";
import Footer from './Footer';

const Contact = ({ mode }) => {
  let title = "Contact Us";
   const isDark = mode === "dark";
  const textColor = isDark ? "text-light" : "text-dark";
  const bgColor = isDark ? "bg-dark" : "bg-light";
  const cardBg = isDark ? "bg-secondary" : "bg-white";

  return (
    <div>
      <SmallBanner title={title}  />
       <div className={` py-5 ${bgColor} ${textColor}`} style={{ minHeight: "100vh" }}>
  <div className={`p-4 rounded ${cardBg}`}>
      <div className="row">
        {/* Left Column: Contact Info */}
        <div className="col-md-6 mb-4">
          <h2 className="fw-bold">Let's Connect!</h2>
          <p className="text-muted">
            Your thoughts, questions, and feedback are what help us grow and improve Teak. Whether
            you've encountered an issue, have a suggestion, or just want to share your experience,
            we're here to listen. Reach out to us using the form below or through any of the other
            contact methods provided. Let’s make your bookmarking experience even better, together.
          </p>

          <div className="mb-3 d-flex align-items-center bg-light p-3 rounded shadow-sm">
            <i className="bi bi-envelope-fill me-3 fs-4 text-primary"></i>
            <span>support@teak.com</span>
          </div>

          <div className="mb-3 d-flex align-items-center bg-light p-3 rounded shadow-sm">
            <i className="bi bi-telephone-fill me-3 fs-4 text-primary"></i>
            <span>+123 456 7890</span>
          </div>

          <div className="d-flex align-items-center bg-light p-3 rounded shadow-sm">
            <i className="bi bi-geo-alt-fill me-3 fs-4 text-primary"></i>
            <span>123 Teak Lane, Bookmark City, WebWorld</span>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <p className="text-muted">
                Please fill out the form below with your query or message. We strive to respond to
                all inquiries within 24 hours or before.
              </p>
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Your Name</label>
                  <input type="text" className="form-control" id="name" placeholder="Enter your name" />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Your Email Address</label>
                  <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                </div>
                <div className="mb-3">
                  <label htmlFor="subject" className="form-label">What's this about?</label>
                  <input type="text" className="form-control" id="subject" placeholder="Enter a subject" />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message Box</label>
                  <textarea className="form-control" id="message" rows="4" placeholder="Please type your message here"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Send Now</button>
              </form>
            </div>
          </div>
        </div>
      </div>

<div className="mt-5">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57311.28178963859!2d85.3295221744392!3d27.59617846881942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1115de7e34a3%3A0x9ddb139ec321b40e!2sGodawari!5e1!3m2!1sen!2snp!4v1748360958477!5m2!1sen!2snp"
    width="100%"
    height="450"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Google Map of Godawari"
  ></iframe>
</div>
</div>
    </div>
    </div>
  )
}

export default Contact;
