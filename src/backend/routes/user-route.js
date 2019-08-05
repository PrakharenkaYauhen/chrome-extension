const checkPassword = require("../middleware/checkPassword");
const auth = require("../middleware/auth");
const bcrypt = require("bcrypt");
const { User, validate } = require("../models/user-model");
const express = require("express");
const router = express.Router();

router.get("/current", checkPassword, auth, async (req, res) => {
  // console.log(req);
  const user = await User.findById(req.user._id).select("-password");
  console.log(user);
  res.send(user);
});

router.post("/", async (req, res) => {
  // validate the request body first
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //find an existing user
  let user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send("User already registered.");

  user = new User({
    name: req.body.name,
    password: req.body.password,
    email: req.body.email
  });
  user.password = await bcrypt.hash(user.password, 10);
  await user.save();

  const token = user.generateAuthToken();
  res.header("x-auth-token", token).send({
    token: token,
    _id: user._id,
    name: user.name,
    email: user.email
  });
});

module.exports = router;