const connectDB = require("./config/mongodb");
const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const app = express();
// const isAuth = require('./middlewares/authMiddleware')

// ----------------
// Database
// ----------------
connectDB();

// ----------------
// Middlewares
// ----------------
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// ----------------
// Routes
// ----------------
const authRoutes = require("./routes/auth/authRoutes");
const resetRoutes = require("./routes/auth/resetRoutes");
const loginRoutes = require("./routes/auth/loginRoutes");

app.use("/api/auth", authRoutes);
app.use("/api/reset", resetRoutes);
app.use("/api/login", loginRoutes);

module.exports = app;
