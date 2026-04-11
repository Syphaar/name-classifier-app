// This file defines the route (endpoint)
import express from "express";
import { classifyName } from "../controllers/classifyController.js";
import validateQuery from "../middleware/validateQuery.js";

const router = express.Router();

// GET /api/classify?name=John
// First validate then run controller
router.get("/classify", validateQuery, classifyName);

export default router;