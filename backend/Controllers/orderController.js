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
    email,
    trans_id,
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
        email,
      });
      await order.save();
      return res.status(201).send({
        success: true,
        message: "order placed successfully",
        data: order,
      });
    } else {
      const transid = Date.now();
      const data = {
        total_amount: 100,
        currency: "BDT",
        tran_id: transid,
        success_url: `http://localhost:5000/api/v1/order/success/${transid}`,
        fail_url: `http://localhost:5000/api/v1/order/fail/${transid}`,
        cancel_url: `http://localhost:5000/api/v1/order/cencel/${transid}`,
        ipn_url: "http://localhost:5000/api/v1/order/ipn",
        shipping_method: "Courier",
        product_name: "Computer.",
        product_category: "Electronic",
        product_profile: "general",
        cus_name: name,
        cus_email: email,
        cus_add1: address,
        cus_add2: "Dhaka",
        cus_city: city,
        cus_state: "Dhaka",
        cus_postcode: "1000",
        cus_country: "Bangladesh",
        cus_phone: phone,
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
      sslcz.init(data).then(async (apiResponse) => {
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
          email,
          trans_id: transid,
        });

        await order.save();
        let GatewayPageURL = apiResponse.GatewayPageURL;
        res.send(GatewayPageURL);
      });
    }
  } catch (error) {
    return res.status(500).send({ success: false, error: error.message });
  }
}

async function PaymentsuccessController(req, res) {
  const { id } = req.params;
  const updateorder = await orderModel
    .findOneAndUpdate(
      { trans_id: id },
      { paymentstatus: "paid" },
      { new: true }
    )
    .then(() => {
      return res.redirect(`http://localhost:5173/success/${id}`);
    })
    .catch((error) => {
      return res.status(401).send("something went wrong");
    });
}

async function PaymentfailController(req, res) {
  const { id } = req.params;
  const deleteorder = await orderModel
    .findOneAndDelete({ trans_id: id })
    .then(() => {
      res.redirect("http://localhost:5173/paymentfail");
    });
}

async function PaymentCencelController(req, res) {
  const { id } = req.params;

  const deleteorder = await orderModel
    .findOneAndDelete({ trans_id: id })
    .then(() => {
      res.send("Cencel");
    });
}

module.exports = {
  AddtoorderController,
  PaymentsuccessController,
  PaymentfailController,
  PaymentCencelController,
};
