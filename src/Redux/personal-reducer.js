import {profileAPI} from "../API/api";

const ADD_ITEM_POST = 'ADD-ITEM-POST';
const UPDATE_NEWS_POST_TEXT = 'UPDATE-NEWS-POST-TEXT';
const SET_PERSONAL_DATA = 'SET-PERSONAL-DATA';
const SET_STATUS = 'SET-STATUS';
const DELETE_POST = 'DELETE-POST';
let initialState = {
    person: [
        {id: 1, name: 'Taras', age: 40, work: 'Officer', dream: 'Frontend developer'}
        // {id: 2, name: 'Sacha', age: 37, work: 'Officer', dream: 'Frontend developer'},
        // {id: 3, name: 'Maksim', age: 5, work: 'Officer', dream: 'Frontend developer'},
        // {id: 4, name: 'Kirill', age: 15, work: 'Officer', dream: 'Frontend developer'},
        // {id: 5, name: 'Svetlana', age: 62, work: 'Officer', dream: 'Frontend developer'},
        // {id: 6, name: 'Vasiliy', age: 62, work: 'Officer', dream: 'Frontend developer'}
    ],
    posts: [
        {id: 1, post: 'Hi your'},
        {id: 2, post: 'Hai'},
        {id: 3, post: 'Hello'},
        {id: 4, post: 'ton'},
        {id: 5, post: 'Hip-hop'},
        {id: 6, post: 'I am Programmer'}
    ],
    newTextPost: 'Учись Быстрее',
    profile: null,
    status: ''
};
let personalReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM_POST:
            return {

                ...state,
                posts: [...state.posts, {id: 7, post: state.newTextPost}],
                newTextPost: ' '
            }
        case UPDATE_NEWS_POST_TEXT:
            return {...state, newTextPost: action.newText}
        case SET_PERSONAL_DATA:
            return {...state, profile: action.profile}
        case SET_STATUS:
            return {...state, status: action.status}
        case DELETE_POST:
            return {...state, posts: state.posts.filter(p => p.id !== action.postId)
            }
        default:
            return state;
    }
}
export const writePost = () => {
    return {type: ADD_ITEM_POST}
}
export const updateNewsPostText = (text) => {
    return {
        type: UPDATE_NEWS_POST_TEXT, newText: text
    }
}
export const setPersonalData = (profile) => {
    return {type:  SET_PERSONAL_DATA, profile: profile}
}
export const setStatus = (status) => {
    return {type: SET_STATUS, status}
}
export const deletePost = (postId) => ({type: DELETE_POST, postId})
//Thunk:санки в действии;
export const getPersonalData = (userId) => (dispatch) => {
    profileAPI.setPersonData(userId).then(response => {dispatch(setPersonalData(response.data));});
}
export const getPersonStatus = (userId) => (dispatch) => {
    profileAPI.setPersonStatus(userId).then(response=> {dispatch(setStatus(response.data));});
}
export const getUpdatePersonStatus = (status) => (dispatch) => {
         profileAPI.updatePersonStatus(status).then(response=> {
         if (response.data.resultCode === 0)
         {dispatch(setStatus(status))}})
}
export default personalReducer;