require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const mongoose = require("mongoose");

const Project = require("./models/projects");

console.log(process.env);
mongoose
	.connect(
		`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.e8gpg.mongodb.net/<dbname>?retryWrites=true&w=majority`,
		{ useNewUrlParser: true, useUnifiedTopology: true }
	)
	.then(() => console.log("Connexion à MongoDB réussie !"))
	.catch(() => console.log("Connexion à MongoDB échouée !"));

app.use(bodyParser.json());

app.use((req, res, next) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
	);
	res.setHeader(
		"Access-Control-Allow-Methods",
		"GET, POST, PUT, DELETE, PATCH, OPTIONS"
	);
	next();
});

app.post("/api/projects", (req, res, next) => {
	const project = new Project({
		...req.body,
	});
	project
		.save()
		.then(() => res.status(201).json({ message: "Objet enregistré !" }))
		.catch((error) => res.status(400).json({ error }));
});

app.get("/api/projects", (req, res, next) => {
	Project.find()
		.then((projects) => res.status(200).json(projects))
		.catch((error) => res.status(400).json({ error }));
});

app.get("/api/projects/:id", (req, res, next) => {
	Project.findOne({ _id: req.params.id })
		.then((project) => res.status(200).json(project))
		.catch((error) => res.status(404).json({ error }));
});
module.exports = app;
