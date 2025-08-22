const asyncHandler = require("express-async-handler");
const Course = require("../models/Course");
const Category = require("../models/Category");

const courseController = {
  create: asyncHandler(async (req, res) => {
    const { title, description, categoryId, price, isPaid } = req.body;
    
    const category = await Category.findById(categoryId);
    if (!category) throw new Error("Category not found");

    const course = await Course.create({
      title,
      description,
      category: categoryId,
      instructor: req.user,
      price,
      isPaid,
    });

    res.status(201).json(course);
  }),

  getAll: asyncHandler(async (req, res) => {
    const courses = await Course.find({ instructor: req.user }).populate("category");
    res.json(courses);
  }),

  enroll: asyncHandler(async (req, res) => {
    const course = await Course.findById(req.params.courseId);
    if (!course) throw new Error("Course not found");

    if (course.students.includes(req.user)) {
      throw new Error("You are already enrolled in this course");
    }

    course.students.push(req.user);
    await course.save();

    res.json({ message: "Enrolled in course" });
  }),
};

module.exports = courseController;
