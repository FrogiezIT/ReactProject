import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Backend startup workflow:
// 1. Connect to MongoDB.
// 2. Enable JSON parsing and CORS.
// 3. Mount auth routes under /api/auth.
// 4. Start the server.
await connectDB();

app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => {
  res.send("API is running");
});

app.use("/api/auth", authRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
