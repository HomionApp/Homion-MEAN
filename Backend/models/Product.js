const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  unitValue: {
    type: Number,
    required: true,
  },
  unitType: {
    //gm or unit
    type: String,
    required: true,
  },
  prepTime: {
    //in minutes
    type: Number,
    required: true,
  },
  imageURL: {
    type: String,
    required: false,
  },
  publicId: {
    type: String,
    required: false,
  },
  isJainAvailable: {
    type: Boolean,
    required: true,
  },
  isOpenForHome: {
    type: Boolean,
    required: true,
  },
  status: {
    //DELETED-AVAILABLE-OUT OF STOCK
    type: String,
    default: "OUT_OF_STOCK",
  },
  isSpeciality: {
    type: Boolean,
    required: true,
  },
  rating: {
    type: mongoose.Decimal128,
    default: 0,
  },
  count: {
    type: Number,
    default: 0
  },
  chefId: {
    type: Schema.Types.ObjectId,
    ref: "Chef",
    required: true,
  },
  categoryId: {
    type: Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  subCategoryId: {
    type: Schema.Types.ObjectId,
    ref: "SubCategory",
    required: true,
  },
});

module.exports = mongoose.model("Product", productSchema);
