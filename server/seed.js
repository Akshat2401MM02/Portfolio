import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import Project from "./models/Project.js";
import Achievement from "./models/Achievement.js";
import mongoose from "mongoose";

dotenv.config();

const projects = [
  {
    title: "Internship Tracker",
    stack: ["MongoDB", "Express", "React.js", "Node.js", "JWT", "Gemini API"],
    description:
      "Full-stack MERN app to track internship applications and deadlines, with JWT auth, CRUD for applications, and an AI-powered resume-tailoring feature (Gemini API) with a chat interface and PDF export.",
    status: "Complete",
    link: "https://github.com/Akshat2401MM02/Internship-Tracker.git",
    image: "/projects/internship-tracker.png",
    order: 1,
  },
  {
    title: "LeetCode Tracker",
    stack: ["React.js", "JavaScript", "HTML", "CSS"],
    description:
      "Visualization dashboard using reusable React components to track coding progress and performance across problems solved.",
    status: "Complete",
    link: "https://github.com/Akshat2401MM02/LeetCode-Progress-Tracker",
    image: "/projects/leetcode-tracker.png",
    order: 2,
  },
  {
    title: "Heart Disease Detection",
    stack: ["Python", "Pandas", "NumPy", "Scikit-learn"],
    description:
      "Heart disease prediction model built with Scikit-learn, including feature engineering and model evaluation.",
    status: "Complete",
    link: "https://github.com/Akshat2401MM02/Heart-Disease-Detection",
    image: "/projects/heart-disease-detection.jpg",
    order: 3,
  },
  {
    title: "Online Examination Platform",
    stack: ["HTML", "CSS", "JavaScript"],
    description:
      "Browser-based examination system with automated score calculation and timer-based assessments.",
    status: "Complete",
    link: "https://github.com/Akshat2401MM02/exam-platform-",
    image: "/projects/online-exam-platform.jpg",
    order: 4,
  },
];

const achievements = [
  {
    text: "Google Summer of Code (GSoC) contributor at OpenStreetMap (OSM) — contributed to an open-source codebase on GitHub as part of the program.",
    category: "Open Source",
    order: 1,
  },
  { text: "Solved 100+ Data Structures and Algorithms problems on LeetCode.", category: "Competitive Programming", order: 2 },
  { text: "Active competitive programmer on Codeforces.", category: "Competitive Programming", order: 3 },
  { text: "Strong problem-solving experience across Arrays, Heaps, Trees, Graphs and Dynamic Programming.", category: "Competitive Programming", order: 4 },
  { text: "Maintaining a CGPA of 8.13/10 at IIT Patna.", category: "Academics", order: 5 },
  { text: "Participated in the Adobe Hackathon and Smart India Hackathon.", category: "Hackathons", order: 6 },
];

async function run() {
  await connectDB();
  await Project.deleteMany({});
  await Achievement.deleteMany({});
  await Project.insertMany(projects);
  await Achievement.insertMany(achievements);
  console.log(`Seeded ${projects.length} projects and ${achievements.length} achievements.`);
  await mongoose.disconnect();
  process.exit(0);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
