const router = require("express").Router();
const { loginUser, registerUser } = require("../controllers/authController");

router.post("/registration", registerUser);
router.post("/login", loginUser);

module.exports = router;
