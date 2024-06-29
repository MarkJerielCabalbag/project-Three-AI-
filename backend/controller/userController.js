import expressAsyncHandler from "express-async-handler";
import mongoose from "mongoose";
import User from "../models/userModel.js";
import { OAuth2Client } from "google-auth-library";

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
    user_auth_type: "notFromGoogle",
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

// //@desc   register account using google
// //@route  /educGemini/user/registerGoogle
// //@access private
// const registerGoogle = expressAsyncHandler(async (req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "http://localhost:5173");
//   res.header("Access-Control-Allow-Credentials", "true");
//   res.header("Referrer-Policy", "no-referrer-when-downgrade");
//   const redirectURL = "http://127.0.0.1:8000/oauth";

//   const oAuth2Client = new OAuth2Client(
//     process.env.CLIENT_ID,
//     process.env.CLIENT_SECRET,
//     redirectURL
//   );

//   // Generate the url that will be used for the consent dialog.
//   const authorizeUrl = oAuth2Client.generateAuthUrl({
//     access_type: "offline",
//     scope: "https://www.googleapis.com/auth/userinfo.profile  openid ",
//     prompt: "consent",
//   });

//   res.json({ url: authorizeUrl });
// });

export default {
  register,
  // registerGoogle
};
