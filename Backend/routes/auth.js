const express = require("express");
const authController = require("../controllers/authController");

const router = express.Router();

router.post("/registerUser", authController.registerUser);

router.get("/verify/:jwtToken", authController.verify);

router.get("/resend/:email", authController.resend);

router.post("/login", authController.login);

router.post("/forgotPassword", authController.forgotPassword);

router.post("/resetPassword", authController.resetPassword);

router.get("/getUsers", authController.getUsers);

router.delete("/dltUsers", authController.dltUsers);

module.exports = router;
