import React, { useRef, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaMoon, FaSun } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProductContext from "../context/ProductContext";
import logo from "../assets/logo.png";

const Navbar = ({ title, mode, toggleMode }) => {
  const navigate = useNavigate();
  const loginClicked = useRef(false);

  const handleLoginClick = () => {
    if (loginClicked.current) return;
    loginClicked.current = true;

    toast.success("Login Page Opened", {
      autoClose: 1000,
      hideProgressBar: true,
      pauseOnHover: false,
      closeOnClick: true,
    });

    setTimeout(() => {
      navigate("/login");
      loginClicked.current = false;
    }, 1000);
  };

  const {
    state: { cart },
  } = useContext(ProductContext);

  return (
    <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode} shadow-sm `}>
      <div className="container-fluid">
        {/* Left: Logo */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src={logo}
            alt="logo"
            style={{ width: "90px", height: "60px", marginRight: "10px" }}
          />
          <span className="fw-bold text-success fs-4">{title}</span>
        </Link>

        {/* Toggler for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Centered Nav Links + Right Section */}
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-lg-3 text-center">
            <li className="nav-item">
              <Link className="nav-link fw-semibold" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-semibold" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-semibold" to="/blog">Product</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-semibold" to="/contact">Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-semibold" to="/companyformpage">Register</Link>
            </li>
          </ul>

          {/* Right: Icons and Login */}
          <div className="d-flex align-items-center justify-content-center gap-2 mt-3 mt-lg-0">
            <Link to="/cartitems">
              <button className="btn btn-outline-primary position-relative">
                <FaShoppingCart />
                {cart.length > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {cart.length}
                  </span>
                )}
              </button>
            </Link>

            <button onClick={toggleMode} className="btn btn-outline-secondary">
              {mode === "light" ? <FaMoon /> : <FaSun />}
            </button>

            <button onClick={handleLoginClick} className="btn btn-success">Login</button>
          </div>
        </div>
      </div>

      <ToastContainer />
    </nav>
  );
};

export default Navbar;
