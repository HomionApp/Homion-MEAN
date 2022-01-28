const { body } = require("express-validator");

const isPassword = (exports.isPassword = (value) => {
  if (value.length < 8) {
    throw new Error("Your password must contain at least 8 characters.");
  }
  if (value.search(/[A-Z]/) < 0) {
    throw new Error("Your password must contain at least one capital letter.");
  }
  if (value.search(/[0-9]/) < 0) {
    throw new Error("Your password must contain at least one digit.");
  }
  if (value.search(/[!@#$%^&*]/) < 0) {
    throw new Error(
      "Your password must contain at least one special character."
    );
  }
});

const isPanNumber = exports.isPanNumber = (value) => {
  const regpan = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;

  if(!regpan.test(value)){
    throw new Error("Invalid Pan Number");
  }
}

exports.isRegisterUser = () => {
  return [
    body("user.userName").notEmpty().withMessage("Invalid userName"),
    body("user.firstName").notEmpty().withMessage("Invalid firstName"),
    body("user.lastName").notEmpty().withMessage("Invalid lastName"),
    body("user.mobile")
      .isNumeric().isLength({ min: 10, max: 10 })
      .withMessage("Invalid mobile number"),
    body("user.email").isEmail().withMessage("Invalid email"),
    body("user.password").custom((value) => {
      isPassword(value);
      return true;
    }),
  ];
};

exports.isRegisterChef = () => {
  return [
    body("chef.userName").notEmpty().withMessage("Invalid chefName"),
    body("chef.firstName").notEmpty().withMessage("Invalid firstName"),
    body("chef.lastName").notEmpty().withMessage("Invalid lastName"),
    body("chef.mobile")
      .isLength({ min: 10, max: 10 })
      .withMessage("Invalid mobile number"),
    body("chef.email").isEmail().withMessage("Invalid email"),
    body("chef.password").custom((value) => {
      isPassword(value);
      return true;
    }),
    body("chef.panNumber").custom((value) => {
      isPanNumber(value);
      return true;
    }),
  ];
};
