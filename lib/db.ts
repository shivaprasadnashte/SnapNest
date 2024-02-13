import mongoose, { Connection } from "mongoose";

export async function connectToMongoDB() {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI as string);

    console.log("New mongodb connection established");
  } catch (error) {
    console.log(error);

    throw error;
  }
}
