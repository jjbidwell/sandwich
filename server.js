require("dotenv").config();
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, "public")));

app.get("/", (req, res) =>
  res.sendFile(path.resolve(__dirname, "index.html"))
);

app.listen(3001, () => console.log(`server listening on port 3001`));