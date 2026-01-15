import mongoose from "mongoose";
import env from "dotenv";

env.config();
const MONGO_URI = process.env.MONGO_URI || 1;
const connectDB = async () => {
  await mongoose.connect(MONGO_URI);
};
export default connectDB;
