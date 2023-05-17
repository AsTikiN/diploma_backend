import mongoose from "mongoose";

const User = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  rights: String,
});

export default mongoose.model("User", User);
