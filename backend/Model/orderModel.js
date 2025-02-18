const mongoose = require("mongoose");

const orderschema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    cartitem: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Cart",
    },
    totalprice: {
      type: Number,
    },
    paymentstatus: {
      type: String,
      enum: ["paid", "unpain"],
      default: "unpaid",
    },
    address: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
