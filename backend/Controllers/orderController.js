const orderModel = require("../Model/orderModel");
const SSLCommerzPayment = require("sslcommerz-lts");
const store_id = process.env.store_id;
const store_passwd = process.env.store_password;
const is_live = false; //true for live, false for sandbox

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
      const data = {
        total_amount: 100,
        currency: "BDT",
        tran_id: "REF123", // use unique tran_id for each api call
        success_url: "http://localhost:5000/api/v1/order/success",
        fail_url: "http://localhost:3030/fail",
        cancel_url: "http://localhost:3030/cancel",
        ipn_url: "http://localhost:3030/ipn",
        shipping_method: "Courier",
        product_name: "Computer.",
        product_category: "Electronic",
        product_profile: "general",
        cus_name: "Customer Name",
        cus_email: "customer@example.com",
        cus_add1: "Dhaka",
        cus_add2: "Dhaka",
        cus_city: "Dhaka",
        cus_state: "Dhaka",
        cus_postcode: "1000",
        cus_country: "Bangladesh",
        cus_phone: "01711111111",
        cus_fax: "01711111111",
        ship_name: "Customer Name",
        ship_add1: "Dhaka",
        ship_add2: "Dhaka",
        ship_city: "Dhaka",
        ship_state: "Dhaka",
        ship_postcode: 1000,
        ship_country: "Bangladesh",
      };
      const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live);
      sslcz.init(data).then((apiResponse) => {
        // Redirect the user to payment gateway
        let GatewayPageURL = apiResponse.GatewayPageURL;
        res.send(GatewayPageURL);
      });
    }
  } catch (error) {
    return res.status(500).send({ success: false, error: error.message });
  }
}

async function PaymentsuccessController(req, res) {
  res.redirect("http://localhost:5173/success");
}

module.exports = { AddtoorderController, PaymentsuccessController };
