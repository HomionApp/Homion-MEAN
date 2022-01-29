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
    unique: true
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
  },
  endTime: {
    type: Date,
  },
  about: {
    type: String,
  },
  rating: {
    type: mongoose.Decimal128,
  },
  ratingCount: {
    type: Number,
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
  address: [
    {
      type: Schema.Types.ObjectId,
      ref: "Address",
    },
  ],
});

module.exports = mongoose.model("Chef", chefSchema);