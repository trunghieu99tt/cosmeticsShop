import * as actionsType from "../actions";

const userState = {
	userInfor: null,
	items: [...Array(1000)]
};

const reducer = (state = userState, action) => {
	switch (action.type) {
		case actionsType.LOGIN:
			return {
				...state,
				userInfor: action.userInfor
			};
		case actionsType.LOGOUT:
			return {
				...state,
				userInfor: null,
				items: [...Array(1000)]
			};
		case actionsType.ADDITEMS: {
			let items = state.items;
			items[action.id] = items[action.id] ? items[action.id] + 1 : 1;
			return {
				...state,
				items: items
			};
		}
	}
	return state;
};

export default reducer;
