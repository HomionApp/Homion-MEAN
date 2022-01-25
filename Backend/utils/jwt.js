const jwt = require("jsonwebtoken");

exports.generate = (email, expiresIn) => {
  const jwtToken = jwt.sign({ email: email }, "homionapp2", {
    expiresIn: expiresIn,
  });
  return jwtToken;
};

exports.verify = (jwtToken, ignoreExpiration) => {
  let decodedToken = jwt.verify(jwtToken, "homionapp2", {ignoreExpiration: ignoreExpiration} );
  if (decodedToken) {
    return decodedToken.email;
  }
  return undefined;
};
