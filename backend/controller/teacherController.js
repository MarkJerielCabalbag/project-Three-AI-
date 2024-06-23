import Teacher from "../models/teacherModel.js";
import asyncHandler from "express-async-handler";

//@desc     register teacher account
//@route    /eduGemini/profAccount/register
//@access   public
const register = asyncHandler(async (req, res, next) => {
  const { teacher_username, teacher_email, teacher_password } = req.body;

  //validate req from client
  if (!teacher_username || !teacher_email || !teacher_password) {
    return res.status(400).json({ message: `All fields are required` });
  }

  //else if all those fields are filled out
  const newTeacher = await Teacher.create({
    teacher_email,
    teacher_username,
    teacher_password,
  });

  //if not created successfully
  if (!newTeacher) {
    return res.status(400).json({
      message: `Creating ${newTeacher.username} is not successfully created, Try again`,
    });
  }

  //else successfully created
  res.status(200).json({
    message: `${newTeacher.teacher_username} is successfully created! Enjoy eduGemini`,
  });
});

//@desc     register teacher account
//@route    /eduGemini/profAccount/login
//@access   private
const login = asyncHandler(async (req, res, next) => {});

export default {
  register,
};
