const express = require("express");
const { body, param } = require("express-validator");

const validator = require("../utils/validation");
const validationErr = require('../middleware/validationErr');
const authController = require("../controllers/authController");

const router = express.Router();

router.post(
  "/registerUser",
  validator.isRegisterUser(),
  validationErr,
  authController.registerUser
);

router.get("/verify/:jwtToken", authController.verifyEmail);

router.get(
  "/resend/:email",
  param("email").isEmail().withMessage("Invalid email"),
  validationErr,
  authController.resend
);

router.post(
  "/login",
  body("email").isEmail().withMessage("Invalid email"),
  validationErr,
  authController.login
);

router.post(
  "/forgotPassword",
  body("email").isEmail().withMessage("Invalid email"),
  validationErr,
  authController.forgotPassword
);

router.post(
  "/resetPassword",
  body("password").custom((value) => {
    validator.isPassword(value);
    return true;
  }),
  validationErr,
  authController.resetPassword
);

router.post(
  "/registerChef",
  validator.isRegisterChef(),
  validationErr,
  authController.registerChef
);

router.post("/verifyToken", authController.verifyToken);

router.get("/getUsers", authController.getUsers);

router.delete("/dltUsers", authController.dltUsers);

router.get("/getChefs", authController.getChefs);

router.delete("/dltChefs", authController.dltChefs);

module.exports = router;
