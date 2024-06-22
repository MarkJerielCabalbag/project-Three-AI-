import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB is finnaly connected");
  } catch (error) {
    console.log(error);
    console.log("MongoDB connection error");
    process.exit(1);
  }
};

export default connectDB;
