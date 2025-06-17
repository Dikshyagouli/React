import React, { useState, useRef } from "react";

export default function CompanyFormWithPreview() {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
  });

  const [validated, setValidated] = useState(false);
  const toastRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;

    event.preventDefault();
    event.stopPropagation();

    if (form.checkValidity()) {
      setValidated(false);
      showToast();
      setFormData({
        name: "",
        address: "",
        phone: "",
        email: "",
      });
    } else {
      setValidated(true);
    }
  };

  const showToast = () => {
    const toastEl = toastRef.current;
    const toast = new window.bootstrap.Toast(toastEl);
    toast.show();
  };

  return (
    <div className="container py-5">
      <div className="row g-4">
        {/* Left - Form */}
        <div className="col-md-6">
          <h3 className="mb-4">Company Form</h3>
          <form
            noValidate
            className={validated ? "was-validated" : ""}
            onSubmit={handleSubmit}
          >
            {["name", "address", "phone", "email"].map((field) => (
              <div className="mb-3" key={field}>
                <label className="form-label">
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
                <input
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
                <div className="invalid-feedback">
                  Please enter a valid {field}.
                </div>
              </div>
            ))}

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>

        {/* Right - Preview */}
        <div className="col-md-6">
          <h3 className="mb-4">Live Preview</h3>
          <div className="border rounded p-3 bg-light">
            <p>
              <strong>Company Name:</strong> {formData.name || "—"}
            </p>
            <p>
              <strong>Address:</strong> {formData.address || "—"}
            </p>
            <p>
              <strong>Phone:</strong> {formData.phone || "—"}
            </p>
            <p>
              <strong>Email:</strong> {formData.email || "—"}
            </p>
          </div>
        </div>
      </div>

      {/* Toast */}
      <div
        className="toast-container position-fixed top-0 end-0 p-3"
        style={{ zIndex: 9999 }}
      >
        <div
          className="toast align-items-center text-white bg-success border-0"
          role="alert"
          ref={toastRef}
        >
          <div className="d-flex">
            <div className="toast-body">Form submitted successfully!</div>
            <button
              type="button"
              className="btn-close btn-close-white me-2 m-auto"
              data-bs-dismiss="toast"
              aria-label="Close"
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
}
