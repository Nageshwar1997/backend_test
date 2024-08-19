const express = require("express");
const cors = require("cors");
// const cookieParser = require("cookie-parser"); // currently not installed
require("dotenv").config();
const databaseConnection = require("./config/db.config");
const router = require("./routes/index");

const server = express();
server.use(
  cors({
    origin:
      process.env.FRONTEND_URL ||
      "https://farminsta-technical-round-assessment-frontend.vercel.app",
    methods: ["GET", "POST", "PATCH", "DELETE"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
server.use(express.json());
// server.use(cookieParser()); // currently not installed

server.use("/api", router);

const PORT = process.env.PORT || 5000;

server.listen(PORT, async () => {
  try {
    await databaseConnection();
    console.log(`Server running on port ${PORT}`);
  } catch (error) {
    console.log(error.message || "Server is not running");
  }
});
