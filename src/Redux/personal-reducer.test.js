import personalReducer, {deletePost, updateNewsPostText} from './personal-reducer';


let state = {
    posts: [
        {id: 1, post: 'Hi your'},
        {id: 2, post: 'Hai'},
        {id: 3, post: 'Hello'},
        {id: 4, post: 'ton'},
        {id: 5, post: 'Hip-hop'},
        {id: 6, post: 'I am Programmer'}
    ]
};

it('length of posts should be incremented', () => {
    //1.test data
    let action = updateNewsPostText('you se best');
    //2.action
    let newState = personalReducer(state, action);
    //3.expectation
    expect(newState.posts.length).toBe(5);
});

it ('message of new post should be correct', () => {
    //1.test data
    let action = updateNewsPostText('you se best');
    //2.action
    let newState = personalReducer(state, action);
    //3.expectation
    expect(newState.posts[6].post).toBe('you se best');
});

it ('after deleting length of messages should be decrement', () => {
    //1.test data
    let action = deletePost (1);
    //2.action
    let newState = personalReducer(state, action);
    //3.expectation
    expect(newState.posts.length).toBe(5);
});

it ('after deleting length  shouldn`t be decrement if id is incorrect', () => {
    //1.test data
    let action = deletePost (1000);
    //2.action
    let newState = personalReducer(state, action);
    //3.expectation
    expect(newState.posts.length).toBe(6);
});