import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import SmallBanner from "../components/SmallBanner";

export default function Login() {
  let title = "Login Page";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }
    navigate("/");
  };

  return (
    <>
    <SmallBanner title={title} />
    <div className="login-container d-flex vh-100">
      <div className="login-left d-flex align-items-center justify-content-center bg-white">
        <div className="login-form-box">
          <h2 className="fw-bold text-center mb-3">Login to Your Account</h2>

          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="d-grid mb-3">
              <button type="submit" className="btn btn-success fw-semibold">Sign In</button>
            </div>
          </form>

          <div className="text-center my-3 text-muted">OR</div>

          <p className="text-center text-muted mb-4">Login using social networks</p>

          <div className="d-flex justify-content-center gap-3 mb-3">
            <button className="btn btn-outline-dark rounded-circle px-3">
              <i className="fab fa-facebook-f"></i>
            </button>
            <button className="btn btn-outline-dark rounded-circle px-3">
              <i className="fab fa-google-plus-g"></i>
            </button>
            <button className="btn btn-outline-dark rounded-circle px-3">
              <i className="fab fa-linkedin-in"></i>
            </button>
          </div>

          <p className="text-center mt-4 mb-0 text-muted small">
            Don’t have an account?
            <Link to="/signup" className="ms-1 text-decoration-none fw-semibold text-primary">
              Register
            </Link>
          </p>
        </div>
      </div>

      <div className="login-right d-flex align-items-center justify-content-center text-white">
  <div className="signup-overlay px-4 py-5 rounded-3">
    <h3 className="fw-bold mb-3">New Here?</h3>
    <p className="mb-4">Sign up and discover a great amount of new opportunities!</p>
    <Link to="/signup" className="btn btn-light text-success fw-bold px-4">
      Sign Up
    </Link>
  </div>
</div>

    </div>
    </>
  );
}
