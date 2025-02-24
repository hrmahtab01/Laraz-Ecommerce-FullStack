const orderModel = require("../Model/orderModel");

async function AddtoorderController(req, res) {
  const {
    user,
    cartitem,
    totalprice,
    paymentstatus,
    paymentmethod,
    address,
    city,
    phone,
  } = req.body;

  try {
    if (paymentmethod === "COD") {
      const order = new orderModel({
        user,
        cartitem,
        totalprice,
        paymentstatus,
        paymentmethod,
        address,
        city,
        phone,
      });
      await order.save();
      return res.status(201).send({
        success: true,
        message: "order placed successfully",
        data: order,
      });
    } else{
        return res.status(400).send({ success: false, message: "something went wrong" });
    }

  } catch (error) {
    return res.status(500).send({ success: false, error: error.message });
  }
}

module.exports = { AddtoorderController };
