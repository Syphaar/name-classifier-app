// This is the main app configuration file
import express from "express";
import cors from "cors";
import classifyRoutes from "./routes/classifyRoutes.js";

const app = express();

// Middleware to allow JSON data
app.use(express.json());

// Enable CORS so external systems can access your API
// This is mandatory for the grading bot!
app.use(cors({ origin: "*" }));

// Root route to prevent "Cannot GET /" and provide usage instructions
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Name Classifier API is live!",
    usage: "/api/classify?name=john"
  });
});

// All routes will start with /api
app.use("/api", classifyRoutes);

export default app;