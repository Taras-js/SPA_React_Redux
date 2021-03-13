const ADD_ITEM_POST = 'ADD-ITEM-POST';
const UPDATE_NEWS_POST_TEXT = 'UPDATE-NEWS-POST-TEXT';
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
    newTextPost: 'Учись Быстрее'
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
        default:
            return state;
    }
}
export let writePostActionCreator = () => {
    return {type: ADD_ITEM_POST}
}
export let updateNewsPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEWS_POST_TEXT, newText: text
    }
}
export default personalReducer;