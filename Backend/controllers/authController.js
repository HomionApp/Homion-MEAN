const bcrypt = require("bcryptjs");

const User = require("../models/User");
const Chef = require("../models/Chef");
const Response = require("../models/Response");
const mail = require("../utils/mail");
const jwt = require("../utils/jwt");

exports.registerUser = async (req, res) => {
  try {
    let user = req.body.user;
    user.password = await bcrypt.hash(user.password, 12);
    user = await new User(user).save();
    const jwtToken = jwt.generate(
      { id: user._id, email: user.email, type: "USER" },
      "3d"
    );
    mail.setMailOptions(
      user.email,
      "Verification mail",
      mail.registerMail(user.firstName, user.lastName, jwtToken)
    );
    mail.sendMail();
    res.json(new Response(201, "User Created"));
  } catch (err) {
    if (err.name === "MongoServerError") {
      res.json(new Response(401, "Email already exists"));
    }
    console.log(err); //implement error handling middleware***************************************************
  }
};

exports.registerChef = async (req, res) => {
  try {
    let chef = req.body.chef;
    chef.password = await bcrypt.hash(chef.password, 12);
    chef = await new Chef(chef).save();
    const jwtToken = jwt.generate(
      { id: chef._id, email: chef.email, type: "CHEF" },
      "3d"
    );
    mail.setMailOptions(
      chef.email,
      "Verification mail",
      mail.registerMail(chef.firstName, chef.lastName, jwtToken)
    );
    mail.sendMail();
    res.json(new Response(201, "Chef Created"));
  } catch (err) {
    if (err.name === "MongoServerError") {
      res.json(new Response(401, "Email already exists"));
    }
    console.log(err);
  }
};

exports.verifyEmail = async (req, res) => {
  const jwtToken = req.params.jwtToken;
  let email;
  try {
    const decodedToken = jwt.verify(jwtToken, false);
    email = decodedToken.email;
    if (email) {
      const type = decodedToken.type;
      if (type === "USER") {
        await User.updateOne({ email: email }, { status: "ACTIVE" });
      } else {
        await Chef.updateOne({ email: email }, { status: "ACTIVE" });
      }
      return res.send(mail.verificationHtmlPage(true));
    }
  } catch (err) {
    if (err.name === "TokenExpiredError") {
      email = jwt.verify(jwtToken, true).email;
      return res.send(mail.verificationHtmlPage(false, email));
    }
    console.log(err);
  }
};

exports.resend = async (req, res) => {
  try {
    const email = req.params.email;
    const jwtToken = jwt.generate({ email: email }, "2h");
    mail.setMailOptions(
      email,
      "Verification mail",
      `<a href='http://localhost:9999/auth/verify/${jwtToken}'>Verify</a>`
    );
    mail.sendMail();
    res.send("<h1>Verification link sent successfully</h1>");
  } catch (err) {
    console.log(err);
  }
};

exports.login = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const type = req.body.type;
    let obj;
    if (type === "USER") {
      obj = await User.findOne({ email: email });
    } else {
      obj = await Chef.findOne({ email: email });
    }
    if (obj) {
      if (obj.status === "ACTIVE") {
        const isMatched = await bcrypt.compare(password, obj.password);
        if (isMatched) {
          const jwtToken = jwt.generate(
            { id: obj._id, email: obj.email, type: type },
            "7d"
          );
          res.json(new Response(200, "Login Successfully", jwtToken));
        } else {
          res.json(new Response(400, "Invalid email or password"));
        }
      } else {
        res.json(
          new Response(
            402,
            (type === "USER" ? "User" : "Chef") + " is not verified"
          )
        );
      }
    } else {
      res.json(
        new Response(
          404,
          (type === "USER" ? "User" : "Chef") + " does not exist"
        )
      );
    }
  } catch (err) {
    console.log(err);
  }
};

exports.forgotPassword = async (req, res) => {
  try {
    const email = req.body.email;
    const type = req.body.type;
    let obj;

    if (type === "USER") {
      obj = await User.findOne({ email: email });
    } else {
      obj = await Chef.findOne({ email: email });
    }
    if (obj) {
      const jwtToken = jwt.generate({ email: email, type: type }, "2h");
      mail.setMailOptions(
        email,
        "Reset password",
        mail.resetPasswordMail(obj.firstName, obj.lastName, jwtToken)
      );
      mail.sendMail();
      res.json(
        new Response(200, "Password reset link sent successfully", jwtToken)
      );
    } else {
      res.json(new Response(404, "Email does not exist"));
    }
  } catch (err) {
    console.log(err);
  }
};

exports.resetPassword = async (req, res) => {
  try {
    let password = req.body.password;
    const authHeaders = req.get("Authorization").split(" ");
    if (authHeaders[1]) {
      const jwtToken = authHeaders[1];

      const { email, type } = jwt.verify(jwtToken, false);
      password = await bcrypt.hash(password, 12);
      if (type === "USER") {
        await User.updateOne({ email: email }, { password: password });
      } else {
        await Chef.updateOne({ email: email }, { password: password });
      }
      res.json(new Response(200, "Password updated"));
    } else {
      res.json(new Response(401, "Token does not exist"));
    }
  } catch (err) {
    if (err.name === "TokenExpiredError") {
      return res.json(new Response(500, "Token expired"));
    }
    console.log(err);
  }
};

exports.verifyToken = async (req, res) => {
  try {
    const authHeaders = req.get("Authorization").split(" ");
    if (authHeaders[1]) {
      const jwtToken = authHeaders[1];
      const { type } = jwt.verify(jwtToken, false);
      return res.json(new Response(200, "Token verified", type));
    }
  } catch (err) {
    if (err.name === "TokenExpiredError") {
      return res.json(new Response(500, "Token expired"));
    }
    console.log(err);
  }
};

/*************************************************************************************************************/

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (err) {
    console.log(err);
  }
};

exports.dltUsers = async (req, res) => {
  try {
    await User.deleteMany({});
    res.json("Deleted!!!");
  } catch (err) {
    console.log(err);
  }
};

exports.getChefs = async (req, res) => {
  try {
    const chefs = await Chef.find({});
    res.json(chefs);
  } catch (err) {
    console.log(err);
  }
};

exports.dltChefs = async (req, res) => {
  try {
    await Chef.deleteMany({});
    res.json("Deleted!!!");
  } catch (err) {
    console.log(err);
  }
};
