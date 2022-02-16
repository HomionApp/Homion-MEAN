const express = require("express");

const chefController = require("../controllers/chefController");
const isAuth = require("../middleware/isAuth");

const router = express.Router();

router.post("/addProduct", isAuth, chefController.addProduct);

router.get("/getProducts", isAuth, chefController.getProducts);

router.delete("/deleteProduct", isAuth, chefController.deleteProduct);

router.get("/getCategories", isAuth, chefController.getCategories);

router.get("/getSubCategories", isAuth, chefController.getSubCategories);

// ------------------------------------------------------------------------------------------

router.post("/addCategory", chefController.addCategory);
router.post("/addSubCategory", chefController.addSubCategory);

router.delete("/deleteProducts", isAuth, chefController.deleteProducts);

module.exports = router;
