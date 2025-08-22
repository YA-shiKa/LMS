const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const userController = {
  register: asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) throw new Error("User already exists");

    const user = await User.create({
      name,
      email,
      password,
    });

    res.status(201).json({ message: "User registered", user });
  }),

  login: asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) throw new Error("User not found");

    const isMatch = await user.matchPassword(password);
    if (!isMatch) throw new Error("Invalid credentials");

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "30d" });

    res.json({ message: "Login successful", token });
  }),
};

module.exports = userController;
