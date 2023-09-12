import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  title: { type: String, trim: true, required: true, maxLength: 50 },
  description: { type: String, trim: true, required: true, maxLength: 5000 },
  createdAt: { type: Date, default: Date.now },
  hashtags: [{ type: String, trim: true, maxLength: 100 }],
  meta: {
    views: { type: Number, default: 0 },
    rating: { type: Number, default: 0 },
  },
});

// it should be front of creating model ```mongoose.model()```
videoSchema.pre("save", async function () {
  this.hashtags = this.hashtags[0].split(",").map((word) => {
    word.startsWith("#") ? word.trim() : "#" + word.trim();
  });
});

const Video = mongoose.model("Video", videoSchema);

export default Video;
