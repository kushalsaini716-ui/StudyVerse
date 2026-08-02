import express from "express";
import upload from "../middleware/upload.js";
import { uploadNote } from "../controllers/noteController.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Notes API Working ");
});

router.post(
  "/upload",
  upload.single("pdf"),
  uploadNote
);

export default router;