import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // This connection is established once when the server boots.
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

export default connectDB;
