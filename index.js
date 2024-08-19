require("dotenv").config();
const express = require("express");
const cors = require("cors");
const creatorRouter = require("./routes/creatorsRoutes");
const databaseConnection = require("./config/db");
const PORT = process.env.PORT || 5000;

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

// Routes
server.get("/", (req, res) => {
  return res.send("Welcome to Home Page");
});
server.use("/", creatorRouter);

server.listen(PORT, async () => {
  try {
    await databaseConnection();
    console.log(`Server is running on port ${PORT}`);
  } catch (error) {
    console.log(error.message || error);
  }
});
