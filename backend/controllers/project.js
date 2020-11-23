const Project = require("../models/project");
const { checkBalance } = require("../helpers");

exports.createProject = async (req, res, next) => {
	delete req.body._id;
	const project = new Project({
		...req.body,
	});
	try {
		const p = await project.save();
		return res.status(200).json(p);
	} catch (err) {
		return res.status(400).json({ err });
	}
};

exports.getAllProjects = async (req, res, next) => {
	console.log("here");
	const allProjects = await Project.find({ userId: req.body.userId });

	if (!!allProjects.length) {
		return res.status(200).json(allProjects);
	} else {
		return res.status(400).json({ error: "You have no project yet" });
	}
};

exports.getOneProject = async (req, res, next) => {
	try {
		const project = await Project.findOne({
			_id: req.params.id,
			userId: req.body.userId,
		});
		if (!!project) {
			return res.status(200).json(project);
		} else {
			return res
				.status(400)
				.json({ error: "project not found on the account" });
		}
	} catch (e) {
		// handles the case where project never existed
		return res
			.status(400)
			.json({ error: "project not found on the account" });
	}
};
