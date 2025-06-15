import React, { useRef, useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProductContext from "../context/ProductContext";

const Navbar = ({ title, mode, toggleMode, text }) => {
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
  const context = useContext(ProductContext);

  const {
    state: { cart },
  } = context;
  console.log("nav  cart", cart);
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blog">
                  Product
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/companyformpage">
                  company-Registration
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            {/* <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}
            <Link to="/cartitems">
              <button
                type="button"
                className="btn btn-primary mx-3 position-relative"
              >
                <FaShoppingCart />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {cart.length}
                  <span className="visually-hidden">unread messages</span>
                </span>
              </button>
            </Link>
            <button onClick={toggleMode} className="btn btn-primary" style={{ marginRight: '10px'}}>
              {text}
            </button>
             <Link to="/Login">
             <button className="btn btn-danger" onClick={handleLoginClick} style={{ marginRight: '10px'}}>Login</button>
             </Link>
          <ToastContainer />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;