import React from "react";
import axios from "axios";

const AddProduct = () => {
  const [product, setProduct] = React.useState({
    title: "",
    description: "",
    price: "",
    instock: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submit");
    const formData = new formData()
    formData.append('title',product.title)
    formData.append('description',product.description)
    formData.append('price',product.price)
    formData.append('instock',product.instock) 
    if (product.image) {
      formData.append('image',product.image)
    }
    try{
      const response = axios.post(
        "http://localhost:3001/api/produts",
        formData,
        {
          headers: {
            //content type: multipart/formdata
            "auth-token": "1234567890",
          },
        }
      );
      console.log(response.data);
      if (response) {
        alert("Product Added Successfully");
      } else {
        alert("Error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    if (e.target.type == "file") {
      setProduct({
        ...product,
        [e.target.name]: e.target.files[0],
      });
      console.log("upload file", e.target.files[0]);
    } else {
      setProduct({ ...product, [e.target.name]: e.target.value });
    }
  };
  return (
    <div className="container">
      <div>
        <h5>Add product </h5>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              value={product.title}
              onChange={handleChange}
              aria-describedby=""
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Description
            </label>
            <input
              type="text"
              value={product.description}
              name="description"
              onChange={handleChange}
              className="form-control"
              id="title"
              aria-describedby=""
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Price
            </label>
            <input
              type="number"
              name="price"
              value={product.price}
              onChange={handleChange}
              className="form-control"
              id="title"
              aria-describedby=""
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Instock
            </label>
            <input
              type="number"
              name="instock"
              value={product.instock}
              onChange={handleChange}
              className="form-control"
              id="title"
              aria-describedby=""
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Image
            </label>
            <input
              type="file"
              multiple
              className="form-control"
              onChange={handleChange}
              id="image"
              aria-describedby=""
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;