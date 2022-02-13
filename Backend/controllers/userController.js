const Address = require("../models/Address");
const Response = require("../models/Response");

exports.saveAddress = async (req, res, next) => {
  try {
    const address = req.body.address;
    const userId = req.id;
    // await new Address(address).save();
    res.json(new Response(201, "Address saved!!"));
  } catch (err) {
    console.log(err);
  }
};
