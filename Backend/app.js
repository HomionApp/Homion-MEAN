const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");

const authRoute = require("./routes/auth");
const chefRoute = require("./routes/chef");

const app = express();

app.use(bodyParser.json());
app.use(multer().single("file"));

app.use(cors());

app.use("/auth", authRoute);
app.use("/chef", chefRoute);

app.use((error, req, res, next) => {
  res.status(500).json("Internal Server Error");
});

mongoose
  .connect("mongodb+srv://root:root@cluster0.av2a6.mongodb.net/homion")
  .then((result) => {
    console.log("Connected!!!");
    app.listen(process.env.PORT || 9999);
  })
  .catch((err) => console.log(err));
