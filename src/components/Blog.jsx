import React, { useContext, useState, useEffect } from "react";
import SmallBanner from "./SmallBanner";
import ProductContext from "../context/ProductContext";
import { BsThreeDots } from "react-icons/bs";
import EditProductModal from "./EditProductModal";

// Image imports
import apple from "../assets/apple.jpg";
import banana from "../assets/banana.png";
import mango from "../assets/mango.jpg"; // Add this image in assets

const Blog = () => {
  const context = useContext(ProductContext);
  const {
    product,
    allProduct,
    editProduct,
    state: { cart },
    dispatch,
  } = context;

  const [menuVisible, setMenuVisible] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    allProduct();
  }, [allProduct]);

  const toggleMenu = (id) => {
    setMenuVisible((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const closeEditModal = () => {
    setModalVisible(false);
    setSelectedProduct(null);
  };

  const saveEdit = (updateData) => {
    editProduct(selectedProduct._id, updateData);
    closeEditModal();
  };

  const handleDelete = (id) => {
    console.log("delete item id ", id);
  };

  const openEditModal = (product) => {
    setSelectedProduct(product);
    setModalVisible(true);
  };

  const getImage = (imageName) => {
    switch (imageName) {
      case "apple.jpg":
        return apple;
      case "banana.png":
        return banana;
      case "mango.jpg":
        return mango;
      default:
        return apple;
    }
  };

  return (
    <div>
      <SmallBanner title="Products" />
      <div className="about">
        <div className="container">
          <div className="row">
            {product.map((item) => (
              <div key={item._id} className="col-md-3 mb-3">
                <div className="card">
                  <img
                    src={getImage(item.image)}
                    className="card-img-top"
                    alt={item.title}
                  />
                  <div className="card-body">
                    <div className="title-content d-flex justify-content-between">
                      <h5 className="card-title">{item.title}</h5>
                      <BsThreeDots onClick={() => toggleMenu(item._id)} />
                    </div>

                    {menuVisible[item._id] && (
                      <div className="menu-options mb-2">
                        <button onClick={() => openEditModal(item)}>
                          Edit
                        </button>
                        <button onClick={() => handleDelete(item._id)}>
                          Delete
                        </button>
                      </div>
                    )}

                    <p className="card-text">{item.description}</p>
                    <p className="card-text">Rs. {item.price}</p>

                    {cart && cart.some((p) => p._id === item._id) ? (
                      <button
                        className="btn btn-danger"
                        onClick={() =>
                          dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: item,
                          })
                        }
                      >
                        Remove from cart
                      </button>
                    ) : (
                      <button
                        className="btn btn-primary"
                        onClick={() =>
                          dispatch({
                            type: "ADD_TO_CART",
                            payload: item,
                          })
                        }
                      >
                        Add to cart
                      </button>
                    )}
                  </div>
                </div>

                {modalVisible &&
                  selectedProduct &&
                  selectedProduct._id === item._id && (
                    <EditProductModal
                      product={selectedProduct}
                      onClose={closeEditModal}
                      onSave={saveEdit}
                    />
                  )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
