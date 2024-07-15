import express from "express";
import {
  getGeoInfo,
  getHistory,
  deleteHistories,
} from "../controllers/geoController.js";

const router = express.Router();

router.post("/", getGeoInfo);
router.get("/history", getHistory);
router.delete("/history", deleteHistories);

export default router;
