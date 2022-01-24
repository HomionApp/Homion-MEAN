const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const addressSchema = new Schema({
  homeNo: {
    type: Number,
    required: true,
  },
  society: {
    type: String,
    required: true,
  },
  landmark: {
    type: String,
    required: true,
  },
  pincode: {
    type: Number,
    required: true,
  },
  addressType: {
    type: String,
    required: true,
  },
  areaId: {
    type: Schema.Types.ObjectId,
    ref: "Area",
    required: true,
  },
});

module.exports = mongoose.model("Address", addressSchema);
