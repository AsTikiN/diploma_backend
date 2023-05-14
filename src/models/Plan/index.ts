import mongoose from "mongoose";

const Plan = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  features: [String],
});

export default mongoose.model("Plan", Plan);
