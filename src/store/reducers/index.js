import { combineReducers } from "redux";
import itemsReducer from "./items";
import userReducer from "./user";
import usersReducer from "./users";

const rootReducer = combineReducers({
	user: userReducer,
	users: usersReducer,
	items: itemsReducer
});

export default rootReducer;
