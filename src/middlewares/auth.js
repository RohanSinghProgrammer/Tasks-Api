const jwt = require('jsonwebtoken')

const auth = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) return res.status(401).send("Authentication required!");
    const token = authorization.split(" ")[1];
    jwt.verify(token, "SecretKey", (err, user) => {
      if (err) return res.status(403).send(err);
      req.user = user;
      next();
    });
  } catch (e) {
    res.status(500).send(e.message);
  }
};

module.exports = auth;
