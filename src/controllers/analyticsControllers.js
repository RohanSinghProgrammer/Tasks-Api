const getAnalytics = async (req, res) => {
  try {
    const {days = 7} =  req.query;
    res.send("Analytics!" + days);
  } catch (e) {
    res.status(500).send(`ERROR: ${e.message}`);
  }
};

module.exports = { getAnalytics };
