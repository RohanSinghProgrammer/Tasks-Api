const UserModel = require("../models/userModel");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
  try {
    let { name, email, password } = req.body;
    let user = await UserModel.create({ name, email, password });
    res.status(201).json({ message: "User registered successfully", user });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

const loginUser = async (req, res) => {
  try {
    let { email, password } = req.body;
    let user = await UserModel.findOne({ email });
    if (!user) return res.status(404).json({ message: "User doesn't exists" });
    if (user.password != password) {
      return res.status(403).json({ message: "Wrong credentials!" });
    }
    let token = jwt.sign(
      { data: JSON.stringify(user) },
      process.env.JWT_SECRET,
      { expiresIn: "3d" }
    );
    res.status(200).json({ message: "Login successful", token: `Bearer ${token}` });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

module.exports = { loginUser, registerUser };
