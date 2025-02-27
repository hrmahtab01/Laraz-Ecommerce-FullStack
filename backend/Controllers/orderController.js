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
    name,
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
        name,
      });
      await order.save();
      return res.status(201).send({
        success: true,
        message: "order placed successfully",
        data: order,
      });
    } else {
      return res.status(200).send({ message: "online payment " });
    }
  } catch (error) {
    return res.status(500).send({ success: false, error: error.message });
  }
}

module.exports = { AddtoorderController };
