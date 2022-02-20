const express = require("express");

const chefController = require("../controllers/chefController");
const isAuth = require("../middleware/isAuth");

const router = express.Router();

router.post("/addProduct", isAuth, chefController.addProduct);

router.get("/getProducts", isAuth, chefController.getProducts);

router.get("/getProductById", isAuth, chefController.getProductById);

router.delete("/deleteProduct", isAuth, chefController.deleteProduct);

router.get("/getMenuItems", isAuth, chefController.getMenuItems);

router.get("/changeProductStatus", isAuth, chefController.changeProductStatus);

router.get("/getCategories", isAuth, chefController.getCategories);

router.get("/getSubCategories", isAuth, chefController.getSubCategories);

router.get("/getProfileDetails", isAuth, chefController.getProfileDetails);

// ------------------------------------------------------------------------------------------

router.post("/addCategory", chefController.addCategory);
router.post("/addSubCategory", chefController.addSubCategory);

router.delete("/deleteProducts", isAuth, chefController.deleteProducts);

module.exports = router;
