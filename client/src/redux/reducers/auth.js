import { USER_LOGGED_IN, USER_SIGNED_UP } from '../actions';

const initialState = {
	connected: false,
	name: null,
	mail: null,
	token: null,
	wasJustCreated: false
};

export default function (state = initialState, action) {
	switch (action.type) {
		case USER_LOGGED_IN: {
			const { mail, token } = action.payload;
			return {
				...state,
				connected: true,
				mail,
				token
			};
		}
		case USER_SIGNED_UP: {
			const { name, mail, userId, token, wasJustCreated } = action.payload;
			return {
				...state,
				name,
				mail,
				userId,
				token,
				connected: true,
				wasJustCreated
			};
			// do something
		}
		default:
			return state;
	}
}
