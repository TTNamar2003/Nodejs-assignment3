const studentModel = require("../models/studentModel");

const createStudent = async (req, res) => {
  try {
    const { name, age, grade } = req.body;
    const student = await studentModel.addStudent(name, age, grade);
    res.status(201).json({ message: "Student added successfully", student });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getStudents = async (req, res) => {
  try {
    const students = await studentModel.getAllStudents();
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateGrade = async (req, res) => {
  try {
    const { id } = req.params;
    const { grade } = req.body;

    if (!id || !grade) {
      return res
        .status(400)
        .json({ error: "Student ID and grade are required." });
    }

    const updatedStudent = await studentModel.updateStudentGrade(id, grade);
    res
      .status(200)
      .json({ message: "Grade updated successfully", student: updatedStudent });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ error: "Student ID is required." });
    }

    const deletedStudent = await studentModel.deleteStudent(id);
    res.status(200).json({
      message: "Student deleted successfully",
      student: deletedStudent,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { createStudent, getStudents, updateGrade, deleteStudent };
