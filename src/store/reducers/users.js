import * as actionsType from "../actions";

const userState = {
	usersInfor: null
};

const reducer = (state = userState, action) => {
	switch (action.type) {
		case actionsType.GET_USERS:
			return {
				...state,
				usersInfor: action.users
			};
		case actionsType.ADD_USER: {
			const users = state.usersInfor;
			const updatedUsers = users.concat(action.user);
			return {
				...state,
				usersInfor: updatedUsers
			};
		}
	}
	return state;
};

export default reducer;
