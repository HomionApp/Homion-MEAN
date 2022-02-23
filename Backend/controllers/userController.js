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
    return next(err);
  }
};

exports.getAddressById = async (req, res, next) => {
  try {
    const addressId = req.get("addressId");
    const address = await Address.findById(addressId);
    res.json(new Response(200, "", address));
  } catch (err) {
    return next(err);
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
    return next(err);
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
  } catch (err) {
    return next(err);
  }
};

exports.search = async (req, res, next) => {
  try {
    const criteria = req.params.criteria;
    const products = await Product.find({
      name: { $regex: criteria, $options: "i" },
    }).populate("categoryId subCategoryId");
    const chefs = await Chef.find({
      $or: [
        { firstName: { $regex: criteria, $options: "i" } },
        { lastName: { $regex: criteria, $options: "i" } },
      ],
    });
    res.json(new Response(200, "", { products: products, chefs: chefs }));
  } catch (err) {
    return next(err);
  }
};

exports.getChefById = async (req, res, next) => {
  try {
    const chefId = req.get("chefId");
    const chef = await Chef.findById(chefId).populate([
      {
        path: "products",
        populate: [
          {
            path: "categoryId",
            model: "Category",
          },
          {
            path: "subCategoryId",
            model: "SubCategory",
          },
        ],
      },
      {
        path: "address",
        populate: {
          path: "areaId",
          model: "Area",
        },
      },
    ]);

    userFavouriteProducts = (await User.findById(req.id).select("favouriteProduct")).favouriteProduct;

    res.json(new Response(200, "", {chef: chef, userFavouriteProducts: userFavouriteProducts}));
  } catch (err) {
    return next(err);
  }
};

exports.changeFavouriteChef = async (req, res, next) => {
  try {
    const chefId = req.body.chefId;
    const userId = req.id;
    if (req.body.isFavourite) {
      await User.findByIdAndUpdate(userId, {
        $push: { favouriteChef: chefId },
      });
    } else {
      await User.findByIdAndUpdate(userId, {
        $pull: { favouriteChef: chefId },
      });
    }
    res.json(new Response(200, "Favourite updated"));
  } catch (err) {
    return next(err);
  }
};

exports.changeFavouriteProduct = async (req, res, next) => {
  try {
    const productId = req.body.productId;
    const userId = req.id;
    if (req.body.isFavourite) {
      await User.findByIdAndUpdate(userId, {
        $push: { favouriteProduct: productId },
      });
    } else {
      await User.findByIdAndUpdate(userId, {
        $pull: { favouriteProduct: productId },
      });
    }
    res.json(new Response(200, "Favourite updated"));
  } catch (err) {
    return next(err);
  }
};

exports.isFavouriteChef = async (req, res, next) => {
  try {
    const chefId = req.params.chefId;
    const userId = req.id;
    const user = await User.findOne({
      _id: userId,
      favouriteChef: { $in: [chefId] },
    });

    res.json(new Response(200, "Favourite updated", user ? true : false));
  } catch (err) {
    return next(err);
  }
};
