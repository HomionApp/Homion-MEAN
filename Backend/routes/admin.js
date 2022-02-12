const express = require("express");

const adminController = require("../controllers/adminController");

const router = express.Router();

router.post("/addArea", adminController.addArea);

router.get("/getAreas", adminController.getAreas);

module.exports = router;
