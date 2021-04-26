import {authAPI} from '../API/api';
import {stopSubmit} from 'redux-form';

const SET_AUTH_PERSONAL_DATE = 'SET-AUTH-PERSONAL-DATE';
let initialState = {
    userId: null,
    login: null,
    email: null,
    isFetching: false,
    isAuth: false
};
let authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_PERSONAL_DATE:
            return {
                ...state,
                ...action.payload
            }

        default:
            return state;
    }
}
export const setAuthPersonalData = (userId, email, login, isAuth, isFetching = true) =>
    ({type: SET_AUTH_PERSONAL_DATE, payload: {userId, email, login, isAuth, isFetching}});
export const getAuthPersonalData = () => (dispatch) => {
    return authAPI.authMe()
        .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data;
                    dispatch(setAuthPersonalData(id, email, login, true, false))
                }
            }
        );
}

export const login = (email, password, rememberMe) => (dispatch) => {
    authAPI.authLoginPost(email, password, rememberMe)
        .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(getAuthPersonalData())
                } else {
                    let message = response.data.massages.lenght > 0 ? response.data.messages[0] : 'Some error';
                    dispatch(stopSubmit('Login', {_error: message}))
                }
            }
        );
}
export const logout = () => (dispatch) => {
    authAPI.authLoginDelete()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthPersonalData(null, null, null, false, false));
            }
        });
}
export default authReducer;