const path = require("path");
const webpack = require("webpack");

module.exports = {
	entry: "./src/index.js", // webpack.js.org
	output: {
		path: path.join(__dirname, "public", "dist"), // where do we want to put it ? the path for the project on the machine
		filename: "bundle.js", // whatever we want
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
				},
			},
		],
	},
	plugins: [
		new webpack.ProvidePlugin({
			Glamor: "glamor/react",
		}),
	],
	devServer: {
		// allows not to regenerate bundle.js
		contentBase: path.join(__dirname, "public"),
		historyApiFallback: true,
		publicPath: "/dist/", // tells the server that the routing will be done on the client side and that index.html should always be rendered
	},
};
