import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    user_email: {
      type: String,
      uniqued: true,
    },
    user_username: {
      type: String,
      unique: false,
    },
    user_picture: {
      type: String,
    },
    user_auth_type: {
      type: String,
    },
  },
  {
    timestamp: true,
  }
);

export default mongoose.model("User", userSchema);
