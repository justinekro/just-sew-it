require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const projectRoutes = require("./routes/project");
const userRoutes = require("./routes/user");

// used to parse http request bodies
app.use(bodyParser.json());

// setting CORS
app.use(cors());
app.use("/projects", projectRoutes);
app.use("/auth", userRoutes);

module.exports = app;
