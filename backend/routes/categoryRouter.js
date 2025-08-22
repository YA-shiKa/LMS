const express = require("express");
const categoryController = require("../controllers/categoryCtrl");
const isAuthenticated = require("../middlewares/isAuth");
const categoryRouter = express.Router();

categoryRouter.post("/api/v1/categories", isAuthenticated, categoryController.create);
categoryRouter.get("/api/v1/categories", isAuthenticated, categoryController.getAll);

module.exports = categoryRouter;
