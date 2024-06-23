import expressAsyncHandler from "express-async-handler";
import mongoose from "mongoose";
import User from "../models/userModel.js";

//@desc     user register account
//@route    eduGemini/user/register
//@access   public
const register = expressAsyncHandler(async (req, res, next) => {
  //deconstruct all the user rquest body from client uo
  const { user_username, user_email, user_password } = req.body;

  //next lets validate the request to make sure that all fields are filled out
  if (!user_email || !user_username || !user_password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  //find account duplication based on the user_email
  const userDuplicate = await User.findOne({ user_email });

  if (userDuplicate) {
    return res
      .status(400)
      .json({ message: `${userDuplicate.user_email} has already in used` });
  }

  //if no duplicate then lets create that account
  const newUser = await User.create({
    user_email,
    user_username,
    user_password,
  });

  //if error creation
  if (!newUser) {
    return res
      .status(400)
      .json({ message: "There's seems to be a problem creating your account" });
  }

  //if no error lets create the account
  res
    .status(200)
    .json({ message: `User ${newUser.user_username} is successfully created` });
});

export default { register };
