const jwt = require("jsonwebtoken");

exports.generate = (fields, expiresIn) => {
  const jwtToken = jwt.sign(fields, "homionapp2", {
    expiresIn: expiresIn,
  });
  return jwtToken;
};

exports.verify = (jwtToken, ignoreExpiration) => {
  let decodedToken = jwt.verify(jwtToken, "homionapp2", {
    ignoreExpiration: ignoreExpiration,
  });
  return decodedToken;
};
