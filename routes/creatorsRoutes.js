const express = require("express");
const addCreatorController = require("../controllers/addCreatorController");
const getAllCreatorsController = require("../controllers/getAllCreatorsController");
const getSingleCreatorController = require("../controllers/getSingleCreatorController");
const searchCreatorController = require("../controllers/searchCreatorsController");
const updateCreatorController = require("../controllers/updateCreatorController");

const creatorRouter = express.Router();

creatorRouter.post("/add_creator", addCreatorController);

creatorRouter.get("/creators", getAllCreatorsController);

creatorRouter.get("/creator/:id", getSingleCreatorController);

creatorRouter.get("/search", searchCreatorController);

creatorRouter.patch("/update_creator/:id", updateCreatorController);

module.exports = creatorRouter;
