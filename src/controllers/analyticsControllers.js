const moment = require("moment");
const TaskModel = require("../models/taskModel");

const getAnalytics = async (req, res) => {
  try {
    const { days = 7 } = req.query;
    const lastSevenDays = moment().subtract(days, "days").toDate();
    const result = await TaskModel.aggregate([
      {
        $match: {
          createdAt: { $gte: lastSevenDays },
          isCompleted: true,
        },
      },
      {
        $group: {
          _id: null,
          count: { $sum: 1 },
        },
      },
    ]);
    const count = result.length > 0 ? result[0].count : 0;
    res.send(`${count} tasks completed in last ${days} days`);
  } catch (e) {
    res.status(500).send(`ERROR: ${e.message}`);
  }
};

module.exports = { getAnalytics };
