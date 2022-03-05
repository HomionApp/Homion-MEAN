const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema(
  {
    amount: {
      type: Number,
      required: true,
    },
    paymentMode: {
      type: String,
      required: false,
    },
    status: {
      type: String, //DELIVERED-PREPARED-ONGOING-ORDERED-INCART
      default: "INCART",
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    chef: {
      type: Schema.Types.ObjectId,
      ref: "Chef",
      required: true,
    },
    address: {
      type: Schema.Types.ObjectId,
      ref: "Address",
      required: false,
    },
    feedback: {
      type: Schema.Types.ObjectId,
      ref: "Feedback",
      required: false,
    },
    items: [
      {
        product: {
          type: Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: { type: Number, required: true },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
