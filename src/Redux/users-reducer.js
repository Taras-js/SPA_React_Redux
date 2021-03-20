const FOLLOW = 'FOLLOW';
const UN_FOLLOW = 'UN-FOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_USERS_TOTAL_COUNT = 'SET-USERS-TOTAL-COUNT';

let initialState = {
    users: [],
    totalUsersCount: 0,
    pageSize: 50,
    currentPage: 1
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
            return {...state, users: action.users}
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_USERS_TOTAL_COUNT: {
            return {...state, totalUsersCount: action.count}
        }
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
export let setCurrentPageAC = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE, currentPage
    }
};
export let setTotalUsersCountAC = (totalUsersCount) => {
    return {
        type: SET_USERS_TOTAL_COUNT, count: totalUsersCount
    }
};
export default usersReducer;