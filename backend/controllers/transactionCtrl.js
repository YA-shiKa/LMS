const asyncHandler = require("express-async-handler");
const Transaction = require("../models/Transaction");
const Course = require("../models/Course");

const transactionController = {
  create: asyncHandler(async (req, res) => {
    const { courseId, amount, status } = req.body;

    const course = await Course.findById(courseId);
    if (!course) throw new Error("Course not found");

    const transaction = await Transaction.create({
      user: req.user,
      course: courseId,
      amount,
      status,
    });

    res.status(201).json(transaction);
  }),

  getTransactions: asyncHandler(async (req, res) => {
    const transactions = await Transaction.find({ user: req.user }).populate("course");
    res.json(transactions);
  }),
};

module.exports = transactionController;
