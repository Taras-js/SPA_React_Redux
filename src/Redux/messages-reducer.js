const ADD_ITEM_MESSAGE = 'ADD-ITEM-MESSAGE';
const UPDATE_NEWS_MESSAGE_TEXT = 'UPDATE-NEWS-MESSAGE-TEXT';
let initialState = {
    names: [
        {id: 1, name: 'Taras'},
        {id: 2, name: 'Sacha'},
        {id: 3, name: 'Maksim'},
        {id: 4, name: 'Kirill'},
        {id: 5, name: 'Svetlana'},
        {id: 6, name: 'Vasiliy'}
    ],
    letters: [
        {id: 1, letter: 'Hi your'},
        {id: 2, letter: 'Hai'},
        {id: 3, letter: 'Hello'},
        {id: 4, letter: 'ton'},
        {id: 5, letter: 'Hip-hop'},
        {id: 6, letter: 'I am Programmer'}

    ],
    newTextMessage: 'create messages'
};
let messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM_MESSAGE: {
            let newMessage = {
                id: 7,
                letter: state.newTextMessage
            };
            let copyState = {...state};
            copyState.letters = [...state.letters];
            copyState.letters.push(newMessage);
            copyState.newTextMessage = ' ';
            return copyState;
        }
        case UPDATE_NEWS_MESSAGE_TEXT: {
            let copyState = {...state};
            copyState.newTextMessage = action.newTextText;
            return copyState;
        }
        default:
            return state;

    }
}

export let writeMessageActionCreator = () => {
    return {type: ADD_ITEM_MESSAGE}
}
export let updateNewsMessageTextActionCreator = (text) => {
    return {type: UPDATE_NEWS_MESSAGE_TEXT, newTextText: text}
}
export default messagesReducer;


