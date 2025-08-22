const express = require("express");
const transactionController = require("../controllers/transactionCtrl");
const isAuthenticated = require("../middlewares/isAuth");
const transactionRouter = express.Router();

// Create a new transaction (e.g., when a user purchases a course)
transactionRouter.post("/api/v1/transactions", isAuthenticated, transactionController.create);

// Get all transactions for a user (e.g., past purchases)
transactionRouter.get("/api/v1/transactions", isAuthenticated, transactionController.getTransactions);

module.exports = transactionRouter;
