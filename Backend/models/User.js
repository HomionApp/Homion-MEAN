const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  userName: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  mobile: {
    type: Number,
    required: true,
  },
  imageURL: {
    type: String,
    required: true,
  },
  status: {
    type: String, //ACTIVE-BLOCK-DELETED
    required: true,
  },
  email: {
    type: String, //ACTIVE-BLOCK-DELETED
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  address: [
    {
      type: Schema.Types.ObjectId,
      ref: "Address",
      required: true,
    },
  ],
  favouriteProduct: [
    {
      type: Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
  ],
  favouriteChef: [
    {
      type: Schema.Types.ObjectId,
      ref: "Chef",
      required: true,
    },
  ],
  items: [
    {
      product: { type: Schema.Types.ObjectId, ref: "Product", required: true },
      qauntity: { type: Number, required: true },
    },
  ],
});

module.exports = mongoose.model("User", userSchema);
