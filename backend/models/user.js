const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = mongoose.Schema({
	name: { type: String, required: true },
	mail: { type: String, required: true, unique: true },
	password: { type: String, required: true },
});

// unique validator makes sure of user mail unicity
userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("User", userSchema);
