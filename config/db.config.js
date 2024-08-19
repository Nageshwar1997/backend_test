const mongoose = require("mongoose");

const databaseConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Server connected to MongoDB");
  } catch (error) {
    console.log(error.message || error);
  }
};

module.exports = databaseConnection;
