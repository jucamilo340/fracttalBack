import mongoose from "mongoose";
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mern-tasks";

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("MongoDB is connected");
  } catch (error) {
    console.error(error);
  }
};
