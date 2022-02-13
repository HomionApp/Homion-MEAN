const express = require("express");

const userController = require("../controllers/userController");
const isAuth = require("../middleware/isAuth");

const router = express.Router();

router.post("/saveAddress", isAuth, userController.saveAddress);

module.exports = router;
