const User = require("../models/User");
const Chef = require("../models/Chef");
const Response = require("../models/Response");
const bcrypt = require("bcryptjs");
const mail = require("../utils/mail");
const jwt = require("../utils/jwt");

exports.registerUser = async (req, res) => {
  try {
    let user = req.body.user;
    user.password = await bcrypt.hash(user.password, 12);
    user = await new User(user).save();
    console.log(user);
    const jwtToken = jwt.generate({ id: user._id, email: user.email }, "1d");
    mail.setMailOptions(
      user.email,
      "Verification mail",
      `<a href='http://localhost:9999/auth/verify/${jwtToken}'>Verify</a>`
    );
    mail.sendMail();
    res.json(new Response(201, "User Created"));
  } catch (err) {
    console.log(err);
  }
};

exports.verify = async (req, res) => {
  const jwtToken = req.params.jwtToken;
  let email;
  try {
    email = jwt.verify(jwtToken, false).email;
    if (email) {
      await User.updateOne(
        { email: email },
        {
          status: "ACTIVE",
        }
      );
      res.status(200).send(`
      <h1>Verification Successfull!!!!</h1>
      <a href="http://localhost:4200/"><button>Login</button></a>
      `);
    }
  } catch (err) {
    if (err.name === "TokenExpiredError") {
      email = jwt.verify(jwtToken, true).email;
      return res.send(`
      <h1>Link Expired!!</h1>
      <a href='http://localhost:9999/auth/resend/${email}'><button>Send Again</button></a>
      `);
    }
    console.log(err);
  }
};

exports.resend = async (req, res) => {
  const email = req.params.email;
  const jwtToken = jwt.generate({ email: email }, "2h");
  mail.setMailOptions(
    email,
    "Verification mail",
    `<a href='http://localhost:9999/auth/verify/${jwtToken}'>Verify</a>`
  );
  mail.sendMail();
  res.send("<h1>Verification link sent successfully</h1>");
};

exports.login = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const type = req.body.type;
    if (type === "USER") {
      const user = await User.findOne({ email: email });
      if (user) {
        if (user.status === "ACTIVE") {
          const isMatched = await bcrypt.compare(password, user.password);
          if (isMatched) {
            const jwtToken = jwt.generate(
              { id: user._id, email: user.email },
              "1d"
            );
            res.json(new Response(200, "Login Successfully", jwtToken));
          } else {
            res.json(new Response(400, "Invalid password"));
          }
        } else {
          res.json(new Response(402, "User not activated"));
        }
      } else {
        res.json(new Response(404, "User not found"));
      }
    } else {
      const chef = await Chef.findOne({ email: email });
      if (chef) {
        if (chef.status === "ACTIVE") {
          if (chef.password === password) {
            const jwtToken = jwt.generate(
              { id: chef._id, email: chef.email },
              "1d"
            );
            res.json(new Response(200, "Login Successfully", jwtToken));
          } else {
            res.json(new Response(400, "Invalid password"));
          }
        } else {
          res.json(new Response(402, "Chef not activated"));
        }
      } else {
        res.json(new Response(404, "Chef not found"));
      }
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
      const jwtToken = jwt.generate({ email: email, type: type }, "1s");
      mail.setMailOptions(
        email,
        "Reset password",
        `<a href='http://localhost:4200/auth/reset-password/${jwtToken}'>Reset password</a>`
      );
      mail.sendMail();
      res.json(new Response(200, "Email sent successfully", jwtToken));
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

exports.registerChef = async (req, res) => {
  try{
    let chef = req.body.chef;
    chef.startTime = new Date();
    chef.endTime = new Date();
    console.log(chef.endTime);
    chef.password = await bcrypt.hash(chef.password, 12);
    chef = await new Chef(chef).save();
    const jwtToken = jwt.generate({id: chef._id, email: chef.email}, "1d");
    mail.setMailOptions(
      chef.email,
      "Verification mail",
      `<a href="https://localhost:9999/auth/verify/${jwtToken}">Verify</a>`
    );
    mail.sendMail();
    res.json(new Response(200, "Chef Created"));

  } catch(err){
    console.log(err);
  }
}

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
