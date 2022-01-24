const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const subCategorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: String,
});

module.exports = mongoose.model("SubCategory", subCategorySchema);
