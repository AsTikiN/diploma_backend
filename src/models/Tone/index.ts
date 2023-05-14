import mongoose from "mongoose";

const Tone = new mongoose.Schema({
  name: String,
});

export default mongoose.model("Tone", Tone);
