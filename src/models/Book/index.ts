import mongoose from "mongoose";

const Book = new mongoose.Schema({
  name: String,
  words: Number,
  voiceTone: String,
  niche: String,
  chapters: [
    {
      title: String,
      content: String,
    },
  ],
});

export default mongoose.model("Book", Book);
