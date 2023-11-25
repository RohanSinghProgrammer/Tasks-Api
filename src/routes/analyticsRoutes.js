const router = require("express").Router();
const { getAnalytics } = require("../controllers/analyticsControllers");
const auth = require("../middlewares/auth");

router.get("/", auth, getAnalytics);

module.exports = router;
