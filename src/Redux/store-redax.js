import {applyMiddleware, combineReducers, createStore} from "redux";
import personalReducer from "./personal-reducer";
import messagesReducer from "./messages-reducer";
import toolsboxReducer from "./toolsbox-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import middlewareThunk from "redux-thunk";
import { reducer as formReducer } from 'redux-form';
import taskmanagerReducer from "./taskmanager-reducer";
let reducers = combineReducers({
    PersonalPage: personalReducer,
    MessagesPage: messagesReducer,
    ToolsboxPage: toolsboxReducer,
    UsersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    TaskManager: taskmanagerReducer

})
let store = createStore(reducers, applyMiddleware(middlewareThunk));
export default store;
window.store = store;