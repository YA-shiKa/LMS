const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  course: { type: mongoose.Schema.Types.ObjectId, ref: "Course", required: true },
  amount: { type: Number, required: true },
  status: { type: String, required: true }, // "pending", "completed"
  date: { type: Date, default: Date.now },
}, {
  timestamps: true,
});

module.exports = mongoose.model("Transaction", transactionSchema);
