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
                ...state.data,
                isAuth: true
            }

        default:
            return state;
    }
}
export let setAuthPersonalData = (id, login, email) => {
    return {type: SET_AUTH_PERSONAL_DATE, data: {id, login, email}}
};

export default authReducer;