const mongoose = require("mongoose");

const cartschema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    products: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
      quantity: {
        type: Number,
        default: 1,
      },
price:{
    type:Number,


}
  },
  {
    timestamps: true,
  }
);

const cartModel = mongoose.model("Cart", cartschema);
module.exports = cartModel;
