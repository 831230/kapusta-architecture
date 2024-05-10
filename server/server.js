const mongoose = require("mongoose");
require("dotenv").config();

const express = require("express");
const app = express();

const PORT = process.env.PORT || 8000;

const connection = mongoose.connect(process.env.DATABASE_URL);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Musi diałać");
});

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
