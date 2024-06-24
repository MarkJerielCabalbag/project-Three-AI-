import express from "express";
import connectDB from "./config/connectDB.js";
import userRoutes from "./routes/userRoutes.js";
import cors from "cors";
import bodyParser from "body-parser";
import requestRoutes from "./routes/requestRoutes.js";
import oauthRoutes from "./routes/oauthRoutes.js";
import authRoutes from "./routes/authGoogleMiddleware.js";
import authGoogleResponse from "./routes/authGoogleResponse.js";

const app = express();
connectDB();

app.options("*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Headers", [
    "X-Requested-With",
    "content-type",
    "credentials",
  ]);
  res.header("Access-Control-Allow-Methods", "GET,POST");
  res.status(200);
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/eduGemini/user", userRoutes);
app.use("/oauth", oauthRoutes);
app.use("/request", requestRoutes);
app.use("/htmlAuth", authRoutes);
app.use("/htmlResponse", authGoogleResponse);
app.listen(process.env.PORT, () => {
  console.log(`Server is running on: ${process.env.PORT || 7000}`);
});
