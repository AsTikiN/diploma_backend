import mongoose from "mongoose";

const User = new mongoose.Schema({
  plan: Number,
});

export default mongoose.model("User", User);
