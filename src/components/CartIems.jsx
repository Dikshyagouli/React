import React, { useContext } from "react";
import ProductContext from "../context/ProductContext";
import { MdDelete } from "react-icons/md";

import apple from "../assets/apple.jpg";
import banana from "../assets/banana.png";
import mango from "../assets/mango.jpg";

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

const CartItems = () => {
  const {
    state: { cart },
    dispatch,
  } = useContext(ProductContext);

  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div className="container my-5">
      <h3 className="mb-4 text-center">🛒 Your Shopping Cart</h3>
      <div className="list-group mb-4">
        {cart.length === 0 ? (
          <p className="text-center">Your cart is empty.</p>
        ) : (
          cart.map((item) => (
            <div
              key={item._id}
              className="list-group-item d-flex align-items-center justify-content-between"
            >
              <div className="d-flex align-items-center">
                <img
                  src={getImage(item.image)}
                  alt={item.title}
                  style={{ width: "70px", height: "70px", objectFit: "cover", borderRadius: "10px" }}
                  className="me-3"
                />
                <div>
                  <h6 className="mb-1">{item.title}</h6>
                  <small className="text-muted">Price: Rs. {item.price}</small>
                </div>
              </div>

              <div className="d-flex align-items-center">
                <select
                  className="form-select me-3"
                  style={{ width: "70px" }}
                  value={item.qty}
                  onChange={(e) =>
                    dispatch({
                      type: "UPDATE_CART_ITEM",
                      payload: { _id: item._id, qty: parseInt(e.target.value) },
                    })
                  }
                >
                  {[...Array(item.instock).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </select>

                <button
                  className="btn btn-outline-danger"
                  onClick={() =>
                    dispatch({
                      type: "REMOVE_FROM_CART",
                      payload: item,
                    })
                  }
                >
                  <MdDelete size={20} />
                </button>
              </div>
            </div>
          ))
        )}
      </div>

     {cart.length > 0 && (
  <div className="card p-4 shadow-sm">
    <div className="d-flex justify-content-between align-items-center mb-3">
      <h5>Total items: {cart.length}</h5>
      <h5 className="text-success">Sub-total: Rs. {total}</h5>
    </div>
    <div className="d-flex justify-content-center">
      <button
        className="btn btn-primary"
        style={{ minWidth: "200px", padding: "10px 30px", fontWeight: "600" }}
      >
        Proceed to Checkout
      </button>
    </div>
  </div>
)}

    </div>
  );
};

export default CartItems;
