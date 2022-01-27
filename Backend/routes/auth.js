const express = require("express");
const authController = require("../controllers/authController");
const { body, param } = require("express-validator");

const validator = require("../utils/validation");

const router = express.Router();

router.post(
  "/registerUser",
  validator.isRegisterUser(),
  authController.registerUser
);

router.get("/verify/:jwtToken", authController.verify);

router.get(
  "/resend/:email",
  param("email").isEmail().withMessage("Invalid email"),
  authController.resend
);

router.post(
  "/login",
  body("email").isEmail().withMessage("Invalid email"),
  authController.login
);

router.post(
  "/forgotPassword",
  body("email").isEmail().withMessage("Invalid email"),
  authController.forgotPassword
);

router.post(
  "/resetPassword",
  body("password").custom((value) => {
    validator.isPassword(value);
    return true;
  }),
  authController.resetPassword
);

router.post("/registerChef", authController.registerChef);

router.get("/getUsers", authController.getUsers);

router.delete("/dltUsers", authController.dltUsers);

module.exports = router;
