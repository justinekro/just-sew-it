import React from "react";
import colors from "./colors";
import breakpoints from "./breakpoints";

const Footer = () => (
	<header css={styles.footer}>
		<div css={styles.contentContainer}>
			<div css={styles.headerContent}>
				<div css={styles.headerTitle}>
					<p>Get Inspiration. Create. Share. Repeat.</p>
				</div>
				<div css={styles.footerLinksContainer}></div>
			</div>
		</div>
	</header>
);

export default Footer;

const styles = {
	footer: {
		backgroundColor: colors.darkBlue,
		padding: "10px 10%",
		color: "white",
	},
	headerContent: {
		display: "flex",
		flexDirection: "column",
		"& > a": {
			textDecoration: "none",
			color: "white",
		},
		[breakpoints.tabletQuery]: {
			flexDirection: "row",
			justifyContent: "space-between",
			alignItems: "center",
		},
	},
	footerLinksContainer: {
		display: "flex",
		flexWrap: "wrap",
		textAlign: "left",
		"& > a": {
			width: "50%",
			textDecoration: "none",
			color: "white",
		},
		[breakpoints.tabletQuery]: {
			flexDirection: "row",
			justifyContent: "space-between",
			alignItems: "center",
			"& > a": {
				textDecoration: "none",
				color: "white",
				marginLeft: 20,
				width: "auto",
				marginTop: 0,
			},
		},
	},
	headerTitle: {
		fontWeight: "bold",
		display: "none",
		[breakpoints.tabletQuery]: {
			display: "block",
		},
	},
};
