/* eslint-disable no-undef */
const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const Cart = require("../model/Cart");
const Product = require("../model/Product");
const fetchUser = require("../middleware/FetchUser");

router.post("/addcart", fetchUser, [
  body("productId").notEmpty().withMessage("Product ID is required"),
  body("quantity").isInt({ min: 1 }).withMessage("Quantity must be at least 1"),
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  const { productId, quantity } = req.body;

  try {
    let cart = await Cart.findOne({ user: req.user.id });

    if (!cart) {
      cart = new Cart({
        user: req.user.id,
        products: [{ product: productId, quantity }]
      });
    } else {
      const existing = cart.products.find(p => p.product.toString() === productId);
      if (existing) {
        existing.quantity += quantity;
      } else {
        cart.products.push({ product: productId, quantity });
      }
    }

    await cart.save();
    res.status(200).json({ message: "Product added to cart", cart });

  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});
router.get("/", fetchUser, async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user.id })
      .populate("user", "name email")
      .populate("products.product", "title price");

    if (!cart) {
      return res.status(404).json({ message: "Cart is empty" });
    }

    res.status(200).json(cart);

  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
