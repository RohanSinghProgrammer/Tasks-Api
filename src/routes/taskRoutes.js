const router = require("express").Router();
const {
  getAllTasks,
  getSingleTask,
  addTask,
  updateTask,
  deleteTask,
} = require("../controllers/taskController");
const auth = require("../middlewares/auth");

router.get("/", getAllTasks);
router.get("/:id", getSingleTask);
router.post("/", auth, addTask);
router.put("/:id", auth, updateTask);
router.delete("/:id", auth, deleteTask);

module.exports = router;
