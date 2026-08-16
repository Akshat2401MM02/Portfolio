import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    stack: [{ type: String }],
    description: { type: String, required: true },
    status: { type: String, default: "Complete" }, // e.g. "Complete", "In Progress"
    link: { type: String },
    image: { type: String },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default mongoose.model("Project", projectSchema);
