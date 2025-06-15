import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function CompanyFormPage() {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    email: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    toast.success("Company registered successfully!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true
    });

    setFormData({
      name: "",
      address: "",
      phone: "",
      email: ""
    });
  };

  return (
    <div className="container-fluid demo-wrapper text-white" >
      <div className="row align-items-center min-vh-100 g-0">

        <div className="col-md-6 px-5 py-5 text-md-start text-center">
          <h1 className="mb-4 fw-bold text-white">Partner With Us: Company Registration</h1>
          <p className="lead mb-4 text-white">
            Join hands with Nature’s Best and become part of a trusted network delivering the freshest fruits and vegetables to customers. Our platform welcomes local farms, organic suppliers, and wholesale distributors who value quality and sustainability.
          </p>
        </div>

        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <div className="p-5 shadow rounded-4 bg-white w-100" style={{ maxWidth: "600px", margin: "20px" }}>
            <h2 className="mb-4 text-dark fw-semibold text-center">Company Details</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label fw-medium">Company Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter company name"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label fw-medium">Address</label>
                <input
                  type="text"
                  className="form-control"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Enter address"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label fw-medium">Phone</label>
                <input
                  type="text"
                  className="form-control"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter phone number"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="form-label fw-medium">Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter email address"
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary w-100 py-2 fw-semibold">Submit</button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
