const FOLLOW = 'FOLLOW';
const UN_FOLLOW = 'UN-FOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: []
};
let usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UN_FOLLOW:
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state;
    }
}
export let followAC = (userId) => {
    return {type: FOLLOW, userId}
};
export let unFollowAC = (userId) => {
    return {
        type: UN_FOLLOW, userId
    }
};
export let setUsersAC = (users) => {
    return {
        type: SET_USERS, users
    }
};
export default usersReducer;