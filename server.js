const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const authRoutes = require("./src/routes/authRoutes");
const taskRoutes = require("./src/routes/taskRoutes")

const app = express();
const PORT = 4000 || process.env.port;
const MONGO_URI =
  "mongodb://127.0.0.1:27017/assignment" || process.env.MONGO_URI;

app.use(express.json());
app.use(cors());
app.use(
  morgan((tokens, req, res) =>
    [
      tokens.method(req, res),
      tokens.url(req, res),
      tokens.status(req, res),
      tokens.res(req, res, "content-length"),
      "-",
      tokens["response-time"](req, res),
      "ms",
    ].join(" ")
  )
);

app.use("/api/v1/auth", authRoutes);
app.use('/api/v1/tasks',taskRoutes)

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("DB connected!"))
  .catch((e) => console.log(`ERROR: ${e.message}`));
app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));
