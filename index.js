import express from "express";
import dotenv from "dotenv";
import studentRoutes from "./routes/studentRoutes.js";
dotenv.config();

const app = express();
app.use(express.json());
app.use("/api", studentRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

app.listen(process.env.PORT_SERVER, () =>
  console.log(`Server running on port ${process.env.PORT_SERVER}`)
);
