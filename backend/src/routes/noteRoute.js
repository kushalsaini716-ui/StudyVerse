import express from "express";
import upload from "../middleware/upload.js";

import {
  uploadNote,
  getAllNotes,
} from "../Controllers/notecontroller.js";

const router = express.Router();

router.get("/", getAllNotes);

router.post(
  "/upload",
  upload.single("pdf"),
  uploadNote
);

export default router;