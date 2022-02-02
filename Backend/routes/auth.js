const express = require("express");
const { body, param } = require("express-validator");
const http = require("https");

const validator = require("../utils/validation");
const validationErr = require("../middleware/validationErr");
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

router.get("/location", (req, res) => {
  my_lat = 23.035762375950828;
  my_long = 72.45184701469832;

  meters = 1500;
  coef = meters * 0.0000089;

  x1 = my_lat + coef;
  y1 = my_long + coef / Math.cos(my_lat * 0.018);

  x2 = my_lat - coef;
  y2 = my_long + coef / Math.cos(my_lat * 0.018);

  x3 = my_lat + coef;
  y3 = my_long - coef / Math.cos(my_lat * 0.018);

  x4 = my_lat - coef;
  y4 = my_long - coef / Math.cos(my_lat * 0.018);

  min_x = Math.min(x1, x2, x3, x4);
  max_x = Math.max(x1, x2, x3, x4);
  min_y = Math.min(y1, y2, y3, y4);
  max_y = Math.max(y1, y2, y3, y4);

  console.log(
    min_lat < new_lat &&
      new_lat < max_lat &&
      min_long < new_long &&
      new_long < max_long
  );
});

router.post("/verifyToken", authController.verifyToken);

router.get("/getUsers", authController.getUsers);

router.delete("/dltUsers", authController.dltUsers);

router.get("/getChefs", authController.getChefs);

router.delete("/dltChefs", authController.dltChefs);

module.exports = router;
