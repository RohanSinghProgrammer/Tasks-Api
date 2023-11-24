const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  assignedTo: {
    type: String,
    required: true,
  },
  isCompleted: {
    type: Boolean,
    default: false
  },
},{timestamps: true});

const model = new mongoose.model("task", schema);

module.exports = model;
