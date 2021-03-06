const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const dotenv = require("dotenv");

const authRoute = require("./routes/auth");
const chefRoute = require("./routes/chef");
const userRoute = require("./routes/user");
const adminRoute = require("./routes/admin");

const app = express();

app.use(bodyParser.json());
app.use(multer().single("file"));

dotenv.config();
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
  secure: true,
});

app.use(cors());

app.use("/auth", authRoute);
app.use("/chef", chefRoute);
app.use("/user", userRoute);
app.use("/admin", adminRoute);

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json("Internal Server Error");
});

mongoose
  .connect("mongodb+srv://root:root@cluster0.av2a6.mongodb.net/homion")
  .then((result) => {
    console.log("Connected!!!");
    app.listen(process.env.PORT || 9999);
  })
  .catch((err) => console.log(err));
