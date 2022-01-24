const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema(
  {
    amount: {
      type: Decimal128,
      required: true,
    },
    paymentMode: {
      type: Decimal128,
      required: true,
    },
    status: {
      type: String, //DELIVERED-PREPARED-ONGOING
      required: true,
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
      required: true,
    },
    feedback: {
      type: Schema.Types.ObjectId,
      ref: "Feedback",
      required: true,
    },
    items: [
      {
        product: {
          type: Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        qauntity: { type: Number, required: true },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
