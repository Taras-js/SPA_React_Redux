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
    pageSize: 50,
    currentPage: 1,
    isFetching: true,
    isDisabledButton: []
};
let usersReducer = (state = initialState, action) => {
    switch (action.type) {
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
export let followUpsuccess = (userId) => {
    return {type: FOLLOW, userId}
};
export let unfollowUpsuccess = (userId) => {
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
export let getUsersData = (page, pageSize) => (dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(page));
    usersAPI.getUsers(pageSize)
        .then(response => {
            dispatch(setUsers(response.data.items))
            dispatch(setTotalUsersCount(response.data.totalCount))
            dispatch(toggleIsFetching(false))
        })
}
export let setUsersPageData = (pageNumber, pageSize) => (dispatch) => {
    dispatch(toggleIsFetching(true), setCurrentPage(pageNumber))
    usersAPI.setUserPage(pageNumber, pageSize)
        .then(response => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(response.data.items))
        })
}
export default usersReducer;


