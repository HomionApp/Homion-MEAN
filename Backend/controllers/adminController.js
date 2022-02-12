const Area = require("../models/Area");
const Response = require("../models/Response");

exports.addArea = async (req, res) => {
  try {
    await new Area(req.body.area).save();
    res.json(new Response(201, "Area added"));
  } catch (err) {
    console.log(err);
  }
};

exports.getAreas = async (req, res) => {
  try {
    const areas = await Area.find();
    res.json(new Response(200, "", areas));
  } catch (err) {
    console.log(err);
  }
};
