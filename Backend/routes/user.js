const express = require("express");

const userController = require("../controllers/userController");
const isAuth = require("../middleware/isAuth");

const router = express.Router();

router.get("/getUser", isAuth, userController.getUser);

router.post("/saveAddress", isAuth, userController.saveAddress);

router.post("/editAddress", isAuth, userController.editAddress);

router.get("/getAddress", isAuth, userController.getAddress);

router.get("/getAddressById", isAuth, userController.getAddressById);

router.delete("/deleteAddress", isAuth, userController.deleteAddress);

router.get("/search/:criteria", isAuth, userController.search);

router.get("/getChefById", isAuth, userController.getChefById);

router.put("/changeFavouriteChef", isAuth, userController.changeFavouriteChef);

router.put(
  "/changeFavouriteProduct",
  isAuth,
  userController.changeFavouriteProduct
);

router.get("/isFavouriteChef/:chefId", isAuth, userController.isFavouriteChef);

router.post("/addToCart", isAuth, userController.addToCart);

router.get("/getCartItems", isAuth, userController.getCartItems);

router.get("/deleteCart", isAuth, userController.deleteCart);

router.post("/placeOrder", isAuth, userController.placeOrder);

router.get("/getOrders", isAuth, userController.getOrders);

module.exports = router;
