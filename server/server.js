const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const morgan = require("morgan");
const express = require("express");
const app = express();

const usersRouter = require("./routes/users.routes");

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(morgan(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/auth", usersRouter);

app.get("/", (req, res) => {
  res.send("Musi diałać");
});

app.use((_, res, __) => {
  res.status(404).json({
    status: "error",
    code: 404,
    message: "The given endpoint does not exist",
    data: "Not found",
  });
});

app.use((error, _, res, __) => {
  console.log(error.stack);
  res.status(500).json({
    status: "fail",
    code: 500,
    message: error.message,
    data: "Internal server error",
  });
});

const PORT = process.env.PORT || 8000;
const connection = mongoose.connect(process.env.DATABASE_URL);

connection
  .then(() => {
    console.log("Database connection successful");
    app.listen(PORT, () => {
      console.log(`App listens on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error(`Error while establishing connection: [${err}]`);
    process.exit(1);
  });
