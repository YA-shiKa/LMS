const express = require("express");
const courseController = require("../controllers/courseCtrl");
const isAuthenticated = require("../middlewares/isAuth");
const courseRouter = express.Router();

courseRouter.post("/api/v1/courses", isAuthenticated, courseController.create);
courseRouter.get("/api/v1/courses", isAuthenticated, courseController.getAll);
courseRouter.post("/api/v1/courses/:courseId/enroll", isAuthenticated, courseController.enroll);

module.exports = courseRouter;
