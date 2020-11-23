import axios from 'axios';
export const USER_SIGNED_UP = 'USER_SIGNED_UP';
export const USER_LOGGED_IN = 'USER_LOGGED_IN';

export const userSignedUp = ({
	name,
	mail,
	userId,
	token,
	wasJustCreated
}) => ({
	type: USER_SIGNED_UP,
	payload: {
		name,
		mail,
		userId,
		token,
		wasJustCreated
	}
});

export const userLoggedIn = ({ userId, token, mail }) => ({
	type: USER_LOGGED_IN,
	payload: {
		userId,
		token,
		mail
	}
});

export const signUpUser = ({ name, mail, password }) => {
	// And then creates and returns the async thunk function:
	return dispatch => {
		return axios
			.post('http://localhost:3000/auth/signup', { name, mail, password })
			.then(() => {
				axios
					.post('http://localhost:3000/auth/login', { mail, password })
					.then(r => {
						const { userId, token } = r.data;
						dispatch(
							userSignedUp({ userId, token, mail, name, wasJustCreated: true })
						);
					});
			});
	};
};

export const logInUser = ({ password, mail }) => {
	// And then creates and returns the async thunk function:
	return dispatch => {
		return axios
			.post('http://localhost:3000/auth/login', { mail, password })
			.then(r => {
				const { userId, token } = r.data;
				dispatch(userLoggedIn({ userId, token, mail, wasJustCreated: true }));
			});
	};
};
