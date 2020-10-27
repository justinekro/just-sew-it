import React from 'react';
import { Layout, Button, Loader } from '../ui';
import { withUser } from '../contexts';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

const MyAccount = ({
	logout,
	isSignedIn,
	startLogin,
	user,
	isLoadingUserInfo
}) => {
	return (
		<Layout>
			{isLoadingUserInfo ? (
				<Loader />
			) : isSignedIn ? (
				<div>
					<h2>Hey {user.name}! Nice to see you again</h2>
					<Button onClick={logout} text={'Log out'} style={{ marginTop: 15 }} />
				</div>
			) : (
				<div>
					<h2>Please log in to see all your amazing projects</h2>
					<Button
						onClick={startLogin}
						text={'Log in with Google'}
						icon={faGoogle}
						style={{ marginTop: 15 }}
					/>
				</div>
			)}
		</Layout>
	);
};

export default withUser(MyAccount);
