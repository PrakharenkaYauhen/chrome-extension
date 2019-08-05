const jwt = require("jsonwebtoken");
const config = require("config");
const bcrypt = require("bcrypt");
const { User } = require("../models/user-model");

module.exports = function (req, res, next) {

  console.log(req.query)
  let name = req.query.name;
  let password = req.query.password;
  console.log(name);
  console.log(password);
  const user = User.findOne({ 'name': name }, (a, user) => {
    console.log(user);
    let compare = bcrypt.compare(password, user.password, function (err, resp) {
      if (err) {
        console.log(1);
        console.log(err);
      } else {
        console.log(2);
        console.log(resp);
        console.log(3);
        if(!resp) return res.status(400).send('wronge password or name');
        // if(!res) throw new Error('wronge password or name');
      }
      // res == true
      // console.log(err);
      // console.log(res);
    });
  });
  // console.log(compare);

  // if (!user) return res.status(401).send("Access denied. No token provided.");

  try {
    next();
  } catch (ex) {
    // console.log(ex);
    // res.status(400).send("Invalid name or password.");
    res.send(ex);
  }
};

// module.exports = function(req, res, next) {

//   console.log(req.query)

//   //get the token from the header if present
//   const token = req.headers["x-access-token"] || req.headers["authorization"] || req.query.token;
//   //if no token found, return response (without going to the next middelware)
//   if (!token) return res.status(401).send("Access denied. No token provided.");

//   try {
//     //if can verify the token, set req.user and pass to next middleware
//     const decoded = jwt.verify(token, config.get("myprivatekey"));
//     req.user = decoded;
//     // console.log(decoded);
//     next();
//   } catch (ex) {
//     //if invalid token
//     res.status(400).send("Invalid token.");
//   }
// };