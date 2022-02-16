const Product = require("../models/Product");
const Response = require("../models/Response");
const Category = require("../models/Category");
const SubCategory = require("../models/SubCategory");
const cloudinary = require("cloudinary").v2;

exports.addProduct = async (req, res, next) => {
  try {
    let product = req.body;
    product.chefId = req.id;
    await cloudinary.uploader
      .upload_stream(
        { resource_type: "image", folder: "mean/product" },
        async (error, result) => {
          if (error) {
            console.log("Error in cloudinary.uploader.upload_stream\n", error);
            return;
          }
          product = new Product({ ...product, imageURL: result.url });
          await product.save();
          res.json(new Response(201, "Product added!!"));
        }
      )
      .end(req.file.buffer);
  } catch (err) {
    console.log(err);
  }
};

exports.getProducts = async (req, res, next) => {
  try {
    let products = await Product.find({ chefId: req.id });
    res.json(products);
  } catch (err) {
    console.log(err);
  }
};

exports.getCategories = async (req, res, next) => {
  try {
    let categories = await Category.find();
    res.json(new Response(200, "", categories));
  } catch (err) {
    console.log(err);
  }
};

exports.getSubCategories = async (req, res, next) => {
  try {
    let subCategories = await SubCategory.find();
    res.json(new Response(200, "", subCategories));
  } catch (err) {
    console.log(err);
  }
};

// ----------------------------------------------------------------------------------------

exports.addCategory = async (req, res, next) => {
  try {
    await new Category({ name: req.body.name }).save();
    res.json("Category added!!");
  } catch (err) {
    console.log(err);
  }
};

exports.addSubCategory = async (req, res, next) => {
  try {
    await new SubCategory({ name: req.body.name }).save();
    res.json("SubCategory added!!");
  } catch (err) {
    console.log(err);
  }
};
