import {applyMiddleware, combineReducers, createStore} from "redux";
import personalReducer from "./personal-reducer";
import messagesReducer from "./messages-reducer";
import toolsboxReducer from "./toolsbox-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunk from "redux-thunk";

let reducers = combineReducers({
    PersonalPage: personalReducer,
    MessagesPage: messagesReducer,
    ToolsboxPage: toolsboxReducer,
    UsersPage: usersReducer,
    auth: authReducer
})
let store = createStore(reducers, applyMiddleware(thunk));
export default store;
window.store = store;