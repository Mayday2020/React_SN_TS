import {ActionsTypes, PostType, ProfilePageType} from "./store";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
    posts: [
        { id: 1, message: "Hi, how are you?", likesCount: 30 },
        { id: 2, message: "It's my first post.", likesCount: 17 },
        { id: 3, message: "Please, like this comment))", likesCount: 91 }
    ],
    newPostText: 'it-kamasutra.com'
}
const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes) => {
    switch (action.type){
        case ADD_POST:
            let newPost: PostType = {
            id: new Date().getTime(),
            message: state.newPostText,
            likesCount: 0
            }
            state.posts.push(newPost)
            state.newPostText = ''
            return state
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.message;
            return state
        default : return state
    }
}
export const addPostCreator = (postText: string) => {
    return {type: ADD_POST, postText: postText} as const
};
export const updateNewPostCreator = (text: string) => {
    return {type: UPDATE_NEW_POST_TEXT, message: text} as const
};
export default profileReducer