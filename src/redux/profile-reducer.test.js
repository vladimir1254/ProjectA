import React from "react";
import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";

let initialProfile =   {
    posts: [{id: 1, message: 'Hi, how are you?', likecount: '20'},
        {id: 2, message: 'It\'s First post', likecount: '10'},
        {id: 3, message: 'It\'s First post', likecount: '10'},
        {id: 4, message: 'It\'s First post', likecount: '10'},],
    profile:null,
    isloading:false,
    status:'',
}
test('new post should be added', () => {
    let action=addPostActionCreator('hayhay')
    let newState = profileReducer(initialProfile,action)
    expect(newState.posts.length).toBe(5)
});
test('incorrect added message', () => {
    let action=addPostActionCreator('hayhay')

    let newState = profileReducer(initialProfile,action)
    expect(newState.posts[4].message).toBe('hayhay')
});
test('decrement after delete', () => {
    let action=deletePost(1)

    let newState = profileReducer(initialProfile,action)
    expect(newState.posts.length).toBe(3)
});