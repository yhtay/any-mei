// const connectDB = require("./config/mongodb");
const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const app = express();

// ----------------
// Database
// ----------------
// connectDB();

// ----------------
// Middlewares
// ----------------
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// ----------------
// Routes
// ----------------
const usersRoutes = require("./routes/usersRoutes");
const resetRoutes = require("./routes/resetRoutes");

app.use("/api/user", usersRoutes);
app.use("/api/reset", resetRoutes);

module.exports = app;
