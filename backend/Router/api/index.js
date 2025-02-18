const express = require("express");
const router = express.Router();
const auth = require("./Auth");
const category = require("./Category");
const product = require("./Product");
const store = require("./Store");
const cart = require("./Cart");

// http://localhost:4000/api/v1/auth
router.use("/auth", auth);
// http://localhost:4000/api/v1/category
router.use("/category", category);
// http://localhost:4000/api/v1/product
router.use("/product", product);
// http://localhost:4000/api/v1/store
router.use("/store", store);
// http://localhost:4000/api/v1/cart
router.use("/cart", cart);

module.exports = router;
