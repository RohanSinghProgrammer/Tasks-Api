const UserModel = require("../models/userModel");
const jwt = require('jsonwebtoken');

const registerUser = async (req, res) => {
  try {
    let { name, email, password } = req.body;
    let user = await UserModel.create({ name, email, password });
    res.status(201).send(user);
  } catch (e) {
    res.status(500).send(e.message);
  }
};

const loginUser = async (req, res) => {
  try {
    let { email, password } = req.body;
    let user = await UserModel.findOne({ email });
    if (!user) return res.status(404).send("User doesn't exists");
    if (user.password != password) {
      return res.status(403).send("Wrong credentials!");
    }
    let token = jwt.sign({data: JSON.stringify(user)},"SecretKey",{ expiresIn: '3d' })
    res.json({email: user.email, token: `Bearer ${token}`});
  } catch (e) {
    res.status(500).send(e.message);
  }
};

module.exports = { loginUser, registerUser };
