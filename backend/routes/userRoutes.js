import express from "express";
import userController from "../controller/userController.js";

const userRoutes = express.Router();

//create user account
userRoutes.post("/register", userController.register);

export default userRoutes;
