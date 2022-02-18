const mongoose = require("mongoose");

const Product = require("../models/Product");
const Response = require("../models/Response");
const Category = require("../models/Category");
const Chef = require("../models/Chef");
const SubCategory = require("../models/SubCategory");
const cloudinary = require("cloudinary").v2;

exports.addProduct = async (req, res, next) => {
  try {
    let product = req.body;
    product.chefId = req.id;
    if (product._id) {
      product = await Product.findByIdAndUpdate(product._id, product);
    } else {
      product = new Product({
        ...product,
      });
      product = await product.save();
    }

    if (req.file) {
      await cloudinary.uploader
        .upload_stream(
          {
            resource_type: "image",
            folder: "mean/product",
            public_id: product._id,
            width: 508,
            height: 320,
            crop: "scale",
          },
          async (error, result) => {
            if (error) {
              console.log(
                "Error in cloudinary.uploader.upload_stream\n",
                error
              );
              return;
            }
            product.imageURL = result.url;
            await product.save();
            return res.json(new Response(201, "Product added!!"));
          }
        )
        .end(req.file.buffer);
    } else {
      res.json(new Response(201, "Product updated!!"));
    }
  } catch (err) {
    console.log(err);
  }
};

exports.getProducts = async (req, res, next) => {
  try {
    let products = await Product.find({ chefId: req.id }).populate(
      "categoryId subCategoryId"
    );
    res.json(new Response(200, "", products));
  } catch (err) {
    console.log(err);
  }
};

exports.deleteProduct = async (req, res, next) => {
  try {
    const chefId = req.id;
    const productId = req.get("productId");

    await cloudinary.uploader.destroy(
      "mean/product/" + productId,
      { invalidate: true, resource_type: "image" },
      async (err, res) => {
        if (err) {
          console.log(err);
        }
        await Chef.findByIdAndUpdate(chefId, {
          $pull: { products: mongoose.Types.ObjectId(productId) },
        });
        await Product.findByIdAndDelete(productId);
      }
    );
    return res.json(new Response(202, "Product deleted !!!"));
  } catch (err) {
    console.log(err);
  }
};

exports.getProductById = async (req, res, next) => {
  try {
    const productId = req.get("productId");
    const product = await Product.findById(productId);
    console.log(product);
    res.json(new Response(201, "", product));
  } catch (error) {
    console.log(error);
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

exports.deleteProducts = async (req, res, next) => {
  try {
    const chefId = req.id;
    console.log(chefId);
    await Chef.findByIdAndUpdate(chefId, {
      $set: { products: [] },
    });
    await Product.deleteMany({ chefId: chefId });
    res.json("Products deleted!!");
  } catch (err) {
    console.log(err);
  }
};
