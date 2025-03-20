import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const API_URL = process.env.API_URL;

const testCRUD = async () => {
  try {
    console.log("Creating a student...");
    const newStudent = { name: "John Doe", age: 20, grade: "A" };
    const createRes = await axios.post(API_URL, newStudent);
    console.log("Created Student:", createRes.data);

    try {
      await axios.post(API_URL, { name: "Jane Doe" });
    } catch (error) {
      console.error("Create Error:", error.response.data);
    }

    console.log("Fetching all students...");
    const readRes = await axios.get(API_URL);
    console.log("All Students:", readRes.data);

    const studentId = createRes.data.student.id;
    console.log("Updating student grade...");
    const updateRes = await axios.put(`${API_URL}/${studentId}`, {
      grade: "B",
    });
    console.log("Updated Student:", updateRes.data);

    try {
      await axios.put(`${API_URL}/9999`, { grade: "C" });
    } catch (error) {
      console.error("Update Error:", error.response.data);
    }

    console.log("Deleting student...");
    const deleteRes = await axios.delete(`${API_URL}/${studentId}`);
    console.log("Deleted Student:", deleteRes.data);

    try {
      await axios.delete(`${API_URL}/9999`);
    } catch (error) {
      console.error("Delete Error:", error.response.data);
    }
  } catch (error) {
    console.error("Unexpected Error:", error.message);
  }
};

testCRUD();
