const express = require("express");
const userController = require("../controllers/userCtrl");
const userRouter = express.Router();

userRouter.post("/api/v1/users/register", userController.register);
userRouter.post("/api/v1/users/login", userController.login);

module.exports = userRouter;
