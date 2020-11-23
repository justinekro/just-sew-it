import React from 'react';
import { Layout, Button, Loader } from '../ui';
import { withUser } from '../contexts';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import SignedInHome from './signed_in_home';

class Home extends React.Component {
	render() {
		const {
			isLoadingUserInfo,
			isLoadingUserProjects,
			isSignedIn,
			startLogin
		} = this.props;
		return (
			<Layout>
				<div css={styles.container}>
					{isLoadingUserInfo || isLoadingUserProjects ? (
						<Loader style={{ marginTop: 15 }} />
					) : isSignedIn ? (
						<SignedInHome />
					) : (
						<div css={styles.login}>
							<h2 css={styles.title}>
								Please log in to see all your amazing projects
							</h2>
							<Button
								onClick={startLogin}
								text={'Log in with Google'}
								icon={faGoogle}
							/>
						</div>
					)}
				</div>
			</Layout>
		);
	}
}

export default withUser(Home);

const styles = {
	container: {
		maxWidth: 1042,
		margin: 'auto',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
	},
	title: {
		textAlign: 'center',
		marginBottom: 15
	},
	login: {
		boxShadow: '0px 0px 7px 1px rgba(186,182,186,1)',
		borderRadius: 4,
		padding: 15,
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'column'
	}
};
