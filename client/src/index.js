import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { css } from "glamor";
import "glamor/reset";
import { colors } from "./ui";

css.global("html", {
	boxSizing: "border-box",
	userSelect: "none",
	WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
	textSizeAdjust: "100%",
	height: "100%",
	fontFamily: "Raleway, sans-serif",
});
css.global("body", {
	minHeight: "100%",
});

css.global("h1", {
	fontSize: 24,
	padding: 0,
	margin: 0,
});

css.global("h2", {
	fontSize: 16,
	fontWeight: 200,
	padding: 0,
	margin: 0,
});

css.global("p", {
	fontSize: 14,
	padding: 0,
	margin: 0,
});

css.global(".btn", {
	border: `2px solid ${colors.pink}`,
	color: colors.pink,
	borderRadius: 4,
	textDecoration: "none",
	fontWeight: "bold",
	fontSize: 14,
	padding: "10px 20px",
	order: 1,
	height: 42,
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
});

css.global("*, *:before, *:after", { boxSizing: "inherit" });

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);
