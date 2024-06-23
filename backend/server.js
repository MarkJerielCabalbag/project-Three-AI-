import express from "express";
import connectDB from "./config/connectDB.js";
import teacherRoutes from "./routes/teacherRoutes.js";
const app = express();
connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/eduGemini/profAccount", teacherRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on: ${process.env.PORT || 7000}`);
});
