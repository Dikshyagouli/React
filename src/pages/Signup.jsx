import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      alert("Please fill all fields");
      return;
    }
    if (password !== confirmPassword) {
  alert("Passwords do not match");
  return;
}
    navigate("/");
  };

  return (
    <div className="signup-page  position-relative">
      <h1 className="signup-heading">Signup</h1>
      <div className="row signup-card">
        <div className="col-md-6 p-5">
          <form onSubmit={handleSignup}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Enter Email Address"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Confirm Password"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-danger">
                CREATE ACCOUNT
              </button>
            </div>
          </form>
        </div>
        <div className="col-md-6 d-none d-md-flex flex-column justify-content-center p-5">
          <h2 className="fw-bold">Create Account</h2>
          <p className="text-muted mb-4">What you will get?</p>
          <ul className="list-unstyled">
            <ul className="list-unstyled">
  <li><i className="fa fa-check text-success me-2"></i>Manage your cart the easy way</li>
  <li><i className="fa fa-check text-success me-2"></i>Share products with your friends</li>
  <li><i className="fa fa-check text-success me-2"></i>15,000+ products from around the world</li>
  <li><i className="fa fa-check text-success me-2"></i>Invite friends and collaborate instantly</li>
</ul>

          </ul>
        </div>
      </div>
    </div>
  );
}
