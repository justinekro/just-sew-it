import React from 'react';
import Main from './components/main';
import { Header, Footer } from './ui';

export default function App() {
	return (
		<div css={styles.appContainer}>
			<Header />
			<Main />
			<Footer />
		</div>
	);
}

const styles = {
	appContainer: {
		minHeight: '100vh',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	header: {
		height: 40,
		width: '100%',
		backgroundColor: 'lightGrey'
	},
	footer: {
		height: 40,
		width: '100%',
		backgroundColor: 'lightGrey'
	}
};
