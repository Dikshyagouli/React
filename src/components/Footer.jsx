import React from 'react';
import {
  FaFacebookF,
  FaGooglePlusG,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-bg text-white pt-5 pb-3">
      <div className="container text-center">
        <h4 className="mb-1">Let’s connect!</h4>
        <p className="text-light small mb-4">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, assumenda?
</p>

        <form className="d-flex justify-content-center mb-4">
          <input
            type="email"
            className="form-control rounded-pill w-50 me-2"
            placeholder="E-mail here..."
          />
          <button type="submit" className="btn btn-primary rounded-pill px-4">
            Join
          </button>
        </form>

        <div className="mb-3 social-icons">
          <FaFacebookF className="me-3" />
          <FaGooglePlusG className="me-3" />
          <FaInstagram className="me-3" />
          <FaLinkedinIn className="me-3" />
          <FaTwitter className="me-3" />
          <FaYoutube />
        </div>

        <div className="text-light small">Discoveree 2016 © All Rights Reserved</div>

<div className="text-center text-light small mt-2">
  Designed by <span className="text-warning">Dikshya</span>
</div>
      </div>
    </footer>
  );
};

export default Footer;
