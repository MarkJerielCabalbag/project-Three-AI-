import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    user_email: {
      type: String,
      required: [true, "Please fill all fields"],
      unique: true,
    },
    user_username: {
      type: String,
      required: [true, "Please fill all fields"],
    },
    user_password: {
      type: String,
      required: [true, "Please fill all fields"],
    },
  },
  {
    timestamp: true,
  }
);

export default mongoose.model("User", userSchema);
