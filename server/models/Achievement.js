import mongoose from "mongoose";

const achievementSchema = new mongoose.Schema(
  {
    text: { type: String, required: true },
    category: { type: String, default: "General" },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default mongoose.model("Achievement", achievementSchema);
