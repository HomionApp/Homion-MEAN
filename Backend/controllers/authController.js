const User = require("../models/User");
const bcrypt = require("bcryptjs");
const mail = require("../utils/mail");
const jwt = require("../utils/jwt");

exports.registerUser = async (req, res) => {
  try {
    const user = req.body.user;
    user.password = await bcrypt.hash(user.password, 12);
    await new User(user).save();
    const jwtToken = jwt.generate(user.email, "1d");
    mail.setMailOptions(
      user.email,
      "Verification mail",
      `<a href='http://localhost:9999/auth/verify/${jwtToken}'>Verify</a>`
    );
    mail.sendMail();
    res.status(201).json("User added!!!");
  } catch (err) {
    console.log(err);
  }
};

exports.verify = async (req, res) => {
  const jwtToken = req.params.jwtToken;
  let email;
  try {
    email = jwt.verify(jwtToken, false);
    if (email) {
      await User.updateOne(
        { email: email },
        {
          status: "ACTIVE",
        }
      );
      res.status(200).send("<h1>Verification Successfull!!!!</h1>");
    }
  } catch (err) {
    if (err.name === "TokenExpiredError") {
      email = jwt.verify(jwtToken, true);
      res.send(`
      <h1>Link Expired!!</h1>
      <a href='http://localhost:9999/auth/resend/${email}'><button>Send Again</button></a>
      `);
    } else {
      console.log(err);
    }
  }
};

exports.resend = async (req, res) => {
  const email = req.params.email;
  const jwtToken = jwt.generate(email, "2h");
  mail.setMailOptions(
    email,
    "Verification mail",
    `<a href='http://localhost:9999/auth/verify/${jwtToken}'>Verify</a>`
  );
  mail.sendMail();
  res.send("<h1>Verification link sent successfully</h1>");
};

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (err) {
    console.log(err);
  }
};
