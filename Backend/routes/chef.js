const express = require("express");
const { body, param } = require("express-validator");
const http = require("https");

const validator = require("../utils/validation");
const validationErr = require("../middleware/validationErr");
const chefController = require("../controllers/chefController");
const isAuth = require("../middleware/isAuth");

const router = express.Router();

router.post("/addProduct", isAuth, chefController.addProduct);

router.get("/getProducts", isAuth, chefController.getProducts);

// ------------------------------------------------------------------------------------------

router.post("/addCategory", chefController.addCategory);
router.get("/getCategories", chefController.getCategories);
router.post("/addSubCategory", chefController.addSubCategory);
router.get("/getSubCategories", chefController.getSubCategories);

module.exports = router;
