import mongoose from "mongoose";

const Niche = new mongoose.Schema({
  name: String,
});

export default mongoose.model("Niche", Niche);
