import React from 'react';
import colors from './colors';

const Header = () => (
	<header css={styles.header}>
		<div css={styles.contentContainer}>
			<div css={styles.headerContent}>
				<div css={styles.headerTitle}>
					<p>JUST DIY IT.</p>
				</div>
			</div>
		</div>
	</header>
);

export default Header;

const styles = {
	header: {
		header: '100%',
		backgroundColor: colors.darkBlue,
		padding: '10px 10%',
		color: 'white',
		width: '100%'
	},
	headerContent: {
		'display': 'flex',
		'flexDirection': 'column',
		'& > a': {
			textDecoration: 'none',
			color: 'white'
		}
	}
};
