import {authAPI} from "../API/api";

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
export const setAuthPersonalData = (userId, email, login, isAuth) =>
    ({type: SET_AUTH_PERSONAL_DATE, payload: {userId, email, login, isAuth}});
export const getAuthPersonalData = () => (dispatch) => {
    return authAPI.authMe()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data;
                dispatch(setAuthPersonalData(id, login, ))
            }
            }
        )
}

export default authReducer;