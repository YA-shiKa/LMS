const asyncHandler = require("express-async-handler");
const Category = require("../models/Category");

const categoryController = {
  create: asyncHandler(async (req, res) => {
    const { name } = req.body;
    
    const categoryExists = await Category.findOne({ name, user: req.user });
    if (categoryExists) throw new Error("Category already exists");

    const category = await Category.create({
      name,
      user: req.user,
    });

    res.status(201).json(category);
  }),

  getAll: asyncHandler(async (req, res) => {
    const categories = await Category.find({ user: req.user });
    res.json(categories);
  }),
};

module.exports = categoryController;
