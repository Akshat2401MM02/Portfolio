import express from "express";
import Achievement from "../models/Achievement.js";

const router = express.Router();

// GET /api/achievements
router.get("/", async (req, res) => {
  try {
    const achievements = await Achievement.find().sort({ order: 1 });
    res.json(achievements);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch achievements" });
  }
});

export default router;
