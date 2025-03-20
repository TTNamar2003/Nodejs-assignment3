const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const studentRoutes = require("./routes/studentRoutes");

const app = express();
app.use(express.json());
app.use("/api", studentRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

app.listen(process.env.PORT_SERVER || 5000, () =>
  console.log(`Server running on port ${PORT}`)
);
