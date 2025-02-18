const express = require("express");
const {
  addtocartController,
  getsingleussercart,
  incrementcartController,
  decrementcartController,
  deletecartController,
} = require("../../Controllers/cartController");
const router = express.Router();

router.post("/addtocart", addtocartController);
router.get("/getcart/:userid", getsingleussercart);
router.patch("/incrementcart/:id", incrementcartController);
router.patch("/decrementcart/:id", decrementcartController);
router.delete("/deletecart/:id",deletecartController)

module.exports = router;
