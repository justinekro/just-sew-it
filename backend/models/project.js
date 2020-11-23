const mongoose = require("mongoose");

const projectSchema = mongoose.Schema({
	description: { type: String, required: false },
	name: { type: Number, required: true },
	createdAt: { type: Date, default: Date.now },
	userId: { type: String },
});

module.exports = mongoose.model("Project", projectSchema);
