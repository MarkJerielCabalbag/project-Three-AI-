import express from "express";
import teacherController from "../controller/teacherController.js";

const teacherRoutes = express.Router();

//register account
teacherRoutes.post("/register", teacherController.register);

export default teacherRoutes;
