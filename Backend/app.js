const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const authRoute = require('./routes/auth');

const app = express();

app.use(bodyParser.json());

app.use("/auth", authRoute);

mongoose
  .connect("mongodb+srv://root:root@cluster0.av2a6.mongodb.net/homion")
  .then((result) => {
    console.log("Connected!!!");
    app.listen(process.env.PORT || 9999);
  })
  .catch((err) => console.log(err));
