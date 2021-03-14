const FOLLOW = 'FOLLOW';
const UN_FOLLOW = 'UN-FOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        {
            id: 1,
            coverPhotosUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuChMtlfs1cg25CLIjB2cN4lF8EWo6cxtNEA&usqp=CAU',
            followed: false,
            fullName: 'Jason Statham',
            age: 40,
            work: 'Officer',
            dream: 'Frontend developer',
            stack: 'Html5, Css3, Flex, Grid, React, Redux, Typescript, Webstorm ',
            residence: {country: 'USA', city: 'New York'}
        },
        {
            id: 2,
            coverPhotosUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuChMtlfs1cg25CLIjB2cN4lF8EWo6cxtNEA&usqp=CAU',
            followed: true,
            fullName: 'Jason Statham',
            age: 40,
            work: 'Officer',
            dream: 'Frontend developer',
            stack: 'Html5, Css3, Flex, Grid, React, Redux, Typescript, Webstorm ',
            residence: {country: 'USA', city: 'New York'}
        },
        {
            id: 3,
            coverPhotosUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuChMtlfs1cg25CLIjB2cN4lF8EWo6cxtNEA&usqp=CAU',
            followed: false,
            fullName: 'Jason Statham',
            age: 40,
            work: 'Officer',
            dream: 'Frontend developer',
            stack: 'Html5, Css3, Flex, Grid, React, Redux, Typescript, Webstorm ',
            residence: {country: 'USA', city: 'New York'}
        },
        {
            id: 4,
            coverPhotosUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuChMtlfs1cg25CLIjB2cN4lF8EWo6cxtNEA&usqp=CAU',
            followed: true,
            fullName: 'Jason Statham',
            age: 40,
            work: 'Officer',
            dream: 'Frontend developer',
            stack: 'Html5, Css3, Flex, Grid, React, Redux, Typescript, Webstorm ',
            residence: {country: 'USA', city: 'New York'}
        }
    ],

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