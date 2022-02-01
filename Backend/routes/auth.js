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

router.get("/pincode", (request, response) => {
  

  const options = {
    method: "POST",
    hostname: "india-pincode-with-latitude-and-longitude.p.rapidapi.com",
    port: null,
    path: "/api/v1/pincode/380058/nearby",
    headers: {
      "x-rapidapi-host":
        "india-pincode-with-latitude-and-longitude.p.rapidapi.com",
      "x-rapidapi-key": "42546e16demshf8e591b405eb7f7p125422jsn8681aeee1968",
      useQueryString: true,
    },
  };

  const req = http.request(options, function (res) {
    const chunks = [];

    res.on("data", function (chunk) {
      chunks.push(chunk);
    });

    res.on("end", function () {
      const body = Buffer.concat(chunks);
      console.log(body.toString());
    });
  });

  req.end();
});

router.post("/verifyToken", authController.verifyToken);

router.get("/getUsers", authController.getUsers);

router.delete("/dltUsers", authController.dltUsers);

router.get("/getChefs", authController.getChefs);

router.delete("/dltChefs", authController.dltChefs);

module.exports = router;
