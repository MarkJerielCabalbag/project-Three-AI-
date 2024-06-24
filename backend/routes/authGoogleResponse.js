import express from "express";
const authGoogleResponse = express.Router();
import { OAuth2Client } from "google-auth-library";

import path from "path";

authGoogleResponse.get("/", (req, res) => {
  res.render("htmlAuth");
});

export default authGoogleResponse;
