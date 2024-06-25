import express from "express";
import { OAuth2Client } from "google-auth-library";

const requestRoutes = express.Router();

/* POST to get authorization URL. */
requestRoutes.post("/", async function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Referrer-Policy", "no-referrer-when-downgrade");
  const redirectURL = "http://127.0.0.1:8000/oauth";

  const oAuth2Client = new OAuth2Client(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    redirectURL
  );

  const SCOPE = [
    "https://www.googleapis.com/auth/userinfo.profile",
    "https://www.googleapis.com/auth/userinfo.email",
  ];

  // Generate the url that will be used for the consent dialog.
  const authorizeUrl = oAuth2Client.generateAuthUrl({
    access_type: "offline",
    scope: SCOPE,
    prompt: "consent",
  });

  res.json({ url: authorizeUrl });
});

export default requestRoutes;
