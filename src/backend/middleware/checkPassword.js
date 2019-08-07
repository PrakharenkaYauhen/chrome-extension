const config = require('config');
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");
const { User } = require("../models/user-model");

module.exports = function (req, res, next) {

  let token = req.query.token;
  let name = req.query.name;
  let password = req.query.password;

  try {
    User.findOne({ 'name': name }, (err, user) => {
      if (user === null) return res.status(400).send('wrong name');
      // console.log(user);
      bcrypt.compare(password, user.password, function (error, resp) {
        if (error) {
          console.log(error);
        } else {
          if (!resp) return res.status(400).send('wrong password');
          if (token === 'null') {
            const newToken = jwt.sign(
              { _id: user._id, isAdmin: user.isAdmin },
              config.get('myprivatekey'),
              { expiresIn: '10000' });
              console.log(newToken);
            return res.send(newToken);
          } else {
            next();
          }
        }
      });
    });
  } catch (ex) {
    res.send(ex);
  }
};