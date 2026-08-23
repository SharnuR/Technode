const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = new sqlite3.Database("../database/app.db");

app.get("/", (req, res) => {
  res.json({ message: "Node + SQLite API is running" });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
