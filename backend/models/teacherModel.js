import mongoose from "mongoose";

const teacherModel = mongoose.Schema(
  {
    teacher_email: {
      type: String,
      required: [true, "This field is required"],
      unique: true,
    },
    teacher_password: {
      type: String,
      required: [true, "This field is required"],
    },
    teacher_username: {
      type: String,
      required: [true, "This field is required"],
    },
  },
  {
    timestamp: true,
  }
);

export default mongoose.model("Teacher", teacherModel);
