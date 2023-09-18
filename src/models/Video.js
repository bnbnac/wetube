import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  title: { type: String, trim: true, required: true, maxLength: 50 },
  description: { type: String, trim: true, required: true, maxLength: 5000 },
  fileUrl: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  hashtags: [{ type: String, trim: true, maxLength: 100 }],
  meta: {
    views: { type: Number, default: 0 },
    rating: { type: Number, default: 0 },
  },
});

videoSchema.static("formatHashtags", function (hashtags) {
  return hashtags
    .split(/\#|,/)
    .filter((word) => word.trim().length > 0)
    .map((word) => "#" + word.trim());
});

const Video = mongoose.model("Video", videoSchema);

export default Video;
