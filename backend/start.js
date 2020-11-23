const app = require("./index.js");
const mongoose = require("mongoose");

app.listen(3000, () => {
	console.log("Server running on port 3000");
});

// initializing MongoDB
mongoose
	.connect(
		`mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@diy.xyv8v.mongodb.net/diy?retryWrites=true&w=majority`,
		{ useNewUrlParser: true, useUnifiedTopology: true }
	)
	.then(() => console.log("Connected to mongodb"))
	.catch((e) => console.log("COUCOU", e));
