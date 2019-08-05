const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function(req, res, next) {

  console.log(2);
  console.log(req._parsedUrl.query);
  // console.log(req.headers);
  //get the token from the header if present
  const token = req.headers["x-access-token"] || req.headers["authorization"] || req._parsedUrl.query;
  //if no token found, return response (without going to the next middelware)
  if (!token) return res.status(401).send("Access denied. No token provided.");

  try {
    //if can verify the token, set req.user and pass to next middleware
    const decoded = jwt.verify(token, config.get("myprivatekey"));
    req.user = decoded;
    next();
  } catch (ex) {
    //if invalid token
    res.status(400).send("Invalid token.");
  }
};