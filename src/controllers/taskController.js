const TaskModel = require("../models/taskModel");
const UserModel = require("../models/userModel");
const { checkObjectKeysInArray } = require("../utils/checkObjectKeysInArray");

const getAllTasks = async (req, res) => {
  try {
    let tasks = await TaskModel.find();
    res.send(tasks);
  } catch (e) {
    res.status(500).send(`ERROR : ${e.message}`);
  }
};

const getSingleTask = async (req, res) => {
  try {
    const { id } = req.params;
    let task = await TaskModel.findById(id);
    res.send(task);
  } catch (e) {
    res.status(500).send(`ERROR : ${e.message}`);
  }
};

const addTask = async (req, res) => {
  try {
    const { title, description, assignedTo } = req.body;
    let user = await UserModel.findOne({ email: assignedTo });
    if (!user) return res.status(404).send("User not found!");
    let task = await TaskModel.create({ title, description, assignedTo });
    res.status(201).send(task);
  } catch (e) {
    res.status(500).send(`ERROR : ${e.message}`);
  }
};

const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    if (
      !checkObjectKeysInArray(req.body, [
        "title",
        "description",
        "assignedTo",
        "isCompleted",
      ])
    ) {
      return res.send("Field doesn't exists!");
    }
    let task = await TaskModel.findById(id);
    if (!task) return res.status(404).send("Task doesn't exists!");
    if (Object.keys(req.body).includes("assignedTo")) {
      let user = await UserModel.findOne({ email: req.body.assignedTo });
      if (!user) return res.status(404).send("User not found!");
    }
    task = await TaskModel.findByIdAndUpdate(id, req.body, { new: true });
    res.send(task);
  } catch (e) {
    res.status(500).send(`ERROR : ${e.message}`);
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    let task = await TaskModel.findById(id);
    if (!task) return res.status(404).send("Task doesn't exists!");
    task = await TaskModel.findByIdAndDelete(id);
    res.send(task);
  } catch (e) {
    res.status(500).send(`ERROR : ${e.message}`);
  }
};

module.exports = {
  getAllTasks,
  getSingleTask,
  addTask,
  updateTask,
  deleteTask,
};
