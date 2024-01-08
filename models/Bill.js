const mongoose = require("mongoose");
const billSchema = mongoose.Schema(
  {
    customerName: {
      type: String,
      required: true,
    },
    customerPhoneNumber: {
      type: String,
      required: true,
    },
    paymentMod: {
      type: String,
      required: true,
    },

    cartItems: {
      type: Array,
      required: true,
    },
    subTotal: {
      type: Number,
      required: true,
    },
    tax: {
      type: Number,
      required: true,
    },
    totalAmount: {
      type: Number,
      required: true,
    },
  },
  {
    timeStamp: true,
  }
);
const Bill = mongoose.model("bills", billSchema);
module.exports = Bill;
