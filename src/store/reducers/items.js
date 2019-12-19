import * as actionsType from "../actions";

const userState = {
	items: null
};

const reducer = (state = userState, action) => {
	switch (action.type) {
		case actionsType.GET_ITEMS:
			return {
				...state,
				items: action.items
			};
	}
	return state;
};

export default reducer;
