// import messagesReducer from "./messages-reducer";
// import personalReducer from "./personal-reducer";
// import toolsboxReducer from "./toolsbox-reducer";
//
// let store = {
//     _state: {
//         PersonalPage: {
//             person: [
//                 {id: 1, name: 'Taras', age: 40, work: 'Officer', dream: 'Frontend developer'}
//                 // {id: 2, name: 'Sacha', age: 37, work: 'Officer', dream: 'Frontend developer'},
//                 // {id: 3, name: 'Maksim', age: 5, work: 'Officer', dream: 'Frontend developer'},
//                 // {id: 4, name: 'Kirill', age: 15, work: 'Officer', dream: 'Frontend developer'},
//                 // {id: 5, name: 'Svetlana', age: 62, work: 'Officer', dream: 'Frontend developer'},
//                 // {id: 6, name: 'Vasiliy', age: 62, work: 'Officer', dream: 'Frontend developer'}
//             ],
//             posts: [
//                 {id: 1, post: 'Hi your'},
//                 {id: 2, post: 'Hai'},
//                 {id: 3, post: 'Hello'},
//                 {id: 4, post: 'ton'},
//                 {id: 5, post: 'Hip-hop'},
//                 {id: 6, post: 'I am Programmer'}
//             ],
//             newTextPost: 'Taras Vacilievich'
//         },
//         ToolsboxPage: {
//             friends: [
//                 {id: 1, name: 'Alexandra'},
//                 {id: 2, name: 'Maksim'},
//                 {id: 3, name: 'Kirill'},
//                 {id: 4, name: 'Frank'},
//                 {id: 5, name: 'profilePage'},
//                 {id: 6, name: 'Fred'},
//                 {id: 7, name: 'Harry'}
//             ]
//         },
//         MessagesPage: {
//             names: [
//                 {id: 1, name: 'Taras'},
//                 {id: 2, name: 'Sacha'},
//                 {id: 3, name: 'Maksim'},
//                 {id: 4, name: 'Kirill'},
//                 {id: 5, name: 'Svetlana'},
//                 {id: 6, name: 'Vasiliy'}
//             ],
//             letters: [
//                 {id: 1, letter: 'Hi your'},
//                 {id: 2, letter: 'Hai'},
//                 {id: 3, letter: 'Hello'},
//                 {id: 4, letter: 'ton'},
//                 {id: 5, letter: 'Hip-hop'},
//                 {id: 6, letter: 'I am Programmer'}
//             ],
//             newTextMessage: 'create messages'
//         }
//     },
//     _callSubscriber() {
//         console.log('State changes');
//     }
//     ,
//     getState() {
//         return this._state;
//     }
//     ,
//     subscribe(observer) {
//         this._callSubscriber = observer;
//     }
//     ,
//     dispatch(action) {
//         this._state.MessagesPage = messagesReducer(this._state.MessagesPage, action);
//         this._state.PersonalPage = personalReducer(this._state.PersonalPage, action);
//         this._state.ToolsboxPage = toolsboxReducer(this._state.ToolsboxPage, action);
//         this._callSubscriber(this._state);
//     }
// }
//
//
// export default store;
// window.store = store;