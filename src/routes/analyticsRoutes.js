const router = require("express").Router();
const { getAnalytics } = require("../controllers/analyticsControllers");

router.get("/", getAnalytics);

module.exports = router;
