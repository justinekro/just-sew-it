import axios from 'axios';
export const USER_SIGNED_UP = 'USER_SIGNED_UP';
export const USER_LOGGED_IN = 'USER_LOGGED_IN';
export const AUTH_ERROR = 'AUTH_ERROR';

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

export const authError = ({ error }) => ({
	type: AUTH_ERROR,
	payload: {
		error
	}
});

export const signUpUser = ({ name, mail, password }) => {
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
					})
					.catch(e => {
						const error = e.response.data.error;
						dispatch(authError({ error }));
					});
			})
			.catch(e => {
				const error = e.response.data.error;
				dispatch(authError({ error }));
			});
	};
};

export const logInUser = ({ password, mail }) => {
	return dispatch => {
		return axios
			.post('http://localhost:3000/auth/login', { mail, password })
			.then(r => {
				const { userId, token } = r.data;
				dispatch(userLoggedIn({ userId, token, mail, wasJustCreated: true }));
			})
			.catch(e => {
				const error = e.response.data.error;
				dispatch(authError({ error }));
			});
	};
};
