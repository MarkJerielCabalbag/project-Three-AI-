import express from "express";
import { OAuth2Client } from "google-auth-library";
import User from "../models/userModel.js";
const oauthRoutes = express.Router();
import { jwtDecode } from "jwt-decode";
async function getUserData(access_token) {
  const response = await fetch(
    `https://www.googleapis.com/oauth2/v3/userinfo?access_token=${access_token}`
  );
  const data = await response.json();
  console.log("data", data);
}

/* GET home page. */
oauthRoutes.get("/", async function (req, res, next) {
  const code = req.query.code;

  try {
    const redirectURL = "http://127.0.0.1:8000/oauth";
    const oAuth2Client = new OAuth2Client(
      process.env.CLIENT_ID,
      process.env.CLIENT_SECRET,
      redirectURL
    );
    const r = await oAuth2Client.getToken(code);
    oAuth2Client.setCredentials(r.tokens);
    console.info("Tokens acquired.");
    const user = oAuth2Client.credentials;
    const decodedUser = jwtDecode(user.id_token);
    console.log(decodedUser);
    const user_username = decodedUser.name;
    const user_picture = decodedUser.picture;
    console.log(user_username, user_picture);
    //check if that account has a duplication in User collection

    // const findUserDuplication = await User.findOne({
    //   user_username: user_username,
    //   user_picture: user_picture,
    // });

    // if (findUserDuplication) {
    //   res.status(200).json({ message: "Account duplication" });
    // }
    const newUser = await User.create({
      user_username: user_username,
      user_picture: user_picture,
      user_auth_type: "fromGoogle",
    });

    newUser
      .save()
      .then((doc) => console.log(doc))
      .catch((err) => console.log("Error occured: ", err));
    //else lets create that data to User users collection
    //after getting those credentials via 0auth

    console.log("credentials", user);
    await getUserData(oAuth2Client.credentials.access_token);
  } catch (err) {
    console.log("Error logging in with OAuth2 user", err);
  }

  res.redirect(303, "http://localhost:5173");
});

export default oauthRoutes;
