const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const env = require("dotenv");
const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("connected to mongodb"))
  .catch((err) => console.log(err));
