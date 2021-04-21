const ADD_ITEM_DATA = 'ADD-ITEM-DATA';
const UPDATE_NEWS_DATA = 'UPDATE-NEWS-DATA';
let initialState = {
    data: [
        {id: 1, name: 'Taras Vasilievich'},
        {id: 2, name: 'Taras'}
    ],
    newTextName: 'Create your name',
    newTextEmail: 'Create  your email'

};
let taskManagerReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM_DATA:
            return {
                ...state,
                data: [...state.data, {id: 3, name: state.newTextName}],
                newTextName: ' '
            }
        case UPDATE_NEWS_DATA:
            return {...state, newTextName: action.newText}
        default:
            return state;
    }
}
export let writeData = () => {
    return {type: ADD_ITEM_DATA}
}
export let updateNewsData = (text) => {
    return {type: UPDATE_NEWS_DATA, newText: text}
}
export default taskManagerReducer;


