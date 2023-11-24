const router = require("express").Router();
const {
  getAllTasks,
  getSingleTask,
  addTask,
  updateTask,
  deleteTask,
} = require("../controllers/taskController");

router.get("/", getAllTasks);
router.get("/:id", getSingleTask);
router.post("/", addTask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);

module.exports = router;
