import {usersAPI} from "../API/api";
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_USERS_TOTAL_COUNT = 'SET-USERS-TOTAL-COUNT';
const TOGGLE_ISFETCHING = 'TOGGLE-ISFETCHING';
const DISABLE_BUTTON_REQUEST_TIME = 'DISABLE-BUTTON-REQUEST-TIME'
let initialState = {
    users: [],
    totalUsersCount: 0,
    pageSize: 10,
    currentPage: 1,
    isFetching: true,
    isDisabledButton: [],
    randomness: 20
};
let usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'RANDOMNESS':
            return {...state, randomness: state.randomness + 1}

        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
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
        case TOGGLE_ISFETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case DISABLE_BUTTON_REQUEST_TIME: {
            return {
                ...state,
                isDisabledButton: action.isFetching
                    ? [...state.isDisabledButton, action.userId]
                    : state.isDisabledButton.filter(id => id !== action.userId)
            }
        }
        default:
            return state;
    }
}
export let followUpSuccess = (userId) => {
    return {type: FOLLOW, userId}
};
export let unfollowUpSuccess = (userId) => {
    return {type: UNFOLLOW, userId}
};
export let setUsers = (users) => {
    return {
        type: SET_USERS, users
    }
};
export let setCurrentPage = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE, currentPage
    }
};
export let setTotalUsersCount = (totalUsersCount) => {
    return {
        type: SET_USERS_TOTAL_COUNT, count: totalUsersCount
    }
};
export let toggleIsFetching = (isFetching) => {
    return {
        type: TOGGLE_ISFETCHING, isFetching
    }
};
export let disableButton = (isFetching, userId) => {
    return {
        type: DISABLE_BUTTON_REQUEST_TIME, isFetching, userId
    }
}
//Thunk:санки в действии;
export let getUsersData = (page, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(page));
        usersAPI.getUsers(page, pageSize).then(data => {
                dispatch(setUsers(data.items));
                dispatch(setTotalUsersCount(data.totalCount));
                dispatch(toggleIsFetching(false));
            });
    }
}

export const follow = (userId) => {
    return(dispatch) => {
        dispatch(disableButton(true, userId));
        usersAPI.follow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(followUpSuccess(userId));
                }
                dispatch(disableButton(false, userId));
            });
    }

}

export const unfollow = (userId) => {
    return(dispatch) => {
        dispatch(disableButton(true, userId));
        usersAPI.unfollow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(unfollowUpSuccess(userId));
                }
                dispatch(disableButton(false, userId));
            });
    }

}
export default usersReducer;


