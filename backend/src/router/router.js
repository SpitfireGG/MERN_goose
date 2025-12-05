import express from "express";
import {
  deleteNotes,
  createNotes,
  getNotes,
  updateNotes,
} from "../controller/controller.js";

const router = express.Router();

router.get("/", getNotes);
router.post("/", createNotes);
router.delete("/:id", deleteNotes);
router.put("/:id", updateNotes);

export default router;
