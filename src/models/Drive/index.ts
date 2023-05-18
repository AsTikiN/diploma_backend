import mongoose from "mongoose";

const Drive = new mongoose.Schema({
  price: Number,
  date: Date,
  distance: String,
  driverId: String || null,
  userId: String,
  path: String,
});

export default mongoose.model("Drive", Drive);
