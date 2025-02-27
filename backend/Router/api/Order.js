const express = require("express");
const {
  AddtoorderController,
  PaymentsuccessController,
  PaymentfailController,
  PaymentCencelController,
} = require("../../Controllers/orderController");
const router = express.Router();

router.post("/addtoorder", AddtoorderController);
router.post("/success/:id", PaymentsuccessController);
router.post("/fail/:id", PaymentfailController);
router.post("/cencel/:id", PaymentCencelController);

module.exports = router;
