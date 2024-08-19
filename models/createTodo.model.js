const mongoose = require("mongoose");
const todoSchema = require("../schemas/todo.schema");

const TodoModel = mongoose.model("Creator", todoSchema);

module.exports = TodoModel;
