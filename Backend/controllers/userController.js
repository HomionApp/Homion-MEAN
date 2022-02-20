const Address = require("../models/Address");
const User = require("../models/User");
const Chef = require("../models/Chef");
const Product = require("../models/Product");
const Response = require("../models/Response");

var mongoose = require("mongoose");

exports.saveAddress = async (req, res, next) => {
  try {
    let address = req.body.address;
    const userId = req.id;
    address = await new Address(address).save();
    await User.findByIdAndUpdate(userId, { $push: { address: address._id } });
    res.json(new Response(201, "Address saved!!"));
  } catch (err) {
    return next(err);
  }
};

exports.getAddress = async (req, res, next) => {
  try {
    const userId = req.id;
    const address = await User.findById(userId).populate({
      path: "address",
      populate: {
        path: "areaId",
        model: "Area",
      },
    });
    res.json(new Response(200, "", address.address));
  } catch (err) {
    console.log(err);
  }
};

exports.getAddressById = async (req, res, next) => {
  try {
    const addressId = req.get("addressId");
    const address = await Address.findById(addressId);
    res.json(new Response(200, "", address));
  } catch (err) {
    console.log(err);
  }
};

exports.editAddress = async (req, res, next) => {
  try {
    const address = req.body.address;
    const updatedAddress = await Address.findByIdAndUpdate(
      address.addressId,
      address
    );
    console.log(updatedAddress);
    res.json(new Response(201, "Address edited!!"));
  } catch (err) {
    console.log(err);
  }
};

exports.deleteAddress = async (req, res, next) => {
  try {
    const addressId = req.get("addressId");
    const userId = req.id;
    await User.findByIdAndUpdate(userId, {
      $pull: { address: mongoose.Types.ObjectId(addressId) },
    });
    await Address.findByIdAndDelete(addressId);
    res.json(new Response(202, "Address deleted successfully!!!"));
  } catch (err) {}
};

exports.search = async (req, res, next) => {
  try {
    const criteria = req.params.criteria;
    const products = await Product.find({
      name: { $regex: criteria, $options: "i" },
    });
    const chefs = await Chef.find({
      name: { $regex: criteria, $options: "i" },
    });
    console.log(products);
    res.json(new Response(200, "", { products: products, chefs: chefs }));
  } catch (err) {
    console.log(err);
  }
};
