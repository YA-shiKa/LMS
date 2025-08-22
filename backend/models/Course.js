const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
  instructor: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  price: { type: Number, required: true },
  isPaid: { type: Boolean, default: false },
  students: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }], // List of enrolled users
}, {
  timestamps: true,
});

module.exports = mongoose.model("Course", courseSchema);
