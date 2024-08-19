const express = require("express");
const cors = require("cors");
// const cookieParser = require("cookie-parser"); // currently not installed
require("dotenv").config();
const databaseConnection = require("./config/db.config");
const router = require("./routes/index");
const CreatorModel = require("./models/Creator.model");
// const getAllCreatorsController = require("./controllers/getAllCreators.controller");

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

// server.use("/api", router);
server.get("/all-creators", async (req, res) => {
  try {
    const creators = await CreatorModel.find();
    res.status(200).json({
      message: "Creators fetched successfully",
      success: true,
      error: false,
      creators,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || "Something went wrong",
      success: false,
      error: true,
    });
  }
});


const PORT = process.env.PORT || 5000;

server.listen(PORT, async () => {
  try {
    await databaseConnection();
    console.log(`Server running on port ${PORT}`);
  } catch (error) {
    console.log(error.message || "Server is not running");
  }
});
