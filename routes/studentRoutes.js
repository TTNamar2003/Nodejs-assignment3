const express = require("express");

const router = express.Router();
const studentController = require("../controllers/studentController");

router.post("/students", studentController.createStudent);
router.get("/students", studentController.getStudents);
router.put("/students/:id", studentController.updateGrade);
router.delete("/students/:id", studentController.deleteStudent);

module.exports = router;