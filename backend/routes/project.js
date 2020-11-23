const express = require("express");
const router = express.Router();
const projectController = require("../controllers/project");
const auth = require("../middleware/auth");

router.post("/", auth, projectController.createProject);

router.get("/", auth, projectController.getAllProjects);

router.get("/:id", auth, projectController.getOneProject);

module.exports = router;
