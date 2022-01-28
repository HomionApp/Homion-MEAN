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
    type: String,
    required: true,
  },
  imageURL: {
    type: String,
    default: "https://www.iconspng.com/images/young-user-icon.jpg",
  },
  status: {
    type: String, //PENDING-ACTIVE-BLOCK-DELETED
    default: "PENDING",
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
  },
  address: [
    {
      type: Schema.Types.ObjectId,
      ref: "Address",
    },
  ],
  favouriteProduct: [
    {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
  favouriteChef: [
    {
      type: Schema.Types.ObjectId,
      ref: "Chef",
    },
  ],
  items: [
    {
      product: { type: Schema.Types.ObjectId, ref: "Product" },
      qauntity: { type: Number },
    },
  ],
});

module.exports = mongoose.model("User", userSchema);
