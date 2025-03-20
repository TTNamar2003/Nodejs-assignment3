import express from "express";
import studentController from "../controllers/studentController.js";
const router = express.Router();

router.post("/students", studentController.createStudent);
router.get("/students", studentController.getStudents);
router.put("/students/:id", studentController.updateGrade);
router.delete("/students/:id", studentController.deleteStudent);

export default router;
