const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const chefSchema = new Schema({
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
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  mobile: {
    type: Number,
    required: true,
  },
  imageURL: {
    type: String,
    default: "https://homion.herokuapp.com/chef/chefResources/image/defaultChef.jpg",
    
  },
  status: {
    type: String,      //ACTIVE-BLOCK-DELETED
    default: "PENDING",
    required: true,
  },
  panNumber: {
    type: String,
    required: true,
  },
  startTime: {
    type: Date,
    required: true,
  },
  endTime: {
    type: Date,
    required: true,
  },
  about: {
    type: String,
    required: true,
  },
  rating: {
    type: mongoose.Decimal128,
    required: true,
  },
  ratingCount: {
    type: Number,
    required: true,
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
  ],
  address: [
    {
      type: Schema.Types.ObjectId,
      ref: "Address",
      required: true,
    },
  ],
});

module.exports = mongoose.model("Chef", chefSchema);
