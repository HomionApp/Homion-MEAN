const jwt = require('../utils/jwt');

module.exports = async (req, res, next) => {
  const authHeaders = req.get("Authorization").split(" ");
  if (authHeaders[1]) {
    const jwtToken = authHeaders[1];
    const { id } = jwt.verify(jwtToken, false);
    req.id = id;
    next();
  } else {
    return res.json(new Response(401, "Invalid token"));
  }
};
