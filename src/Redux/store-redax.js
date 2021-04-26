import {applyMiddleware, combineReducers, createStore} from "redux";
import personalReducer from "./personal-reducer";
import messagesReducer from "./messages-reducer";
import toolsBoxReducer from "./toolsbox-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import appReducer from "./app-reducer";
import middlewareThunk from "redux-thunk";
import { reducer as formReducer } from 'redux-form';
import taskManagerReducer from "./taskmanager-reducer";
let reducers = combineReducers({
    PersonalPage: personalReducer,
    MessagesPage: messagesReducer,
    ToolsBoxPage: toolsBoxReducer,
    UsersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    TaskManager: taskManagerReducer,
    app: appReducer

})
let store = createStore(reducers, applyMiddleware(middlewareThunk));
export default store;
window.store = store;