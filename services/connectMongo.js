import mongoose from "mongoose";

export async function connectDB() {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_CONNECTION_URI);
    if (conn) {
      console.log("Connected");
    }
    return conn;
  } catch (error) {
    console.log(error);
  }
}
