import pool from "../config/db";

const addStudent = async (name, age, grade) => {
  try {
    if (!name || !age || !grade)
      throw new Error("All fields (name, age, grade) are required.");
    const result = await pool.query(
      "INSERT INTO students (name, age, grade) VALUES ($1, $2, $3) RETURNING *",
      [name, age, grade]
    );
    return result.rows[0];
  } catch (error) {
    throw new Error(`Database Error: ${error.message}`);
  }
};

const getAllStudents = async () => {
  try {
    const result = await pool.query("SELECT * FROM students");
    return result.rows;
  } catch (error) {
    throw new Error(`Database Error: ${error.message}`);
  }
};

const updateStudentGrade = async (id, newGrade) => {
  try {
    if (!id || !newGrade) throw new Error("ID and newGrade are required.");

    const result = await pool.query(
      "UPDATE students SET grade = $1 WHERE id = $2 RETURNING *",
      [newGrade, id]
    );

    if (result.rows.length === 0) throw new Error("Student not found.");

    return result.rows[0];
  } catch (error) {
    throw new Error(`Database Error: ${error.message}`);
  }
};

const deleteStudent = async (id) => {
  try {
    if (!id) throw new Error("Student ID is required.");

    const result = await pool.query(
      "DELETE FROM students WHERE id = $1 RETURNING *",
      [id]
    );

    if (result.rows.length === 0) throw new Error("Student not found.");

    return result.rows[0];
  } catch (error) {
    throw new Error(`Database Error: ${error.message}`);
  }
};

export { addStudent, getAllStudents, updateStudentGrade, deleteStudent };
